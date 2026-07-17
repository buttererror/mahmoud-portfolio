import type { EngineeringFocusArea } from "@/data/focus-areas";

type EngineeringFocusCardProps = {
  focusArea: EngineeringFocusArea;
};

export function EngineeringFocusCard({ focusArea }: EngineeringFocusCardProps) {
  return (
    <article className="h-full rounded-md border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-200/60">
      <h3 className="text-lg font-semibold text-zinc-950">{focusArea.title}</h3>
      <ul className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">
        {focusArea.items.map((item) => (
          <li key={item} className="border-l-2 border-teal-600 pl-3 text-sm leading-6 text-zinc-600">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
