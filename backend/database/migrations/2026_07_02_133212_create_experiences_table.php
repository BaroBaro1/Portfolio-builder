<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('company');

            $table->string('position');

            $table->string('location')
                ->nullable();

            $table->longText('description')
                ->nullable();

            $table->date('start_date');

            $table->date('end_date')
                ->nullable();

            $table->boolean('is_current')
                ->default(false);

            $table->unsignedInteger('display_order')
                ->default(0);

            $table->timestamps();

            $table->index('is_current');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};