<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    $fakultas = [
        'Fakultas Hukum', 
        'Fakultas Ekonomi dan Bisnis', 
        'Fakultas Kedokteran', 
        'Fakultas Matematika dan IPA', 
        'Fakultas Pertanian', 
        'Fakultas Kedokteran Gigi', 
        'Fakultas Ilmu Budaya', 
        'Fakultas Ilmu Sosial dan Ilmu Politik', 
        'Fakultas Psikologi', 
        'Fakultas Peternakan', 
        'Fakultas Ilmu Komunikasi', 
        'Fakultas Keperawatan',
        'Fakultas Perikanan dan Ilmu Kelautan',
        'Fakultas Teknologi Industri Pertanian', 
        'Fakultas Farmasi', 
        'Fakultas Teknik Geologi'
    ];
    
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'npm' => $faker->numerify('############'),
        'faculty' => $fakultas[rand(0, 15)],
        'role' => rand(1,3),
        'dosen' => $faker->boolean,
        'remember_token' => Str::random(10),
    ];
});
