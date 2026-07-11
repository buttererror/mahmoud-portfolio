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
  { label: "View GitHub", href: null, isExternal: true },
  { label: "Contact Me", href: "#contact" },
];

export const contactLinks: PortfolioLink[] = [
  { label: "Email", href: null, isPrimary: true },
  { label: "LinkedIn", href: null, isExternal: true },
  { label: "GitHub", href: null, isExternal: true },
  { label: "Resume", href: null, isExternal: true },
];
