import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full h-[72px] flex justify-between items-center bg-transparent backdrop-blur-md px-16 text-white">
      {/* Logo */}
      <div className="flex w-20 h-10 justify-center items-center">
        <img
          src="src/assets/Screenshot 2025-03-31 103657.png" // Use forward slashes
          alt="BestinPro Logo"
          className="h-9 w-auto object-contain"
        />
      </div>

      {/* Nav Links */}
      <nav className="flex justify-center items-center gap-8 max-sm:hidden">
        <div className="flex justify-end items-center gap-8">
          <a href="#lifestyle" className="text-white text-base font-normal leading-6">
            Lifestyle
          </a>
          <a href="#residences" className="text-white text-base font-normal leading-6">
            Residences
          </a>
          <a href="#amenities" className="text-white text-base font-normal leading-6">
            Amenities
          </a>
          <a href="#contact" className="text-white text-base font-normal leading-6">
            Contact Us
          </a>
          <a href="#vision" className="text-white text-base font-normal leading-6">
            Our Vision
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="hidden max-sm:block"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>
    </header>
  );
};
