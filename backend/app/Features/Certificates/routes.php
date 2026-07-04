<?php

use Illuminate\Support\Facades\Route;
use App\Features\Certificates\Controllers\CertificateController;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/certificates', [CertificateController::class, 'index']);

    Route::post('/certificates', [CertificateController::class, 'store']);

    Route::get('/certificates/{certificate}', [CertificateController::class, 'show']);

    Route::put('/certificates/{certificate}', [CertificateController::class, 'update']);

    Route::delete('/certificates/{certificate}', [CertificateController::class, 'destroy']);

});