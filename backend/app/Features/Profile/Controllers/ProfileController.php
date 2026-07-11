<?php

namespace App\Features\Profile\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Features\Profile\Actions\UpdateProfileAction;
use App\Features\Profile\Actions\DeleteAvatarAction;
use App\Features\Profile\Requests\UpdateProfileRequest;
use App\Features\Profile\DTOs\UpdateProfileDTO;
use App\Features\Profile\Resources\ProfileResource;
use App\Services\FileUploadService;

class ProfileController extends Controller
{
     public function __construct(
    protected UpdateProfileAction $updateProfileAction,
    protected DeleteAvatarAction $deleteAvatarAction,
    protected FileUploadService $fileUploadService,
) {
}
public function show(Request $request): JsonResponse
{
    return response()->json([
        'data' => ProfileResource::make($request->user()),
    ]);
}
public function deleteAvatar(Request $request): JsonResponse
{
    $user = $this->deleteAvatarAction->execute(
        $request->user()
    );

    return response()->json([
        'message' => 'Avatar deleted successfully.',
        'data' => ProfileResource::make($user),
    ]);
}
public function update(UpdateProfileRequest $request): JsonResponse
{
    // dd('UPDATE REACHED');
       $avatar = null;

if ($request->hasFile('avatar')) {
    $avatar = $this->fileUploadService->replace(
        $request->file('avatar'),
        $request->user()->profile?->avatar,
        'avatars'
    );
}

$dto = UpdateProfileDTO::fromRequest(
    $request,
    $avatar
);
    $user = $this->updateProfileAction->execute(
        $request->user(),
        $dto
    );

    return response()->json([
        'message' => 'Profile updated successfully.',
        'data' => ProfileResource::make($user),
    ]);
}
}