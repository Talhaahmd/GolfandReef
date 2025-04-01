export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-[#1A1718] px-16 py-20 max-md:px-8 max-md:py-[60px] max-sm:px-6 max-sm:py-10">
      <div className="flex items-start gap-16 w-full max-md:flex-col">
        <div className="flex w-[864px] flex-col items-start gap-8 max-md:w-full">
          {/* Logo */}
          <div className="w-[150px]">
            <img
              src="src/assets/Screenshot 2025-03-31 103657.png"
              alt="Reef & Golf Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Address & Contact */}
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-start gap-1 w-full">
              <h3 className="text-white text-sm font-semibold leading-[21px]">
                Address:
              </h3>
              <p className="text-white text-sm font-normal leading-[21px]">
                FHHV+23F, Punta Cana 23000, Dominican Republic
              </p>
            </div>

            <div className="flex flex-col items-start gap-1 w-full">
              <h3 className="text-white text-sm font-semibold leading-[21px]">
                Contact:
              </h3>
              <div className="flex flex-col items-start w-full">
                <a
                  href="tel:+18495857788"
                  className="text-white text-sm font-normal leading-[21px] underline hover:text-white/80"
                >
                  +1 849 585 7788
                </a>
                <a
                  href="mailto:info@reefandgolf.com"
                  className="text-white text-sm font-normal leading-[21px] underline hover:text-white/80"
                >
                  info@reefandgolf.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons (optional) */}
          <div className="flex items-start gap-3">
            {/* You can insert social icons here */}
          </div>
        </div>

        {/* Footer Links */}
        <nav className="flex items-start gap-6 flex-1 max-md:flex-col">
          <div className="flex flex-col items-start flex-1">
            <a href="#" className="text-white text-sm font-semibold py-2 hover:text-white/80">About Us</a>
            <a href="#" className="text-white text-sm font-semibold py-2 hover:text-white/80">Contact Us</a>
            <a href="#" className="text-white text-sm font-semibold py-2 hover:text-white/80">Our Services</a>
            <a href="#" className="text-white text-sm font-semibold py-2 hover:text-white/80">Blog Posts</a>
            <a href="#" className="text-white text-sm font-semibold py-2 hover:text-white/80">FAQs</a>
          </div>
          <div className="flex flex-col items-start flex-1">
            <a href="#" className="text-white text-sm font-semibold py-2 hover:text-white/80">Support Center</a>
            <a href="#" className="text-white text-sm font-semibold py-2 hover:text-white/80">Community Forum</a>
            <a href="#" className="text-white text-sm font-semibold py-2 hover:text-white/80">Events Calendar</a>
            <a href="#" className="text-white text-sm font-semibold py-2 hover:text-white/80">Careers Page</a>
            <a href="#" className="text-white text-sm font-semibold py-2 hover:text-white/80">Newsroom</a>
          </div>
        </nav>
      </div>

      {/* Bottom Line */}
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="w-full h-px bg-[rgba(255,255,255,0.20)]" />
        <div className="flex justify-between items-start w-full max-sm:flex-col max-sm:gap-4">
          <p className="text-white text-sm font-normal">
            © 2025 Reef & Golf. All rights reserved.
          </p>
          <div className="flex items-start gap-6">
            <a href="#" className="text-white text-sm underline hover:text-white/80">Privacy Policy</a>
            <a href="#" className="text-white text-sm underline hover:text-white/80">Terms of Service</a>
            <a href="#" className="text-white text-sm underline hover:text-white/80">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
