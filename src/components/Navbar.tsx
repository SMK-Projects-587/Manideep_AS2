import { useState } from 'react';

import xIcon from '@/assets/close.svg';
import hamIcon from '@/assets/ham.svg';
import logo from '@/assets/logo.svg';

import Button from './Button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-border relative border-b">
      <div className="mx-auto flex w-full max-w-[1126px] items-center justify-between px-4 py-4 md:grid md:grid-cols-3">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Verse logo" width="28" height="20" />

            <span className="font-display text-heading text-xl font-normal">
              Verse
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-center gap-8 md:flex">
          <a href="/home" className="text-body hover:text-hover text-sm">
            Home
          </a>

          <a href="/explore" className="text-body hover:text-hover text-sm">
            Explore
          </a>

          <a href="/about" className="text-body hover:text-hover text-sm">
            About
          </a>
        </div>

        {/* Desktop Get Inspired */}
        <Button className="hidden h-[44px] w-[152px] justify-self-end md:block">
          Get Inspired
        </Button>

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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 z-50 flex w-full flex-col items-center gap-8 bg-white py-16 md:hidden">
          <a href="/home" className="text-body">
            Home
          </a>

          <a href="/explore" className="text-body">
            Explore
          </a>

          <a href="/about" className="text-body">
            About
          </a>

          <Button className="h-[44px] w-[142px]">Get Inspired</Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
