<?php

namespace App\Features\ProfileSettings\Actions;

use App\Features\ProfileSettings\DTOs\UpdateProfileSettingsDTO;
use App\Models\Profile;
use App\Models\ProfileSetting;

class UpdateProfileSettingsAction
{
    public function execute(
        Profile $profile,
        UpdateProfileSettingsDTO $dto
    ): ProfileSetting {

        $profile->settings()->updateOrCreate(
            [],
            [

                'accent_color' => $dto->accentColor,

                'language' => $dto->language,

                'dark_mode' => $dto->darkMode,

                'sections_order' => $dto->sectionsOrder,

                'show_projects' => $dto->showProjects,

                'show_skills' => $dto->showSkills,

                'show_experiences' => $dto->showExperiences,

                'show_certificates' => $dto->showCertificates,

            ]
        );

        return $profile->fresh()->settings;
    }
}