import type { Certificate } from "@/types/certificate";

import CertificateCard from "./CertificateCard";

type Props = {
    certificates: Certificate[];

    onEdit: (certificate: Certificate) => void;

    onDelete: (id: number) => void;
};

export default function CertificatesGrid({

    certificates,

    onEdit,

    onDelete,

}: Props) {

    if (certificates.length === 0) {

        return (

            <div className="rounded-3xl border border-dashed p-16 text-center">

                <h2 className="text-xl font-semibold">

                    No certificates yet

                </h2>

                <p className="mt-2 text-muted-foreground">

                    Add your first certificate.

                </p>

            </div>

        );

    }

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {certificates.map((certificate) => (

                <CertificateCard

                    key={certificate.id}

                    certificate={certificate}

                    onEdit={onEdit}

                    onDelete={() => onDelete(certificate.id)}

                />

            ))}

        </div>

    );

}