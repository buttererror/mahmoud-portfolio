export type { FrontendCapability as ExpertiseItem } from "./capabilities";
export type { EngineeringFocusArea as TechStackGroup } from "./focus-areas";

// Temporary compatibility exports for the prototype page. Later UI slices will
// consume the domain-specific names directly and remove this bridge.
export { coreFrontendCapabilities as expertiseItems } from "./capabilities";
export { frontendEngineeringFocus as techStack } from "./focus-areas";
