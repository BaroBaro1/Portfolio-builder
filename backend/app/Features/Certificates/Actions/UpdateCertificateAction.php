<?php

namespace App\Features\Certificates\Actions;

use App\Features\Certificates\DTOs\UpdateCertificateDTO;
use App\Models\Certificate;

class UpdateCertificateAction
{
    public function execute(
        Certificate $certificate,
        UpdateCertificateDTO $dto
    ): Certificate {
        $certificate->update($dto->data);

        return $certificate->fresh();
    }
}