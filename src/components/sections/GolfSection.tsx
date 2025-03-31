import { useEffect, useState } from "react";

const slides = [
  {
    title: "Spacious Living Areas",
    description:
      "Experience expansive living and dining rooms designed for comfort and elegance.",
    image:
      "https://arichyhomes.com/wp-content/uploads/2025/03/Baycana-Properties-Condos-12.jpg",
  },
  {
    title: "Modern Integrated Kitchens",
    description:
      "State-of-the-art kitchens seamlessly integrated into the living space, perfect for entertaining.",
    image:
      "https://arichyhomes.com/wp-content/uploads/2025/03/Baycana-Properties-Condos-10.jpg",
  },
  {
    title: "Family Room with En-Suite",
    description:
      "A versatile family room complete with its own bathroom, offering privacy and convenience.",
    image:
      "https://arichyhomes.com/wp-content/uploads/2025/03/Comfort-and-Convenience-in-White-Sands-1.jpeg",
  },
  {
    title: "Private Bedrooms with Walk-in Closets",
    description:
      "Retreat to bedrooms featuring en-suite bathrooms and spacious walk-in closets.",
    image:
      "https://arichyhomes.com/wp-content/uploads/2025/03/Baycana-Properties-Condos-7.jpg",
  },
  {
    title: "Scenic Views",
    description:
      "Enjoy breathtaking views of gardens, pools, and the golf course from your private terrace.",
    image:
      "https://arichyhomes.com/wp-content/uploads/2024/10/Marina-View-Apartment-in-Cap-Cana-14.jpg",
  },
  {
    title: "Exclusive Gardens & Rooftops",
    description:
      "Select apartments offer private gardens or expansive rooftop terraces for outdoor relaxation.",
    image:
      "https://arichyhomes.com/wp-content/uploads/2025/03/New-Apartment-in-Cana-Rock-Universe-2.jpg",
  },
  {
    title: "Service Rooms",
    description:
      "Dedicated service rooms provide additional storage and utility space for your convenience.",
    image:
      "https://arichyhomes.com/wp-content/uploads/2025/03/Beach-Apartment-in-Bavaro-Punta-Cana-1.jpg",
  },
  {
    title: "Premium Appliances Included",
    description:
      "Each apartment comes equipped with high-end appliances for a move-in ready experience.",
    image:
      "https://arichyhomes.com/wp-content/uploads/2025/03/Beach-Apartment-in-Bavaro-Punta-Cana-11.jpg",
  },
  {
    title: "Ample Parking Space",
    description:
      "Benefit from secure and spacious parking facilities for residents and guests.",
    image:
      "https://arichyhomes.com/wp-content/uploads/2025/03/Baycana-Properties-Condos-2.jpg",
  },
];

export const GolfSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[index];

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ backgroundImage: `url(${activeSlide.image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-16 max-md:px-8 max-sm:px-6 text-white">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          {activeSlide.title}
        </h2>
        <p className="text-lg max-w-2xl">{activeSlide.description}</p>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
