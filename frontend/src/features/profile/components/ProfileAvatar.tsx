import { useRef, useState } from "react";
import {
  Camera,
  Trash2,
  UserCircle2,
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

    alert("Avatar removed successfully.");
  } catch (error) {
    console.error(error);

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

      form.append("avatar", file);

      await profileService.updateProfile(
        form
      );

      await reload();

      setFile(null);

      setPreview(null);

      alert("Avatar updated successfully.");
    } catch (error) {
      console.error(error);

      alert("Failed to upload avatar.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Profile Photo
      </h2>

      <p className="mt-2 text-muted-foreground">
        Upload a professional profile picture.
      </p>

      <div className="mt-8 flex flex-col items-center">

        <div className="relative">

          {avatar ? (
            <img
              src={avatar}
              alt="avatar"
              className="h-44 w-44 rounded-full object-cover border"
            />
          ) : (
            <UserCircle2
              size={180}
              className="text-slate-300"
            />
          )}

          <button
            type="button"
            onClick={() =>
              inputRef.current?.click()
            }
            className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:bg-emerald-700"
          >
            <Camera size={20} />
          </button>

          <input
            ref={inputRef}
            type="file"
            hidden
            accept=".jpg,.jpeg,.png,.webp"
            onChange={handleSelect}
          />

        </div>

        <button
          type="button"
          disabled={!file || uploading}
          onClick={handleUpload}
          className="mt-8 w-full rounded-2xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
        >
          {uploading
            ? "Uploading..."
            : "Upload Photo"}
        </button>

        <button
  type="button"
  onClick={handleDeleteAvatar}
  disabled={uploading}
  className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border py-3 font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-60 dark:hover:bg-red-950/20"
>
  <Trash2 size={18} />
  Remove Photo
</button>

        <div className="mt-8 w-full rounded-2xl bg-slate-50 p-4 text-center text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-400">

          JPG, PNG or WEBP

          <br />

          Maximum size: 2 MB

          <br />

          Recommended: 400 × 400 px

        </div>

      </div>

    </div>
  );
}