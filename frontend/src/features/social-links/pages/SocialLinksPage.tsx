import { useState } from "react";

import { useSocialLinks } from "../hooks/useSocialLinks";
import { socialLinkService } from "../services/socialLinkService";

import type { SocialLink } from "@/types/social-link";

import SocialHeader from "../components/SocialHeader";
import SocialLinksGrid from "../components/SocialLinksGrid";
import SocialLinkDialog from "../components/SocialLinkDialog";

export default function SocialLinksPage() {

  const {
    socialLinks,
    loading,
    error,
    reload,
  } = useSocialLinks();

  const [open, setOpen] = useState(false);

  const [selected, setSelected] =
    useState<SocialLink | null>(null);

  function createSocialLink() {

    setSelected(null);

    setOpen(true);

  }

  function editSocialLink(
    socialLink: SocialLink
  ) {

    setSelected(socialLink);

    setOpen(true);

  }

  async function deleteSocialLink(id: number) {

    const confirmed = window.confirm(
      "Delete this social link?"
    );

    if (!confirmed) return;

    try {

      await socialLinkService.deleteSocialLink(id);

      reload();

    } catch {

      alert("Failed to delete social link.");

    }

  }

  if (loading) {

    return (
      <div className="p-10 text-center">
        Loading social links...
      </div>
    );

  }

  if (error) {

    return (
      <div className="p-10 text-red-500">
        {error}
      </div>
    );

  }

  return (

    <div className="space-y-8">

      <SocialHeader
        total={socialLinks.length}
        onCreate={createSocialLink}
      />

      <SocialLinksGrid
        socialLinks={socialLinks}
        onCreate={createSocialLink}
        onEdit={editSocialLink}
        onDelete={deleteSocialLink}
      />

      <SocialLinkDialog
        open={open}
        socialLink={selected}
        onClose={() => {

          setOpen(false);

          setSelected(null);

        }}
        onSuccess={reload}
      />

    </div>

  );

}