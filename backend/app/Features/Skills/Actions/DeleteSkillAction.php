<?php

namespace App\Features\Skills\Actions;

use App\Models\ProfileSkill;

class DeleteSkillAction
{
    public function execute(ProfileSkill $profileSkill): void
    {
        $profileSkill->delete();
    }
}