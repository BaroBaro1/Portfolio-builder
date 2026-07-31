<?php

namespace App\Features\Admin\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\JsonResponse;

use App\Features\Admin\Actions\GetPaymentsAction;
use App\Features\Admin\Resources\AdminPaymentResource;

class AdminPaymentsController extends Controller
{
    public function __construct(
        protected GetPaymentsAction $action
    ) {
    }

    public function index(): JsonResponse
    {
        return response()->json([

            'success' => true,

            'data' => AdminPaymentResource::collection(
                $this->action->execute()
            ),

        ]);
    }
}