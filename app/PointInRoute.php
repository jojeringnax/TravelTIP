<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class PointInRoute
 * @package App
 *
 * @property integer $route_id
 * @property integer $point_id
 *
 */
class PointInRoute extends Model
{
    /**
     * @var string
     */
    protected $table = 'points_in_route';

    /**
     * @var array
     */
    protected $fillable = [
        'route_id',
        'point_id'
    ];

}
