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

Route::get('/', function () {return view('home', ['title' => 'Home']);});
Route::get('/product-preview/{id}/{slug}', function () {return view('home', ['title' => 'Preview']);});
Route::get('/checkout', function () {return view('home', ['title' => 'Checkout']);});
Route::get('/confirmed-order', function () {return view('home', ['title' => 'Confirmed Order']);});

//Admin Routes
Route::get('/login', function () {return view('home', ['title' => 'Login']);});

Route::get('/admin/products', function () {return view('home', ['title' => 'Products']);});
Route::get('/admin/add-product', function () {return view('home', ['title' => 'Add Product']);});
Route::get('/admin/edit-product/{id}', function () {return view('home', ['title' => 'Edit Product']);});
Route::get('/admin/product-preview/{id}', function () {return view('home', ['title' => 'Preview']);});

Route::get('/admin/users', function () {return view('home', ['title' => 'Users']);});
Route::get('/admin/add-user', function () {return view('home', ['title' => 'Add User']);});
Route::get('/admin/edit-user/{id}', function () {return view('home', ['title' => 'Edit User']);});
Route::get('/admin/user-preview/{id}', function () {return view('home', ['title' => 'Preview']);});
//End Admin Routes
