export const AmenitiesSection = () => {
    const amenities = [
      {
        id: "marina",
        title: "Marina Access",
        description: "Exclusive mooring privileges at Cap Cana Marina, ranked #1 in the Caribbean.",
        featured: true,
        video: "https://www.w3schools.com/html/mov_bbb.mp4", // replace with actual loop
      },
      {
        id: "golf",
        title: "Golf Centers",
        description: "Access to Punta Espada and Las Iguanas Golf Courses, designed by Jack Nicklaus.",
        image: "/icons/golf-icon.webp",
      },
      {
        id: "beach",
        title: "Beach Club",
        description: "Private access to Juanillo Beach, with premium lounges and water sports.",
        image: "/images/beach-club.jpg",
      },
      {
        id: "fitness",
        title: "Fitness & Spa",
        description: "24/7 gym, yoga pavilion, and spa services for holistic wellness.",
        image: "/images/gym-render.jpg",
      },
      {
        id: "eco",
        title: "Eco Adventures",
        description: "Buggy tours, horseback riding, and hiking in the Cap Cana Eco Adventure Park.",
        image: "/images/eco-park.jpg",
      },
      {
        id: "security",
        title: "Prime Security",
        description: "24/7 surveillance, biometric access, and a dedicated emergency medical team.",
        image: "/icons/security-icon.webp",
      },
    ];
  
    return (
      <section className="w-full px-4 py-16 bg-gradient-to-b from-[#F5E6CA] to-[#ffffff]">
        <div className="max-w-screen-xl mx-auto">
          {/* Title */}
          <h2 className="text-center text-4xl font-serif text-[#0A1A2F] mb-12">
            Curated Luxury, Designed for Life
          </h2>
  
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item) =>
              item.featured ? (
                <div
                  key={item.id}
                  className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 relative rounded-xl overflow-hidden group"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 transition duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-[0_0_0_4px_#D4AF37]">
                    <h3 className="text-white text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md transition-transform transform hover:scale-[1.02] hover:shadow-[0_0_0_2px_#D4AF37]"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#0A1A2F] mb-2 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#555] font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
  
          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/amenities"
              className="inline-block px-8 py-3 border border-[#D4AF37] text-[#0A1A2F] font-medium rounded-xl hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
            >
              Explore All Amenities
            </a>
          </div>
        </div>
      </section>
    );
  };
  