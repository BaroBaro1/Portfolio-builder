<?php

use Illuminate\Support\Facades\Route;

use App\Features\Experience\Controllers\ExperienceController;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/experiences', [ExperienceController::class, 'index']);

    Route::get('/experiences/{experience}', [ExperienceController::class, 'show']);

    Route::post('/experiences', [ExperienceController::class, 'store']);

    Route::put('/experiences/{experience}', [ExperienceController::class, 'update']);

    Route::delete('/experiences/{experience}', [ExperienceController::class, 'destroy']);

});