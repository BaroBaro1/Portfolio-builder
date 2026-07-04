<?php

namespace App\Features\Certificates\DTOs;

use App\Features\Certificates\Requests\StoreCertificateRequest;

class CreateCertificateDTO
{
    public function __construct(
        public readonly string $title,
        public readonly string $issuer,
        public readonly string $issue_date,
        public readonly ?string $expiration_date,
        public readonly ?string $credential_url,
        public readonly ?string $image,
        public readonly int $display_order,
    ) {}

    public static function fromRequest(StoreCertificateRequest $request): self
    {
        return new self(
            title: $request->string('title')->toString(),
            issuer: $request->string('issuer')->toString(),
            issue_date: $request->string('issue_date')->toString(),
            expiration_date: $request->input('expiration_date'),
            credential_url: $request->input('credential_url'),
            image: $request->input('image'),
            display_order: $request->integer('display_order'),
        );
    }
}