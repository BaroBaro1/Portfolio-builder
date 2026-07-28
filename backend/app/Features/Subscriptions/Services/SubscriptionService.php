<?php

namespace App\Features\Subscriptions\Services;

use App\Models\User;
use App\Models\Plan;
use App\Models\Subscription;
use App\Enums\SubscriptionStatus;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class SubscriptionService
{
    public function create(
        User $user,
        array $data
    ): Subscription {

        $plan = Plan::where(
            'slug',
            $data['plan_slug']
        )->firstOrFail();

        return DB::transaction(function () use (
            $user,
            $plan,
            $data
        ) {

            $this->deactivatePrevious($user);

            if ($data['payment_method'] === 'trial') {

                if ($user->trial_used) {
                    throw new RuntimeException(
                        'Free trial has already been used.'
                    );
                }

                return $this->startTrial(
                    $user,
                    $plan
                );

            }

            return $this->createPending(
                $user,
                $plan,
                $data['payment_method']
            );

        });

    }

    private function deactivatePrevious(
        User $user
    ): void {

        Subscription::where(
            'user_id',
            $user->id
        )
        ->whereIn('status', [
            SubscriptionStatus::TRIAL->value,
            SubscriptionStatus::ACTIVE->value,
            SubscriptionStatus::PENDING->value,
        ])
        ->update([
            'status' => SubscriptionStatus::EXPIRED->value,
        ]);

    }

    private function calculateExpiration(
        Plan $plan
    ): Carbon {

        return match ($plan->billing_cycle) {

            'monthly' => now()->addMonth(),

            'yearly' => now()->addYear(),

            default => now(),

        };

    }

    private function updateCurrentSubscription(
        User $user,
        Subscription $subscription
    ): void {

        $user->update([

            'current_plan_id' => $subscription->plan_id,

            'subscription_status' => $subscription->status,

            'subscription_expires_at' =>
                $subscription->expires_at
                ?? $subscription->trial_ends_at,

        ]);

    }

    private function startTrial(
        User $user,
        Plan $plan
    ): Subscription {

        $subscription = Subscription::create([

            'user_id' => $user->id,

            'plan_id' => $plan->id,

            'status' => SubscriptionStatus::TRIAL->value,

            'starts_at' => now(),

            'trial_ends_at' => now()->addDays(
                $plan->trial_days
            ),

            'payment_method' => 'trial',

        ]);

        $user->update([
            'trial_used' => true,
        ]);

        $this->updateCurrentSubscription(
            $user,
            $subscription
        );

        return $subscription;

    }

    private function createPending(
        User $user,
        Plan $plan,
        string $paymentMethod
    ): Subscription {

        $subscription = Subscription::create([

            'user_id' => $user->id,

            'plan_id' => $plan->id,

            'status' => SubscriptionStatus::PENDING->value,

            'payment_method' => $paymentMethod,

        ]);

        $this->updateCurrentSubscription(
            $user,
            $subscription
        );

        return $subscription;

    }

    public function activate(
        Subscription $subscription
    ): void {

        $subscription->update([

            'status' => SubscriptionStatus::ACTIVE->value,

            'activated_at' => now(),

            'starts_at' => now(),

            'expires_at' => $this->calculateExpiration(
                $subscription->plan
            ),

            'paid_at' => now(),

        ]);

        $this->updateCurrentSubscription(
            $subscription->user,
            $subscription
        );

    }

    public function reject(
        Subscription $subscription
    ): void {

        $subscription->update([
            'status' => SubscriptionStatus::REJECTED->value,
        ]);

        $this->updateCurrentSubscription(
            $subscription->user,
            $subscription
        );

    }

    public function expire(
        Subscription $subscription
    ): void {

        $subscription->update([
            'status' => SubscriptionStatus::EXPIRED->value,
        ]);

        $this->updateCurrentSubscription(
            $subscription->user,
            $subscription
        );

    }
}