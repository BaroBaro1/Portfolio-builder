<?php

namespace App\Features\Payments\Services;

use App\Models\Payment;

class PaymentService
{
    public function store(array $data): Payment
    {
        return Payment::create($data);
    }
}