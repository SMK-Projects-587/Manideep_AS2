function QuoteSkeleton() {
  return (
    <article className="border-border rounded-2xl border p-5">
      <div className="space-y-2.5">
        <div className="bg-border h-3.5 w-full animate-pulse rounded-full" />
        <div className="bg-border h-3.5 w-3/4 animate-pulse rounded-full" />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="bg-border h-3.5 w-1/4 animate-pulse rounded-full" />
        <div className="bg-border h-7 w-20 animate-pulse rounded-full" />
      </div>
    </article>
  );
}

export default QuoteSkeleton;
