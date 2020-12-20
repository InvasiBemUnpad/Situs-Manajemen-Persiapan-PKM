<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return User::paginate(5);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function username(Request $request) {
        return User::find($request->input('user_id'))->name;
    }

    public function me() {
        return Auth::user();
    }

    public function moderator() {
        return User::orderBy('faculty')->where('role', 2)->paginate(5);
    }

    public function moderatorSearchByFaculty(Request $request) {
        $faculty = $request->faculty;
        if ($faculty == "Semua mahasiswa"){
            return User::orderBy('name')->where('role', 2)->paginate(5);
        } else {
            return User::where('faculty', $faculty)->orderBy('name')->where('role', 2)->paginate(5);
        }
    }

    public function userSearchByFaculty(Request $request) {
        $faculty = $request->faculty;
        if ($faculty == "Semua mahasiswa"){
            return User::orderBy('name')->paginate(5);
        } else {
            return User::where('faculty', $faculty)->orderBy('name')->paginate(5);
        }
    }
}
