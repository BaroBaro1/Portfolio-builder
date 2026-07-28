<?php

use Illuminate\Support\Facades\Route;

use App\Features\Plans\Controllers\PlanController;

Route::get('/plans', [PlanController::class, 'index']);