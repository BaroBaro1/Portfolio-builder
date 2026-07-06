<?php

namespace App\Features\ProfileSettings\DTOs;

use App\Features\ProfileSettings\Requests\UpdateProfileSettingsRequest;

class UpdateProfileSettingsDTO
{
    public function __construct(

        public readonly string $accentColor,

        public readonly string $language,

        public readonly bool $darkMode,

        public readonly array $sectionsOrder,

        public readonly bool $showProjects,

        public readonly bool $showSkills,

        public readonly bool $showExperiences,

        public readonly bool $showCertificates,

    ) {
    }

    public static function fromRequest(
        UpdateProfileSettingsRequest $request
    ): self {

        return new self(

            accentColor: $request->accent_color,

            language: $request->language,

            darkMode: $request->boolean('dark_mode'),

            sectionsOrder: $request->sections_order,

            showProjects: $request->boolean('show_projects'),

            showSkills: $request->boolean('show_skills'),

            showExperiences: $request->boolean('show_experiences'),

            showCertificates: $request->boolean('show_certificates'),

        );
    }
}