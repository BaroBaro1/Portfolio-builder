<?php

namespace App\Features\Payments\DTOs;

use Illuminate\Http\UploadedFile;
use App\Features\Payments\Requests\PaymentRequest;

class PaymentRequestDTO
{
    public function __construct(

        public readonly string $planSlug,

        public readonly UploadedFile $receipt,

        public readonly ?string $reference,

    ) {}

    public static function fromRequest(
        PaymentRequest $request
    ): self {

        return new self(

            planSlug: $request->string('plan_slug')->toString(),

            receipt: $request->file('receipt'),

            reference: $request->reference,

        );

    }
}