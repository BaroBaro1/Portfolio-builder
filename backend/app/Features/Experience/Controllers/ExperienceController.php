<?php

namespace App\Features\Experience\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

use App\Models\Experience;

use App\Features\Experience\Actions\CreateExperienceAction;
use App\Features\Experience\Actions\UpdateExperienceAction;
use App\Features\Experience\Actions\DeleteExperienceAction;

use App\Features\Experience\Requests\StoreExperienceRequest;
use App\Features\Experience\Requests\UpdateExperienceRequest;

use App\Features\Experience\DTOs\CreateExperienceDTO;
use App\Features\Experience\DTOs\UpdateExperienceDTO;

use App\Features\Experience\Resources\ExperienceResource;

class ExperienceController extends Controller
{
    public function __construct(
        private readonly CreateExperienceAction $createExperienceAction,
        private readonly UpdateExperienceAction $updateExperienceAction,
        private readonly DeleteExperienceAction $deleteExperienceAction,
    ) {}

    public function index(): JsonResponse
    {
        $experiences = auth()->user()
            ->experiences()
            ->orderBy('display_order')
            ->get();

        return response()->json([
            'data' => ExperienceResource::collection($experiences),
        ]);
    }

    public function show(Experience $experience): JsonResponse
    {
        $this->authorizeExperience($experience);

        return response()->json([
            'data' => ExperienceResource::make($experience),
        ]);
    }

    public function store(StoreExperienceRequest $request): JsonResponse
    {
        $experience = $this->createExperienceAction->execute(
            $request->user(),
            CreateExperienceDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Experience created successfully.',
            'data' => ExperienceResource::make($experience),
        ], 201);
    }

    public function update(
        UpdateExperienceRequest $request,
        Experience $experience
    ): JsonResponse {

        $this->authorizeExperience($experience);

        $experience = $this->updateExperienceAction->execute(
            $experience,
            UpdateExperienceDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Experience updated successfully.',
            'data' => ExperienceResource::make($experience),
        ]);
    }

    public function destroy(Experience $experience): JsonResponse
    {
        $this->authorizeExperience($experience);

        $this->deleteExperienceAction->execute($experience);

        return response()->json([
            'message' => 'Experience deleted successfully.',
        ]);
    }

    private function authorizeExperience(Experience $experience): void
    {
        abort_if(
            $experience->user_id !== auth()->id(),
            403
        );
    }
}