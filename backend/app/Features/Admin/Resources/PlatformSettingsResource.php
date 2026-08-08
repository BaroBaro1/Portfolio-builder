<?php

namespace App\Features\Admin\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlatformSettingsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'bank_name' => $this->bank_name,

            'account_owner' => $this->account_owner,

            'ccp' => $this->ccp,

            'rip' => $this->rip,

            'iban' => $this->iban,

            'swift' => $this->swift,

            'payment_instructions' => $this->payment_instructions,

        ];
    }
}