<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Group extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'name',
        'description',
    ];
    protected static function boot() {
        parent::boot();
        static::creating(function ($model){
            $model->id = (string) Str::uuid();
        });
    }

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }
}
