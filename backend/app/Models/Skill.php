<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'category',
        'icon',
    ];

    public function profileSkills(): HasMany
    {
        return $this->hasMany(ProfileSkill::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(
            User::class,
            'profile_skills'
        )
        ->withPivot([
            'level',
            'display_order',
        ])
        ->withTimestamps();
    }
}