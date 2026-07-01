import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-xl font-bold text-emerald-600">
          Portfolio Builder
        </h1>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex">
          <a href="/" className="text-sm hover:text-emerald-600 transition-colors">
            Home
          </a>

          <a href="#" className="text-sm hover:text-emerald-600 transition-colors">
            Features
          </a>

          <a href="#" className="text-sm hover:text-emerald-600 transition-colors">
            Pricing
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <Button variant="ghost">
            🌙
          </Button>

          <Button variant="ghost">
            Sign In
          </Button>

          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Get Started
          </Button>

        </div>

      </div>
    </header>
  );
}