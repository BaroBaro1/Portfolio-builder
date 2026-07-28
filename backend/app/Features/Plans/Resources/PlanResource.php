<?php

namespace App\Features\Plans\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlanResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'name' => $this->name,

            'slug' => $this->slug,

            'price' => (float) $this->price,

            'billing_cycle' => $this->billing_cycle,

            'trial_days' => $this->trial_days,

            'description' => $this->description,

            'is_active' => $this->is_active,

        ];
    }
}