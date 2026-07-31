<?php

namespace App\Features\Admin\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminPaymentResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'receipt' => asset(
                'storage/'.$this->receipt_path
            ),

            'reviewed_at' => $this->reviewed_at,

            'subscription' => [

                'id' => $this->subscription->id,

                'status' => $this->subscription->status,

            ],

            'user' => [

                'id' => $this->subscription->user->id,

                'name' => $this->subscription->user->name,

                'email' => $this->subscription->user->email,

            ],

            'plan' => [

                'id' => $this->subscription->plan->id,

                'name' => $this->subscription->plan->name,

                'slug' => $this->subscription->plan->slug,

            ],

        ];
    }
}