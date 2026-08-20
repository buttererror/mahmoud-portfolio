export type CaseStudy = {
  title: string;
  summary: string;
  tags: string[];
  href: string | null;
  note?: string;
};

export const selectedCaseStudies: CaseStudy[] = [
  {
    title: "Healthcare Operations Platform",
    summary:
      "Building an independent full-stack healthcare operations platform across React and TypeScript interfaces, a NestJS REST API, PostgreSQL data, Prisma persistence, authentication, validation, and automated testing.",
    tags: ["Vertical feature delivery", "REST APIs", "Relational data"],
    href: null,
  },
  {
    title: "Frontend Platforms And Dashboards",
    summary:
      "Worked on dashboard applications across B2B and B2C contexts, including admin dashboards, contractor workflows, service-provider tools, operations platforms, and internal business applications.",
    tags: ["Dashboard interfaces", "API-driven frontend", "Reusable UI patterns"],
    href: null,
  },
  {
    title: "Renohome Frontend Delivery",
    summary:
      "Worked on frontend delivery for a renovation platform, including public-facing pages, dashboard interfaces, frontend architecture, infrastructure support, progressive refactoring, and cross-functional collaboration.",
    tags: ["Feature delivery", "Progressive refactoring", "Production reliability"],
    href: null,
    note: "Note: The current live website may differ from the version I worked on.",
  },
  {
    title: "Healthtech Applications",
    summary:
      "Worked on healthtech frontend applications including service-provider tools, operations workflows, hospital system interfaces, landing pages, and doctor consultation experiences.",
    tags: ["Product interfaces", "Complex workflows", "Frontend delivery"],
    href: null,
  },
];
