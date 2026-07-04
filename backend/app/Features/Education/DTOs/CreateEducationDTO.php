<?php

namespace App\Features\Education\DTOs;

use App\Features\Education\Requests\StoreEducationRequest;

class CreateEducationDTO
{
    public function __construct(
        public readonly string $institution,
        public readonly string $degree,
        public readonly string $field_of_study,
        public readonly ?string $description,
        public readonly string $start_date,
        public readonly ?string $end_date,
        public readonly bool $is_current,
        public readonly int $display_order,
    ) {}

    public static function fromRequest(StoreEducationRequest $request): self
    {
        return new self(
            institution: $request->validated('institution'),
            degree: $request->validated('degree'),
            field_of_study: $request->validated('field_of_study'),
            description: $request->validated('description'),
            start_date: $request->validated('start_date'),
            end_date: $request->validated('end_date'),
            is_current: $request->validated('is_current'),
            display_order: $request->validated('display_order', 0),
        );
    }
}