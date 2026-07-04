<?php

namespace App\Features\Certificates\Controllers;

use App\Http\Controllers\Controller;
use App\Features\Certificates\Actions\CreateCertificateAction;
use App\Features\Certificates\Actions\UpdateCertificateAction;
use App\Features\Certificates\Actions\DeleteCertificateAction;
use App\Features\Certificates\DTOs\CreateCertificateDTO;
use App\Features\Certificates\DTOs\UpdateCertificateDTO;
use App\Features\Certificates\Requests\StoreCertificateRequest;
use App\Features\Certificates\Requests\UpdateCertificateRequest;
use App\Features\Certificates\Resources\CertificateResource;
use App\Models\Certificate;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CertificateController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        $certificates = $request->user()
            ->certificates()
            ->orderBy('display_order')
            ->get();

        return CertificateResource::collection($certificates);
    }

    public function store(
        StoreCertificateRequest $request,
        CreateCertificateAction $action
    ): JsonResponse {
        $certificate = $action->execute(
            $request->user(),
            CreateCertificateDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Certificate created successfully.',
            'data' => new CertificateResource($certificate),
        ], 201);
    }

    public function show(Certificate $certificate): CertificateResource
    {
        $this->authorizeCertificate($certificate);

        return new CertificateResource($certificate);
    }

    public function update(
        UpdateCertificateRequest $request,
        Certificate $certificate,
        UpdateCertificateAction $action
    ): JsonResponse {
        $this->authorizeCertificate($certificate);

        $certificate = $action->execute(
            $certificate,
            UpdateCertificateDTO::fromRequest($request)
        );

        return response()->json([
            'message' => 'Certificate updated successfully.',
            'data' => new CertificateResource($certificate),
        ]);
    }

    public function destroy(
        Certificate $certificate,
        DeleteCertificateAction $action
    ): JsonResponse {
        $this->authorizeCertificate($certificate);

        $action->execute($certificate);

        return response()->json([
            'message' => 'Certificate deleted successfully.',
        ]);
    }

    private function authorizeCertificate(Certificate $certificate): void
    {
        abort_if(
            auth()->id() !== $certificate->user_id,
            403
        );
    }
}