<?php

namespace App\Features\Admin\Actions;

use App\Features\Admin\Services\AdminUsersService;

class GetUsersAction
{
    public function __construct(
        protected AdminUsersService $service
    ) {
    }

    public function execute()
    {
        return $this->service->all();
    }
}