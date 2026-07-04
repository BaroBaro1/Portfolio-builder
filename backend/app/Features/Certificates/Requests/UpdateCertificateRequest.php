<?php

namespace App\Features\Certificates\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCertificateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['sometimes', 'string', 'max:255'],

            'issuer' => ['sometimes', 'string', 'max:255'],

            'issue_date' => ['sometimes', 'date'],

            'expiration_date' => ['nullable', 'date', 'after_or_equal:issue_date'],

            'credential_url' => ['nullable', 'url', 'max:255'],

            'image' => ['nullable', 'string'],

            'display_order' => ['sometimes', 'integer', 'min:0'],
        ];
    }
}