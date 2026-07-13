import { useEffect, useState } from "react";

import { certificateService } from "../services/certificateService";

import type { Certificate } from "@/types/certificate";

export function useCertificates() {

    const [certificates, setCertificates] = useState<Certificate[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    async function loadCertificates() {

        try {

            setLoading(true);

            const data = await certificateService.getCertificates();

            setCertificates(data);

        } catch {

            setError("Failed to load certificates");

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        loadCertificates();

    }, []);

    return {

        certificates,

        loading,

        error,

        reload: loadCertificates,

        setCertificates,

    };

}