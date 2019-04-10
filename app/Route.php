<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Route
 * @package App
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property integer $status
 * @property integer $duration
 * @property integer $length
 *
 * @property Comment[] $comments
 *
 */
class Route extends Model
{

    /**
     * @var string
     */
    protected $table = 'routes';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'status',
        'duration',
        'length'
    ];

    /**
     * @return Photo[]
     */
    public function getPhotos()
    {
        $photoConnects = PhotoConnect::where('connect_id', $this->id)
            ->where('type', PhotoConnect::ROUTE)
            ->pluck('id')
            ->toArray();
        return Photo::whereIn('id', $photoConnects)->get();
    }

    /**
     * @return Point[]
     */
    public function getPoints()
    {
        $connects = PointInRoute::where('route_id', $this->id)->pluck('point_id')->toArray();
        return Point::whereIn('id', $connects)->get();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return self::hasMany(Comment::class, 'route_id', 'id');
    }

}
