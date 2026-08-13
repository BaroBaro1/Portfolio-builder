<?php

namespace App\Services;

use Cloudinary\Cloudinary;
use Cloudinary\Configuration\Configuration;
use Illuminate\Http\UploadedFile;

class FileUploadService
{
    protected Cloudinary $cloudinary;

    public function __construct()
    {
        $configuration = new Configuration(
            env('CLOUDINARY_URL')
        );

        $this->cloudinary = new Cloudinary(
            $configuration
        );
    }

    public function upload(
        UploadedFile $file,
        string $directory = 'uploads',
        ?string $disk = null
    ): string {
        $result = $this->cloudinary
            ->uploadApi()
            ->upload(
                $file->getRealPath(),
                [
                    'folder' => $directory,
                    'resource_type' => 'auto',
                ]
            );

        return $result['secure_url'];
    }

    public function delete(
        ?string $path,
        ?string $disk = null
    ): void {
        // Cloudinary deletion will be implemented next.
    }

    public function replace(
        UploadedFile $file,
        ?string $oldPath,
        string $directory = 'uploads',
        ?string $disk = null
    ): string {
        return $this->upload(
            $file,
            $directory,
            $disk
        );
    }
}