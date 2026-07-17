type InfoCardItem = {
  title: string;
  description: string;
};

type InfoCardProps = {
  item: InfoCardItem;
  className?: string;
};

export function InfoCard({ item, className = "" }: InfoCardProps) {
  return (
    <article
      className={`h-full rounded-md border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-200/60 ${className}`}
    >
      <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
    </article>
  );
}
