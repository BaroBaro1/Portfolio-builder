<?php

namespace App\Features\Admin\Requests;

use Illuminate\Foundation\Http\FormRequest;

use App\Features\Admin\DTOs\UpdatePlatformSettingsDTO;

class UpdatePlatformSettingsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'bank_name' => [
                'required',
                'string',
                'max:255',
            ],

            'account_owner' => [
                'required',
                'string',
                'max:255',
            ],

            'ccp' => [
                'required',
                'string',
                'max:255',
            ],

            'rip' => [
                'required',
                'string',
                'max:255',
            ],

            'iban' => [
                'nullable',
                'string',
                'max:255',
            ],

            'swift' => [
                'nullable',
                'string',
                'max:255',
            ],

            'payment_instructions' => [
                'nullable',
                'string',
            ],

        ];
    }

    public function dto(): UpdatePlatformSettingsDTO
    {
        return UpdatePlatformSettingsDTO::fromArray(

            $this->validated()

        );
    }
}