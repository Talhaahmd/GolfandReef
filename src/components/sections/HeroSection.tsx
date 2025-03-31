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
          src="https://videos.pexels.com/video-files/854398/854398-hd_1280_720_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="flex w-[768px] flex-col items-center gap-8 max-md:w-[90%] relative z-10">
        <div className="flex flex-col items-center gap-6 w-full">
          <h1 className="text-white text-center text-[56px] font-normal leading-[67.2px] tracking-[-0.56px] max-md:text-5xl max-sm:text-[40px]">
            Luxury Living Meets Championship Golf.
          </h1>
          <p className="text-white text-center text-lg font-normal leading-[27px] max-sm:text-base">
            Discover refined coastal living at Reef &amp; Golf, nestled within
            the exclusive Cap Cana community. Elegant residences, world-class
            golf, and breathtaking views—your perfect life begins here.
          </p>
        </div>
        <div className="flex items-start gap-4 max-sm:flex-col max-sm:w-full">
          <button className="text-black text-base font-medium leading-6 gap-2 border bg-[#A0D3A9] px-6 py-2.5 rounded-xl border-[#A0D3A9] hover:bg-[#90C399] transition-colors">
            Learn More
          </button>
          <button className="text-white text-base font-medium leading-6 gap-2 border px-6 py-2.5 rounded-xl border-[rgba(255,255,255,0.20)] hover:bg-white/10 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
