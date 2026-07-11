<?php

namespace App\Features\Profile\Actions;

use App\Models\User;
use App\Services\FileUploadService;

class DeleteAvatarAction
{
    public function __construct(
        protected FileUploadService $fileUploadService,
    ) {
    }

    public function execute(User $user): User
    {
        if ($user->profile->avatar) {
            $this->fileUploadService->delete(
                $user->profile->avatar
            );
        }

        $user->profile->update([
            'avatar' => null,
        ]);

        return $user->fresh('profile');
    }
}