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

Route::get('/', function () {return view('home', ['title' => 'Inicio']);});
Route::get('/vista-previa/{id}/{slug}', function () {return view('home', ['title' => 'Vista Previa']);});
Route::get('/checkout', function () {return view('home', ['title' => 'Verificar']);});
Route::get('/carrito', function () {return view('home', ['title' => 'Carrito']);});

//Admin Routes
Route::get('/login', function () {return view('home', ['title' => 'Iniciar Sesión']);});

Route::get('/admin/productos', function () {return view('home', ['title' => 'Productos']);});
Route::get('/admin/agregar-producto', function () {return view('home', ['title' => 'Agregar Producto']);});
Route::get('/admin/editar-producto/{id}', function () {return view('home', ['title' => 'Editar Producto']);});
Route::get('/admin/vista-producto/{id}', function () {return view('home', ['title' => 'Vista Previa']);});

Route::get('/admin/usuarios', function () {return view('home', ['title' => 'Usuarios']);});
Route::get('/admin/agregar-usuario', function () {return view('home', ['title' => 'Agregar Usuario']);});
Route::get('/admin/editar-usuario/{id}', function () {return view('home', ['title' => 'Editar Usuario']);});
//End Admin Routes
