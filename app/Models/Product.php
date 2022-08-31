<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $table = 'products';

    protected $primaryKey = 'id';

    protected $fillable = ['name', 'slug', 'description', 'price', 'status'];

    protected $hidden = ['created_at', 'updated_at'];
}
