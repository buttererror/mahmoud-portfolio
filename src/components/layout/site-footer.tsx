import { contactLinks } from "@/data/links";
import { profile } from "@/data/profile";

import { CtaLink } from "@/components/ui/cta-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-base font-semibold">{profile.name}</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">{profile.footerNote}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {contactLinks.map((link) => (
            <CtaLink key={link.label} link={link} variant="secondary" />
          ))}
        </div>
      </div>
    </footer>
  );
}
