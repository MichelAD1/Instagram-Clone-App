<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Story;
use App\Models\Like;
use Illuminate\Support\Facades\DB;

class StoryController extends Controller
{
    function shareStory(Request $request){
        $user=Auth::user();
        $story = new story;
        $story->posted_by=$user->id;
        $story->story_image=$request->story_image;
        $story->caption=$request->caption;
        if($story->save()){
            return response()->json([
                "Story" => $story
            ]);
        }
    }
}
