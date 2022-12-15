<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

Route::group(["prefix" => "v0.1"], function() {
    Route::group(["prefix" => "users"], function() {
        Route::post("login",[AuthController::class,"login"]);
        Route::post("signup",[AuthController::class,"register"]);
    });
	
});