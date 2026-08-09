<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('plans')->updateOrInsert(
            ['slug' => 'trial'],
            [
                'name' => 'Free Trial',
                'price' => 0,
                'billing_cycle' => 'trial',
                'trial_days' => 10,
                'description' => 'Enjoy all features free for 10 days.',
                'is_active' => true,
                'updated_at' => now(),
                'created_at' => now(),
            ]
        );

        DB::table('plans')->updateOrInsert(
            ['slug' => 'pro-monthly'],
            [
                'name' => 'Pro Monthly',
                'price' => 500,
                'billing_cycle' => 'monthly',
                'trial_days' => 0,
                'description' => 'Professional monthly subscription.',
                'is_active' => true,
                'updated_at' => now(),
                'created_at' => now(),
            ]
        );

        DB::table('plans')->updateOrInsert(
            ['slug' => 'pro-yearly'],
            [
                'name' => 'Pro Yearly',
                'price' => 5000,
                'billing_cycle' => 'yearly',
                'trial_days' => 0,
                'description' => 'Professional yearly subscription. Save 1000 DA.',
                'is_active' => true,
                'updated_at' => now(),
                'created_at' => now(),
            ]
        );
    }

    public function down(): void
    {
        DB::table('plans')
            ->whereIn('slug', [
                'trial',
                'pro-monthly',
                'pro-yearly',
            ])
            ->delete();
    }
};