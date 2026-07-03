<?php

namespace App\Features\Skills\DTOs;

use App\Features\Skills\Requests\StoreSkillRequest;

class CreateSkillDTO
{
    public function __construct(
        public readonly int $skillId,
        public readonly int $level,
    ) {
    }

    public static function fromRequest(StoreSkillRequest $request): self
    {
        return new self(
            skillId: $request->integer('skill_id'),
            level: $request->integer('level'),
        );
    }
}