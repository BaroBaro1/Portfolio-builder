<?php

namespace App\Features\ProfileSettings\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileSettingsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'accent_color' => 'required|string|max:50',

            'language' => 'required|string|max:5',

            'dark_mode' => 'required|boolean',

            'sections_order' => 'required|array',

            'show_projects' => 'required|boolean',

            'show_skills' => 'required|boolean',

            'show_experiences' => 'required|boolean',

            'show_certificates' => 'required|boolean',

        ];
    }
}