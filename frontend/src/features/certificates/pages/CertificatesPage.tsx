import { useState } from "react";

import { useCertificates } from "../hooks/useCertificates";
import { certificateService } from "../services/certificateService";

import type { Certificate } from "@/types/certificate";

import CertificatesHeader from "../components/CertificatesHeader";
import EmptyCertificates from "../components/EmptyCertificates";
import CertificatesGrid from "../components/CertificatesGrid";
import CertificateDialog from "../components/CertificateDialog";

export default function CertificatesPage() {

  const {
    certificates,
    loading,
    error,
    reload,
  } = useCertificates();

  const [open, setOpen] =
    useState(false);

  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  async function handleDelete(id: number) {

    const confirmed = window.confirm(
      "Delete this certificate?"
    );

    if (!confirmed) return;

    try {

      await certificateService.deleteCertificate(id);

      reload();

    } catch {

      alert("Failed to delete certificate.");

    }

  }

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

      <CertificatesHeader
        total={certificates.length}
        onCreate={() => {

          setSelectedCertificate(null);

          setOpen(true);

        }}
      />

      {certificates.length === 0 ? (

        <EmptyCertificates
          onCreate={() => {

            setSelectedCertificate(null);

            setOpen(true);

          }}
        />

      ) : (

        <CertificatesGrid
          certificates={certificates}
          onCreate={() => {

            setSelectedCertificate(null);

            setOpen(true);

          }}
          onEdit={(certificate) => {

            setSelectedCertificate(certificate);

            setOpen(true);

          }}
          onDelete={handleDelete}
        />

      )}

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