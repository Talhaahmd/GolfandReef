export const ApartmentDetailsSection = () => {
    return (
      <section className="relative w-full h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-6 md:px-12 py-20">
        <div className="flex flex-col items-center text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif tracking-wide mb-6">
            ASTON MARTIN RESIDENCES
          </h1>
          <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">
            A symbol of modern luxury and sleek sophistication, Aston Martin Residences blend high-performance design with world-class waterfront living. Discover iconic architecture, unmatched amenities, and interiors crafted with precision and purpose.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-all">
            LEARN MORE
          </button>
        </div>
      </section>
    );
  };
  