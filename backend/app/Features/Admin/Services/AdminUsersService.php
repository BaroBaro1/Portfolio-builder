<?php

namespace App\Features\Admin\Services;

use App\Models\User;

class AdminUsersService
{
    public function all()
    {
        return User::query()

            ->with([
                'currentPlan',
                'subscriptions',
                'profile',
            ])

            ->latest()

            ->get();
    }
}