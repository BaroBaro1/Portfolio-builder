import { Mail } from "lucide-react";

import {
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
const navigation = [
  {
    title: "Product",
    links: [
      "Features",
      "How it works",
      "Preview",
    ],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "Support",
      "FAQ",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Cookies",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-black tracking-tight text-emerald-500">
              BARO
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-600 dark:text-slate-400">
              Build, manage and publish your professional identity
              with a modern portfolio designed for your career.
            </p>

            {/* Social Links */}

<div className="mt-8 flex gap-4">

  <a
    href="https://github.com/BaroBaro1"
    aria-label="GitHub"
    className="rounded-full border border-slate-200 p-3 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700"
  >
    <FaGithub size={18} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=6158742467840"
    aria-label="Facebook"
    className="rounded-full border border-slate-200 p-3 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700"
  >
    <FaFacebook size={18} />
  </a>

  <a
    href="mailto:baraabahrih@gmail.com"
    aria-label="Email"
    className="rounded-full border border-slate-200 p-3 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700"
  >
    <Mail size={18} />
  </a>

</div>

          </div>

          {/* Right */}

          <div className="grid grid-cols-3 gap-10">

            {navigation.map((section) => (

              <div key={section.title}>

                <h3 className="mb-6 font-semibold text-slate-900 dark:text-white">
                  {section.title}
                </h3>

                <ul className="space-y-4">

                  {section.links.map((link) => (

                    <li key={link}>

                      <a
                        href="#"
                        className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                      >
                        {link}
                      </a>

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 md:flex-row">

          <p>
            © {new Date().getFullYear()} BARO. All rights reserved.
          </p>

          <p>
            Crafted with ❤️ using React, Laravel & Tailwind CSS.
          </p>

        </div>

      </div>

    </footer>
  );
}