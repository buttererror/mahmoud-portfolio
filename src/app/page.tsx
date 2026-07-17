import { CaseStudyCard } from "@/components/cards/case-study-card";
import { EngineeringFocusCard } from "@/components/cards/engineering-focus-card";
import { InfoCard } from "@/components/cards/info-card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/sections/section";
import { CtaLink } from "@/components/ui/cta-link";
import { coreFrontendCapabilities } from "@/data/capabilities";
import { selectedCaseStudies } from "@/data/case-studies";
import { domainExperience } from "@/data/domains";
import { frontendEngineeringFocus } from "@/data/focus-areas";
import { contactLinks, heroLinks } from "@/data/links";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 text-zinc-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-zinc-950 focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zinc-950"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <section aria-labelledby="hero-title" className="border-b border-zinc-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-5 pb-4 pt-8 sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-5xl">
              <p className="text-sm font-semibold uppercase text-teal-700">
                {profile.role}
              </p>
              <h1
                id="hero-title"
                className="mt-3 max-w-5xl text-[1.75rem] font-bold leading-tight text-zinc-950 sm:mt-5 sm:text-5xl lg:text-6xl"
              >
                {profile.headline}
              </h1>
              <div className="mt-4 max-w-3xl space-y-2 text-sm leading-6 text-zinc-600 sm:mt-6 sm:space-y-3 sm:text-lg sm:leading-8">
                <p>{profile.summary}</p>
                <p>{profile.workFocus}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 sm:mt-8">
                {heroLinks.map((link) => (
                  <CtaLink key={link.label} link={link} />
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-1 border-t border-zinc-200 pt-4 sm:mt-8 sm:pt-5">
                <span className="mr-3 text-sm font-medium text-zinc-500">Connect</span>
                {contactLinks.map((link) => (
                  <CtaLink key={link.label} link={link} variant="quiet" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Section
          id="experience"
          eyebrow="Domain experience"
          title="Frontend experience across products and industries"
          description="I've worked on frontend applications across different domains and product types, from public websites to internal dashboards and operational platforms."
          tone="white"
        >
          <div className="grid gap-4 md:grid-cols-12">
            {domainExperience.map((item, index) => (
              <InfoCard
                key={item.title}
                item={item}
                className={index < 3 ? "md:col-span-6 lg:col-span-4" : "md:col-span-6"}
              />
            ))}
          </div>
        </Section>

        <Section
          id="capabilities"
          eyebrow="Core capabilities"
          title="Core frontend capabilities"
          description="I focus on building frontend systems that are usable, maintainable, performant, and aligned with product needs."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {coreFrontendCapabilities.map((item) => (
              <InfoCard key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section
          id="case-studies"
          eyebrow="Selected work"
          title="Selected case studies"
          description="Most of my professional work is private, so these case studies focus on public-safe summaries of responsibilities, product context, frontend decisions, and engineering approach."
          tone="white"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {selectedCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} />
            ))}
          </div>
        </Section>

        <Section
          id="engineering-focus"
          eyebrow="Engineering approach"
          title="Frontend engineering focus"
          description="The tools vary by project, but my frontend work is consistently focused on clarity, maintainability, performance, and product delivery."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {frontendEngineeringFocus.map((focusArea) => (
              <EngineeringFocusCard key={focusArea.title} focusArea={focusArea} />
            ))}
          </div>
        </Section>

        <Section
          id="current-direction"
          eyebrow="Career direction"
          title="Current direction"
          description={profile.careerDirection}
          tone="white"
        >
          <div className="grid gap-6 border-t border-zinc-200 pt-6 md:grid-cols-2 md:gap-10">
            <p className="text-base leading-7 text-zinc-700">{profile.roleDirection}</p>
            <div className="border-l-2 border-teal-600 pl-4">
              <p className="text-sm font-semibold text-zinc-950">Expanding product perspective</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {profile.backendDirection}
              </p>
            </div>
          </div>
        </Section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="scroll-mt-32 bg-zinc-950 py-14 text-white sm:py-18"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase text-teal-300">Contact</p>
              <h2 id="contact-title" className="mt-3 text-2xl font-bold sm:text-3xl">
                Let&apos;s connect
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
                {profile.contactMessage}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <CtaLink key={link.label} link={link} variant="secondary" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
