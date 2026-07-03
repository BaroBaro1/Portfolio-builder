<?php

namespace App\Features\Skills\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSkillRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'skill_id' => ['required', 'exists:skills,id'],
            'level' => ['required', 'integer', 'between:1,5'],
        ];
    }
}