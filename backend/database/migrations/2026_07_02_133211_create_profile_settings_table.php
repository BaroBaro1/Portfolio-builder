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
        Schema::create('profile_settings', function (Blueprint $table) {
            $table->id();

            $table->foreignId('profile_id')
                ->unique()
                ->constrained()
                ->cascadeOnDelete();

            $table->string('accent_color')
                ->default('neutral');

            $table->string('language', 5)
                ->default('en');

            $table->boolean('dark_mode')
                ->default(false);

            $table->json('sections_order');

            $table->boolean('show_projects')
                ->default(true);

            $table->boolean('show_skills')
                ->default(true);

            $table->boolean('show_experiences')
                ->default(true);

            $table->boolean('show_certificates')
                ->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profile_settings');
    }
};