<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $img = storage_path('app/public/img/MacBookPro.png');
        Product::create([
            'name' => 'MacBook Pro',
            'slug' => 'macbook-pro',
            'description' => 'El MacBook Pro es una computadora portátil de alto rendimiento que ofrece velocidad y potencia para tareas intensivas.',
            'price' => '29999',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app/public/img/iPhone13.png');
        Product::create([
            'name' => 'iPhone 13',
            'slug' => 'iphone-13',
            'description' => 'El iPhone 13 es el último smartphone de Apple, que cuenta con un nuevo chip A15 Bionic y un sistema de cámara mejorado.',
            'price' => '19999',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app/public/img/AirPodsPro.png');
        Product::create([
            'name' => 'AirPods Pro',
            'slug' => 'airpods-pro',
            'description' => 'Los AirPods Pro son los auriculares inalámbricos de alta gama de Apple, que cuentan con cancelación de ruido y un ajuste cómodo.',
            'price' => '5999',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app/public/img/iPadAir.png');
        Product::create([
            'name' => 'iPad Air',
            'slug' => 'ipad-air',
            'description' => 'El iPad Air es una poderosa tableta que ofrece una gran pantalla y funciones avanzadas para la productividad y el entretenimiento.',
            'price' => '14999',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app/public/img/AppleWatchSeries7.png');
        Product::create([
            'name' => 'Apple Watch Series 7',
            'slug' => 'apple-watch-series-7',
            'description' => 'El Apple Watch Series 7 es un reloj inteligente elegante y funcional que realiza un seguimiento de tu salud y estado físico.',
            'price' => '9999',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app/public/img/iMac.png');
        Product::create([
            'name' => 'iMac',
            'slug' => 'imac',
            'description' => 'El iMac es una potente computadora todo en uno que cuenta con una gran pantalla y un rendimiento avanzado.',
            'price' => '29999',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app/public/img/MagicKeyboard.png');
        Product::create([
            'name' => 'Magic Keyboard',
            'slug' => 'magic-keyboard',
            'description' => 'El Magic Keyboard es un teclado inalámbrico que cuenta con un diseño delgado y funciones avanzadas para los usuarios de Mac.',
            'price' => '1999',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app/public/img/MacStudio.png');
        Product::create([
            'name' => 'Mac Studio',
            'slug' => 'mac-studio',
            'description' => 'El Mac Studio es una potente computadora de escritorio que ofrece funciones y rendimiento avanzados para profesionales del diseño y la creatividad.',
            'price' => '89999',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app/public/img/AppleTV4K.png');
        Product::create([
            'name' => 'Apple TV 4K',
            'slug' => 'apple-tv-4k',
            'description' => 'El Apple TV 4K es un dispositivo de transmisión que ofrece contenido de alta calidad y funciones avanzadas para tu TV.',
            'price' => '3599',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');
    }
}
