export type PortfolioLink = {
  label: string;
  href: string;
  isPrimary?: boolean;
  isExternal?: boolean;
};

export const navigationLinks: PortfolioLink[] = [
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
    label: "LinkedIn",
    href: "https://linkedin.com/in/buttererror",
    isPrimary: true,
    isExternal: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/buttererror",
    isExternal: true,
  },
];
