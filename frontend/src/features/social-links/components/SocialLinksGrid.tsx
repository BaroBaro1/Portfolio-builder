import type { SocialLink } from "@/types/social-link";

import SocialLinkCard from "./SocialLinkCard";
import EmptySocialLinks from "./EmptySocialLinks";

interface Props {
  socialLinks: SocialLink[];
  onCreate: () => void;
  onEdit: (socialLink: SocialLink) => void;
  onDelete: (id: number) => void;
}

export default function SocialLinksGrid({
  socialLinks,
  onCreate,
  onEdit,
  onDelete,
}: Props) {
  if (socialLinks.length === 0) {
    return (
      <EmptySocialLinks
        onCreate={onCreate}
      />
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">

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