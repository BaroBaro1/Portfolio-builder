<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileUploadService
{
    /**
     * Upload a file to storage.
     */
    public function upload(
        UploadedFile $file,
        string $directory = 'uploads',
        ?string $disk = 'public'
    ): string {
        return $file->store($directory, $disk);
    }

    /**
     * Delete a file from storage.
     */
    public function delete(
        ?string $path,
        ?string $disk = 'public'
    ): void {
        if ($path && Storage::disk($disk)->exists($path)) {
            Storage::disk($disk)->delete($path);
        }
    }

    /**
     * Replace an existing file.
     */
    public function replace(
        UploadedFile $file,
        ?string $oldPath,
        string $directory = 'uploads',
        ?string $disk = 'public'
    ): string {
        $this->delete($oldPath, $disk);

        return $this->upload($file, $directory, $disk);
    }
}