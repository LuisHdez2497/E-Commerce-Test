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

Route::get('/api/products', 'ProductController@get');
Route::get('/api/product-preview/{id}', 'ProductController@show');
Route::post('/api/add-product', 'ProductController@store');
Route::put('/api/edit-product/{id}', 'ProductController@update');
Route::delete('/api/delete-product/{id}', 'ProductController@delete');

Route::get('/api/users', 'UserController@get');
Route::get('/api/user-preview/{id}', 'UserController@show');
Route::post('/api/add-user', 'UserController@store');
Route::put('/api/edit-user/{id}', 'UserController@update');
Route::delete('/api/delete-user/{id}', 'UserController@delete');
