export type FrontendCapability = {
  title: string;
  description: string;
};

export const coreFrontendCapabilities: FrontendCapability[] = [
  {
    title: "Dashboards And Internal Tools",
    description:
      "Dashboard interfaces for admin teams, contractors, operations teams, service providers, and business users across B2B and B2C contexts.",
  },
  {
    title: "Public Websites And Landing Pages",
    description:
      "Public-facing pages focused on responsive UI, SEO, page structure, performance, maintainability, and collaboration with marketing or SEO teams.",
  },
  {
    title: "Frontend Architecture And Refactoring",
    description:
      "Frontend architecture decisions, reusable UI patterns, progressive refactoring, and maintainability improvements while continuing to deliver new features.",
  },
  {
    title: "Integration And Delivery",
    description:
      "API-driven interfaces, production release support, deployment coordination, and collaboration with backend, UI/UX, product, and system teams.",
  },
];
