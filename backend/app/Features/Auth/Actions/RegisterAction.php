<?php

namespace App\Features\Auth\Actions;

use App\Features\Auth\DTOs\RegisterDTO;
use App\Features\Subscriptions\Services\SubscriptionService;
use App\Models\Profile;
use App\Models\ProfileSetting;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class RegisterAction
{
    public function __construct(
        private readonly SubscriptionService $subscriptionService
    ) {
    }

    public function execute(RegisterDTO $dto): User
    {
        return DB::transaction(function () use ($dto) {

            /*
            |--------------------------------------------------------------------------
            | Create User
            |--------------------------------------------------------------------------
            */

            $user = User::create([
                'name' => $dto->name,
                'email' => $dto->email,
                'password' => $dto->password,
            ]);

            /*
            |--------------------------------------------------------------------------
            | Create Profile
            |--------------------------------------------------------------------------
            */

            $profile = Profile::create([
                'user_id' => $user->id,
                'display_name' => $dto->name,
                'slug' => $this->generateUniqueSlug($dto->name),
                'status' => 'draft',
            ]);

            /*
            |--------------------------------------------------------------------------
            | Create Profile Settings
            |--------------------------------------------------------------------------
            */

            ProfileSetting::create([
                'profile_id' => $profile->id,

                'accent_color' => 'neutral',
                'language' => 'en',

                'dark_mode' => false,

                'sections_order' => [
                    'hero',
                    'projects',
                    'skills',
                    'experience',
                    'certificates',
                ],

                'show_projects' => true,
                'show_skills' => true,
                'show_experiences' => true,
                'show_certificates' => true,
            ]);

            /*
            |--------------------------------------------------------------------------
            | Start Free Trial Automatically
            |--------------------------------------------------------------------------
            |
            | Every newly registered user receives the Trial plan automatically.
            | The number of trial days comes from the "trial" plan in the database.
            |
            */

            $this->subscriptionService->create(
                $user,
                [
                    'plan_slug' => 'trial',
                    'payment_method' => 'trial',
                ]
            );

            return $user;
        });
    }

    /**
     * Generate a unique profile slug.
     */
    private function generateUniqueSlug(string $name): string
    {
        $slug = str($name)->slug();

        $originalSlug = $slug;

        $counter = 1;

        while (Profile::where('slug', $slug)->exists()) {

            $slug = $originalSlug . '-' . $counter;

            $counter++;
        }

        return $slug;
    }
}