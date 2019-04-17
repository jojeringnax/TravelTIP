<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Psy\Util\Json;

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
     * @return array
     */
    public function getPoints()
    {
        $connects = PointInRoute::where('route_id', $this->id)->orderBy('point_number')->get();
        foreach ($connects as $connect) {
            $resultArray[] = [
                'point' => Point::find($connect->point_id),
                'number' => $connect->point_number
            ];
        }
        return isset($resultArray) ? $resultArray : [];
    }

    /**
     * @return PointInRoute[]
     */
    public function getPointConnects()
    {
        return PointInRoute::where('route_id', $this->id)->get();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return self::hasMany(Comment::class, 'route_id', 'id');
    }

    /**
     * @return bool|null
     * @throws \Exception
     */
    public function delete()
    {
        PointInRoute::where('route_id', $this->id)->delete();
        PhotoConnect::where('connection_id', $this->id)->where('type', PhotoConnect::ROUTE)->delete();
        return parent::delete();
    }

    /**
     * @return string
     */
    public function getWithPoints()
    {
        return Json::encode([
            'route' => $this,
            'points' => $this->getPoints()
        ]);
    }

    /**
     * @return string
     */
    public static function getAllRoutesWithPoints()
    {
        $routes = Route::All();
        foreach($routes as $route) {
            $resultArray[] = [
                'route' => $route,
                'points' => $route->getPoints()
            ];
        }
        return Json::encode($resultArray);
    }

}
