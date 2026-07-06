<?php

namespace App\Features\Portfolio\Actions;

use App\Models\User;

class GetPortfolioAction
{
    public function execute(string $slug): User
    {
        return User::query()
            ->whereHas('profile', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })
            ->with([
                'profile',
                'skills',
                'projects',
                'experiences',
                'educations',
                'certificates',
                'socialLinks',
            ])
            ->firstOrFail();
    }
}