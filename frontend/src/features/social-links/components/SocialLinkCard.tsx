import { Pencil, Trash2, Link as LinkIcon } from "lucide-react";

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
        <div className="rounded-2xl border bg-card p-5 shadow-sm">

            <div className="flex items-start justify-between">

                <div className="space-y-2">

                    <h3 className="text-lg font-semibold">
                        {socialLink.platform}
                    </h3>

                    <a
                        href={socialLink.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                        <LinkIcon size={16} />
                        {socialLink.url}
                    </a>

                </div>

                <div className="flex gap-2">

                    <button
                        onClick={() => onEdit(socialLink)}
                        className="rounded-lg p-2 hover:bg-muted"
                    >
                        <Pencil size={18} />
                    </button>

                    <button
                        onClick={() => onDelete(socialLink.id)}
                        className="rounded-lg p-2 text-red-500 hover:bg-muted"
                    >
                        <Trash2 size={18} />
                    </button>

                </div>

            </div>

        </div>
    );
}