<?php

namespace App\Features\Auth\Controllers;

use App\Http\Controllers\Controller;
use App\Features\Auth\Requests\RegisterRequest;
use App\Features\Auth\DTOs\RegisterDTO;
use App\Features\Auth\Services\AuthService;
use App\Features\Auth\Resources\AuthResource;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function __construct(
        protected AuthService $authService,
    ) {}

    /**
     * Register a new user.
     */
    public function register(RegisterRequest $request): JsonResponse
{
    $result = $this->authService->register(
        RegisterDTO::fromRequest($request)
    );

    return response()->json([
        'message' => 'Account created successfully.',
        'data' => $result,
    ], 201);
}
}