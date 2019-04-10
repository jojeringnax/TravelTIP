<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Mark
 * @package App
 *
 * @property integer $user_id
 * @property integer $connect_id
 * @property integer $type
 * @property integer $mark
 *
 * @property User $user
 */
class Mark extends Model
{
    /**
     * @var string
     */
    protected $table = 'marks';

    /**
     * @var array
     */
    protected $fillable = [
        'user_id',
        'connect_id',
        'type',
        'mark'
    ];

    const POINT = 0;
    const ROUTE = 1;
    const USER = 2;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return self::hasOne(User::class, 'id','user_id');
    }


}
