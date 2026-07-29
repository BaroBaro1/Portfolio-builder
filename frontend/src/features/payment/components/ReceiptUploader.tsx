import { Upload, FileImage } from "lucide-react";

interface Props {
  value: File | null;
  onChange: (file: File | null) => void;
}

export default function ReceiptUploader({
  value,
  onChange,
}: Props) {
  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    onChange(file);
  }

  return (
    <div>

      <label className="mb-3 block font-semibold">
        Payment Receipt
      </label>

      <label
        htmlFor="receipt"
        className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-emerald-300 bg-emerald-50 p-10 transition hover:border-emerald-500 hover:bg-emerald-100"
      >
        {!value ? (
          <>
            <Upload
              size={42}
              className="mb-4 text-emerald-600"
            />

            <p className="text-lg font-bold">
              Upload Payment Receipt
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              JPG, PNG or PDF
            </p>
          </>
        ) : (
          <>
            <FileImage
              size={42}
              className="mb-4 text-emerald-600"
            />

            <p className="font-bold">
              {value.name}
            </p>

            <p className="mt-2 text-sm text-emerald-600">
              File selected successfully
            </p>
          </>
        )}
      </label>

      <input
        id="receipt"
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        className="hidden"
        onChange={handleFileChange}
      />

    </div>
  );
}