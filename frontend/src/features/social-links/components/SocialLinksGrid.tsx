import type { SocialLink } from "@/types/social-link";

import SocialLinkCard from "./SocialLinkCard";

interface Props {
    socialLinks: SocialLink[];
    onEdit: (socialLink: SocialLink) => void;
    onDelete: (id: number) => void;
}

export default function SocialLinksGrid({
    socialLinks,
    onEdit,
    onDelete,
}: Props) {
    if (socialLinks.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed p-12 text-center text-muted-foreground">
                No social links yet.
            </div>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {socialLinks.map((socialLink) => (
                <SocialLinkCard
                    key={socialLink.id}
                    socialLink={socialLink}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}