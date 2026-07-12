<?php

namespace App\Features\Skills\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\JsonResponse;

class SkillCatalogController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => Skill::query()
                ->orderBy('name')
                ->get([
                    'id',
                    'name',
                    'category',
                    'icon',
                ]),
        ]);
    }
}