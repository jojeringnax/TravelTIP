<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;


/**
 * Class PaidRoute
 * @package App
 *
 * @property integer $user_id
 * @property integer $route_id
 * @property integer $payment_id
 *
 * @property User $user
 * @property Payment $payment
 * @property Route $route
 *
 */
class PaidRoute extends Model
{
    /**
     * @var string
     */
    protected $table='paid_routes';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function route()
    {
        return $this->hasOne(Route::class, 'route_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->hasOne(User::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function payment()
    {
        return $this->hasOne(Payment::class, 'payment_id', 'id');
    }

    /**
     * @return array
     */
    public static function getPaidRoutesIDsForCurrentUser()
    {
        return self::where('user_id', Auth::user()->id)->pluck('route_id')->toArray();
    }
}
