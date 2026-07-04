<?php

use App\Features\SocialLinks\Controllers\SocialLinkController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/social-links', [SocialLinkController::class, 'index']);

    Route::post('/social-links', [SocialLinkController::class, 'store']);

    Route::get('/social-links/{socialLink}', [SocialLinkController::class, 'show']);

    Route::put('/social-links/{socialLink}', [SocialLinkController::class, 'update']);

    Route::delete('/social-links/{socialLink}', [SocialLinkController::class, 'destroy']);

});