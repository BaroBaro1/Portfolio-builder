<?php

namespace App\Features\Profile\Actions;

use App\Features\Profile\DTOs\UpdateProfileDTO;
use App\Models\User;

class UpdateProfileAction
{
    public function execute(User $user, UpdateProfileDTO $dto): User
    {
        $user->profile->update([
            'display_name' => $dto->displayName,
            'headline'     => $dto->headline,
            'bio'          => $dto->bio,
            'location'     => $dto->location,
            'website'      => $dto->website,
        ]);

        return $user->fresh('profile');
    }
}