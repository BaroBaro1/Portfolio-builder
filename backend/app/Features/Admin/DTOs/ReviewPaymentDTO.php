<?php

namespace App\Features\Admin\DTOs;

use App\Features\Admin\Requests\ReviewPaymentRequest;

class ReviewPaymentDTO
{
    public function __construct(

        public readonly string $status,

        public readonly ?string $notes,

    ) {
    }

    public static function fromRequest(
        ReviewPaymentRequest $request
    ): self {

        return new self(

            status: $request->string('status')->toString(),

            notes: $request->notes,

        );

    }
}