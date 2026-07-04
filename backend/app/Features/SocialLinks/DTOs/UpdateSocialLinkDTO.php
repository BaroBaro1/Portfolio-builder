<?php

namespace App\Features\SocialLinks\DTOs;

use App\Features\SocialLinks\Requests\UpdateSocialLinkRequest;

class UpdateSocialLinkDTO
{
    public function __construct(
        public readonly ?string $platform,
        public readonly ?string $url,
        public readonly ?int $displayOrder,
    ) {}

    public static function fromRequest(UpdateSocialLinkRequest $request): self
    {
        return new self(
            platform: $request->input('platform'),
            url: $request->input('url'),
            displayOrder: $request->input('display_order'),
        );
    }
}