<?php

namespace App\Features\Certificates\Actions;

use App\Features\Certificates\DTOs\CreateCertificateDTO;
use App\Models\Certificate;
use App\Models\User;

class CreateCertificateAction
{
    public function execute(User $user, CreateCertificateDTO $dto): Certificate
    {
        return $user->certificates()->create([
            'title' => $dto->title,
            'issuer' => $dto->issuer,
            'issue_date' => $dto->issue_date,
            'expiration_date' => $dto->expiration_date,
            'credential_url' => $dto->credential_url,
            'image' => $dto->image,
            'display_order' => $dto->display_order,
        ]);
    }
}