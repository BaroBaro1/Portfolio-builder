import { useEffect, useState } from "react";
import { useProfile } from "../hooks/useProfile";
import { profileService } from "../services/profileService";

export default function ProfileForm() {
  const {
    profile,
    loading,
    reload,
  } = useProfile();

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [form, setForm] = useState({
    name: "",
    display_name: "",
    headline: "",
    bio: "",
    email: "",
    phone: "",
    website: "",
    location: "",
  });

  useEffect(() => {
    if (!profile) return;

    setForm({
      name: profile.user.name ?? "",
      display_name:
        profile.profile.display_name ?? "",
      headline:
        profile.profile.headline ?? "",
      bio:
        profile.profile.bio ?? "",
      email:
        profile.user.email ?? "",
      phone:
        profile.profile.phone ?? "",
      website:
        profile.profile.website ?? "",
      location:
        profile.profile.location ?? "",
    });
  }, [profile]);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setSaving(true);
      setMessage("");

      const data = new FormData();

      data.append(
        "display_name",
        form.display_name
      );

      data.append(
        "headline",
        form.headline
      );

      data.append(
        "bio",
        form.bio
      );

      data.append(
        "location",
        form.location
      );

      data.append(
        "website",
        form.website
      );

      data.append(
        "phone",
        form.phone
      );

      await profileService.updateProfile(
        data
      );

      await reload();

      setMessage(
        "Profile updated successfully."
      );
    } catch (error) {
      console.error(error);

      setMessage(
        "Failed to update profile."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="rounded-3xl border bg-card p-10">
        Loading profile...
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >      {/* Basic Information */}

      <div className="rounded-3xl border bg-card p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Basic Information
        </h2>

        <p className="mt-2 text-muted-foreground">
          This information appears on your public portfolio.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <label className="font-medium">
              Full Name
            </label>

            <input
              className="h-12 w-full rounded-xl border px-4 bg-muted"
              value={form.name}
              readOnly
            />

          </div>

          <div className="space-y-2">

            <label className="font-medium">
              Display Name
            </label>

            <input
              className="h-12 w-full rounded-xl border px-4"
              value={form.display_name}
              onChange={(e) =>
                setForm({
                  ...form,
                  display_name: e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2 md:col-span-2">

            <label className="font-medium">
              Professional Headline
            </label>

            <input
              className="h-12 w-full rounded-xl border px-4"
              value={form.headline}
              onChange={(e) =>
                setForm({
                  ...form,
                  headline: e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2 md:col-span-2">

            <label className="font-medium">
              Bio
            </label>

            <textarea
              rows={5}
              className="w-full rounded-xl border p-4"
              value={form.bio}
              onChange={(e) =>
                setForm({
                  ...form,
                  bio: e.target.value,
                })
              }
            />

          </div>

        </div>

      </div>
            {/* Contact */}

      <div className="rounded-3xl border bg-card p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Contact
        </h2>

        <p className="mt-2 text-muted-foreground">
          Your contact information.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="space-y-2">

            <label className="font-medium">
              Email
            </label>

            <input
              className="h-12 w-full rounded-xl border px-4 bg-muted"
              value={form.email}
              readOnly
            />

          </div>

          <div className="space-y-2">

            <label className="font-medium">
              Phone
            </label>

            <input
              className="h-12 w-full rounded-xl border px-4"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <label className="font-medium">
              Website
            </label>

            <input
              className="h-12 w-full rounded-xl border px-4"
              value={form.website}
              onChange={(e) =>
                setForm({
                  ...form,
                  website: e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <label className="font-medium">
              Location
            </label>

            <input
              className="h-12 w-full rounded-xl border px-4"
              value={form.location}
              onChange={(e) =>
                setForm({
                  ...form,
                  location: e.target.value,
                })
              }
            />

          </div>

        </div>

      </div>

      {message && (
        <div
          className={`rounded-2xl p-4 text-sm font-medium ${
            message.includes("success")
              ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}

      <div className="flex justify-end">

        <button
          type="submit"
          disabled={saving}
          className="rounded-2xl bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving
            ? "Saving..."
            : "Save Changes"}
        </button>

      </div>

    </form>
  );
}