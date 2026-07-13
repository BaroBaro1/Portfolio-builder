import { Pencil, Trash2, Award } from "lucide-react";

import type { Certificate } from "@/types/certificate";

type Props = {
    certificate: Certificate;

    onEdit: (certificate: Certificate) => void;

    onDelete: () => void;
};

export default function CertificateCard({

    certificate,

    onEdit,

    onDelete,

}: Props) {

    return (

        <div className="rounded-3xl border bg-card p-6 shadow-sm transition hover:shadow-md">

            <div className="flex items-start justify-between">

                <div>

                    <h2 className="text-xl font-bold">

                        {certificate.title}

                    </h2>

                    <p className="mt-1 text-muted-foreground">

                        {certificate.issuer}

                    </p>

                </div>

                <Award
                    className="text-emerald-600"
                    size={22}
                />

            </div>

            <div className="mt-6 text-sm text-muted-foreground">

                {certificate.issue_date}

                {" - "}

                {certificate.expiration_date ?? "No Expiration"}

            </div>

            {certificate.credential_url && (

                <a

                    href={certificate.credential_url}

                    target="_blank"

                    rel="noreferrer"

                    className="mt-4 block text-sm text-emerald-600 hover:underline"

                >

                    View Credential

                </a>

            )}

            <div className="mt-8 flex items-center justify-end gap-2 border-t pt-6">

                <button

                    onClick={() => onEdit(certificate)}

                    className="rounded-xl border p-3 hover:bg-muted"

                >

                    <Pencil size={18} />

                </button>

                <button

                    onClick={onDelete}

                    className="rounded-xl border p-3 text-red-600 hover:bg-red-50"

                >

                    <Trash2 size={18} />

                </button>

            </div>

        </div>

    );

}