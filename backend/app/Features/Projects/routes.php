<?php

use Illuminate\Support\Facades\Route;
use App\Features\Projects\Controllers\ProjectController;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/projects', [ProjectController::class, 'index']);
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::put('/projects/{project}', [ProjectController::class, 'update']);
    Route::get('/projects/{project}', [ProjectController::class, 'show']);
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);
 });