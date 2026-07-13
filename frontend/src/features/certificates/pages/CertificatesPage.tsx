import { useState } from "react";

import { useCertificates } from "../hooks/useCertificates";

import CertificatesGrid from "../components/CertificatesGrid";
import CertificateDialog from "../components/CertificateDialog";

import { certificateService } from "../services/certificateService";

import type { Certificate } from "@/types/certificate";

export default function CertificatesPage() {

    const {

        certificates,

        loading,

        error,

        reload,

    } = useCertificates();

    const [open, setOpen] = useState(false);

    const [selectedCertificate, setSelectedCertificate] =
        useState<Certificate | null>(null);

    if (loading) {

        return (

            <div className="p-10 text-center">

                Loading certificates...

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

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">

                        Certificates

                    </h1>

                    <p className="text-muted-foreground">

                        Manage your professional certificates.

                    </p>

                </div>

                <button

                    onClick={() => {

                        setSelectedCertificate(null);

                        setOpen(true);

                    }}

                    className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"

                >

                    Add Certificate

                </button>

            </div>

            <CertificatesGrid

                certificates={certificates}

                onEdit={(certificate) => {

                    setSelectedCertificate(certificate);

                    setOpen(true);

                }}

                onDelete={async (id) => {

                    if (!confirm("Delete this certificate?")) {

                        return;

                    }

                    try {

                        await certificateService.deleteCertificate(id);

                        reload();

                    } catch (error) {

                        console.error(error);

                    }

                }}

            />

            <CertificateDialog

                open={open}

                certificate={selectedCertificate}

                onClose={() => {

                    setOpen(false);

                    setSelectedCertificate(null);

                }}

                onSuccess={reload}

            />

        </div>

    );

}