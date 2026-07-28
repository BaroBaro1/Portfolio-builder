<?php

namespace App\Features\Subscriptions\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubscriptionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'status' => $this->status,

            'payment_method' => $this->payment_method,

            'starts_at' => $this->starts_at,

            'trial_ends_at' => $this->trial_ends_at,

            'expires_at' => $this->expires_at,

            'activated_at' => $this->activated_at,

            'created_at' => $this->created_at,

            'plan' => [
                'id' => $this->plan->id,
                'name' => $this->plan->name,
                'slug' => $this->plan->slug,
                'price' => $this->plan->price,
                'billing_cycle' => $this->plan->billing_cycle,
            ],

        ];
    }
}