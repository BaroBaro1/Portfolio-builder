<?php

use Illuminate\Support\Facades\Route;

use App\Features\Subscriptions\Controllers\SubscriptionController;

Route::middleware('auth:sanctum')
    ->post(
        '/subscriptions',
        [SubscriptionController::class, 'store']
    );