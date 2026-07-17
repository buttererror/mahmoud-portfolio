export type PortfolioLink = {
  label: string;
  href: string | null;
  isPrimary?: boolean;
  isExternal?: boolean;
};

export type ResolvedPortfolioLink = Omit<PortfolioLink, "href"> & {
  href: string;
};

export const navigationLinks: ResolvedPortfolioLink[] = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export const headerContactLink: PortfolioLink = {
  label: "Get in Touch",
  href: "#contact",
  isPrimary: true,
};

export const heroLinks: PortfolioLink[] = [
  { label: "View Case Studies", href: "#case-studies", isPrimary: true },
  {
    label: "View GitHub",
    href: "https://github.com/buttererror",
    isExternal: true,
  },
];

export const contactLinks: PortfolioLink[] = [
  {
    label: "Email",
    href: "mailto:mahmoud@buttererror.com",
    isPrimary: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/buttererror",
    isExternal: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/buttererror",
    isExternal: true,
  },
];
