<?php

namespace App\Features\Education\Controllers;

use App\Features\Education\Actions\CreateEducationAction;
use App\Features\Education\Actions\DeleteEducationAction;
use App\Features\Education\Actions\UpdateEducationAction;
use App\Features\Education\DTOs\CreateEducationDTO;
use App\Features\Education\DTOs\UpdateEducationDTO;
use App\Features\Education\Requests\StoreEducationRequest;
use App\Features\Education\Requests\UpdateEducationRequest;
use App\Features\Education\Resources\EducationResource;
use App\Http\Controllers\Controller;
use App\Models\Education;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        return EducationResource::collection(
            $request->user()
                ->educations()
                ->orderBy('display_order')
                ->get()
        );
    }

    public function store(
        StoreEducationRequest $request,
        CreateEducationAction $action
    ): JsonResponse {
        $education = $action->execute(
            $request->user(),
            CreateEducationDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Education created successfully.',
            'data' => new EducationResource($education),
        ], 201);
    }

    public function show(Education $education): EducationResource
    {
        return new EducationResource($education);
    }

    public function update(
        UpdateEducationRequest $request,
        Education $education,
        UpdateEducationAction $action
    ): JsonResponse {
        $education = $action->execute(
            $education,
            UpdateEducationDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Education updated successfully.',
            'data' => new EducationResource($education),
        ]);
    }

    public function destroy(
        Education $education,
        DeleteEducationAction $action
    ): JsonResponse {
        $action->execute($education);

        return response()->json([
            'message' => 'Education deleted successfully.',
        ]);
    }
}