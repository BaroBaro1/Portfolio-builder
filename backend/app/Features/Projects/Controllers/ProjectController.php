<?php

namespace App\Features\Projects\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Project;

use App\Features\Projects\Actions\CreateProjectAction;
use App\Features\Projects\DTOs\CreateProjectDTO;
use App\Features\Projects\Requests\StoreProjectRequest;
use App\Features\Projects\Resources\ProjectResource;
use App\Features\Projects\Requests\UpdateProjectRequest;
use App\Features\Projects\DTOs\UpdateProjectDTO;
use App\Features\Projects\Actions\UpdateProjectAction;
use App\Features\Projects\Actions\DeleteProjectAction;

class ProjectController extends Controller
{
    public function __construct(
    private readonly CreateProjectAction $createProjectAction,
    private readonly UpdateProjectAction $updateProjectAction,
    private readonly DeleteProjectAction $deleteProjectAction,
) {}

    /**
     * List authenticated user's projects.
     */
    public function index(Request $request): JsonResponse
    {
        $projects = $request->user()
            ->projects()
            ->latest()
            ->get();

        return response()->json([
            'data' => ProjectResource::collection($projects),
        ]);
    }

    /**
     * Store a new project.
     */
    public function store(StoreProjectRequest $request): JsonResponse
    {
        $project = $this->createProjectAction->execute(
            $request->user(),
            CreateProjectDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Project created successfully.',
            'data' => ProjectResource::make($project),
        ], 201);
    }

    public function update(
    UpdateProjectRequest $request,
    Project $project
): JsonResponse {

    abort_if(
        $project->user_id !== $request->user()->id,
        403
    );

    $project = $this->updateProjectAction->execute(
        $project,
        UpdateProjectDTO::fromRequest($request)
    );

    return response()->json([
        'message' => 'Project updated successfully.',
        'data' => ProjectResource::make($project),
    ]);
}

public function show(
    Request $request,
    Project $project
): JsonResponse {

    abort_if(
        $project->user_id !== $request->user()->id,
        403
    );

    return response()->json([
        'data' => ProjectResource::make($project),
    ]);
}

public function destroy(
    Request $request,
    Project $project
): JsonResponse {

    abort_if(
        $project->user_id !== $request->user()->id,
        403
    );

    $this->deleteProjectAction->execute($project);

    return response()->json([
        'message' => 'Project deleted successfully.',
    ]);
}
}