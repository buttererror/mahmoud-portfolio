import { CaseStudyCard } from "@/components/cards/case-study-card";
import { ExpertiseCard } from "@/components/cards/expertise-card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/sections/section";
import { CtaLink } from "@/components/ui/cta-link";
import { selectedCaseStudies } from "@/data/case-studies";
import { contactLinks, heroLinks } from "@/data/links";
import { homepageStats, profile } from "@/data/profile";
import { expertiseItems, techStack } from "@/data/skills";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />
      <main>
        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:px-8 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                {profile.role}
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                {profile.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{profile.summary}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {heroLinks.map((link) => (
                  <CtaLink key={link.label} link={link} />
                ))}
              </div>
            </div>

            <aside
              aria-label="Portfolio focus summary"
              className="rounded-md border border-zinc-200 bg-zinc-50 p-5 shadow-sm shadow-zinc-200/60"
            >
              <div className="grid gap-3">
                {homepageStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-md border border-zinc-200 bg-white px-4 py-3"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-zinc-950">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-md border border-teal-200 bg-teal-50 px-4 py-4">
                <p className="text-sm font-semibold text-teal-950">Current direction</p>
                <p className="mt-2 text-sm leading-6 text-teal-900">{profile.careerDirection}</p>
              </div>
            </aside>
          </div>
        </section>

        <Section
          id="expertise"
          eyebrow="Core expertise"
          title="Frontend work shaped around real delivery."
          description="The homepage focuses on the areas most relevant to React and Next.js roles: production UI, dashboard workflows, SEO, performance, and deployment support."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {expertiseItems.map((item) => (
              <ExpertiseCard key={item.title} item={item} />
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
                  <p className="text-sm font-semibold uppercase tracking-wide text-teal-300">
                    Contact
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    Interested in React, Next.js, dashboard, SEO, or performance work?
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-300">
                    Final contact links are still being confirmed. Placeholder states are visible
                    here so the layout can be reviewed without inventing links.
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
