import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="space-y-8">

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              New · Professional Portfolio Builder
            </div>

            {/* Heading */}

            <div className="space-y-6">

              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
                Create a portfolio
                <br />
                that opens
                <br />
                opportunities.
              </h1>

              <p className="max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-400">
                Build, manage and publish your professional identity
                from one modern platform — no coding required.
              </p>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight size={18} />
              </Button>

              <Button size="lg" variant="outline">
                Live Demo
              </Button>

            </div>

            {/* Benefits */}

            <div className="flex flex-col gap-3 pt-2 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:flex-wrap sm:gap-6">

              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                No Coding
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                Professional Design
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                Free to Start
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center">

            <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">

              {/* Fake Browser */}

              <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              {/* Fake Portfolio */}

              <div className="space-y-5">

                <div className="h-36 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500" />

                <div className="space-y-3">

                  <div className="h-6 w-52 rounded bg-slate-200 dark:bg-slate-700" />

                  <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />

                  <div className="h-4 w-4/5 rounded bg-slate-200 dark:bg-slate-700" />

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="h-28 rounded-xl bg-slate-100 dark:bg-slate-800" />

                  <div className="h-28 rounded-xl bg-slate-100 dark:bg-slate-800" />

                  <div className="h-28 rounded-xl bg-slate-100 dark:bg-slate-800" />

                  <div className="h-28 rounded-xl bg-slate-100 dark:bg-slate-800" />

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}