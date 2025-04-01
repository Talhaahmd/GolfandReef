import { useEffect, useState } from "react";

const slides = [
  {
    title: "Architectural Elegance",
    description:
      "A striking, fluid architectural design that blends modern luxury with organic lines and tropical landscaping.",
    image:
      "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480643/screenshot_25-3-2025_231341_pjmlamaidnkoemaaofddboidllnogmhe_720_gcwcjh.jpg",
  },
  {
    title: "Ambience And Remarkable Furniture",
    description:
      "An immersive blend of elegant ambiance and handpicked, luxurious furniture that defines refined living.",
    image:
      "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480643/screenshot_25-3-2025_231254_pjmlamaidnkoemaaofddboidllnogmhe_720_kitlxz.jpg",
  },
  {
    title: "Penthouse Rooftop Retreat",
    description:
      "Enjoy elevated living with a rooftop plunge pool, loungers, and uninterrupted golf views. ",
    image:
      "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480643/screenshot_25-3-2025_23138_pjmlamaidnkoemaaofddboidllnogmhe_caroyv.jpg",
  },
  {
    title: "Resort-Style Pool Lounge",
    description:
      "A sophisticated pool deck with sunken seating, shaded cabanas, and a serene tropical backdrop.",
    image:
      "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480643/screenshot_25-3-2025_231232_pjmlamaidnkoemaaofddboidllnogmhe_720_taf7xe.jpg",
  },
  {
    title: "Lush Garden Terraces",
    description:
      "Spacious terraces surrounded by greenery, ideal for tranquil living and entertaining.",
    image:
      "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480643/screenshot_25-3-2025_23127_pjmlamaidnkoemaaofddboidllnogmhe_720_ua4a3y.jpg",
  },
  {
    title: "Wellness And Fitness Center",
    description:
      "A serene wellness zone featuring modern gym equipment, yoga spaces, and holistic spa access.",
    image:
      "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480642/screenshot_25-3-2025_231145_pjmlamaidnkoemaaofddboidllnogmhe_j7frxg.jpg",
  },
  {
    title: "Grand Arrival Experience",
    description:
      "A covered entryway framed by water features and greenery, creating a tranquil sense of arrival.",
    image:
      "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480642/screenshot_25-3-2025_231330_pjmlamaidnkoemaaofddboidllnogmhe_720_wdrn0a.jpg",
  },
];

export const GolfSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000); // slower transition

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[index];

  return (
    <section
      id="amenities"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ backgroundImage: `url(${activeSlide.image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-16 max-md:px-8 max-sm:px-6 text-white transition-opacity duration-1000 ease-in-out">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">
          {activeSlide.title}
        </h2>
        <p className="text-lg max-w-2xl animate-fade-in delay-200">
          {activeSlide.description}
        </p>
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
