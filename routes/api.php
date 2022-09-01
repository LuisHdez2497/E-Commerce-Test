<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::post('/login',);

Route::get('/products', 'ProductController@get');
Route::get('/product-preview/{id}', 'ProductController@show');
Route::post('/add-product', 'ProductController@store');
Route::put('/edit-product/{id}', 'ProductController@update');
Route::delete('/delete-product/{id}', 'ProductController@delete');

Route::get('/users', 'UserController@get');
Route::get('/user-preview/{id}', 'UserController@show');
Route::post('/add-user', 'UserController@store');
Route::put('/edit-user/{id}', 'UserController@update');
Route::delete('/delete-user/{id}', 'UserController@delete');
