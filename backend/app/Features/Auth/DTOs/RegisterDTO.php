<?php

namespace App\Features\Auth\DTOs;

use App\Features\Auth\Requests\RegisterRequest;

readonly class RegisterDTO
{
    public function __construct(
        public string $name,
        public string $email,
        public string $password,
    ) {}

    public static function fromRequest(RegisterRequest $request): self
    {
        return new self(
            name: $request->string('name')->toString(),
            email: strtolower(
                $request->string('email')->toString()
            ),
            password: $request->string('password')->toString(),
        );
    }
}