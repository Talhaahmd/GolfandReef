export const FullscreenVideoSection = () => {
    return (
      <section className="relative w-full h-[600px] px-6 py-12 bg-[rgba(255,255,255,0.20)] overflow-hidden rounded-xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        >
          <source
            src="https://res.cloudinary.com/dt3ufcdjs/video/upload/v1743483897/Reef_Golf_ax5nox.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
  
        {/* Optional semi-transparent overlay */}
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.20)] z-10 rounded-xl" />
      </section>
    );
  };
  