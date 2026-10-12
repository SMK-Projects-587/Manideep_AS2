type MoodCardProps = {
  title: string;
  count: number;
};

function MoodCard({ title, count }: MoodCardProps) {
  return (
    <div className="border-border bg-background flex h-[188px] flex-col rounded-3xl border px-5 py-7">
      <div className="bg-mood-bg flex h-[56px] w-[56px] items-center justify-center rounded-xl">
        <span className="font-display text-mood-text text-[24px]">
          {title.charAt(0)}
        </span>
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <p className="text-heading text-sm font-medium">{title}</p>
        <p className="text-secondary text-xs leading-none">{count} quotes</p>
      </div>
    </div>
  );
}

export default MoodCard;
