<?php

namespace App\Features\Education\DTOs;

use App\Features\Education\Requests\UpdateEducationRequest;

class UpdateEducationDTO
{
    public function __construct(
        public readonly array $data,
    ) {}

    public static function fromRequest(UpdateEducationRequest $request): self
    {
        return new self(
            data: $request->validated(),
        );
    }
}