<?php

namespace App\Features\Projects\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,

            'title' => $this->title,

            'slug' => $this->slug,

            'description' => $this->description,

            'thumbnail' => $this->thumbnail,

            'github_url' => $this->github_url,

            'live_url' => $this->live_url,

            'featured' => $this->featured,

            'status' => $this->status,

            'display_order' => $this->display_order,

            'published_at' => $this->published_at,

            'created_at' => $this->created_at,

            'updated_at' => $this->updated_at,
        ];
    }
}