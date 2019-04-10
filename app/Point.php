<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Route
 * @package App
 *
 * @property int $id
 * @property string $name
 * @property string $address
 * @property string $description
 * @property integer $status
 * @property integer $type
 * @property float $x_pos
 * @property float $y_pos
 *
 * @property Comment[] $comments
 *
 */
class Point extends Model
{

    /**
     * @var string
     */
    protected $table = 'points';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'address',
        'status',
        'type',
        'x_pos',
        'y_pos'
    ];

    /**
     * @return Photo[]
     */
    public function getPhotos()
    {
        $photoConnects = PhotoConnect::where('connect_id', $this->id)
            ->where('type', PhotoConnect::POINT)
            ->pluck('id')
            ->toArray();
        return Photo::whereIn('id', $photoConnects)->get();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return self::hasMany(Comment::class, 'point_id','id');
    }

    /**
     * @return Mark[]
     */
    public function getMarks()
    {
        return Mark::where('connect_id', $this->id)->where('type', Mark::POINT)->get();
    }

    /**
     * @return float|int
     */
    public function getAverageMark()
    {
        $marks = $this->getMarks();
        $count = 0;
        $sum = 0;
        foreach ($marks as $mark) {
            $count++;
            $sum += $mark->mark;
        }
        return $count === 0 ? 0 : round($sum/$count, 1);
    }
}
