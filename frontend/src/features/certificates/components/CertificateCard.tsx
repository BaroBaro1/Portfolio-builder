import {
  Award,
  Pencil,
  Trash2,
  CalendarDays,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

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

    <div className="group rounded-[28px] border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between gap-4">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30">

            <Award
              size={30}
              className="text-emerald-600"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold">

              {certificate.title}

            </h2>

            <div className="mt-2 flex items-center gap-2 text-muted-foreground">

              <ShieldCheck size={16} />

              {certificate.issuer}

            </div>

          </div>

        </div>

        <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">

          Certificate

        </div>

      </div>

      <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">

        <CalendarDays size={16} />

        {certificate.issue_date}

        {" — "}

        {certificate.expiration_date ?? "No Expiration"}

      </div>

      {certificate.credential_url && (

        <a
          href={certificate.credential_url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-medium text-emerald-600 transition hover:underline"
        >

          <ExternalLink size={16} />

          View Credential

        </a>

      )}

      <div className="mt-8 flex items-center justify-end gap-3 border-t pt-6">

        <button
          onClick={() => onEdit(certificate)}
          className="flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-muted"
        >

          <Pencil size={16} />

          Edit

        </button>

        <button
          onClick={onDelete}
          className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950/30"
        >

          <Trash2 size={16} />

          Delete

        </button>

      </div>

    </div>

  );

}