export default function PortfolioProgress() {
  const progress = 0;

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Portfolio Completion
        </h2>

        <span className="text-sm font-medium">
          {progress}%
        </span>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Complete your profile to publish your professional portfolio.
      </p>
    </div>
  );
}