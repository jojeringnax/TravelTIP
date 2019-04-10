<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

/**
 * Class Photo
 * @package App
 *
 * @property integer $id
 * @property string $path
 * @property string $description
 * @property integer $user_id
 *
 * @property User $user
 */
class Photo extends Model
{
    /**
     * @var string
     */
    protected $table = 'photos';

    /**
     * @var array
     */
    protected $guarded = [
        'id',
        'path',
        'description',
        'user_id'
    ];

    /**
     * @return bool|null
     * @throws \Exception
     */
    public function delete()
    {
        Storage::disk('public')->delete($this->path);
        return parent::delete();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return self::belongsTo(User::class, 'user_id','id');
    }
}
