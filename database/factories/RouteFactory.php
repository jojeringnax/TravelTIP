<?php

use Faker\Generator as Faker;

$factory->define(\App\Route::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->text(),
        'status' => 0, // password
        'duration' => $faker->numberBetween(10, 600),
        'length' => $faker->numberBetween(300, 10000)
    ];
});
