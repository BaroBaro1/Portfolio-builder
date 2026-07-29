import { Upload } from "lucide-react";

interface Props {
  file: File | null;
  onChange: (file: File | null) => void;
}

export default function ReceiptUploader({
  file,
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-8">

      <h2 className="mb-6 text-2xl font-bold">
        Upload Receipt
      </h2>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border p-10 transition hover:border-emerald-500">

        <Upload
          className="mb-4 text-emerald-500"
          size={34}
        />

        <p className="font-semibold">
          Click to upload your receipt
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          JPG • PNG • PDF
        </p>

        <input
          hidden
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={(e) =>
            onChange(
              e.target.files?.[0] ?? null
            )
          }
        />

      </label>

      {file && (
        <p className="mt-5 rounded-xl bg-emerald-50 p-3 text-sm font-medium text-emerald-700">

          {file.name}

        </p>
      )}

    </div>
  );
}