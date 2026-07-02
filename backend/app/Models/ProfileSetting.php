<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProfileSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'profile_id',
        'accent_color',
        'language',
        'dark_mode',
        'sections_order',
        'show_projects',
        'show_skills',
        'show_experiences',
        'show_certificates',
    ];

    protected function casts(): array
    {
        return [
            'dark_mode' => 'boolean',
            'show_projects' => 'boolean',
            'show_skills' => 'boolean',
            'show_experiences' => 'boolean',
            'show_certificates' => 'boolean',
            'sections_order' => 'array',
        ];
    }

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class);
    }
}