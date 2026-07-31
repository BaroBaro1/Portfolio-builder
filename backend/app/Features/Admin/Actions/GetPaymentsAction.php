<?php

namespace App\Features\Admin\Actions;

use App\Features\Admin\Services\AdminPaymentsService;

class GetPaymentsAction
{
    public function __construct(
        protected AdminPaymentsService $service
    ) {
    }

    public function execute()
    {
        return $this->service->all();
    }
}