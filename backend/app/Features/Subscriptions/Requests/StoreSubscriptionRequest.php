<?php

namespace App\Features\Subscriptions\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreSubscriptionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Validation rules.
     */
    public function rules(): array
    {
        return [

            'plan_slug' => [
                'required',
                'string',
                'exists:plans,slug',
            ],

            'payment_method' => [
                'required',
                'string',

                Rule::in([
                    'trial',
                    'manual',
                    'baridimob',
                    'cib',
                ]),
            ],

        ];
    }

    /**
     * Custom messages.
     */
    public function messages(): array
    {
        return [

            'plan_slug.required' =>
                'Plan is required.',

            'plan_slug.exists' =>
                'Selected plan does not exist.',

            'payment_method.required' =>
                'Payment method is required.',

            'payment_method.in' =>
                'Invalid payment method.',

        ];
    }
}