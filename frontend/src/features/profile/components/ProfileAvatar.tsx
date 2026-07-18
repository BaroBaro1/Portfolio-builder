import { useRef, useState } from "react";
import {
  Camera,
  Trash2,
  UserCircle2,
  Upload,
} from "lucide-react";

import { useProfile } from "../hooks/useProfile";
import { profileService } from "../services/profileService";

export default function ProfileAvatar() {
  const { profile, reload } = useProfile();

  const inputRef =
    useRef<HTMLInputElement>(null);

  const [preview, setPreview] =
    useState<string | null>(null);

  const [file, setFile] =
    useState<File | null>(null);

  const [uploading, setUploading] =
    useState(false);

  const avatar =
    preview ??
    profile?.profile.avatar ??
    null;

  function handleSelect(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const selected =
      e.target.files?.[0];

    if (!selected) return;

    setFile(selected);

    setPreview(
      URL.createObjectURL(selected)
    );
  }

  async function handleDeleteAvatar() {
    try {

      setUploading(true);

      await profileService.deleteAvatar();

      await reload();

      setPreview(null);

      setFile(null);

    } catch {

      alert("Failed to remove avatar.");

    } finally {

      setUploading(false);

    }
  }

  async function handleUpload() {

    if (!file) return;

    try {

      setUploading(true);

      const form = new FormData();

      form.append(
        "display_name",
        profile!.profile.display_name
      );

      form.append(
        "headline",
        profile!.profile.headline ?? ""
      );

      form.append(
        "bio",
        profile!.profile.bio ?? ""
      );

      form.append(
        "location",
        profile!.profile.location ?? ""
      );

      form.append(
        "website",
        profile!.profile.website ?? ""
      );

      form.append(
        "phone",
        profile!.profile.phone ?? ""
      );

      form.append(
        "avatar",
        file
      );

      await profileService.updateProfile(
        form
      );

      await reload();

      setPreview(null);

      setFile(null);

    } catch {

      alert("Upload failed.");

    } finally {

      setUploading(false);

    }
  }

  return (

    <aside className="rounded-[30px] border bg-card p-8 shadow-lg">

      <div className="text-center">

        <h2 className="text-2xl font-bold">
          Profile Photo
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          A professional photo increases trust.
        </p>

      </div>

      <div className="mt-8 flex justify-center">

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 blur-xl opacity-30" />

          {avatar ? (

            <img
              src={avatar}
              alt="Avatar"
              className="relative h-48 w-48 rounded-full border-4 border-background object-cover shadow-xl"
            />

          ) : (

            <UserCircle2
              className="relative text-slate-300"
              size={200}
            />

          )}

          <button
            type="button"
            onClick={() =>
              inputRef.current?.click()
            }
            className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:scale-105 hover:bg-emerald-700"
          >
            <Camera size={20} />
          </button>

          <input
            hidden
            ref={inputRef}
            type="file"
            accept=".png,.jpg,.jpeg,.webp"
            onChange={handleSelect}
          />

        </div>

      </div>

      <div className="mt-8 space-y-3">

        <button
          disabled={!file || uploading}
          onClick={handleUpload}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
        >

          <Upload size={18} />

          {uploading
            ? "Uploading..."
            : "Upload Photo"}

        </button>

        <button
          onClick={handleDeleteAvatar}
          disabled={uploading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border py-3 font-medium text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950/20 disabled:opacity-60"
        >

          <Trash2 size={18} />

          Remove Photo

        </button>

      </div>

      <div className="mt-8 rounded-2xl bg-muted/50 p-5">

        <h3 className="font-semibold">
          Recommendations
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">

          <li>• Square image (1:1)</li>

          <li>• Minimum 400×400 px</li>

          <li>• JPG, PNG or WEBP</li>

          <li>• Maximum 2 MB</li>

        </ul>

      </div>

    </aside>

  );
}