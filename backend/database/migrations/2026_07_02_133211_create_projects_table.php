<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('title', 150);

            $table->string('slug', 150);

            $table->longText('description');

            $table->string('thumbnail')
                ->nullable();

            $table->string('github_url')
                ->nullable();

            $table->string('live_url')
                ->nullable();

            $table->boolean('featured')
                ->default(false);

            $table->enum('status', [
                'draft',
                'published',
            ])->default('draft');

            $table->unsignedInteger('display_order')
                ->default(0);

            $table->timestamp('published_at')
                ->nullable();

            $table->timestamps();

            $table->unique(['user_id', 'slug']);

            $table->index('featured');
            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};