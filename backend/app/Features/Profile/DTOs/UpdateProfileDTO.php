<?php

namespace App\Features\Profile\DTOs;

use App\Features\Profile\Requests\UpdateProfileRequest;

class UpdateProfileDTO
{
    public function __construct(
        public readonly string $displayName,
        public readonly ?string $headline,
        public readonly ?string $bio,
        public readonly ?string $location,
        public readonly ?string $website,
        public readonly ?string $phone,
        public readonly ?string $avatar,
    ) {
    }

    public static function fromRequest(
        UpdateProfileRequest $request,
        ?string $avatar = null
    ): self {
        return new self(
            displayName: $request->display_name,
            headline: $request->headline,
            bio: $request->bio,
            location: $request->location,
            website: $request->website,
            phone: $request->phone,
            avatar: $avatar,
        );
    }
}