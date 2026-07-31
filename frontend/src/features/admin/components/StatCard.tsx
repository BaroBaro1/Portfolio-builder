type Props = {
  title: string;
  value: number;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">

      <h3 className="text-muted-foreground">
        {title}
      </h3>

      <p className="mt-4 text-5xl font-black">
        {value}
      </p>

    </div>
  );
}