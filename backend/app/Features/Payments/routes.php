<?php

use Illuminate\Support\Facades\Route;

use App\Features\Payments\Controllers\PaymentRequestController;

Route::middleware('auth:sanctum')->group(function () {

    Route::post(
        '/payments/manual',
        [PaymentRequestController::class, 'store']
    );

});