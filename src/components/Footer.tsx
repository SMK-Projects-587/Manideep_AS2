import logo from '@/assets/logo.svg';

function Footer() {
  return (
    <footer className="border-border bg-background px-6 py-6 md:border-t md:px-8 md:py-8">
      <div className="mx-auto w-full max-w-[1126px]">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col gap-2">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="Verse logo" width="20" height="20" />

              <span className="font-display text-heading text-[16px] font-normal">
                Verse
              </span>
            </a>

            <p className="text-body hidden text-xs md:block">
              A little wisdom, every day.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-3">
            {/* Mobile navigation */}
            <nav
              aria-label="Footer navigation"
              className="flex items-center gap-4 md:hidden"
            >
              <a href="/home" className="text-body hover:text-hover text-xs">
                Home
              </a>

              <a href="/explore" className="text-body hover:text-hover text-xs">
                Explore
              </a>

              <a href="/about" className="text-body hover:text-hover text-xs">
                About
              </a>
            </nav>

            {/* Desktop navigation */}
            <div className="hidden gap-24 pb-4 md:flex">
              <div className="flex flex-col gap-2">
                <h3 className="text-heading text-xs font-medium">Product</h3>

                <a href="/home" className="text-body hover:text-hover text-xs">
                  Home
                </a>

                <a
                  href="/explore"
                  className="text-body hover:text-hover text-xs"
                >
                  Explore
                </a>

                <a
                  href="/categories"
                  className="text-body hover:text-hover text-xs"
                >
                  Categories
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-heading text-xs font-medium">Company</h3>

                <a href="/about" className="text-body hover:text-hover text-xs">
                  About
                </a>

                <a
                  href="/contact"
                  className="text-body hover:text-hover text-xs"
                >
                  Contact
                </a>

                <a
                  href="/privacy"
                  className="text-body hover:text-hover text-xs"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:border-border py-3 md:border-t">
          <p className="text-body text-xs">© 2026 Verse. A training project.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
