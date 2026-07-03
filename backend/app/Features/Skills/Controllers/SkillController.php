<?php

namespace App\Features\Skills\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use App\Models\ProfileSkill;

use App\Features\Skills\Actions\CreateSkillAction;
use App\Features\Skills\Actions\UpdateSkillAction;
use App\Features\Skills\Actions\DeleteSkillAction;

use App\Features\Skills\DTOs\CreateSkillDTO;
use App\Features\Skills\DTOs\UpdateSkillDTO;

use App\Features\Skills\Requests\StoreSkillRequest;
use App\Features\Skills\Requests\UpdateSkillRequest;

use App\Features\Skills\Resources\SkillResource;

class SkillController extends Controller
{
    public function __construct(
        protected CreateSkillAction $createSkillAction,
        protected UpdateSkillAction $updateSkillAction,
        protected DeleteSkillAction $deleteSkillAction,
    ) {
    }

    public function index(Request $request): JsonResponse
    {
        $skills = $request->user()
            ->profileSkills()
            ->with('skill')
            ->get();

        return response()->json([
            'data' => SkillResource::collection($skills),
        ]);
    }

    public function store(StoreSkillRequest $request): JsonResponse
    {
        $profileSkill = $this->createSkillAction->execute(
            $request->user(),
            CreateSkillDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Skill added successfully.',
            'data' => SkillResource::make(
                $profileSkill->load('skill')
            ),
        ], 201);
    }

    public function update(
        UpdateSkillRequest $request,
        ProfileSkill $skill
    ): JsonResponse {

        $profileSkill = $this->updateSkillAction->execute(
            $skill,
            UpdateSkillDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Skill updated successfully.',
            'data' => SkillResource::make(
                $profileSkill->load('skill')
            ),
        ]);
    }

    public function destroy(ProfileSkill $skill): JsonResponse
    {
        $this->deleteSkillAction->execute($skill);

        return response()->json([
            'message' => 'Skill deleted successfully.',
        ]);
    }
}