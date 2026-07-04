<?php

namespace App\Features\Projects\Actions;

use App\Models\User;
use App\Models\Project;
use App\Features\Projects\DTOs\CreateProjectDTO;

class CreateProjectAction
{
    public function execute(User $user, CreateProjectDTO $dto): Project
    {
        return $user->projects()->create([
            'title' => $dto->title,
            'slug' => $dto->slug,
            'description' => $dto->description,
            'thumbnail' => $dto->thumbnail,
            'github_url' => $dto->githubUrl,
            'live_url' => $dto->liveUrl,
            'featured' => $dto->featured,
            'status' => $dto->status,
            'display_order' => $dto->displayOrder,
            'published_at' => $dto->publishedAt,
        ]);
    }
}