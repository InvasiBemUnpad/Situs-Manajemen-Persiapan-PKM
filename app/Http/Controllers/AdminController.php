<?php

namespace App\Http\Controllers;

use App\Dosen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index() {
        return view('admin', ['role' => Auth::user()->role]);
    }

    public function didaw() {
        return Dosen::find(Auth::id())->user;
        // return Dosen::with('user')->get();
    }
}
