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
        $img = storage_path('app\public\img\DailyGreens.png');
        Product::create([
            'name' => 'Daily Greens',
            'slug' => 'daily-greens',
            'description' => 'DAILY GREENS ARE PACKED FULL OF VEGETABLES AND PLANTS THAT ARE ESSENTIAL FOR YOUR BODY.',
            'price' => '59',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app\public\img\CompleteThyroid.png');
        Product::create([
            'name' => 'Complete Thyroid',
            'slug' => 'complete-thyroid',
            'description' => 'COMPLETE THYROID IS AN ALL-NATURAL FORMULA CREATED BY DR. STERLING AND BACKED BY SCIENCE TO CREATE, ACTIVATE, AND REALEASE THYROID HORMONES.',
            'price' => '59',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app\public\img\DailyReds.png');
        Product::create([
            'name' => 'Daily Reds',
            'slug' => 'daily-reds',
            'description' => 'JUST SCOOP, STIR, AND SIP FOR A HEALTHY BODY AND MIND FROM THE INSIDE OUT!',
            'price' => '59',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app\public\img\Moringa.png');
        Product::create([
            'name' => 'Moringa',
            'slug' => 'moringa',
            'description' => 'MORINGA BRINGS TONS OF BENEFICIAL EFFECTS TO THE TABLE.',
            'price' => '69',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app\public\img\Omega3X.png');
        Product::create([
            'name' => 'Omega 3X',
            'slug' => 'omega-3x',
            'description' => 'THESE SUPER-NUTRIENTS (OMEGA 3 OIL, DHA AND EPA) START WORKING RIGHT AWAY TO SUPPORT YOUR METABOLISM, BRAIN HEALTH, CELLS AND NERVES, AND REDUCE CARDIOVASCULAR RISK FACTORS.',
            'price' => '59',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');

        $img = storage_path('app\public\img\BeachReadyBites.png');
        Product::create([
            'name' => 'Beach Ready Bites',
            'slug' => 'beach-ready-bites',
            'description' => 'Increase Energy, Slim Down, No restrictive diet required, Made in the USA.',
            'price' => '69',
            'status' => '1',
        ])->addMedia($img)->preservingOriginal()->toMediaCollection('images');
    }
}
