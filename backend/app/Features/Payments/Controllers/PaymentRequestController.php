<?php

namespace App\Features\Payments\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\JsonResponse;

use App\Features\Payments\Requests\PaymentRequest;
use App\Features\Payments\DTOs\PaymentRequestDTO;
use App\Features\Payments\Actions\CreatePaymentRequestAction;
use App\Features\Payments\Resources\PaymentRequestResource;

class PaymentRequestController extends Controller
{
    public function __construct(

        protected CreatePaymentRequestAction $action

    ) {
    }

    public function store(
        PaymentRequest $request
    ): JsonResponse {

        $payment = $this->action->execute(

            $request->user(),

            PaymentRequestDTO::fromRequest($request)

        );

        return response()->json([

            'success' => true,

            'message' => 'Payment request submitted successfully.',

            'data' => new PaymentRequestResource(
                $payment
            ),

        ], 201);

    }
}