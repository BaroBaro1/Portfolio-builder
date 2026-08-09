export default function PricingHeader() {
  return (
    <section className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-600">
        Pricing
      </span>

      <h1 className="mt-8 text-5xl font-black tracking-tight lg:text-6xl">
        Build your Professional Identity
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">
        Start completely free for 10 days.
        Upgrade whenever you're ready and publish your professional portfolio
        under your own public identity.
      </p>

      <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700">

        🎉 Save <strong>1000 DA</strong>

        <span className="text-emerald-400">
          •
        </span>

        Pay for 10 months and get 12 months.

      </div>

    </section>
  );
}
