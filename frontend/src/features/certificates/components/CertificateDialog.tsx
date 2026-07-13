import { useEffect, useState } from "react";

import { certificateService } from "../services/certificateService";

import type { Certificate } from "@/types/certificate";

type Props = {

    open: boolean;

    onClose: () => void;

    onSuccess: () => void;

    certificate: Certificate | null;

};

export default function CertificateDialog({

    open,

    certificate,

    onClose,

    onSuccess,

}: Props) {

    const [title, setTitle] = useState("");

    const [issuer, setIssuer] = useState("");

    const [issueDate, setIssueDate] = useState("");

    const [expirationDate, setExpirationDate] = useState("");

    const [credentialUrl, setCredentialUrl] = useState("");

    const [image, setImage] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (certificate) {

            setTitle(certificate.title);

            setIssuer(certificate.issuer);

            setIssueDate(certificate.issue_date);

            setExpirationDate(

                certificate.expiration_date ?? ""

            );

            setCredentialUrl(

                certificate.credential_url ?? ""

            );

            setImage(

                certificate.image ?? ""

            );

        } else {

            setTitle("");

            setIssuer("");

            setIssueDate("");

            setExpirationDate("");

            setCredentialUrl("");

            setImage("");

        }

    }, [certificate]);

    if (!open) return null;
    return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

        <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">

            <h2 className="mb-8 text-2xl font-bold">

                {certificate

                    ? "Edit Certificate"

                    : "Add Certificate"}

            </h2>

            <div className="grid gap-5">

                <input

                    value={title}

                    onChange={(e) => setTitle(e.target.value)}

                    placeholder="Certificate title"

                    className="rounded-xl border px-4 py-3"

                />

                <input

                    value={issuer}

                    onChange={(e) => setIssuer(e.target.value)}

                    placeholder="Issuer"

                    className="rounded-xl border px-4 py-3"

                />

                <input

                    type="date"

                    value={issueDate}

                    onChange={(e) => setIssueDate(e.target.value)}

                    className="rounded-xl border px-4 py-3"

                />

                <input

                    type="date"

                    value={expirationDate}

                    onChange={(e) =>

                        setExpirationDate(e.target.value)

                    }

                    className="rounded-xl border px-4 py-3"

                />

                <input

                    value={credentialUrl}

                    onChange={(e) =>

                        setCredentialUrl(e.target.value)

                    }

                    placeholder="Credential URL"

                    className="rounded-xl border px-4 py-3"

                />

                <input

                    value={image}

                    onChange={(e) => setImage(e.target.value)}

                    placeholder="Image URL"

                    className="rounded-xl border px-4 py-3"

                />

            </div>

            <div className="mt-8 flex justify-end gap-3">

                <button

                    onClick={onClose}

                    className="rounded-xl border px-5 py-3"

                >

                    Cancel

                </button>
                                <button
                    type="button"
                    disabled={loading}
                    onClick={async () => {

                        try {

                            setLoading(true);

                            const payload = {

                                title,

                                issuer,

                                issue_date: issueDate,

                                expiration_date:
                                    expirationDate || null,

                                credential_url:
                                    credentialUrl || null,

                                image:
                                    image || null,

                                display_order: 0,

                            };

                            if (certificate) {

                                await certificateService.updateCertificate(

                                    certificate.id,

                                    payload

                                );

                            } else {

                                await certificateService.createCertificate(

                                    payload

                                );

                            }

                            onSuccess();

                            onClose();

                        } catch (error) {

                            console.error(error);

                            alert("Failed to save certificate.");

                        } finally {

                            setLoading(false);

                        }

                    }}
                    className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
                >
                    {loading
                        ? "Saving..."
                        : certificate
                        ? "Update"
                        : "Create"}
                </button>

            </div>

        </div>

    </div>

);

}