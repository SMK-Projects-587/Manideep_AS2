import Button from './Button';
import QuoteCard from './QuoteCard';
import QuoteSkeleton from './QuoteSkeleton';

type Quote = {
  id: number;
  quote: string;
  author: string;
  mood: string;
};

type FreshQuotesProps = {
  quotes: Quote[];
  loading: boolean;
  error: string;
  onShuffle: () => void;
};

function FreshQuotes({ quotes, loading, error, onShuffle }: FreshQuotesProps) {
  return (
    <section className="border-border bg-background border-b">
      <div className="mx-auto w-full max-w-[1126px] px-4 py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-heading text-[20px] leading-none font-normal md:text-2xl">
            Fresh quotes
          </h2>

          <Button
            variant="secondary"
            onClick={onShuffle}
            disabled={loading}
            className="border-border text-primary gap-1.5 bg-white px-4 py-3 hover:bg-[#F5F3FF]"
          >
            ⟳ Shuffle
          </Button>
        </div>

        {error ? (
          <div className="mt-6">
            <p className="text-secondary text-sm">{error}</p>
            <Button
              variant="secondary"
              onClick={onShuffle}
              className="mt-3 px-4 py-2"
            >
              Try again
            </Button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className={index >= 3 ? 'hidden md:block' : ''}
                  >
                    <QuoteSkeleton />
                  </div>
                ))
              : quotes.map((quote, index) => (
                  <div
                    key={quote.id}
                    className={index >= 3 ? 'hidden md:block' : ''}
                  >
                    <QuoteCard
                      key={quote.id}
                      quote={quote.quote}
                      author={quote.author}
                      mood={quote.mood}
                    />
                  </div>
                ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FreshQuotes;
