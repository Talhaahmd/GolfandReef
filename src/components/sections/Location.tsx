export const LocationSection = () => {
    return (
      <section id="location" className="bg-[#fef8f2] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text & List */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              // Prime Location
            </p>
            <h2 className="text-4xl font-bold mb-8 text-[#0A1A2F] leading-tight">
              Ideally positioned in Punta Cana’s most prestigious zone
            </h2>
  
            <ul className="space-y-5 text-[#0A1A2F]">
              <li className="flex justify-between border-b pb-2 items-center">
                <span className="flex items-center gap-3">
                  🏌️‍♂️ Punta Espada Golf Club
                </span>
                <span className="border border-[#D4AF37] px-3 py-1 text-sm rounded">5-min</span>
              </li>
              <li className="flex justify-between border-b pb-2 items-center">
                <span className="flex items-center gap-3">
                  🏖️ Juanillo Beach
                </span>
                <span className="border border-[#D4AF37] px-3 py-1 text-sm rounded">4-min</span>
              </li>
              <li className="flex justify-between border-b pb-2 items-center">
                <span className="flex items-center gap-3">
                  ⛵ Cap Cana Marina
                </span>
                <span className="border border-[#D4AF37] px-3 py-1 text-sm rounded">6-min</span>
              </li>
              <li className="flex justify-between border-b pb-2 items-center">
                <span className="flex items-center gap-3">
                  ✈️ Punta Cana Airport
                </span>
                <span className="border border-[#D4AF37] px-3 py-1 text-sm rounded">12-min</span>
              </li>
              <li className="flex justify-between border-b pb-2 items-center">
                <span className="flex items-center gap-3">
                  🛍️ Blue Mall Punta Cana
                </span>
                <span className="border border-[#D4AF37] px-3 py-1 text-sm rounded">10-min</span>
              </li>
            </ul>
          </div>
  
          {/* Map Image */}
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac97d9a97cb3ec9181211_map.avif"
              alt="Reef & Golf Location Map"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    );
  };
  