<?php

namespace App\Features\Skills\Actions;

use App\Features\Skills\DTOs\CreateSkillDTO;
use App\Models\User;
use App\Models\ProfileSkill;

class CreateSkillAction
{
    public function execute(User $user, CreateSkillDTO $dto): ProfileSkill
    {
        return ProfileSkill::create([
            'user_id'  => $user->id,
            'skill_id' => $dto->skillId,
            'level'    => $dto->level,
        ]);
    }
}