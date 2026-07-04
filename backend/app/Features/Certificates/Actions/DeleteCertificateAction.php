<?php

namespace App\Features\Certificates\Actions;

use App\Models\Certificate;

class DeleteCertificateAction
{
    public function execute(Certificate $certificate): void
    {
        $certificate->delete();
    }
}