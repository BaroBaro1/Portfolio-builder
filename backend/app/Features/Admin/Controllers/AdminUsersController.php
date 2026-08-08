<?php

namespace App\Features\Admin\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\JsonResponse;

use App\Models\User;

use App\Features\Admin\Actions\GetUsersAction;
use App\Features\Admin\Actions\ShowUserAction;

use App\Features\Admin\Resources\AdminUserResource;

class AdminUsersController extends Controller
{
    public function __construct(

        protected GetUsersAction $action,

        protected ShowUserAction $showUserAction,

    ) {
    }

    /*
    |--------------------------------------------------------------------------
    | Users List
    |--------------------------------------------------------------------------
    */

    public function index(): JsonResponse
    {
        return response()->json([

            'success' => true,

            'data' => AdminUserResource::collection(

                $this->action->execute()

            ),

        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | User Details
    |--------------------------------------------------------------------------
    */

    public function show(
        User $user
    ): JsonResponse {

        return response()->json([

            'success' => true,

            'data' => new AdminUserResource(

                $this->showUserAction->execute(
                    $user
                )

            ),

        ]);

    }
}