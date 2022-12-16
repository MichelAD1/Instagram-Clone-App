<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

Route::group(["prefix" => "v0.1"], function() {
    Route::group(["prefix" => "users"], function() {
        Route::post("login",[AuthController::class,"login"]);
        Route::post("signup",[AuthController::class,"register"]);
        Route::get("logout",[AuthController::class,"logout"]);
        Route::get("get",[UserController::class,"getUser"]);
        Route::post("update",[UserController::class,"update"]);
    });
    Route::group(["prefix" => "posts"], function() {
        Route::post("add",[PostController::class,"sharePost"]);
        Route::get("getmyposts",[PostController::class,"getUserPosts"]);
        Route::get("getallposts",[PostController::class,"getAllPosts"]);
        Route::get("getpost/{id}",[PostController::class,"getPost"]);
    });
	
});