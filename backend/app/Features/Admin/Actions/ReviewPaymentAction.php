<?php

namespace App\Features\Admin\Actions;

use App\Models\Payment;
use App\Models\User;

use Illuminate\Support\Facades\DB;

use App\Features\Admin\DTOs\ReviewPaymentDTO;
use App\Features\Admin\Services\ReviewPaymentService;

class ReviewPaymentAction
{
    public function __construct(
        protected ReviewPaymentService $paymentService
    ) {
    }

    public function execute(
        Payment $payment,
        User $admin,
        ReviewPaymentDTO $dto
    ): Payment {

        return DB::transaction(function () use (
            $payment,
            $admin,
            $dto
        ) {

            /*
            |--------------------------------------------------------------------------
            | Mark payment as reviewed
            |--------------------------------------------------------------------------
            */

            $payment = $this->paymentService->review(
                $payment,
                $admin
            );

            $subscription = $payment->subscription;

            /*
            |--------------------------------------------------------------------------
            | Approve
            |--------------------------------------------------------------------------
            */

            if ($dto->status === 'approved') {

                $plan = $subscription->plan;

                $startsAt = now();

                $expiresAt = $plan->billing_cycle === 'monthly'
                    ? now()->addMonth()
                    : now()->addYear();

                $subscription->update([

                    'status' => 'active',

                    'activated_at' => now(),

                    'starts_at' => $startsAt,

                    'expires_at' => $expiresAt,

                    'paid_at' => now(),

                    'notes' => $dto->notes,

                ]);

                $subscription->user->update([

                    'current_plan_id' => $plan->id,

                    'subscription_status' => 'active',

                    'subscription_expires_at' => $expiresAt,

                ]);

            }

            /*
            |--------------------------------------------------------------------------
            | Reject
            |--------------------------------------------------------------------------
            */

            if ($dto->status === 'rejected') {

                $subscription->update([

                    'status' => 'rejected',

                    'notes' => $dto->notes,

                ]);

                $subscription->user->update([

                    'subscription_status' => 'rejected',

                ]);

            }

            return $payment->fresh([
                'subscription.plan',
                'subscription.user',
            ]);

        });

    }
}