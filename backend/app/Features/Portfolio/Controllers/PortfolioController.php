<?php

namespace App\Features\Portfolio\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Features\Portfolio\Actions\GetPortfolioAction;
use App\Features\Portfolio\Resources\PortfolioResource;

class PortfolioController extends Controller
{
    public function __construct(
        protected GetPortfolioAction $getPortfolioAction,
    ) {
    }

    public function show(string $slug): JsonResponse
    {
        $user = $this->getPortfolioAction->execute($slug);

        return response()->json([
            'data' => PortfolioResource::make($user),
        ]);
    }
}