<?php

namespace App\Features\Portfolio\Resources;

use App\Models\User;

class PortfolioResource
{
    public static function make(User $user): array
    {
        return [

            'profile' => $user->profile,

            'skills' => $user->skills
                ->sortBy('pivot.display_order')
                ->values(),

            'projects' => $user->projects
                ->sortBy('display_order')
                ->values(),

            'experiences' => $user->experiences
                ->sortBy('display_order')
                ->values(),

            'educations' => $user->educations
                ->sortBy('display_order')
                ->values(),

            'certificates' => $user->certificates
                ->sortBy('display_order')
                ->values(),

            'social_links' => $user->socialLinks
                ->sortBy('display_order')
                ->values(),

        ];
    }
}