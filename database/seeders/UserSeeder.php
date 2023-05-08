<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Root',
            'email' => 'root@ecommercetest.com',
            'password' => bcrypt('root1234')
        ]);
        User::create([
            'name' => 'Luis Alfonso Hernandez',
            'email' => 'luisalfonso.hnunez@gmail.com',
            'password' => bcrypt('luis1234')
        ]);
    }
}
