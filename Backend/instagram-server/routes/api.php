<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\CommentController;

Route::group(["prefix" => "v0.1"], function() {
    Route::group(["prefix" => "users"], function() {
        Route::post("login",[AuthController::class,"login"]);
        Route::post("signup",[AuthController::class,"register"]);
        Route::get("logout",[AuthController::class,"logout"]);
        Route::get("get",[UserController::class,"getUser"]);
        Route::get("getpostedby/{id}",[UserController::class,"getPostedBy"]);
        Route::post("update",[UserController::class,"update"]);
    });
    Route::group(["prefix" => "posts"], function() {
        Route::post("add",[PostController::class,"sharePost"]);
        Route::get("getmyposts",[PostController::class,"getUserPosts"]);
        Route::get("getallposts",[PostController::class,"getAllPosts"]);
        Route::get("getpost/{id}",[PostController::class,"getPost"]);
        Route::get("delete/{id}",[PostController::class,"removePost"]);
    });
    Route::group(["prefix" => "likes"], function() {
        Route::get("like/{id}",[LikeController::class,"like"]);
        Route::get("dislike/{id}",[LikeController::class,"dislike"]);
        Route::get("get/{id}",[LikeController::class,"getLike"]);
    });
    Route::group(["prefix" => "comments"], function() {
        Route::post("add",[CommentController::class,"addComment"]);
        Route::get("get/{id}",[CommentController::class,"getComments"]);
        Route::get("count/{id}",[CommentController::class,"getCount"]);
    });
	
});