import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
Portfoido · Professional Portfolio Builder
            </div>

            {/* Heading */}

            <div className="space-y-6">

              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
  Build your professional
  <br />
  identity.
  <br />
  Stand out everywhere.
</h1>

              <p className="max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-400">
                Create a beautiful professional portfolio, showcase your projects,
skills and experience, then share one powerful link with the world.
              </p>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <Link to="/register">
  <Button size="lg" className="gap-2">
    Get Started
    <ArrowRight size={18} />
  </Button>
</Link>

              <Link to="/demo">
  <Button size="lg" variant="outline">
    Live Demo
  </Button>
</Link>

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

         <div className="flex justify-center">

  <div className="relative">

    {/* Phone */}

    <div className="h-[760px] w-[380px] overflow-hidden rounded-[52px] border-[10px] border-slate-900 bg-black shadow-[0_40px_80px_rgba(0,0,0,.25)]">

  <div className="absolute left-1/2 top-3 z-30 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />

  <iframe
    src="/demo"
    title="Portfolio Preview"
    className="origin-top border-0"
    style={{
      width: "150%",
      height: "150%",
      transform: "scale(.67)",
      transformOrigin: "top left",
    }}
  />

</div> </div>

          </div>

        </div>
      </div>
    </section>
  );
}