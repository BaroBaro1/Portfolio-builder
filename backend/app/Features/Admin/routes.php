<?php

use Illuminate\Support\Facades\Route;

use App\Features\Admin\Controllers\AdminDashboardController;
use App\Features\Admin\Controllers\AdminPaymentsController;
use App\Features\Admin\Controllers\AdminUsersController;
use App\Features\Admin\Controllers\AdminReviewPaymentController;
use App\Features\Admin\Controllers\PlatformSettingsController;

Route::middleware('auth:sanctum')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */

    Route::get(

        '/admin/dashboard',

        [AdminDashboardController::class, 'index']

    );

    /*
    |--------------------------------------------------------------------------
    | Payments
    |--------------------------------------------------------------------------
    */

    Route::get(

        '/admin/payments',

        [AdminPaymentsController::class, 'index']

    );

    Route::post(

        '/admin/payments/{payment}/review',

        [AdminReviewPaymentController::class, 'store']

    );

    /*
    |--------------------------------------------------------------------------
    | Users
    |--------------------------------------------------------------------------
    */

    Route::get(

        '/admin/users',

        [AdminUsersController::class, 'index']

    );

    Route::get(

        '/admin/users/{user}',

        [AdminUsersController::class, 'show']

    );

    /*
    |--------------------------------------------------------------------------
    | Platform Settings
    |--------------------------------------------------------------------------
    */

    Route::get(

        '/admin/platform-settings',

        [PlatformSettingsController::class, 'show']

    );

    Route::put(

        '/admin/platform-settings',

        [PlatformSettingsController::class, 'update']

    );

});