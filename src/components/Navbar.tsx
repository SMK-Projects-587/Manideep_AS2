import { useState } from 'react';

import xIcon from '@/assets/close.svg';
import hamIcon from '@/assets/ham.svg';
import logo from '@/assets/logo.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="border-border flex items-center justify-between border-b px-4 py-4 md:grid md:grid-cols-3 md:px-[4%]">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Verse logo" width="30" height="30" />

            <span className="font-display text-heading text-2xl font-normal">
              Verse
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-center gap-8 md:flex">
          <a href="/home" className="text-body hover:text-hover text-sm">
            Home
          </a>

          <a href="explore" className="text-body hover:text-hover text-sm">
            Explore
          </a>

          <a href="/about" className="text-body hover:text-hover text-sm">
            About
          </a>
        </div>

        {/* Desktop Get Inspired */}
        <button className="bg-primary hidden h-[44px] w-[152px] cursor-pointer justify-self-end rounded-xl text-[16px] font-normal text-white transition-colors hover:bg-[#4939C9] md:block">
          Get Inspired
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer md:hidden"
        >
          <img
            src={isMenuOpen ? xIcon : hamIcon}
            alt={isMenuOpen ? 'Close menu' : 'Open menu'}
            width="30"
            height="30"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-8 py-16 md:hidden">
          <a href="/home" className="text-body">
            Home
          </a>

          <a href="/explore" className="text-body">
            Explore
          </a>

          <a href="/about" className="text-body">
            About
          </a>

          <button className="bg-primary h-[52px] w-[160px] rounded-xl text-sm font-normal text-white">
            Get Inspired
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
