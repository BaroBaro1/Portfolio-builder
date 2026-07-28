import { Check } from "lucide-react";

interface Props {
  label: string;
}

export default function PricingFeature({
  label,
}: Props) {
  return (
    <div className="flex items-center gap-3">

      <div className="rounded-full bg-emerald-500/10 p-1">
        <Check
          size={15}
          className="text-emerald-600"
        />
      </div>

      <span className="text-sm">
        {label}
      </span>

    </div>
  );
}