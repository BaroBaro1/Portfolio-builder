import { useState } from "react";

export default function ProfileForm() {
  const [form, setForm] = useState({
    fullName: "",
    professionalTitle: "",
    bio: "",
    location: "",
    website: "",
  });

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(form);

    // سيتم ربطها بالـ API في الجلسة القادمة
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-card p-8 shadow-sm space-y-6"
    >
      <h2 className="text-2xl font-bold">
        Personal Information
      </h2>

      {/* Full Name */}

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Full Name
        </label>

        <input
          name="fullName"
          value={form.fullName}
          onChange={updateField}
          className="w-full rounded-xl border p-3"
          placeholder="John Doe"
        />
      </div>

      {/* Professional Title */}

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Professional Title
        </label>

        <input
          name="professionalTitle"
          value={form.professionalTitle}
          onChange={updateField}
          className="w-full rounded-xl border p-3"
          placeholder="Full Stack Developer"
        />
      </div>

      {/* Bio */}

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Bio
        </label>

        <textarea
          rows={5}
          name="bio"
          value={form.bio}
          onChange={updateField}
          className="w-full rounded-xl border p-3 resize-none"
          placeholder="Tell people about yourself..."
        />
      </div>

      {/* Location */}

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Location
        </label>

        <input
          name="location"
          value={form.location}
          onChange={updateField}
          className="w-full rounded-xl border p-3"
          placeholder="Algiers, Algeria"
        />
      </div>

      {/* Website */}

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Website
        </label>

        <input
          name="website"
          value={form.website}
          onChange={updateField}
          className="w-full rounded-xl border p-3"
          placeholder="https://yourwebsite.com"
        />
      </div>

      <div className="flex justify-end">

        <button
          type="submit"
          className="rounded-xl bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
        >
          Save Changes
        </button>

      </div>
    </form>
  );
}