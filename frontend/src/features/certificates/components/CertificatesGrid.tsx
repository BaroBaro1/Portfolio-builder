import type { Certificate } from "@/types/certificate";

import CertificateCard from "./CertificateCard";

type Props = {
  certificates: Certificate[];

  onCreate: () => void;

  onEdit: (certificate: Certificate) => void;

  onDelete: (id: number) => void;
};

export default function CertificatesGrid({
  certificates,

  onEdit,
  onDelete,
}: Props) {

  return (

    <div className="space-y-8">

      

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

    </div>

  );

}