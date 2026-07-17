import type { CaseStudy } from "@/data/case-studies";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-md border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-200/60">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-zinc-950">{caseStudy.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{caseStudy.summary}</p>
        {caseStudy.note ? (
          <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-900">
            {caseStudy.note}
          </p>
        ) : null}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700"
          >
            {tag}
          </span>
        ))}
      </div>
      {caseStudy.href ? (
        <a
          href={caseStudy.href}
          aria-label={`View case study: ${caseStudy.title}`}
          className="mt-5 text-sm font-semibold text-teal-700 hover:text-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
        >
          View case study
        </a>
      ) : null}
    </article>
  );
}
