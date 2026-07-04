<?php

namespace App\Features\Projects\DTOs;

use App\Features\Projects\Requests\StoreProjectRequest;

class CreateProjectDTO
{
    public function __construct(
        public readonly string $title,
        public readonly string $slug,
        public readonly string $description,
        public readonly ?string $thumbnail,
        public readonly ?string $githubUrl,
        public readonly ?string $liveUrl,
        public readonly bool $featured,
        public readonly string $status,
        public readonly int $displayOrder,
        public readonly ?string $publishedAt,
    ) {}

    public static function fromRequest(StoreProjectRequest $request): self
    {
        return new self(
            title: $request->string('title')->toString(),
            slug: $request->string('slug')->toString(),
            description: $request->string('description')->toString(),
            thumbnail: $request->input('thumbnail'),
            githubUrl: $request->input('github_url'),
            liveUrl: $request->input('live_url'),
            featured: $request->boolean('featured'),
            status: $request->input('status', 'draft'),
            displayOrder: $request->integer('display_order'),
            publishedAt: $request->input('published_at'),
        );
    }
}