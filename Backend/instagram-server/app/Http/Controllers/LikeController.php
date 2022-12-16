<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Post;
use App\Models\Like;
class LikeController extends Controller
{
    function like($post_id){
        $user=Auth::user();
        $like = new like;
        $like->user_id=$user->id;
        $like->post_id=$post_id;
        $post=post::find($post_id);
        $likes=$post->count_likes;
        $likes++;
        $post->update(["count_likes"=>$likes]);
        
        if($like->save()){
            return response()->json([
                "Like" => "Liked"
            ]);  
        }
    }
    function dislike($post_id){
        $user=Auth::user();
        $post=post::find($post_id);
        $likes=$post->count_likes;
        $likes--;
        $post->update(["count_likes"=>$likes]);
        $like = like::where("user_id", $user->id)->where("post_id",$post_id)->delete();
        return response()->json([
            "Like" => "Disliked"
        ]); 
        
    }
    
}
