<?php

namespace App\Features\Skills\DTOs;

use App\Features\Skills\Requests\UpdateSkillRequest;

class UpdateSkillDTO
{
    public function __construct(
        public readonly int $level,
    ) {
    }

    public static function fromRequest(UpdateSkillRequest $request): self
    {
        return new self(
            level: $request->integer('level'),
        );
    }
}