import quotes from '@/assets/quotes.svg';

import Button from './Button';

function Hero() {
  return (
    <section className="border-border bg-background border-b">
      <div className="mx-auto w-full max-w-[1126px] px-4">
        <div className="flex flex-col py-4 md:grid md:grid-cols-[6fr_5fr] md:py-16">
          {/* Left column */}
          <div className="flex flex-col gap-3">
            <p className="text-primary text-xs font-normal">DAILY WISDOM</p>

            <h1 className="font-display text-heading text-3xl leading-none font-normal md:w-[300px] md:text-[56px]">
              Words that move you.
            </h1>

            <p className="text-secondary w-[287px] text-sm leading-[1.5] font-normal md:w-[340px]">
              A hand-picked quote to start your morning, plus a library to
              explore whenever you need a lift.
            </p>

            <div className="mt-3 flex items-center gap-4">
              <Button variant="primary" className="h-[44px] w-[136px]">
                Get inspired
              </Button>

              <Button
                variant="secondary"
                className="h-[44px] w-[136px] hover:bg-[#ebeae8]"
              >
                Browse all
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="border-border mt-3 flex h-[126px] flex-col gap-8 rounded-3xl border bg-white px-5 py-6 md:h-[246px] md:gap-12 md:px-7 md:py-6">
            <img
              src={quotes}
              alt="quotes"
              width="24"
              height="24"
              className="hidden md:block"
            />
            <p className="font-display text-heading text-[16px] leading-none font-normal md:max-w-[330px] md:text-[24px] md:leading-[1.2]">
              The best way out is always through.
            </p>

            <p className="text-secondary text-[12px] leading-none font-normal">
              — Robert Frost
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
