import type { PortfolioLink } from "@/data/links";

type CtaLinkProps = {
  link: PortfolioLink;
  variant?: "primary" | "secondary" | "quiet";
};

const variantClasses = {
  primary:
    "border-zinc-950 bg-zinc-950 text-white hover:bg-zinc-800 hover:border-zinc-800",
  secondary:
    "border-zinc-300 bg-white text-zinc-950 hover:border-zinc-950 hover:bg-zinc-50",
  quiet:
    "border-transparent bg-transparent text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100",
};

export function CtaLink({ link, variant }: CtaLinkProps) {
  const selectedVariant = variant ?? (link.isPrimary ? "primary" : "secondary");
  const className = `inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 ${variantClasses[selectedVariant]}`;

  const externalProps = link.isExternal
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${link.label} (opens in a new tab)`,
      }
    : {};

  return (
    <a href={link.href} className={className} {...externalProps}>
      {link.label}
    </a>
  );
}
