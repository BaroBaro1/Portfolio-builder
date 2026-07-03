<?php

use Illuminate\Support\Facades\Route;
use App\Features\Skills\Controllers\SkillController;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/skills', [SkillController::class, 'index']);

    Route::post('/skills', [SkillController::class, 'store']);

    Route::put('/skills/{skill}', [SkillController::class, 'update']);

    Route::delete('/skills/{skill}', [SkillController::class, 'destroy']);

});