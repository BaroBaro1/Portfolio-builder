<?php

namespace App\Features\Certificates\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CertificateResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,

            'title' => $this->title,

            'issuer' => $this->issuer,

            'issue_date' => $this->issue_date,

            'expiration_date' => $this->expiration_date,

            'credential_url' => $this->credential_url,

            'image' => $this->image,

            'display_order' => $this->display_order,

            'created_at' => $this->created_at,

            'updated_at' => $this->updated_at,
        ];
    }
}