export const HeroSection = () => {
  return (
    <section className="relative flex w-full h-[900px] justify-center items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="https://res.cloudinary.com/dt3ufcdjs/video/upload/v1743483897/Reef_Golf_ax5nox.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="flex w-[768px] flex-col items-center gap-8 max-md:w-[90%] relative z-10">
        <div className="flex flex-col items-center gap-6 w-full">
          <h1 className="text-white font-serif text-center text-[48px] font-normal leading-tight max-md:text-[40px] max-sm:text-[32px]">
            A Symbol of Luxury and Sophistication
          </h1>
          <p className="text-white text-center text-lg font-normal leading-[27px] max-sm:text-base">
            Discover refined coastal living at Reef &amp; Golf, nestled within
            the exclusive Cap Cana community. Elegant residences, world-class
            golf, and breathtaking views—your perfect life begins here.
          </p>
        </div>
        <div className="flex items-start gap-4 max-sm:flex-col max-sm:w-full">
          <button className="text-[#0A1A2F] text-base font-medium px-8 py-4 rounded-xl bg-[#D4AF37] hover:scale-105 hover:shadow-lg transition-transform duration-300">
            Explore Residences
          </button>
          <button className="text-[#D4AF37] text-base font-medium px-8 py-4 rounded-xl border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1A2F] transition-colors duration-300">
            Schedule a Tour
          </button>
        </div>
      </div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#D4AF37]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};
