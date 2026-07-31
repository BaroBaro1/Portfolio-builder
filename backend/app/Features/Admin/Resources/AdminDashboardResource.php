<?php

namespace App\Features\Admin\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminDashboardResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [

            'totalUsers' => $this['total_users'],

            'pendingPayments' => $this['pending_payments'],

            'activeSubscriptions' => $this['active_subscriptions'],

            'pendingSubscriptions' => $this['pending_subscriptions'],

            'trialUsers' => $this['trial_users'],

            'expiredSubscriptions' => $this['expired_subscriptions'],

        ];
    }
}