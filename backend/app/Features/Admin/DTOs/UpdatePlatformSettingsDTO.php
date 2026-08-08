<?php

namespace App\Features\Admin\DTOs;

class UpdatePlatformSettingsDTO
{
    public function __construct(

        public readonly string $bankName,

        public readonly string $accountOwner,

        public readonly string $ccp,

        public readonly string $rip,

        public readonly ?string $iban,

        public readonly ?string $swift,

        public readonly ?string $paymentInstructions,

    ) {
    }

    public static function fromArray(
        array $data
    ): self {

        return new self(

            bankName: $data['bank_name'],

            accountOwner: $data['account_owner'],

            ccp: $data['ccp'],

            rip: $data['rip'],

            iban: $data['iban'] ?? null,

            swift: $data['swift'] ?? null,

            paymentInstructions: $data['payment_instructions'] ?? null,

        );

    }
}