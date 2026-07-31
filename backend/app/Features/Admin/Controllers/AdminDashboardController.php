<?php

namespace App\Features\Admin\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\JsonResponse;

use App\Features\Admin\Actions\GetDashboardStatsAction;
use App\Features\Admin\Resources\AdminDashboardResource;

class AdminDashboardController extends Controller
{
    public function __construct(
        protected GetDashboardStatsAction $action
    ) {
    }

    public function index(): JsonResponse
    {
        $stats = $this->action->execute();

        return response()->json([

            'success' => true,

            'data' => new AdminDashboardResource(
                $stats
            ),

        ]);
    }
}