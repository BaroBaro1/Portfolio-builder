<?php

namespace App\Features\Experience\Actions;

use App\Models\Experience;
use App\Features\Experience\DTOs\UpdateExperienceDTO;

class UpdateExperienceAction
{
    public function execute(
        Experience $experience,
        UpdateExperienceDTO $dto
    ): Experience {

        $experience->update([
            'company'       => $dto->company,
            'position'      => $dto->position,
            'location'      => $dto->location,
            'description'   => $dto->description,
            'start_date'    => $dto->start_date,
            'end_date'      => $dto->end_date,
            'is_current'    => $dto->is_current,
            'display_order' => $dto->display_order,
        ]);

        return $experience->fresh();
    }
}