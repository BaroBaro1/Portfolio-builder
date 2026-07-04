<?php

namespace App\Features\Projects\Actions;

use App\Models\Project;

class DeleteProjectAction
{
    public function execute(Project $project): void
    {
        $project->delete();
    }
}