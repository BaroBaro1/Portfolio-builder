<?php

namespace App\Features\Certificates\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCertificateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],

            'issuer' => ['required', 'string', 'max:255'],

            'issue_date' => ['required', 'date'],

            'expiration_date' => ['nullable', 'date', 'after_or_equal:issue_date'],

            'credential_url' => ['nullable', 'url', 'max:255'],

            'image' => ['nullable', 'string'],

            'display_order' => ['nullable', 'integer', 'min:0'],
        ];
    }
}