<?php

namespace App\Features\Auth\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            'user' => [

                'id' => $this['user']->id,

                'name' => $this['user']->name,

                'email' => $this['user']->email,

                'created_at' => $this['user']->created_at,

            ],

            'token' => $this['token'],

        ];
    }
}