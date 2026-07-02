<?php

namespace App\Features\Auth\Actions;

use App\Features\Auth\DTOs\RegisterDTO;
use App\Models\User;

class RegisterAction
{
    public function execute(RegisterDTO $dto): User
    {
        return User::create([
            'name' => $dto->name,
            'email' => $dto->email,
            'password' => $dto->password,
        ]);
    }
}