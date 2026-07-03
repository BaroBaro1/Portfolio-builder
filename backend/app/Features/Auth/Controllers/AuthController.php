<?php

namespace App\Features\Auth\Controllers;

use App\Http\Controllers\Controller;
use App\Features\Auth\Actions\RegisterAction;
use App\Features\Auth\DTOs\RegisterDTO;
use App\Features\Auth\Requests\RegisterRequest;
use App\Features\Auth\Actions\LoginAction;
use App\Features\Auth\DTOs\LoginDTO;
use App\Features\Auth\Requests\LoginRequest;
use App\Features\Auth\Resources\AuthResource;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function __construct(
    protected RegisterAction $registerAction,
    protected LoginAction $loginAction,
) {
}

    /**
     * Register a new user.
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = $this->registerAction->execute(
            RegisterDTO::fromRequest($request)
        );

        $token = $user
            ->createToken('auth_token')
            ->plainTextToken;

        return response()->json([
            'message' => 'Account created successfully.',
            'data' => AuthResource::make($user, $token),
        ], 201);
    }
    /**
 * Login an existing user.
 */
public function login(LoginRequest $request): JsonResponse
{
    $user = $this->loginAction->execute(
        LoginDTO::fromRequest($request)
    );

    $token = $user
        ->createToken('auth_token')
        ->plainTextToken;

    return response()->json([
        'message' => 'Login successful.',
        'data' => AuthResource::make($user, $token),
    ]);
}
/**
 * Logout the authenticated user.
 */
public function logout(Request $request): JsonResponse
{
    $request
        ->user()
        ->currentAccessToken()
        ->delete();

    return response()->json([
        'message' => 'Logged out successfully.',
    ]);
}
/**
 * Return the authenticated user.
 */
public function me(Request $request): JsonResponse
{
    return response()->json([
        'data' => AuthResource::make($request->user()),
    ]);
}
}