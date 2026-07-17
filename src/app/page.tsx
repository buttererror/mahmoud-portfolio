import { CaseStudyCard } from "@/components/cards/case-study-card";
import { InfoCard } from "@/components/cards/info-card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/sections/section";
import { CtaLink } from "@/components/ui/cta-link";
import { coreFrontendCapabilities } from "@/data/capabilities";
import { selectedCaseStudies } from "@/data/case-studies";
import { domainExperience } from "@/data/domains";
import { contactLinks, heroLinks } from "@/data/links";
import { profile } from "@/data/profile";
import { techStack } from "@/data/skills";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />
      <main>
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
          eyebrow="Selected case studies"
          title="Proof areas recruiters can scan quickly."
          description="These summaries stay public-safe and avoid unsupported metrics or confidential implementation details."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {selectedCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} />
            ))}
          </div>
        </Section>

        <Section
          id="tech-stack"
          eyebrow="Tech stack"
          title="Tools organized around frontend delivery."
          description="A compact stack view keeps the focus on the role target while acknowledging backend growth as secondary."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group) => (
              <article
                key={group.title}
                className="rounded-md border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-200/60"
              >
                <h3 className="text-base font-semibold text-zinc-950">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-950"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Career direction"
          title="Focused on frontend strength, with backend growth in progress."
          description={profile.careerDirection}
        >
          <div className="rounded-md border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60">
            <p className="max-w-3xl text-base leading-7 text-zinc-600">
              The portfolio should make one message obvious: Mahmoud can build production UI,
              dashboards, SEO-focused pages, and reliable frontend experiences with React.js,
              Next.js, and TypeScript.
            </p>
          </div>
        </Section>

        <section id="contact" className="scroll-mt-24 bg-white py-14 sm:py-18">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="rounded-md border border-zinc-200 bg-zinc-950 p-6 text-white sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase text-teal-300">
                    Contact
                  </p>
                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Interested in React, Next.js, dashboard, SEO, or performance work?
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-300">
                    {profile.contactMessage}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {contactLinks.map((link) => (
                    <CtaLink key={link.label} link={link} variant="secondary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
