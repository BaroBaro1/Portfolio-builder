<?php

namespace App\Features\Admin\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\JsonResponse;

use App\Models\Payment;

use App\Features\Admin\Requests\ReviewPaymentRequest;
use App\Features\Admin\DTOs\ReviewPaymentDTO;
use App\Features\Admin\Actions\ReviewPaymentAction;

class AdminReviewPaymentController extends Controller
{
    public function __construct(
        protected ReviewPaymentAction $action
    ) {
    }

    public function store(
        ReviewPaymentRequest $request,
        Payment $payment
    ): JsonResponse {

        $payment = $this->action->execute(

            $payment,

            $request->user(),

            ReviewPaymentDTO::fromRequest($request)

        );

        return response()->json([

            'success' => true,

            'message' => 'Payment reviewed successfully.',

            'data' => $payment,

        ]);

    }
}