import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-18">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-700">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
