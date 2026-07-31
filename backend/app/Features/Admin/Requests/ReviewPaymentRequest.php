<?php

namespace App\Features\Admin\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReviewPaymentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'status' => [
                'required',
                'in:approved,rejected',
            ],

            'notes' => [
                'nullable',
                'string',
                'max:1000',
            ],

        ];
    }
}