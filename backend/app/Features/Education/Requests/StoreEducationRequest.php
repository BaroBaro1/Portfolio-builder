<?php

namespace App\Features\Education\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEducationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'institution' => ['required', 'string', 'max:255'],

            'degree' => ['required', 'string', 'max:255'],

            'field_of_study' => ['required', 'string', 'max:255'],

            'description' => ['nullable', 'string'],

            'start_date' => ['required', 'date'],

            'end_date' => ['nullable', 'date', 'after_or_equal:start_date'],

            'is_current' => ['required', 'boolean'],

            'display_order' => ['nullable', 'integer', 'min:0'],
        ];
    }
}