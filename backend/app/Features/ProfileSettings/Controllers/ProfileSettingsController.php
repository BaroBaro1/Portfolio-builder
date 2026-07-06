<?php

namespace App\Features\ProfileSettings\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Features\ProfileSettings\Actions\UpdateProfileSettingsAction;
use App\Features\ProfileSettings\DTOs\UpdateProfileSettingsDTO;
use App\Features\ProfileSettings\Requests\UpdateProfileSettingsRequest;
use App\Features\ProfileSettings\Resources\ProfileSettingsResource;

class ProfileSettingsController extends Controller
{
    public function __construct(
        protected UpdateProfileSettingsAction $updateProfileSettingsAction,
    ) {
    }

    public function show(Request $request): JsonResponse
    {
        return response()->json([
            'data' => ProfileSettingsResource::make(
                $request->user()->profile->settings
            ),
        ]);
    }

    public function update(
        UpdateProfileSettingsRequest $request
    ): JsonResponse {

        $settings = $this->updateProfileSettingsAction->execute(
            $request->user()->profile,
            UpdateProfileSettingsDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Profile settings updated successfully.',
            'data' => ProfileSettingsResource::make($settings),
        ]);
    }
}