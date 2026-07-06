<?php

namespace App\Features\ProfileSettings\Resources;

use App\Models\ProfileSetting;

class ProfileSettingsResource
{
    public static function make(?ProfileSetting $settings): ?array
    {
        if (!$settings) {
            return null;
        }

        return [

            'accent_color' => $settings->accent_color,

            'language' => $settings->language,

            'dark_mode' => $settings->dark_mode,

            'sections_order' => $settings->sections_order,

            'show_projects' => $settings->show_projects,

            'show_skills' => $settings->show_skills,

            'show_experiences' => $settings->show_experiences,

            'show_certificates' => $settings->show_certificates,

        ];
    }
}