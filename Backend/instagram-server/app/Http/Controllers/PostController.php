<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Post;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    function sharePost(Request $request){
        $user=Auth::user();
        $post = new post;
        $post->posted_by=$user->id;
        $post->count_likes=0;
        $post->count_comments=0;
        $post->post_image=$request->post_image;
        $post->caption=$request->caption;
        if($post->save()){
            return response()->json([
                "Post" => $post
            ]);
        }
    }
    function getUserPosts(){
        $user=Auth::user();
        $posts = post::where("posted_by", $user->id)->get();
        return response()->json([
            "Post" => $posts
        ]);
        
    }
    function getAllPosts(){
        $posts = post::all();
        return response()->json([
            "Post" => $posts
        ]);
        
    }
}
