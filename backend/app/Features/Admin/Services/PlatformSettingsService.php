<?php

namespace App\Features\Admin\Services;

use App\Models\PlatformSetting;

use App\Features\Admin\DTOs\UpdatePlatformSettingsDTO;

class PlatformSettingsService
{
    public function get(): PlatformSetting
    {
        return PlatformSetting::firstOrFail();
    }

    public function update(
        UpdatePlatformSettingsDTO $dto
    ): PlatformSetting {

        $settings = PlatformSetting::firstOrFail();

        $settings->update([

            'bank_name' => $dto->bankName,

            'account_owner' => $dto->accountOwner,

            'ccp' => $dto->ccp,

            'rip' => $dto->rip,

            'iban' => $dto->iban,

            'swift' => $dto->swift,

            'payment_instructions' => $dto->paymentInstructions,

        ]);

        return $settings;
    }
}