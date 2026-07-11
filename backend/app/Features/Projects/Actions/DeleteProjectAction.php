<?php

namespace App\Features\Projects\Actions;

use App\Models\Project;
use App\Services\FileUploadService;

class DeleteProjectAction
{
    public function __construct(
        private readonly FileUploadService $fileUploadService,
    ) {
    }

    public function execute(Project $project): void
    {
        if ($project->thumbnail) {
            $this->fileUploadService->delete(
                $project->thumbnail
            );
        }

        $project->delete();
    }
}