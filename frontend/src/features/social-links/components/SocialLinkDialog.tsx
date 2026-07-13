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

        if (socialLink) {

            setPlatform(socialLink.platform);

            setUrl(socialLink.url);

            setDisplayOrder(socialLink.display_order);

        } else {

            setPlatform("");

            setUrl("");

            setDisplayOrder(0);

        }

    }, [socialLink]);

    if (!open) return null;

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {

        e.preventDefault();

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

        } finally {

            setLoading(false);

        }

    }
        return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-lg rounded-2xl bg-background p-6 shadow-xl">

                <h2 className="mb-6 text-2xl font-bold">

                    {socialLink ? "Edit Social Link" : "Add Social Link"}

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        placeholder="Platform"
                        className="w-full rounded-lg border p-3"
                        required
                    />

                    <input
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://..."
                        type="url"
                        className="w-full rounded-lg border p-3"
                        required
                    />

                    <input
                        value={displayOrder}
                        onChange={(e) =>
                            setDisplayOrder(Number(e.target.value))
                        }
                        type="number"
                        min={0}
                        placeholder="Display Order"
                        className="w-full rounded-lg border p-3"
                    />

                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border px-4 py-2"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-lg bg-primary px-4 py-2 text-primary-foreground"
                        >
                            {loading
                                ? "Saving..."
                                : socialLink
                                ? "Update"
                                : "Create"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}