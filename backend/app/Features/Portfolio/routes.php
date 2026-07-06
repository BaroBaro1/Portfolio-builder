<?php

use Illuminate\Support\Facades\Route;
use App\Features\Portfolio\Controllers\PortfolioController;

Route::get(
    '/portfolio/{slug}',
    [PortfolioController::class, 'show']
);