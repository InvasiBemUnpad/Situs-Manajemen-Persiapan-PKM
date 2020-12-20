<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes(['verify' => true]);

Route::view('/', 'landing')->name('landing');

Route::get('/admin', 'AdminController@index')->name('admin');

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/home', 'HomeController@data');

Route::post('/user', 'UserController@me');
Route::post('/user/all', 'UserController@index');
Route::post('/user/moderator', 'UserController@moderator');
Route::post('/user/moderator/search/faculty', 'UserController@moderatorSearchByFaculty');
Route::post('/user/search/faculty', 'UserController@userSearchByFaculty');

Route::get('/liga', 'LigaController@index')->name('liga');
Route::get('/nonliga', 'NonligaController@index')->name('nonliga');

Route::get('/coaching', 'CoachingController@index')->name('coaching');

Route::get('/didaw', 'AdminController@didaw');

Route::get('/bidmuehe', 'BidController@muehe');
Route::view('/bid', 'bid')->name('bid')->middleware('auth', 'verified');
Route::post('/bid', 'BidController@index');

Route::view('/about', 'about')->name('about');