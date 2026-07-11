<?php

namespace App\Features\Projects\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProjectRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => [
                'required',
                'string',
                'max:150',
            ],

            'slug' => [
                'required',
                'string',
                'max:150',
                Rule::unique('projects')
                    ->where('user_id', $this->user()->id),
            ],

            'description' => [
                'required',
                'string',
            ],

           'thumbnail' => [
    'nullable',
    'image',
    'mimes:jpg,jpeg,png,webp',
    'max:2048',
],
            'github_url' => [
                'nullable',
                'url',
                'max:255',
            ],

            'live_url' => [
                'nullable',
                'url',
                'max:255',
            ],

            'featured' => [
                'boolean',
            ],

            'status' => [
                'in:draft,published',
            ],

            'display_order' => [
                'integer',
                'min:0',
            ],

            'published_at' => [
                'nullable',
                'date',
            ],
        ];
    }
}