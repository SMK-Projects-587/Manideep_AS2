import { useEffect, useState } from 'react';

import FreshQuotes from './FreshQuotes';

type Quote = {
  id: number;
  quote: string;
  author: string;
  mood: string;
};

type ApiQuote = {
  id: number;
  quote: string;
  author: string;
};

function FreshQuotesContainer() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function fetchQuotes() {
    try {
      setLoading(true);
      setError('');

      const response = await fetch('https://dummyjson.com/quotes/random/6');

      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }

      const data: ApiQuote[] = await response.json();

      const moods = ['motivation', 'wisdom', 'humour', 'love'];

      const formattedQuotes: Quote[] = data.map((item, index) => ({
        ...item,
        mood: moods[index % moods.length],
      }));

      setQuotes(formattedQuotes);
    } catch {
      setError('Could not load quotes. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    void fetchQuotes();
  }, []);
  return (
    <FreshQuotes
      quotes={quotes}
      loading={loading}
      error={error}
      onShuffle={fetchQuotes}
    />
  );
}

export default FreshQuotesContainer;
