<?php

use Faker\Generator as Faker;

$factory->define(\App\Point::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->text(),
        'address' => $faker->text(15),
        'status' => 0, // password
        'type' => 0,
        'x_pos' => $faker->randomFloat(3, 0, 100),
        'y_pos' => $faker->randomFloat(3,0,100),
    ];
});
