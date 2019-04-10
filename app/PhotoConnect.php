<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PhotoConnect extends Model
{
    /**
     * @var string
     */
    protected $table = 'photos_connects';

    /**
     * @var array
     */
    protected $fillable = [
        'id',
        'connect_id'
    ];

    const POINT = 0;
    const ROUTE = 1;
    const USER = 2;
}
