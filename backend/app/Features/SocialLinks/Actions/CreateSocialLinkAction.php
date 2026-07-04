<?php

namespace App\Features\SocialLinks\Actions;

use App\Features\SocialLinks\DTOs\CreateSocialLinkDTO;
use App\Models\SocialLink;
use App\Models\User;

class CreateSocialLinkAction
{
    public function execute(User $user, CreateSocialLinkDTO $dto): SocialLink
    {
        return $user->socialLinks()->create([
            'platform' => $dto->platform,
            'url' => $dto->url,
            'display_order' => $dto->displayOrder,
        ]);
    }
}