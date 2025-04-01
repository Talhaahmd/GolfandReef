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

        {/* Embedded Google Map */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6400.98217371837!2d-68.40978903119007!3d18.477973736631615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI4JzQwLjgiTiA2OMKwMjQnMjYuNCJX!5e0!3m2!1sen!2s!4v1743490148944!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
