import { useEffect, useState } from "react";

import { socialLinkService } from "../services/socialLinkService";

import type { SocialLink } from "@/types/social-link";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  socialLink: SocialLink | null;
}

export default function SocialLinkDialog({
  open,
  onClose,
  onSuccess,
  socialLink,
}: Props) {
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [displayOrder, setDisplayOrder] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;

    if (socialLink) {
      setPlatform(socialLink.platform);
      setUrl(socialLink.url);
      setDisplayOrder(socialLink.display_order);
    } else {
      setPlatform("");
      setUrl("");
      setDisplayOrder(0);
    }
  }, [socialLink, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

      <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-background p-8 shadow-2xl">

        <h2 className="text-2xl font-bold">

          {socialLink
            ? "Edit Social Link"
            : "Add Social Link"}

        </h2>

        <p className="mt-2 text-muted-foreground">
          Connect your professional social profiles.
        </p>

        <div className="mt-8 space-y-6">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Platform
            </label>

            <input
              value={platform}
              onChange={(e) =>
                setPlatform(e.target.value)
              }
              placeholder="LinkedIn"
              className="w-full rounded-xl border px-4 py-3 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              URL
            </label>

            <input
              type="url"
              value={url}
              onChange={(e) =>
                setUrl(e.target.value)
              }
              placeholder="https://..."
              className="w-full rounded-xl border px-4 py-3 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Display Order
            </label>

            <input
              type="number"
              min={0}
              value={displayOrder}
              onChange={(e) =>
                setDisplayOrder(
                  Number(e.target.value)
                )
              }
              className="w-full rounded-xl border px-4 py-3 transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />

          </div>

        </div>

        <div className="mt-10 flex justify-end gap-3">

          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border px-5 py-3"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={async () => {
              try {
                setLoading(true);

                const payload = {
                  platform,
                  url,
                  display_order: displayOrder,
                };

                if (socialLink) {
                  await socialLinkService.updateSocialLink(
                    socialLink.id,
                    payload
                  );
                } else {
                  await socialLinkService.createSocialLink(
                    payload
                  );
                }

                onSuccess();
                onClose();
              } catch (error) {
                console.error(error);
                alert("Failed to save social link.");
              } finally {
                setLoading(false);
              }
            }}
            className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : socialLink
              ? "Update"
              : "Create"}
          </button>

        </div>

      </div>

    </div>
  );
}