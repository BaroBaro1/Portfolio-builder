<?php

namespace App\Features\Experience\DTOs;

use App\Features\Experience\Requests\StoreExperienceRequest;

class CreateExperienceDTO
{
    public function __construct(
        public readonly string $company,
        public readonly string $position,
        public readonly ?string $location,
        public readonly ?string $description,
        public readonly string $start_date,
        public readonly ?string $end_date,
        public readonly bool $is_current,
        public readonly int $display_order,
    ) {}

    public static function fromRequest(StoreExperienceRequest $request): self
    {
        return new self(
            company: $request->string('company')->toString(),
            position: $request->string('position')->toString(),
            location: $request->input('location'),
            description: $request->input('description'),
            start_date: $request->string('start_date')->toString(),
            end_date: $request->input('end_date'),
            is_current: $request->boolean('is_current'),
            display_order: $request->integer('display_order', 0),
        );
    }
}