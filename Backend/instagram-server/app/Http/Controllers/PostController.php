<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Post;
use App\Models\Like;
use Illuminate\Support\Facades\DB;
use App\Models\Comment;

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
    function removePost($post_id){
        $user=Auth::user();
        $post = post::where("id", $post_id)->delete();
        $like=like::where("post_id",$post_id)->delete();
        $comment=comment::where("commented_on",$post_id)->delete();
        return response()->json([
            "Post" => "Removed"
        ]);
        
    }
    function followingPosts(){
        $user = Auth::user();

        $posts = DB::table("posts")
            ->join("follows", "user_followed_id", "=", "posts.posted_by")
            ->where("user_following_id", $user["id"])
            ->select("posts.*")
            ->get();
        return response()->json([
            "Post"=>$posts
        ]);
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
    function getPost($id){
        $post = post::find($id);
        return response()->json([
            "Post" => $post
        ]);
        
    }
    function getSearchPosts($username){
        $user = User::where("username", "LIKE", $username)->get();
        $posts = post::where("posted_by", $user->pluck('id'))->get();
        return response()->json([
            "Post" => $posts
        ]);
        
    }
}
