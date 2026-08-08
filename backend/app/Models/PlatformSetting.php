<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PlatformSetting extends Model
{
    use HasFactory;

    protected $fillable = [

        'bank_name',

        'account_owner',

        'ccp',

        'rip',

        'iban',

        'swift',

        'payment_instructions',

    ];
}