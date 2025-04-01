import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full h-[88px] flex justify-between items-center px-6 md:px-12 lg:px-16 text-white bg-transparent">
      {/* Logo */}
      <div className="w-[90px] h-auto">
        <img
          src="https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743485464/screenshot_2025-03-28_212532-removebg-preview_k5dpov.png"
          alt="Reef & Golf Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Nav Links */}
      <nav className="hidden max-sm:hidden md:flex justify-center items-center gap-8 font-[500] font-sans">
        {["Apartments", "Amenities", "Location", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative text-white text-base transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
          >
            {item}
          </a>
        ))}

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
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>
    </header>
  );
};
