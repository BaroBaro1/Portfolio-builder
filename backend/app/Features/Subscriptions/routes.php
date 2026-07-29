<?php

use Illuminate\Support\Facades\Route;

use App\Features\Subscriptions\Controllers\SubscriptionController;
use App\Features\Subscriptions\Controllers\SubscriptionStatusController;

Route::middleware('auth:sanctum')->group(function () {

    Route::post(
        '/subscriptions',
        [SubscriptionController::class, 'store']
    );

    Route::get(
        '/subscription/status',
        SubscriptionStatusController::class
    );

});