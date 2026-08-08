<?php

namespace App\Features\Admin\Actions;

use App\Models\PlatformSetting;

use App\Features\Admin\DTOs\UpdatePlatformSettingsDTO;

use App\Features\Admin\Services\PlatformSettingsService;

class UpdatePlatformSettingsAction
{
    public function __construct(

        protected PlatformSettingsService $service,

    ) {
    }

    public function execute(
        UpdatePlatformSettingsDTO $dto
    ): PlatformSetting {

        return $this->service->update($dto);

    }
}