<?php

namespace App\Enums;

enum SubscriptionStatus: string
{
    case TRIAL = 'trial';

    case PENDING = 'pending';

    case ACTIVE = 'active';

    case EXPIRED = 'expired';

    case REJECTED = 'rejected';
}