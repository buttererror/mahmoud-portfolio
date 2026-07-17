import { CtaLink } from "@/components/ui/cta-link";
import { headerContactLink, navigationLinks } from "@/data/links";
import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3 sm:px-6 md:flex-nowrap md:py-4 lg:px-8">
        <a
          href="#top"
          className="text-sm font-bold text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950 sm:text-base"
        >
          {profile.name}
        </a>
        <nav
          aria-label="Primary navigation"
          className="order-3 flex w-full items-center gap-1 border-t border-zinc-200 pt-2 md:order-none md:ml-auto md:w-auto md:border-0 md:pt-0"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <CtaLink link={headerContactLink} />
      </div>
    </header>
  );
}
