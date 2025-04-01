import { motion } from "framer-motion";

export const DeveloperSection = () => {
  return (
    <section className="bg-[#1A1718] text-[#F5E6CA] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-3">// Developer & Architecture</p>
          <h2 className="text-4xl font-serif font-semibold mb-6 leading-tight text-[#F5E6CA]">
            Crafted by Visionaries
          </h2>
          <p className="text-[#F5E6CA]/90 text-base leading-relaxed mb-6">
            BMA Architects, a global firm with studios in Buenos Aires, Santiago, and Miami, brings over 20 years of expertise in transformative, sustainable design. Their work redefines luxury through innovation—optimizing urban spaces, integrating cutting-edge technology, and respecting natural ecosystems.
          </p>
          <p className="text-[#F5E6CA]/80 text-base leading-relaxed mb-6">
            Reef & Golf Residences embodies this philosophy, blending timeless elegance with eco-conscious living.
          </p>
          <ul className="text-[#F5E6CA]/70 text-sm space-y-3 mt-6 list-disc pl-5">
            <li>
              <strong className="text-[#D4AF37]">Aston Martin Residences:</strong> 391 waterfront residences in Miami, featuring infinity pools and bespoke interiors.
            </li>
            <li>
              <strong className="text-[#D4AF37]">Reef & Golf Residences:</strong> 80 apartments harmonizing Caribbean landscapes with modern luxury.
            </li>
          </ul>
        </motion.div>

        {/* Right Column - Images */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col gap-6"
        >
          {/* Image 1 */}
          <div className="relative group overflow-hidden rounded-lg shadow-md">
            <img
              src="https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480643/screenshot_25-3-2025_231232_pjmlamaidnkoemaaofddboidllnogmhe_720_taf7xe.jpg"
              alt="Aston Martin Residences"
              className="w-full h-[200px] object-cover transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute bottom-0 left-0 bg-black/60 w-full px-4 py-2">
              <p className="text-[#F5E6CA] text-xs italic">Legendary Design Meets Waterfront Luxury.</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group overflow-hidden rounded-lg shadow-md">
            <img
              src="https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480642/screenshot_25-3-2025_231330_pjmlamaidnkoemaaofddboidllnogmhe_720_wdrn0a.jpg"
              alt="Reef & Golf Residences"
              className="w-full h-[200px] object-cover transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute bottom-0 left-0 bg-black/60 w-full px-4 py-2">
              <p className="text-[#F5E6CA] text-xs italic">Harmony of Nature and Innovation.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
