export type EngineeringCapability = {
  title: string;
  description: string;
};

export const coreEngineeringCapabilities: EngineeringCapability[] = [
  {
    title: "Product Interfaces",
    description:
      "Responsive applications, dashboards, forms, and operational workflows built with reusable frontend patterns and accessible interactions.",
  },
  {
    title: "APIs And Application Logic",
    description:
      "REST APIs, authentication, validation, error handling, and service-layer logic that support complete product features.",
  },
  {
    title: "Relational Data And Persistence",
    description:
      "PostgreSQL data modeling and Prisma-backed persistence designed around current application requirements and workflows.",
  },
  {
    title: "Testing And Reliable Delivery",
    description:
      "Automated API, integration, and database-backed testing supported by practical Git, Docker, CI/CD, and deployment workflows.",
  },
];
