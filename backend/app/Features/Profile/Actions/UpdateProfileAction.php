<?php

namespace App\Features\Profile\Actions;

use App\Features\Profile\DTOs\UpdateProfileDTO;
use App\Models\User;

class UpdateProfileAction
{
    public function execute(User $user, UpdateProfileDTO $dto): User
    {
        $data = [
            'display_name' => $dto->displayName,
            'headline'     => $dto->headline,
            'bio'          => $dto->bio,
            'location'     => $dto->location,
            'website'      => $dto->website,
            'phone' => $dto->phone,
        ];

        if ($dto->avatar !== null) {
            $data['avatar'] = $dto->avatar;
        }

        $user->profile->update($data);

        return $user->fresh('profile');
    }
}