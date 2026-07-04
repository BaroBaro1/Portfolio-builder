<?php

namespace App\Features\SocialLinks\Actions;

use App\Features\SocialLinks\DTOs\UpdateSocialLinkDTO;
use App\Models\SocialLink;

class UpdateSocialLinkAction
{
    public function execute(
        SocialLink $socialLink,
        UpdateSocialLinkDTO $dto
    ): SocialLink {

        $socialLink->update(array_filter([
            'platform' => $dto->platform,
            'url' => $dto->url,
            'display_order' => $dto->displayOrder,
        ], fn ($value) => $value !== null));

        return $socialLink->refresh();
    }
}