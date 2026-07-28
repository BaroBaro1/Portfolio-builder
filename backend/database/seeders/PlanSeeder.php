<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Plan;

class PlanSeeder extends Seeder
{
    public function run(): void
    {
        Plan::updateOrCreate(
            [
                'slug' => 'trial',
            ],
            [
                'name' => 'Free Trial',
                'price' => 0,
                'billing_cycle' => 'trial',
                'trial_days' => 10,
                'description' => 'Enjoy all features free for 10 days.',
                'is_active' => true,
            ]
        );

        Plan::updateOrCreate(
            [
                'slug' => 'pro-monthly',
            ],
            [
                'name' => 'Pro Monthly',
                'price' => 1500,
                'billing_cycle' => 'monthly',
                'trial_days' => 0,
                'description' => 'Professional monthly subscription.',
                'is_active' => true,
            ]
        );

        Plan::updateOrCreate(
            [
                'slug' => 'pro-yearly',
            ],
            [
                'name' => 'Pro Yearly',
                'price' => 15000,
                'billing_cycle' => 'yearly',
                'trial_days' => 0,
                'description' => 'Professional yearly subscription. Save 3000 DA.',
                'is_active' => true,
            ]
        );
    }
}