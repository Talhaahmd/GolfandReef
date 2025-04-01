import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 z-50 w-full h-[88px] flex justify-between items-center px-6 md:px-12 lg:px-16 text-white bg-transparent">
      {/* Logo */}
      <Link
        to="/"
        onClick={() => {
          if (location.pathname === "/") {
            scrollToTop();
          }
        }}
        className="w-[90px] h-auto"
        aria-label="Go to Home"
      >
        <img
          src="https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743485464/screenshot_2025-03-28_212532-removebg-preview_k5dpov.png"
          alt="Reef & Golf Logo"
          className="w-full h-auto object-contain"
        />
      </Link>

      {/* Nav Links */}
      <nav className="hidden max-sm:hidden md:flex justify-center items-center gap-8 font-[500] font-sans">
        <button
          onClick={() => scrollTo("floorplan")}
          className="relative text-white text-base transition-all duration-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-700"
        >
          Floor Plan
        </button>
        <button
          onClick={() => scrollTo("amenities")}
          className="relative text-white text-base transition-all duration-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-700"
        >
          Amenities
        </button>
        <button
          onClick={() => scrollTo("location")}
          className="relative text-white text-base transition-all duration-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-700"
        >
          Location
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="relative text-white text-base transition-all duration-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-700"
        >
          Contact
        </button>
        <Link
          to="/gallery"
          className="relative text-white text-base transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
        >
          Gallery
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden"
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
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>
    </header>
  );
};
