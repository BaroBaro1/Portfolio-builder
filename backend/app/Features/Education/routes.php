<?php

use App\Features\Education\Controllers\EducationController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/educations', [EducationController::class, 'index']);

    Route::post('/educations', [EducationController::class, 'store']);

    Route::get('/educations/{education}', [EducationController::class, 'show']);

    Route::put('/educations/{education}', [EducationController::class, 'update']);

    Route::delete('/educations/{education}', [EducationController::class, 'destroy']);

});