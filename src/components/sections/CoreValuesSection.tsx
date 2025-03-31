export const CoreValuesSection = () => {
    return (
      <section className="relative w-full h-[120vh] overflow-hidden group">
        {/* Background Image */}
        <img
          src="public\assets\figma assets\screenshot_25-3-2025_231330_pjmlamaidnkoemaaofddboidllnogmhe (1).jpeg"
          alt="Core Values"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
  
        {/* Overlay Content - Vision Only */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out px-4">
          <div className="text-white text-center max-w-3xl space-y-6">
            <h2 className="text-4xl font-bold tracking-wide mb-2">Our Vision</h2>
            <p className="text-lg leading-relaxed text-white/90">
              To become the benchmark for luxury residential development in the Dominican Republic—delivering spaces that elevate lifestyle, embrace sustainability, and seamlessly integrate architecture with the beauty of nature.
            </p>
          </div>
        </div>
      </section>
    );
  };
  