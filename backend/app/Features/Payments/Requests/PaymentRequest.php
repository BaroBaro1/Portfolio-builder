<?php

namespace App\Features\Payments\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaymentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'plan_slug' => [
                'required',
                'exists:plans,slug',
            ],

            'receipt' => [
                'required',
                'file',
                'mimes:jpg,jpeg,png,pdf',
                'max:5120',
            ],

            'reference' => [
                'nullable',
                'string',
                'max:255',
            ],

        ];
    }
}
