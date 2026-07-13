import { useState } from "react";

import { Plus } from "lucide-react";

import { useSocialLinks } from "../hooks/useSocialLinks";

import { socialLinkService } from "../services/socialLinkService";

import type { SocialLink } from "@/types/social-link";

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

        if (!confirm("Delete this social link?")) return;

        try {

            await socialLinkService.deleteSocialLink(id);

            reload();

        } catch (error) {

            console.error(error);

        }

    }
        if (loading) {

        return <p className="p-8">Loading...</p>;

    }

    if (error) {

        return <p className="p-8 text-red-500">{error}</p>;

    }

    return (

        <div className="space-y-8">

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">

                        Social Links

                    </h1>

                    <p className="text-muted-foreground">

                        Manage your social profiles.

                    </p>

                </div>

                <button

                    onClick={createSocialLink}

                    className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-primary-foreground"

                >

                    <Plus size={18} />

                    Add Social Link

                </button>

            </div>

            <SocialLinksGrid

                socialLinks={socialLinks}

                onEdit={editSocialLink}

                onDelete={deleteSocialLink}

            />

            <SocialLinkDialog

                open={open}

                onClose={() => setOpen(false)}

                onSuccess={reload}

                socialLink={selected}

            />

        </div>

    );

}