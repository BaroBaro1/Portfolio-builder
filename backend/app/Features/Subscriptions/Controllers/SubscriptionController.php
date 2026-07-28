<?php

namespace App\Features\Subscriptions\Controllers;

use App\Http\Controllers\Controller;

use App\Features\Subscriptions\Requests\StoreSubscriptionRequest;
use App\Features\Subscriptions\Services\SubscriptionService;

use Illuminate\Http\JsonResponse;

class SubscriptionController extends Controller
{
    public function __construct(
        private readonly SubscriptionService $subscriptionService
    ) {
    }

    /**
     * Create subscription.
     */
    public function store(
        StoreSubscriptionRequest $request
    ): JsonResponse {

        $subscription = $this->subscriptionService
            ->create(
                auth()->user(),
                $request->validated()
            );

        return response()->json([
            'success' => true,
            'message' => 'Subscription created successfully.',
            'data' => $subscription,
        ]);
    }
}