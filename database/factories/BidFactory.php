<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bid;
use Faker\Generator as Faker;

$factory->define(Bid::class, function (Faker $faker) {
    return [
        'idea' => $faker->sentence(),
        'skills' => $faker->sentence(),
        'contactperson' => $faker->e164PhoneNumber()
    ];
});
