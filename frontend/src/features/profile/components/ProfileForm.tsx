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
  >

    {/* Hero */}

    <section className="rounded-[30px] border bg-gradient-to-r from-emerald-50 via-background to-cyan-50 p-8 shadow-sm dark:from-emerald-950/20 dark:to-cyan-950/20">

      <h2 className="text-3xl font-bold">
        Professional Information
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
        Keep your professional profile updated. Everything here
        will be displayed on your public portfolio.
      </p>

    </section>

    {/* Basic Information */}

    <section className="rounded-[30px] border bg-card p-8 shadow-sm">

      <h3 className="text-2xl font-bold">
        Basic Information
      </h3>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            readOnly
            value={form.name}
            className="h-12 w-full rounded-xl border bg-muted px-4"
          />

          <p className="mt-2 text-xs text-muted-foreground">
            Retrieved from your account.
          </p>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Display Name
          </label>

          <input
            value={form.display_name}
            onChange={(e)=>
              setForm({
                ...form,
                display_name:e.target.value,
              })
            }
            className="h-12 w-full rounded-xl border px-4 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />

          <p className="mt-2 text-xs text-muted-foreground">
            Visible on your public portfolio.
          </p>

        </div>

        <div className="md:col-span-2">

          <label className="mb-2 block text-sm font-medium">
            Professional Headline
          </label>

          <input
            value={form.headline}
            onChange={(e)=>
              setForm({
                ...form,
                headline:e.target.value,
              })
            }
            className="h-12 w-full rounded-xl border px-4 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            placeholder="Full Stack Web Developer"
          />

        </div>

      </div>

    </section>

    {/* About */}

    <section className="rounded-[30px] border bg-card p-8 shadow-sm">

      <div className="flex items-center justify-between">

        <h3 className="text-2xl font-bold">
          About Me
        </h3>

        <span className="text-sm text-muted-foreground">
          {form.bio.length}/500
        </span>

      </div>

      <textarea
        rows={7}
        maxLength={500}
        value={form.bio}
        onChange={(e)=>
          setForm({
            ...form,
            bio:e.target.value,
          })
        }
        className="mt-6 w-full rounded-2xl border p-5 leading-7 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        placeholder="Tell visitors about yourself..."
      />

      <p className="mt-3 text-sm text-muted-foreground">
        A concise biography helps recruiters and clients
        understand your background.
      </p>

    </section>


    {/* Contact */}

    <section className="rounded-[30px] border bg-card p-8 shadow-sm">

      <h3 className="text-2xl font-bold">
        Contact Information
      </h3>

      <p className="mt-2 text-muted-foreground">
        Help people contact you easily.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            readOnly
            value={form.email}
            className="h-12 w-full rounded-xl border bg-muted px-4"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Phone
          </label>

          <input
            value={form.phone}
            onChange={(e)=>
              setForm({
                ...form,
                phone:e.target.value,
              })
            }
            className="h-12 w-full rounded-xl border px-4 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            placeholder="+213..."
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Website
          </label>

          <input
            value={form.website}
            onChange={(e)=>
              setForm({
                ...form,
                website:e.target.value,
              })
            }
            className="h-12 w-full rounded-xl border px-4 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            placeholder="https://..."
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Location
          </label>

          <input
            value={form.location}
            onChange={(e)=>
              setForm({
                ...form,
                location:e.target.value,
              })
            }
            className="h-12 w-full rounded-xl border px-4 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            placeholder="Algeria"
          />

        </div>

      </div>

    </section>

    {/* Message */}

    {message && (

      <div
        className={`rounded-2xl border p-4 text-sm font-medium ${
          message.includes("success")
            ? "border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-400"
            : "border-red-300 bg-red-100 text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400"
        }`}
      >
        {message}
      </div>

    )}

    {/* Footer */}

    <div className="sticky bottom-0 flex justify-end border-t bg-background/90 pt-6 backdrop-blur">

      <button
        type="submit"
        disabled={saving}
        className="rounded-2xl bg-emerald-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {saving
          ? "Saving..."
          : "Save Changes"}
      </button>

    </div>

  </form>
);
}
