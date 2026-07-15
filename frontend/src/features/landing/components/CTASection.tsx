import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
<section
  id="pricing"
  className="py-32"
>      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 px-10 py-24 text-center shadow-2xl">

          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            Start today
          </span>

          <h2 className="mx-auto mt-8 max-w-3xl text-5xl font-bold leading-tight text-white">
  Create your portfolio.
  <br />
  Share your story.
  <br />
  Grow your career.
</h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/85">
            Create your portfolio in minutes, publish it instantly,
            and let your work speak for itself.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

            <Link to="/register">
  <Button
    size="lg"
    className="rounded-full bg-white px-8 text-emerald-700 hover:bg-slate-100"
  >
    Get Started
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</Link>

            <Link to="/portfolio/demo">
  <Button
    size="lg"
    variant="outline"
    className="rounded-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-emerald-700"
  >
    Live Demo
  </Button>
</Link>

          </div>

        </div>

      </div>
    </section>
  );
}