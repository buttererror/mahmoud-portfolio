export type PortfolioLink = {
  label: string;
  href: string | null;
  isPrimary?: boolean;
  isExternal?: boolean;
};

export const navigationLinks: PortfolioLink[] = [
  { label: "Expertise", href: "#expertise" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

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

export const resumeLink: PortfolioLink = {
  label: "Resume",
  href: null,
  isExternal: true,
};
