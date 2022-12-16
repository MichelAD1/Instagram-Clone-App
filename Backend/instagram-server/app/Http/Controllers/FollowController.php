<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Follow;

class FollowController extends Controller
{
    function addRemove($user_id){
        $user=Auth::user();
        $follow=follow::where("user_followed_id",$user_id)->where("user_following_id",$user->id)->exists();
        if($follow){
            $follow=follow::where("user_followed_id",$user_id)->where("user_following_id",$user->id)->delete();
            return response()->json([
                "Follow" => "Unfollow"
            ]); 
        }else{
            $follow= new follow;
            $follow->user_following_id=$user->id;
            $follow->user_followed_id=$user_id;
            if($follow->save()){
                return response()->json([
                    "Follow" => "Follow"
                ]);  
            }
        }
    }
    function getCountFollowing($user_id){
        $following = follow::where("user_following_id",$user_id)->count();
        return response()->json([
            "Follow" => $following
        ]); 
    }
    function getCountFollower($user_id){
        $follower = follow::where("user_followed_id",$user_id)->count();
        return response()->json([
            "Follow" => $follower
        ]); 
       }
       function checkIf($user_id){
        $user=Auth::user();
        $follow=follow::where("user_followed_id",$user_id)->where("user_following_id",$user->id)->exists();
        if($follow){
            return response()->json([
                "Follow" => "Unfollow"
            ]); 
        }else{
           return response()->json([
              "Follow" => "Follow"
           ]);  
            
        }
       }
       function getFollowing(){
        $user=Auth::user();
        $following = follow::where("user_following_id",$user->id)->get();
        return response()->json([
            "Follow" => $following
        ]); 
       }
}
