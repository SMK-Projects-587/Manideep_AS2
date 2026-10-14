type QuoteCardProps = {
  quote: string;
  author: string;
  mood: string;
};

function QuoteCard({ quote, author, mood }: QuoteCardProps) {
  return (
    <article className="border-border flex h-full flex-col rounded-2xl border bg-white p-5">
      <p className="font-display text-heading text-[16px] leading-[1.4] font-normal">
        “{quote}”
      </p>

      <div className="mt-auto flex items-end justify-between gap-3 pt-4">
        <p className="text-secondary text-xs font-normal">{author}</p>

        <span className="bg-mood-bg text-primary shrink-0 rounded-full px-4 text-[11px]">
          {mood}
        </span>
      </div>
    </article>
  );
}

export default QuoteCard;
