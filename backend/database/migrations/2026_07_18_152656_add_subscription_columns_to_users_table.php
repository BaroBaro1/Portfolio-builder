<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {

            $table->foreignId('current_plan_id')
                ->nullable()
                ->after('password')
                ->constrained('plans')
                ->nullOnDelete();

            $table->enum('subscription_status', [
                'trial',
                'pending',
                'active',
                'expired',
                'rejected',
            ])
            ->default('trial')
            ->after('current_plan_id');

            $table->timestamp('subscription_expires_at')
                ->nullable()
                ->after('subscription_status');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {

            $table->dropForeign(['current_plan_id']);

            $table->dropColumn([
                'current_plan_id',
                'subscription_status',
                'subscription_expires_at',
            ]);

        });
    }
};