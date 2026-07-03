<?php

namespace App\Features\Skills\Actions;

use App\Features\Skills\DTOs\UpdateSkillDTO;
use App\Models\ProfileSkill;

class UpdateSkillAction
{
    public function execute(
        ProfileSkill $profileSkill,
        UpdateSkillDTO $dto
    ): ProfileSkill {
        $profileSkill->update([
            'level' => $dto->level,
        ]);

        return $profileSkill->fresh();
    }
}