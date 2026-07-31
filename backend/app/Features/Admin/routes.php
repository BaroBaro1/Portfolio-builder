<?php

use Illuminate\Support\Facades\Route;

use App\Features\Admin\Controllers\AdminDashboardController;
use App\Features\Admin\Controllers\AdminPaymentsController;
use App\Features\Admin\Controllers\AdminUsersController; 
use App\Features\Admin\Controllers\AdminReviewPaymentController;

Route::middleware('auth:sanctum')->group(function () {

    Route::get(
        '/admin/dashboard',
        [AdminDashboardController::class, 'index']
    );
    Route::get(
    '/admin/payments',
    [AdminPaymentsController::class, 'index']
    );
    Route::get(
        '/admin/users',
        [AdminUsersController::class, 'index']
    );
    Route::post(
    '/admin/payments/{payment}/review',
    [AdminReviewPaymentController::class, 'store']
);
});
