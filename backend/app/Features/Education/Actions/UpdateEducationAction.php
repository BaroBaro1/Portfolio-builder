<?php

namespace App\Features\Education\Actions;

use App\Features\Education\DTOs\UpdateEducationDTO;
use App\Models\Education;

class UpdateEducationAction
{
    public function execute(
        Education $education,
        UpdateEducationDTO $dto
    ): Education {
        $education->update($dto->data);

        return $education->refresh();
    }
}