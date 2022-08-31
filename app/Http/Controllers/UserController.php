<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\UserRequest;

class UserController extends Controller
{
    public function get(){
        $data = User::all();
        return response()->json($data);
    }

    public function store(UserRequest $request){
        $data = $request->all();
        User::create($data);
        return response()->json(['message' => 'User is registered']);
    }

    public function show($id){
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function update(UserRequest $request, $id){
        $user = User::findOrFail($id);
        $data = $request->all();
        $user->update($data);

        return response()->json(['message' => 'User has been saved']);
    }

    public function delete($id){
        User::findOrFail($id)->delete();
        return response()->json(['message' => 'User has been removed']);
    }
}
