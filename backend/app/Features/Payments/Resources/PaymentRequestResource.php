<?php

namespace App\Features\Payments\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PaymentRequestResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'receipt' => asset(
                'storage/'.$this->receipt_path
            ),

            'reviewed_at' => $this->reviewed_at,

        ];
    }
}