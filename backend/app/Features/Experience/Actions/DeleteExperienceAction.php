<?php

namespace App\Features\Experience\Actions;

use App\Models\Experience;

class DeleteExperienceAction
{
    public function execute(Experience $experience): void
    {
        $experience->delete();
    }
}