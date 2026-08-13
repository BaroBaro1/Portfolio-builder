<?php

namespace App\Services;

use Cloudinary\Cloudinary;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileUploadService
{
    private function cloudinary(): Cloudinary
    {
        return new Cloudinary([
            'cloud' => [
                'cloud_name' => env('CLOUDINARY_CLOUD_NAME'),
                'api_key' => env('CLOUDINARY_API_KEY'),
                'api_secret' => env('CLOUDINARY_API_SECRET'),
            ],
        ]);
    }

    /**
     * Upload a file to Cloudinary.
     */
    public function upload(
        UploadedFile $file,
        string $directory = 'uploads',
        ?string $disk = null
    ): string {
        $result = $this->cloudinary()
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

    /**
     * Delete a file.
     */
    public function delete(
        ?string $path,
        ?string $disk = null
    ): void {
        // Cloudinary deletion will be handled later.
    }

    /**
     * Replace an existing file.
     */
    public function replace(
        UploadedFile $file,
        ?string $oldPath,
        string $directory = 'uploads',
        ?string $disk = null
    ): string {
        $this->delete($oldPath, $disk);

        return $this->upload(
            $file,
            $directory,
            $disk
        );
    }
}