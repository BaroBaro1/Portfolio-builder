<?php

namespace App\Features\Certificates\DTOs;

use App\Features\Certificates\Requests\UpdateCertificateRequest;

class UpdateCertificateDTO
{
    public function __construct(
        public readonly array $data,
    ) {}

    public static function fromRequest(UpdateCertificateRequest $request): self
    {
        return new self(
            data: $request->validated(),
        );
    }
}