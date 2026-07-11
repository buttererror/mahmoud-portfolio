import { navigationLinks } from "@/data/links";
import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-sm font-bold tracking-wide text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
        >
          {profile.name}
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href ?? "#"}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
