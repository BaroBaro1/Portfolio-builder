<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;

class EnsureActiveSubscription
{
    public function handle(
        Request $request,
        Closure $next
    ): Response {

        $user = $request->user();

        if (!$user) {
            return response()->json([
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $subscription = $user->subscriptions;

        if (!$subscription) {
            return response()->json([
                'message' => 'No subscription found.',
            ], 403);
        }

        /*
        |--------------------------------------------------------------------------
        | Trial expired
        |--------------------------------------------------------------------------
        */

        if (
            $subscription->status === 'trial' &&
            $subscription->trial_ends_at &&
            Carbon::now()->greaterThan($subscription->trial_ends_at)
        ) {

            $subscription->update([
                'status' => 'expired',
            ]);

            return response()->json([
                'message' => 'Your trial has expired.',
            ], 403);
        }

        /*
        |--------------------------------------------------------------------------
        | Active subscription expired
        |--------------------------------------------------------------------------
        */

        if (
            $subscription->status === 'active' &&
            $subscription->expires_at &&
            Carbon::now()->greaterThan($subscription->expires_at)
        ) {

            $subscription->update([
                'status' => 'expired',
            ]);

            return response()->json([
                'message' => 'Your subscription has expired.',
            ], 403);
        }

        /*
        |--------------------------------------------------------------------------
        | Pending payment
        |--------------------------------------------------------------------------
        */

        if ($subscription->status === 'pending') {

            return response()->json([
                'message' => 'Your subscription is waiting for validation.',
            ], 403);
        }

        /*
        |--------------------------------------------------------------------------
        | Expired
        |--------------------------------------------------------------------------
        */

        if ($subscription->status === 'expired') {

            return response()->json([
                'message' => 'Subscription expired.',
            ], 403);
        }

        /*
        |--------------------------------------------------------------------------
        | Rejected
        |--------------------------------------------------------------------------
        */

        if ($subscription->status === 'rejected') {

            return response()->json([
                'message' => 'Subscription rejected.',
            ], 403);
        }

        return $next($request);
    }
}