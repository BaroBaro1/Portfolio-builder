<?php

namespace App\Features\Admin\Actions;

use App\Models\User;

class ShowUserAction
{
    public function execute(
        User $user
    ): User {

        return $user->load([

            'profile',

            'currentPlan',

            'subscriptions.plan',

            'projects',

            'experiences',

            'educations',

            'certificates',

            'socialLinks',

            'skills',

        ]);

    }
}