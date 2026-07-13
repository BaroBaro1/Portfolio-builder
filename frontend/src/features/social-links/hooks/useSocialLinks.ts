import { useEffect, useState } from "react";

import { socialLinkService } from "../services/socialLinkService";

import type { SocialLink } from "@/types/social-link";

export function useSocialLinks() {

    const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    async function loadSocialLinks() {

        try {

            setLoading(true);

            const data = await socialLinkService.getSocialLinks();

            setSocialLinks(data);

        } catch {

            setError("Failed to load social links");

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        loadSocialLinks();

    }, []);

    return {

        socialLinks,

        loading,

        error,

        reload: loadSocialLinks,

        setSocialLinks,

    };

}