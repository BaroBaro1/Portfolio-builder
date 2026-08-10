<?php

namespace App\Features\Portfolio\Actions;

use App\Enums\SubscriptionStatus;
use App\Models\User;
use Carbon\Carbon;
use Symfony\Component\HttpKernel\Exception\HttpException;

class GetPortfolioAction
{
    public function execute(string $slug): User
    {
        $user = User::query()
            ->whereHas('profile', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })
            ->with([
                'profile',
                'skills',
                'projects',
                'experiences',
                'educations',
                'certificates',
                'socialLinks',
            ])
            ->firstOrFail();

        /*
        |--------------------------------------------------------------------------
        | Check subscription before exposing public portfolio
        |--------------------------------------------------------------------------
        */

        if (
            in_array(
                $user->subscription_status,
                [
                    SubscriptionStatus::TRIAL->value,
                    SubscriptionStatus::ACTIVE->value,
                ]
            )
            && $user->subscription_expires_at
            && Carbon::parse($user->subscription_expires_at)->isPast()
        ) {
            throw new HttpException(
                403,
                'Your subscription has expired. Please subscribe to continue using your portfolio.'
            );
        }

        if (
            $user->subscription_status === SubscriptionStatus::EXPIRED->value
        ) {
            throw new HttpException(
                403,
                'Your subscription has expired. Please subscribe to continue using your portfolio.'
            );
        }

        return $user;
    }
}