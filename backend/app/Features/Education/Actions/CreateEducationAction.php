<?php

namespace App\Features\Education\Actions;

use App\Features\Education\DTOs\CreateEducationDTO;
use App\Models\Education;
use App\Models\User;

class CreateEducationAction
{
    public function execute(
        User $user,
        CreateEducationDTO $dto
    ): Education {
        return $user->educations()->create([
            'institution' => $dto->institution,
            'degree' => $dto->degree,
            'field_of_study' => $dto->field_of_study,
            'description' => $dto->description,
            'start_date' => $dto->start_date,
            'end_date' => $dto->end_date,
            'is_current' => $dto->is_current,
            'display_order' => $dto->display_order,
        ]);
    }
}