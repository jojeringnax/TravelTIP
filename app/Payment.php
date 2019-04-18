<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Payment
 * @package App
 *
 * @property integer $sum
 */
class Payment extends Model
{
    /**
     * @var string
     */
    protected $table='payments';

    /**
     * @var array
     */
    protected $guarded = [
        'sum'
    ];

}
