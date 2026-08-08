<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\PlatformSetting;

class PlatformSettingsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        PlatformSetting::updateOrCreate(

            [
                'id' => 1,
            ],

            [

                'bank_name' => 'CPA',

                'account_owner' => 'Your Name',

                'ccp' => '00000000000000000000',

                'rip' => '00000000000000000000',

                'iban' => null,

                'swift' => null,

                'payment_instructions' =>
                    'Transfer the amount then upload the receipt.',

            ]

        );
    }
}