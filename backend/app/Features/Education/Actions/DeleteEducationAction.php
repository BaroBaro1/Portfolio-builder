<?php

namespace App\Features\Education\Actions;

use App\Models\Education;

class DeleteEducationAction
{
    public function execute(Education $education): void
    {
        $education->delete();
    }
}