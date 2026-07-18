import {
  Pencil,
  Trash2,
  Globe,
  ExternalLink,
} from "lucide-react";

import type { SocialLink } from "@/types/social-link";

interface Props {
  socialLink: SocialLink;
  onEdit: (socialLink: SocialLink) => void;
  onDelete: (id: number) => void;
}

export default function SocialLinkCard({
  socialLink,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm transition hover:shadow-md">

      <div className="flex items-start justify-between">

        <div className="space-y-3">

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400">

              <Globe size={22} />

            </div>

            <div>

              <h2 className="text-xl font-bold">

                {socialLink.platform}

              </h2>

              <p className="text-sm text-muted-foreground">

                Social Platform

              </p>

            </div>

          </div>

          <a
            href={socialLink.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 break-all text-sm text-emerald-600 transition hover:text-emerald-700 hover:underline"
          >

            <ExternalLink size={16} />

            {socialLink.url}

          </a>

        </div>

      </div>

      <div className="mt-8 flex items-center justify-end gap-2 border-t pt-6">

        <button
          onClick={() => onEdit(socialLink)}
          className="rounded-xl border p-3 transition hover:bg-muted"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => onDelete(socialLink.id)}
          className="rounded-xl border p-3 text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950/20"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}