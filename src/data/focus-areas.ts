export type EngineeringFocusArea = {
  title: string;
  items: string[];
};

export const fullStackEngineeringFocus: EngineeringFocusArea[] = [
  {
    title: "Modern Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vue.js",
      "Nuxt.js",
      "Component-based UI",
      "Routing",
      "State management",
      "API-driven interfaces",
    ],
  },
  {
    title: "Backend And Data",
    items: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "PostgreSQL",
      "Prisma ORM",
      "JWT authentication",
      "DTO validation",
      "Relational data modeling",
    ],
  },
  {
    title: "Product Interfaces",
    items: [
      "Reusable components",
      "Responsive layouts",
      "Forms and validation",
      "Tables and filters",
      "Dashboards",
      "Complex user flows",
      "SEO and performance",
      "Accessible UI",
    ],
  },
  {
    title: "Testing And Delivery",
    items: [
      "Jest",
      "Supertest",
      "API and integration testing",
      "Database-backed testing",
      "Git",
      "Docker",
      "CI/CD and deployment workflows",
    ],
  },
];
