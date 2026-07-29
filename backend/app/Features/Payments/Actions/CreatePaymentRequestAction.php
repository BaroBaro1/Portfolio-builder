<?php

namespace App\Features\Payments\Actions;

use App\Models\Plan;
use App\Models\Subscription;

use App\Features\Payments\Services\PaymentService;
use App\Features\Payments\DTOs\PaymentRequestDTO;

class CreatePaymentRequestAction
{
    public function __construct(
        protected PaymentService $paymentService
    ) {
    }

    public function execute(
        $user,
        PaymentRequestDTO $dto
    ) {

        $plan = Plan::where(
            'slug',
            $dto->planSlug
        )->firstOrFail();

        $subscription = Subscription::create([

            'user_id' => $user->id,

            'plan_id' => $plan->id,

            'status' => 'pending',

            'payment_method' => 'manual',

        ]);

        $receiptPath = $dto->receipt->store(
            'payments',
            'public'
        );

        return $this->paymentService->store([

            'subscription_id' => $subscription->id,

            'receipt_path' => $receiptPath,

        ]);
    }
}