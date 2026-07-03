<?php

namespace App\Features\Profile\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'display_name' => 'required|string|max:100',
            'headline'     => 'nullable|string|max:150',
            'bio'          => 'nullable|string|max:1000',
            'location'     => 'nullable|string|max:100',
            'website'      => 'nullable|url|max:255',
        ];
    }
}