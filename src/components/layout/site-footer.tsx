import { contactLinks } from "@/data/links";
import { profile } from "@/data/profile";

import { CtaLink } from "@/components/ui/cta-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-950">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-8 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <p className="max-w-3xl text-sm leading-6 text-zinc-600">
          {profile.name} - {profile.footerNote}
        </p>
        <div className="flex flex-wrap gap-3">
          {contactLinks.map((link) => (
            <CtaLink key={link.label} link={link} variant="quiet" />
          ))}
        </div>
      </div>
    </footer>
  );
}
