<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Post;
use App\Models\Like;
use App\Models\Comment;

class CommentController extends Controller
{
   function addComment(Request $request){
    $user = Auth::user();
    $comment = new comment;
    $comment->commented_by=$user->id;
    $comment->commented_on=$request->post_id;
    $comment->content=$request->content;
    $post=post::find($request->post_id);
    $comments=$post->count_comments;
    $comments++;
    $post->update(["count_comments"=>$comments]);
    if($comment->save()){
        return response()->json([
            "Comment" => $comment
        ]);
    }
   }
   function getComments($post_id){
    $comments = comment::where("commented_on",$post_id)->get();
    return response()->json([
        "Comment" => $comments
    ]); 
   }
}
