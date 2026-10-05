import { useState } from 'react';

import xIcon from '@/assets/close.svg';
import hamIcon from '@/assets/ham.svg';
import logo from '@/assets/logo.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between border-b border-[#E5E4E7] px-4 py-4 md:grid md:grid-cols-3 md:px-[4%]">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Verse logo" width="30" height="30" />

            <span className="font-['Fraunces'] text-[22px] font-normal text-[#1C1B29]">
              Verse
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-center gap-8 md:flex">
          <a
            href="/home"
            className="text-[16px] text-[#6B6375] hover:text-[#26252f]"
          >
            Home
          </a>

          <a
            href="explore"
            className="text-[16px] text-[#6B6375] hover:text-[#26252f]"
          >
            Explore
          </a>

          <a
            href="/about"
            className="text-[16px] text-[#6B6375] hover:text-[#26252f]"
          >
            About
          </a>
        </div>

        {/* Desktop Get Inspired */}
        <button className="hidden h-[44px] w-[152px] cursor-pointer justify-self-end rounded-[12px] bg-[#5B4BE1] text-[16px] font-normal text-white transition-colors hover:bg-[#4939C9] md:block">
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
          <a href="/home" className="text-[#6B6375]">
            Home
          </a>

          <a href="/explore" className="text-[#6B6375]">
            Explore
          </a>

          <a href="/about" className="text-[#6B6375]">
            About
          </a>

          <button className="h-[52px] w-[180px] rounded-[12px] bg-[#5B4BE1] text-[18px] font-normal text-white">
            Get Inspired
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
