import type { ExpertiseItem } from "@/data/skills";

type ExpertiseCardProps = {
  item: ExpertiseItem;
};

export function ExpertiseCard({ item }: ExpertiseCardProps) {
  return (
    <article className="rounded-md border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-200/60">
      <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
    </article>
  );
}
