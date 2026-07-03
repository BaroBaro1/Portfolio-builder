<?php

namespace App\Features\Auth\Actions;

use App\Features\Auth\DTOs\LoginDTO;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LoginAction
{
    /**
     * Attempt to authenticate the user.
     */
    public function execute(LoginDTO $dto): User
    {
        $credentials = [
            'email' => $dto->email,
            'password' => $dto->password,
        ];

        if (! Auth::attempt($credentials)) {
            abort(401, 'Invalid credentials.');
        }

        return Auth::user();
    }
}