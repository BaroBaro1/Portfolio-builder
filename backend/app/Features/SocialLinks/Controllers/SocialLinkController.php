<?php

namespace App\Features\SocialLinks\Controllers;

use App\Features\SocialLinks\Actions\CreateSocialLinkAction;
use App\Features\SocialLinks\Actions\DeleteSocialLinkAction;
use App\Features\SocialLinks\Actions\UpdateSocialLinkAction;
use App\Features\SocialLinks\DTOs\CreateSocialLinkDTO;
use App\Features\SocialLinks\DTOs\UpdateSocialLinkDTO;
use App\Features\SocialLinks\Requests\StoreSocialLinkRequest;
use App\Features\SocialLinks\Requests\UpdateSocialLinkRequest;
use App\Features\SocialLinks\Resources\SocialLinkResource;
use App\Http\Controllers\Controller;
use App\Models\SocialLink;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class SocialLinkController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return SocialLinkResource::collection(
            Auth::user()
                ->socialLinks()
                ->orderBy('display_order')
                ->get()
        );
    }

    public function store(
        StoreSocialLinkRequest $request,
        CreateSocialLinkAction $action
    ): JsonResponse {

        $socialLink = $action->execute(
            Auth::user(),
            CreateSocialLinkDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Social link created successfully.',
            'data' => new SocialLinkResource($socialLink),
        ], 201);
    }

    public function show(SocialLink $socialLink): SocialLinkResource
    {
        abort_if($socialLink->user_id !== Auth::id(), 403);

        return new SocialLinkResource($socialLink);
    }

    public function update(
        UpdateSocialLinkRequest $request,
        SocialLink $socialLink,
        UpdateSocialLinkAction $action
    ): JsonResponse {

        abort_if($socialLink->user_id !== Auth::id(), 403);

        $socialLink = $action->execute(
            $socialLink,
            UpdateSocialLinkDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Social link updated successfully.',
            'data' => new SocialLinkResource($socialLink),
        ]);
    }

    public function destroy(
        SocialLink $socialLink,
        DeleteSocialLinkAction $action
    ): JsonResponse {

        abort_if($socialLink->user_id !== Auth::id(), 403);

        $action->execute($socialLink);

        return response()->json([
            'message' => 'Social link deleted successfully.',
        ]);
    }
}