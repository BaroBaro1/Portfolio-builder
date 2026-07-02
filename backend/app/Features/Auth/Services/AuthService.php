<?php

namespace App\Features\Auth\Services;

use App\Features\Auth\Actions\RegisterAction;
use App\Features\Auth\DTOs\RegisterDTO;
use App\Models\User;

class AuthService
{
    public function __construct(
        protected RegisterAction $registerAction,
    ) {}

    public function register(RegisterDTO $dto): array
    {
        $user = $this->registerAction->execute($dto);

        $token = $user->createToken('auth_token')->plainTextToken;

        return [
            'user' => $user,
            'token' => $token,
        ];
    }
}