import {
  MapPinIcon,
  BuildingOffice2Icon,
  PhoneIcon,
  EnvelopeIcon,
  MapIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  Squares2X2Icon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex w-full flex-col items-center gap-12 bg-[#1A1718] px-6 md:px-12 lg:px-16 py-12"
    >
      <div className="flex items-start gap-12 w-full max-md:flex-col">
        {/* Left Column: Logo & Contact */}
        <div className="flex w-full max-w-xl flex-col items-start gap-6">
          {/* Logo */}
          <div className="w-[140px]">
            <img
              src="https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743485464/screenshot_2025-03-28_212532-removebg-preview_k5dpov.png"
              alt="Reef & Golf Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Address & Contact */}
          <div className="flex flex-col items-start gap-4">
            {/* Location 1 */}
            <div className="flex items-start gap-2">
              <MapPinIcon className="h-5 w-5 text-white mt-[2px]" />
              <div>
                <h3 className="text-white text-sm font-semibold">Project Location</h3>
                <p className="text-white text-sm">
                  FHHV+23F, Punta Cana 23000, Dominican Republic
                </p>
              </div>
            </div>

            {/* Location 2 */}
            <div className="flex items-start gap-2">
              <BuildingOffice2Icon className="h-5 w-5 text-white mt-[2px]" />
              <div>
                <h3 className="text-white text-sm font-semibold">Sales Office:</h3>
                <p className="text-white text-sm">
                  Fishing Lodge C47, Cap Cana, Dominican Republic
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-white" />
                <a
                  href="tel:+18495857788"
                  className="text-white text-sm underline hover:text-white/80"
                >
                  +1 849 585 7788
                </a>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-white" />
                <a
                  href="mailto:info@reefandgolf.com"
                  className="text-white text-sm underline hover:text-white/80"
                >
                  info@reefandgolf.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links with Icons */}
        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 flex-1 max-md:mt-6">
          <div className="flex flex-col items-start gap-2">
            <a href="#location" className="text-white text-sm hover:text-white/80 flex items-center gap-2">
              <MapIcon className="w-4 h-4" />
              Location
            </a>
            <a href="/gallery" className="text-white text-sm hover:text-white/80 flex items-center gap-2">
              <PhotoIcon className="w-4 h-4" />
              Gallery
            </a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <a href="#contact" className="text-white text-sm hover:text-white/80 flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Contact
            </a>
            <a href="#amenities" className="text-white text-sm hover:text-white/80 flex items-center gap-2">
              <Squares2X2Icon className="w-4 h-4" />
              Amenities
            </a>
            <a href="#floorplan" className="text-white text-sm hover:text-white/80 flex items-center gap-2">
              <RectangleGroupIcon className="w-4 h-4" />
              Floor Plan
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom Line */}
      <div className="w-full border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-white text-sm">© 2025 Reef & Golf. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-white text-sm underline hover:text-white/80">
            Privacy Policy
          </a>
          <a href="#" className="text-white text-sm underline hover:text-white/80">
            Terms of Service
          </a>
          <a href="#" className="text-white text-sm underline hover:text-white/80">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
};
