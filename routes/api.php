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

Route::get('/productos', 'ProductController@get');
Route::get('/vista-previa/{id}', 'ProductController@show');
Route::post('/agregar-producto', 'ProductController@store');
Route::put('/editar-producto/{id}', 'ProductController@update');
Route::delete('/eliminar-producto/{id}', 'ProductController@delete');

Route::get('/usuarios', 'UserController@get');
Route::get('/vista-usuario/{id}', 'UserController@show');
Route::post('/agregar-usuario', 'UserController@store');
Route::put('/editar-usuario/{id}', 'UserController@update');
Route::delete('/eliminar-usuario/{id}', 'UserController@delete');
