<?php

namespace App\Features\SocialLinks\Actions;

use App\Models\SocialLink;

class DeleteSocialLinkAction
{
    public function execute(SocialLink $socialLink): void
    {
        $socialLink->delete();
    }
}