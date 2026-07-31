<?php

namespace App\Features\Admin\Services;

use App\Models\Payment;

class AdminPaymentsService
{
    public function all()
    {
        return Payment::query()

            ->with([
                'subscription.plan',
                'subscription.user',
            ])

            ->latest()

            ->get();
    }
}