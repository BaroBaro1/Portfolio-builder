<?php

namespace App\Features\Admin\Actions;

use App\Models\PlatformSetting;

use App\Features\Admin\Services\PlatformSettingsService;

class GetPlatformSettingsAction
{
    public function __construct(

        protected PlatformSettingsService $service,

    ) {
    }

    public function execute(): PlatformSetting
    {
        return $this->service->get();
    }
}