<?php

namespace App\Features\SocialLinks\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSocialLinkRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'platform' => ['required', 'string', 'max:50'],
            'url' => ['required', 'url', 'max:255'],
            'display_order' => ['nullable', 'integer', 'min:0'],
        ];
    }
}