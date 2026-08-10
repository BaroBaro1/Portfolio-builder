<?php

namespace App\Features\Subscriptions\Controllers;

use App\Enums\SubscriptionStatus;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

class SubscriptionStatusController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $user = auth()->user();

        $status = $user->subscription_status;
        $currentPlan = $user->currentPlan;
        $expiresAt = $user->subscription_expires_at;

        $daysLeft = null;

        if ($expiresAt) {
            $expiresAt = Carbon::parse($expiresAt);

            $secondsLeft = now()->diffInSeconds(
                $expiresAt,
                false
            );

            if ($secondsLeft <= 0) {

                $daysLeft = 0;

                // Trial or subscription has expired
                if (
                    $status === SubscriptionStatus::TRIAL->value ||
                    $status === SubscriptionStatus::ACTIVE->value
                ) {
                    $status = SubscriptionStatus::EXPIRED->value;
                }

            } else {

                $daysLeft = (int) ceil(
                    $secondsLeft / 86400
                );
            }
        }

        return response()->json([
            'success' => true,

            'data' => [
                'status' => $status,

                'current_plan' => optional(
                    $currentPlan
                )->name,

                'expires_at' => $expiresAt,

                'days_left' => $daysLeft,
            ],
        ]);
    }
}