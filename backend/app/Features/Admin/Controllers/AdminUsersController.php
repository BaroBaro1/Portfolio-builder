<?php

namespace App\Features\Admin\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\JsonResponse;

use App\Features\Admin\Actions\GetUsersAction;
use App\Features\Admin\Resources\AdminUserResource;

class AdminUsersController extends Controller
{
    public function __construct(
        protected GetUsersAction $action
    ) {
    }

    public function index(): JsonResponse
    {
        return response()->json([

            'success' => true,

            'data' => AdminUserResource::collection(

                $this->action->execute()

            ),

        ]);
    }
}