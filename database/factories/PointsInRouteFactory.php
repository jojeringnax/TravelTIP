<?php

use Faker\Generator as Faker;

$factory->define(\App\PointInRoute::class, function (Faker $faker) {
    $routeIds = \App\Route::pluck('id')->toArray();
    $routeIDMax = max($routeIds);
    $routeIDMin = min($routeIds);
    $pointIds = \App\Point::pluck('id')->toArray();
    $pointIDMax = max($pointIds);
    $pointIDMin = min($pointIds);
    return [
        'route_id' => $faker->numberBetween($routeIDMin, $routeIDMax),
        'point_id' => $faker->numberBetween($pointIDMin, $pointIDMax),
        'point_number' => $faker->numberBetween(0, 100)
    ];
});
