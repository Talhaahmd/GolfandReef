export const BlogSection = () => {
  return (
    <>
      {/* Aston Martin Residences Section */}
      <section className="flex w-full h-screen bg-white px-0 py-0">
        <div className="flex w-full h-full lg:flex-row flex-col">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 h-full px-16 py-24 max-md:px-8 max-sm:px-6">
            <p className="text-sm uppercase text-gray-400 tracking-widest mb-2">
              Masterpiece of Design
            </p>
            <h2 className="text-4xl font-semibold text-black leading-snug mb-6 max-sm:text-2xl">
              Aston Martin Residences, Miami
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover the most coveted address in Miami – where legendary
              British design meets waterfront elegance. Aston Martin Residences
              is a stunning blend of architecture, engineering, and
              craftsmanship, offering panoramic views and an unmatched living
              experience.
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm leading-6">
              <li>66-story waterfront tower with 391 residences</li>
              <li>Private marina and superyacht access</li>
              <li>Full-service spa and fitness center</li>
              <li>Infinity pool overlooking Biscayne Bay</li>
              <li>Interiors inspired by the Aston Martin legacy</li>
            </ul>
          </div>

          {/* Right Column - Full Height Image */}
          <div className="w-full lg:w-1/2 h-full">
            <img
              src="https://images.squarespace-cdn.com/content/v1/61ac2ea2e381447981413c00/2e413690-c028-46cc-8937-0856e8e2262e/Screen+Shot+2022-03-03+at+5.07.36+PM.png?format=1500w"
              alt="Aston Martin Residences Miami"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cap Cana Lifestyle Video Section */}
      <section className="relative w-full h-[130vh] overflow-hidden group">
        <div className="w-full h-full overflow-hidden relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
          >
            <source
              src="https://videos.pexels.com/video-files/9431937/9431937-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Hover Text and Description */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-center px-4">
            <h1
              className="text-white text-4xl font-bold 
              opacity-0 transform scale-90 translate-y-6 
              transition-all duration-700 
              group-hover:opacity-100 
              group-hover:scale-100 
              group-hover:translate-y-0"
            >
              Experience The Cap Cana Lifestyle
            </h1>
            <p
              className="text-white text-lg max-w-2xl mt-4
              opacity-0 transform scale-90 translate-y-6 
              transition-all duration-700 delay-200
              group-hover:opacity-100 
              group-hover:scale-100 
              group-hover:translate-y-0"
            >
              Where luxury meets the Caribbean breeze — immerse yourself in a
              world of world-class golf, private beaches, vibrant community
              living, and timeless coastal elegance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
