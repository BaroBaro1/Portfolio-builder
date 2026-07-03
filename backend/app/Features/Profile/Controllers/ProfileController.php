<?php

namespace App\Features\Profile\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Features\Profile\Actions\UpdateProfileAction;
use App\Features\Profile\Requests\UpdateProfileRequest;
use App\Features\Profile\DTOs\UpdateProfileDTO;
use App\Features\Profile\Resources\ProfileResource;

class ProfileController extends Controller
{
     public function __construct(
        protected UpdateProfileAction $updateProfileAction,
    ) {
    }
public function show(Request $request): JsonResponse
{
    return response()->json([
        'data' => ProfileResource::make($request->user()),
    ]);
}
public function update(UpdateProfileRequest $request): JsonResponse
{
    $user = $this->updateProfileAction->execute(
        $request->user(),
        UpdateProfileDTO::fromRequest($request)
    );

    return response()->json([
        'message' => 'Profile updated successfully.',
        'data' => ProfileResource::make($user),
    ]);
}
}