import MoodCard from './MoodCard';

const moods = [
  { title: 'Motivation', count: 128 },
  { title: 'Wisdom', count: 96 },
  { title: 'Humour', count: 74 },
  { title: 'Love', count: 52 },
];

function BrowseByMood() {
  return (
    <section className="border-border border-b">
      <div className="mx-auto w-full max-w-[1126px] px-4 py-8">
        <h2 className="font-display text-heading text-2xl leading-none font-normal">
          Browse by mood
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {moods.map((mood) => (
            <MoodCard key={mood.title} title={mood.title} count={mood.count} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrowseByMood;
