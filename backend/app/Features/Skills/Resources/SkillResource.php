<?php

namespace App\Features\Skills\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SkillResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,

            'skill' => [
    'id' => $this->skill->id,
    'name' => $this->skill->name,
    'slug' => $this->skill->slug,
    'category' => $this->skill->category,
    'icon' => $this->skill->icon,
],

            'level' => $this->level,
        ];
    }
}