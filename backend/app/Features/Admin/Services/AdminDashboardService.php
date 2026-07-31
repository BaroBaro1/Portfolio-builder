<?php

namespace App\Features\Admin\Services;

use App\Models\User;
use App\Models\Subscription;
use App\Models\Payment;

class AdminDashboardService
{
    public function stats(): array
    {
        return [

            'total_users' => User::count(),

            'pending_payments' => Payment::whereNull(
                'reviewed_at'
            )->count(),

            'active_subscriptions' => Subscription::where(
                'status',
                'active'
            )->count(),

            'pending_subscriptions' => Subscription::where(
                'status',
                'pending'
            )->count(),

            'trial_users' => User::where(
                'subscription_status',
                'trial'
            )->count(),

            'expired_subscriptions' => Subscription::where(
                'status',
                'expired'
            )->count(),

        ];
    }
}