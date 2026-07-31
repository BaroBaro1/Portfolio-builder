<?php

namespace App\Features\Admin\Actions;

use App\Features\Admin\Services\AdminDashboardService;

class GetDashboardStatsAction
{
    public function __construct(
        protected AdminDashboardService $service
    ) {
    }

    public function execute(): array
    {
        return $this->service->stats();
    }
}