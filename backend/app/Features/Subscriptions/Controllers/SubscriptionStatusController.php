<?php

namespace App\Features\Subscriptions\Controllers;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

class SubscriptionStatusController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $user = auth()->user();

        $daysLeft = null;

        if ($user->subscription_expires_at) {

            $expiresAt = Carbon::parse(
                $user->subscription_expires_at
            );

            $secondsLeft = now()->diffInSeconds(
                $expiresAt,
                false
            );

            if ($secondsLeft <= 0) {

                $daysLeft = 0;

            } else {

                $daysLeft = (int) ceil(
                    $secondsLeft / 86400
                );

            }
        }

        return response()->json([
            'success' => true,

            'data' => [

                'status' => $user->subscription_status,

                'current_plan' => optional(
                    $user->currentPlan
                )->name,

                'expires_at' => $user->subscription_expires_at,

                'days_left' => $daysLeft,

            ],
        ]);
    }
}