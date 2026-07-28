<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('subscriptions', function (Blueprint $table) {

            $table->string('payment_method')->nullable()->after('activated_at');

            $table->string('payment_reference')->nullable()->after('payment_method');

            $table->timestamp('paid_at')->nullable()->after('payment_reference');

            $table->text('notes')->nullable()->after('paid_at');

        });
    }

    public function down(): void
    {
        Schema::table('subscriptions', function (Blueprint $table) {

            $table->dropColumn([
                'payment_method',
                'payment_reference',
                'paid_at',
                'notes',
            ]);

        });
    }
};