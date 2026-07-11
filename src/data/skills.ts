export type ExpertiseItem = {
  title: string;
  description: string;
};

export type TechStackGroup = {
  title: string;
  items: string[];
};

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "React.js And Next.js Applications",
    description:
      "Modern frontend applications using React.js, Next.js App Router, TypeScript, reusable components, API integration, and production-ready frontend workflows.",
  },
  {
    title: "Dashboards And Internal Tools",
    description:
      "Dashboard interfaces for contractor workflows, admin operations, healthcare platforms, e-commerce operations, and travel systems.",
  },
  {
    title: "SEO And Performance",
    description:
      "SEO-focused landing pages, page structure, metadata, Core Web Vitals, image optimization, lazy loading, and frontend performance improvements.",
  },
  {
    title: "Frontend Deployment",
    description:
      "Vercel, CI/CD workflows, DNS/domain configuration, deployment setup, and production release support.",
  },
];

export const techStack: TechStackGroup[] = [
  {
    title: "Core Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "UI And Dashboards",
    items: ["Responsive UI", "Reusable Components", "MUI", "Ant Design", "API Integration"],
  },
  {
    title: "Delivery",
    items: ["SEO", "Performance", "Core Web Vitals", "Vercel", "CI/CD"],
  },
  {
    title: "Backend Growth",
    items: ["Node.js", "NestJS", "PostgreSQL", "Prisma"],
  },
];
