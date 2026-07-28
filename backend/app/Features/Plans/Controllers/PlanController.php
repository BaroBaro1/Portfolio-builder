<?php

namespace App\Features\Plans\Controllers;

use App\Http\Controllers\Controller;

use App\Features\Plans\Resources\PlanResource;

use App\Models\Plan;

class PlanController extends Controller
{
    public function index()
    {
        $plans = Plan::where('is_active', true)
            ->orderByRaw("
                CASE billing_cycle
                    WHEN 'trial' THEN 1
                    WHEN 'monthly' THEN 2
                    WHEN 'yearly' THEN 3
                    ELSE 4
                END
            ")
            ->get();

        return PlanResource::collection($plans);
    }
}