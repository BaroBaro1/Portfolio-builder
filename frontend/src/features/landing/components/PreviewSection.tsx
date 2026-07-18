import { Sparkles } from "lucide-react";

export default function PreviewSection() {
  return (
<section
  id="preview"
  className="relative overflow-hidden py-32"
>
      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]"></div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400">
            <Sparkles className="h-4 w-4" />
Built with Portfoido
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Your future portfolio,
            <br />
            beautifully crafted.
          </h2>

        </div>

        {/* MacBook */}

        <div className="mx-auto max-w-5xl">

          <div className="rounded-[32px] border border-slate-300 bg-slate-800 p-3 shadow-2xl dark:border-slate-700">

            {/* Screen */}

            <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900">

              {/* Browser Bar */}

              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-6 py-4 dark:border-slate-800 dark:bg-slate-950">

                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>

                <div className="rounded-full bg-white px-6 py-2 text-sm text-slate-500 shadow-sm dark:bg-slate-800 dark:text-slate-400">
                  portfoido.app/demo
                </div>

                <div className="w-10"></div>

              </div>

              {/* Temporary Preview */}

              <div className="flex h-[520px] items-center justify-center">


    <iframe
        src="/demo"
        title="Portfolio Preview"
        className="h-full w-full rounded-b-3xl border-0"
    />

                  

                

              </div>

            </div>

            {/* MacBook Bottom */}

            <div className="flex justify-center pt-3">

              <div className="h-2 w-44 rounded-full bg-slate-500"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}