<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Subscription;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function profile(): HasOne
    {
        return $this->hasOne(Profile::class);
    }

    public function projects(): HasMany
    {
        return $this->hasMany(Project::class);
    }

    public function experiences(): HasMany
    {
        return $this->hasMany(Experience::class);
    }

    public function certificates(): HasMany
    {
        return $this->hasMany(Certificate::class);
    }

    public function socialLinks(): HasMany
    {
        return $this->hasMany(SocialLink::class);
    }

    public function profileSkills(): HasMany
    {
        return $this->hasMany(ProfileSkill::class);
    }
    public function educations(): HasMany
{
    return $this->hasMany(Education::class);
}
public function subscription(): HasOne
{
    return $this->hasOne(Subscription::class);
}
public function currentPlan(): BelongsTo
{
    return $this->belongsTo(
        Plan::class,
        'current_plan_id'
    );
}public function hasActiveSubscription(): bool
{
    return in_array(
        $this->subscription_status,
        ['trial', 'active']
    );
}

public function isTrial(): bool
{
    return $this->subscription_status === 'trial';
}

public function isPending(): bool
{
    return $this->subscription_status === 'pending';
}

public function isExpired(): bool
{
    return $this->subscription_status === 'expired';
}
    public function skills(): BelongsToMany
    {
        return $this->belongsToMany(
            Skill::class,
            'profile_skills'
        )
        ->withPivot([
            'level',
            'display_order',
        ])
        ->withTimestamps();
    }
    
}