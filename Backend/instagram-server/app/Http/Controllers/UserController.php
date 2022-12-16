<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    function getByUsername($username){
        $user = User::where("username", "LIKE", $username)->exists();
        if($user){
            $user = User::where("username", "LIKE", $username)->get();
            return response()->json([
                "User"=>$user
            ]); 
        }else{
            return response()->json([
                "User"=>$user
            ]); 
        }
        
    }
    function getUser(){
        $user = Auth::user();
        return response()->json([
            'User' => $user,
        ]);
    }
    function getPostedBy($id){
        $user = user::find($id);
        return response()->json([
            'User' => $user,
        ]);
    }
    function update(Request $request){
        $user = Auth::user();   
        if($request->has('username')){
            $users = User::where("username", $request->username)->exists();
            if($users){
                return response()->json([
                    "User" => "Invalid username"
                ]);
            }else{
                $user->update(["username"=>$request->username]);
            }   
        }
        if($request->has('full_name')){
            $user->update(["full_name"=>$request->full_name]);
        }
        if($request->has('bio')){
            $user->update(["bio"=>$request->bio]);
        }
        if($request->has('profile_picture')){
            $user->update(["profile_picture"=> $request->profile_picture]);
        }
        if($request->has('password')){
            $user->update(["password"=> Hash::make($request->password)]);
        }
        return response()->json([
            "User" => "Updated"
        ]);
    }
}
