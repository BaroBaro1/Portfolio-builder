<?php

namespace App\Features\Admin\Services;

use App\Models\Payment;
use App\Models\User;

class ReviewPaymentService
{
    public function review(
        Payment $payment,
        User $admin
    ): Payment {

        $payment->update([

            'reviewed_by' => $admin->id,

            'reviewed_at' => now(),

        ]);

        return $payment->fresh([
            'subscription',
        ]);
    }
}