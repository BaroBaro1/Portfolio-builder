import {
  Globe,
  Link2,
  ExternalLink,
  Laptop,
  BriefcaseBusiness,
  AtSign,
} from "lucide-react";

import type { SocialLink } from "@/types/social-link";

interface Props {
  socialLinks: SocialLink[];
}

const icons: Record<string, any> = {
  github: Laptop,
  gitlab: Laptop,

  linkedin: BriefcaseBusiness,

  portfolio: Globe,
  website: Globe,

  twitter: AtSign,
  x: AtSign,

  instagram: Link2,
  facebook: Link2,
  youtube: Link2,
  discord: Link2,
  telegram: Link2,
  whatsapp: Link2,
  tiktok: Link2,
  behance: Link2,
  dribbble: Link2,
};
export default function PortfolioSocial({
  socialLinks,
}: Props) {
  if (socialLinks.length === 0) return null;

  return (
    <section className="space-y-10">

      <div className="text-center">

        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
          Contact
        </span>

        <h2 className="mt-5 text-4xl font-black">

          Let's Connect

        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">

          Feel free to connect with me across different platforms.

        </p>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {socialLinks.map((link) => {

          const Icon =
            icons[link.platform.toLowerCase()] ?? Globe;

          return (

            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[28px] border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/30 dark:text-emerald-300">

                  <Icon size={30} />

                </div>

                <ExternalLink
                  className="text-muted-foreground transition group-hover:text-emerald-600"
                  size={20}
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold">

                {link.platform}

              </h3>

              <p className="mt-3 text-sm text-muted-foreground break-all">

                {link.url}

              </p>

            </a>

          );
        })}

      </div>

    </section>
  );
}