<?php

namespace App\Features\Education\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEducationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'institution' => ['sometimes', 'required', 'string', 'max:255'],

            'degree' => ['sometimes', 'required', 'string', 'max:255'],

            'field_of_study' => ['sometimes', 'required', 'string', 'max:255'],

            'description' => ['nullable', 'string'],

            'start_date' => ['sometimes', 'required', 'date'],

            'end_date' => ['nullable', 'date', 'after_or_equal:start_date'],

            'is_current' => ['sometimes', 'required', 'boolean'],

            'display_order' => ['sometimes', 'integer', 'min:0'],
        ];
    }
}