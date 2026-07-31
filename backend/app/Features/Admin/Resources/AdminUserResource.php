<?php

namespace App\Features\Admin\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminUserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'name' => $this->name,

            'email' => $this->email,

            'subscription_status' => $this->subscription_status,

            'trial_used' => $this->trial_used,

            'subscription_expires_at' => $this->subscription_expires_at,

            'current_plan' => $this->currentPlan?->name,

            'projects_count' => $this->projects()->count(),

            'created_at' => $this->created_at,

        ];
    }
}