<?php

namespace App\Features\Admin\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\JsonResponse;

use App\Features\Admin\Actions\GetPlatformSettingsAction;
use App\Features\Admin\Actions\UpdatePlatformSettingsAction;

use App\Features\Admin\Requests\UpdatePlatformSettingsRequest;

use App\Features\Admin\Resources\PlatformSettingsResource;

class PlatformSettingsController extends Controller
{
    public function __construct(

        protected GetPlatformSettingsAction $getAction,

        protected UpdatePlatformSettingsAction $updateAction,

    ) {
    }

    /**
     * Display platform settings.
     */
    public function show(): JsonResponse
    {
        return response()->json([

            'success' => true,

            'data' => new PlatformSettingsResource(

                $this->getAction->execute()

            ),

        ]);
    }

    /**
     * Update platform settings.
     */
    public function update(
        UpdatePlatformSettingsRequest $request
    ): JsonResponse {

        $settings = $this->updateAction->execute(

            $request->dto()

        );

        return response()->json([

            'success' => true,

            'message' => 'Platform settings updated successfully.',

            'data' => new PlatformSettingsResource(

                $settings

            ),

        ]);

    }
}