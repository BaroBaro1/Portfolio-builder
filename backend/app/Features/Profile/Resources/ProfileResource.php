<?php

namespace App\Features\Profile\Resources;

use App\Models\User;

class ProfileResource
{
    public static function make(User $user): array
    {
        return [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],

            'profile' => [
                'display_name' => $user->profile->display_name,
                'slug' => $user->profile->slug,
                'headline' => $user->profile->headline,
                'bio' => $user->profile->bio,
                'avatar' => $user->profile->avatar,
                'location' => $user->profile->location,
                'website' => $user->profile->website,
                'status' => $user->profile->status,
            ],
        ];
    }
}