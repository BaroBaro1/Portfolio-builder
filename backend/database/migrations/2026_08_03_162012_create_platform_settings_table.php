<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('platform_settings', function (Blueprint $table) {

            $table->id();

            $table->string('bank_name');

            $table->string('account_owner');

            $table->string('ccp');

            $table->string('rip');

            $table->string('iban')->nullable();

            $table->string('swift')->nullable();

            $table->text('payment_instructions')->nullable();

            $table->timestamps();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('platform_settings');
    }
};