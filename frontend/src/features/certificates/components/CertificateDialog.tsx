import { useEffect, useState } from "react";

import {
  Award,
  ShieldCheck,
  CalendarDays,
  Link2,
  Image,
} from "lucide-react";

import type { Certificate } from "@/types/certificate";

import { certificateService } from "../services/certificateService";

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

  const [issueDate, setIssueDate] =
    useState("");

  const [expirationDate, setExpirationDate] =
    useState("");

  const [credentialUrl, setCredentialUrl] =
    useState("");

  const [image, setImage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    if (!open) return;

    if (!certificate) {

      setTitle("");
      setIssuer("");
      setIssueDate("");
      setExpirationDate("");
      setCredentialUrl("");
      setImage("");

      return;

    }

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

  }, [certificate, open]);

  async function handleSave() {

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

  }

  if (!open) return null;

  return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">

      <div className="flex min-h-full items-center justify-center p-6">

        <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[30px] border bg-background shadow-2xl">

          <div className="border-b bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-500 p-8 text-white">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-white/20 p-4">

                <Award size={34} />

              </div>

              <div>

                <h2 className="text-3xl font-bold">

                  {certificate
                    ? "Edit Certificate"
                    : "Add Certificate"}

                </h2>

                <p className="mt-2 text-white/90">

                  Showcase your professional certifications.

                </p>

              </div>

            </div>

          </div>

          <div className="space-y-8 p-8">

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                <Award size={16} />

                Certificate Title

              </label>

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="AWS Certified Developer"
                className="h-12 w-full rounded-xl border px-4 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />

            </div>

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                <ShieldCheck size={16} />

                Issuer

              </label>

              <input
                value={issuer}
                onChange={(e) => setIssuer(e.target.value)}
                placeholder="Amazon Web Services"
                className="h-12 w-full rounded-xl border px-4 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                  <CalendarDays size={16} />

                  Issue Date

                </label>

                <input
                  type="date"
                  value={issueDate}
                  onChange={(e) =>
                    setIssueDate(e.target.value)
                  }
                  className="h-12 w-full rounded-xl border px-4"
                />

              </div>

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                  <CalendarDays size={16} />

                  Expiration Date

                </label>

                <input
                  type="date"
                  value={expirationDate}
                  onChange={(e) =>
                    setExpirationDate(e.target.value)
                  }
                  className="h-12 w-full rounded-xl border px-4"
                />

              </div>

            </div>

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                <Link2 size={16} />

                Credential URL

              </label>

              <input
                value={credentialUrl}
                onChange={(e) =>
                  setCredentialUrl(e.target.value)
                }
                placeholder="https://..."
                className="h-12 w-full rounded-xl border px-4 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />

            </div>

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                <Image size={16} />

                Certificate Image

              </label>

              <input
                value={image}
                onChange={(e) =>
                  setImage(e.target.value)
                }
                placeholder="https://..."
                className="h-12 w-full rounded-xl border px-4 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />

            </div>

          </div>

          <div className="flex justify-end gap-3 border-t p-6">

            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-xl border px-6 py-3"
            >
              Cancel
            </button>

            <button
              type="button"
              disabled={loading}
              onClick={handleSave}
              className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
            >
              {loading
                ? "Saving..."
                : certificate
                ? "Update Certificate"
                : "Create Certificate"}
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}