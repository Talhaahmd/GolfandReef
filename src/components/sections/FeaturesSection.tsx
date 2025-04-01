export const FeaturesSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row h-screen">
      {/* Left Side (Text Content) */}
      <div className="bg-[#F5E6CA] text-[#0A1A2F] w-full md:w-1/2 px-[30px] md:px-[60px] py-16 flex flex-col justify-center">
        <h2 className="text-[36px] md:text-[40px] font-serif leading-tight mb-6">
          REEF & GOLF Residences: Where Elegance Meets Nature
        </h2>
        <p className="text-[#555] font-sans text-base leading-7 mb-6">
          Designed by{" "}
          <span className="hover:underline hover:decoration-[#D4AF37] cursor-pointer transition">
            BMA Architects
          </span>
          , renowned for iconic projects like the Aston Martin Residences in Miami,
          this development redefines luxury living. Nestled within the exclusive enclave of{" "}
          <span className="hover:underline hover:decoration-[#D4AF37] cursor-pointer transition">
            Cap Cana
          </span>
          , Reef & Golf Residences offers 80 meticulously crafted apartments overlooking the Las Iguanas Golf Course and the Caribbean Sea.
          Residents enjoy unparalleled access to the Caribbean’s largest private marina, the award-winning Punta Espada Golf Club, and 8 km of pristine white-sand beaches—all within a secure, eco-conscious community.
        </p>
        <ul className="text-[#555] font-sans mb-6 list-disc list-inside">
          <li>600m from Juanillo Beach.</li>
          <li>11 km from Punta Cana International Airport.</li>
        </ul>
        <a
          href="https://heyzine.com/flip-book/6ecf0173d5.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#D4AF37] text-[#D4AF37] font-medium px-6 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#0A1A2F] transition-colors duration-300"
        >
          View Master Plan
        </a>
      </div>

      {/* Right Side (Static Image) */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Reef & Golf Residences Visual"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};
