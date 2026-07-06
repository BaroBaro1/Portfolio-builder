<?php

use Illuminate\Support\Facades\Route;
use App\Features\ProfileSettings\Controllers\ProfileSettingsController;

Route::middleware('auth:sanctum')->group(function () {

    Route::get(
        '/profile/settings',
        [ProfileSettingsController::class, 'show']
    );

    Route::put(
        '/profile/settings',
        [ProfileSettingsController::class, 'update']
    );

});