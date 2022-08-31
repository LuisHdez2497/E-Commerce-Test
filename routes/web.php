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

Route::get('/', function () {return view('home');});
Route::get('/product/{id}/{slug}', function () {return view('home');});
Route::get('/checkout', function () {return view('home');});
Route::get('/confirmed-order', function () {return view('home');});

//Admin Routes
Route::get('/login', function () {return view('home');});

Route::get('/admin/products', function () {return view('home');});
Route::get('/admin/add-product', function () {return view('home');});
Route::get('/admin/edit-product/{id}', function () {return view('home');});
Route::get('/admin/product-preview/{id}', function () {return view('home');});

Route::get('/admin/users', function () {return view('home');});
Route::get('/admin/add-user', function () {return view('home');});
Route::get('/admin/edit-user/{id}', function () {return view('home');});
Route::get('/admin/user-preview/{id}', function () {return view('home');});
//End Admin Routes
