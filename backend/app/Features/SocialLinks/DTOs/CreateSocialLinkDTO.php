<?php

namespace App\Features\SocialLinks\DTOs;

use App\Features\SocialLinks\Requests\StoreSocialLinkRequest;

class CreateSocialLinkDTO
{
    public function __construct(
        public readonly string $platform,
        public readonly string $url,
        public readonly int $displayOrder,
    ) {}

    public static function fromRequest(StoreSocialLinkRequest $request): self
    {
        return new self(
            platform: $request->string('platform')->toString(),
            url: $request->string('url')->toString(),
            displayOrder: $request->integer('display_order', 0),
        );
    }
}