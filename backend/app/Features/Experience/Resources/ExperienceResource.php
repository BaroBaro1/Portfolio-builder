<?php

namespace App\Features\Experience\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExperienceResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,

            'company' => $this->company,
            'position' => $this->position,
            'location' => $this->location,
            'description' => $this->description,

            'start_date' => $this->start_date,
            'end_date' => $this->end_date,

            'is_current' => $this->is_current,

            'display_order' => $this->display_order,

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}