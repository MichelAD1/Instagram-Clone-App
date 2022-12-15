<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('username', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                "User" => "Not Found"
            ]);
        }

        $user = Auth::user();
        return response()->json([
                'User' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);

    }

    public function register(Request $request){
        $users = User::where("username", $request->username)->exists();
        if($users){
            return response()->json([
                "User" => "Exist"
            ]);
        }else{
            $user = User::create([
                'username' => $request->username,
                'full_name' => $request->full_name,
                'password' => Hash::make($request->password),
                'bio'=>$request->bio,
                'profile_picture'=>$request->profile_picture
            ]);
    
            $token = Auth::login($user);
            return response()->json([
                'User' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
        }
        
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'User' => 'Logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'User' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

}