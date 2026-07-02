<?php

use Illuminate\Support\Facades\Route;
use App\Features\Auth\Controllers\AuthController;

Route::prefix('auth')->group(function () {

    Route::post('/register', [AuthController::class, 'register']);

});