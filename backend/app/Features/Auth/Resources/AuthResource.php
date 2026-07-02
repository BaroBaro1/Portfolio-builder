<?php

namespace App\Features\Auth\Resources;

use App\Models\User;

class AuthResource
{
    public static function make(User $user, string $token): array
    {
        return [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'profile' => [
                    'display_name' => $user->profile?->display_name,
                    'slug' => $user->profile?->slug,
                    'status' => $user->profile?->status,
                ],
            ],

            'token' => $token,
        ];
    }
}