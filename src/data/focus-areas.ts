export type EngineeringFocusArea = {
  title: string;
  items: string[];
};

export const frontendEngineeringFocus: EngineeringFocusArea[] = [
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
    title: "UI Systems And Forms",
    items: [
      "Reusable components",
      "Responsive layouts",
      "Design-system collaboration",
      "Form handling",
      "Validation",
      "Tables and filters",
      "Dashboards",
      "Complex user flows",
    ],
  },
  {
    title: "SEO And Performance",
    items: [
      "Core Web Vitals",
      "Lighthouse",
      "Metadata",
      "Semantic structure",
      "Image optimization",
      "Lazy loading",
      "Bundle awareness",
      "Public-page performance",
    ],
  },
  {
    title: "Delivery And Collaboration",
    items: [
      "Git",
      "CI/CD awareness",
      "Deployment coordination",
      "Frontend infrastructure support",
      "Debugging",
      "Production issue handling",
      "Cross-functional collaboration",
    ],
  },
];
