<?php

namespace App\Features\SocialLinks\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSocialLinkRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'platform' => ['sometimes', 'string', 'max:50'],
            'url' => ['sometimes', 'url', 'max:255'],
            'display_order' => ['sometimes', 'integer', 'min:0'],
        ];
    }
}