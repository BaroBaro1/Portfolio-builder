<?php

namespace App\Features\Auth\Controllers;

use App\Http\Controllers\Controller;
use App\Features\Auth\Actions\RegisterAction;
use App\Features\Auth\DTOs\RegisterDTO;
use App\Features\Auth\Requests\RegisterRequest;
use App\Features\Auth\Resources\AuthResource;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function __construct(
        protected RegisterAction $registerAction,
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
}