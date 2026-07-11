export type CaseStudy = {
  title: string;
  summary: string;
  tags: string[];
  href: string | null;
  note?: string;
};

export const selectedCaseStudies: CaseStudy[] = [
  {
    title: "Renohome Website",
    summary:
      "Built frontend pages with Next.js App Router and TypeScript, supporting SEO-focused structure, performance improvements, deployment, and production release work.",
    tags: ["Next.js", "TypeScript", "SEO", "Vercel"],
    href: null,
    note: "The live website may have changed after Mahmoud's contribution.",
  },
  {
    title: "React Dashboards",
    summary:
      "Worked on dashboard interfaces for contractor, admin, healthcare, e-commerce, and travel workflows with reusable UI patterns and API integration.",
    tags: ["React.js", "TypeScript", "Dashboards", "API Integration"],
    href: null,
  },
  {
    title: "Healthtech Video Consultation App",
    summary:
      "Contributed to healthcare-specific video consultation workflows using SPA architecture and collaboration across backend and system administration teams.",
    tags: ["SPA", "Twilio", "QuickBlox", "Healthcare UI"],
    href: null,
  },
];
