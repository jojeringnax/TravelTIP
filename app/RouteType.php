<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RouteType
 * @package App
 *
 * @property string $name
 * @property Route[] $routes
 */
class RouteType extends Model
{
    /**
     * @var string
     */
    protected $table = 'route_types';

    /**
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function routes()
    {
        return $this->belongsToMany(Route::class);
    }
}
