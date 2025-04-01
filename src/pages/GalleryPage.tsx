import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Masonry from "react-masonry-css";
import { useState } from "react";
import { LocationSection } from "@/components/sections/Location";
import { FullscreenVideoSection } from "@/components/sections/FooterVideo";

const categories = ["All", "Architecture", "Interiors", "Lifestyle", "Virtual Tours"];

const galleryItems = [
  {
    type: "image",
    title: "Modern Facade",
    category: "Architecture",
    src: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480643/screenshot_25-3-2025_231232_pjmlamaidnkoemaaofddboidllnogmhe_720_taf7xe.jpg",
  },
  {
    type: "image",
    title: "Interior View",
    category: "Interiors",
    src: "https://res.cloudinary.com/dt3ufcdjs/image/upload/v1743480643/screenshot_25-3-2025_231341_pjmlamaidnkoemaaofddboidllnogmhe_720_gcwcjh.jpg",
  },
  {
    type: "video",
    title: "Overview Tour",
    category: "Virtual Tours",
    src: "https://res.cloudinary.com/dt3ufcdjs/video/upload/v1743483897/Reef_Golf_ax5nox.mp4",
  },
  {
    type: "video",
    title: "Walkthrough – Golf View",
    category: "Virtual Tours",
    src: "https://res.cloudinary.com/dt3ufcdjs/video/upload/v1743487607/Professional_Mode_16x9_Photorealistic_first_person_pers_pckamp.mp4",
  },
  {
    type: "video",
    title: "Cinematic Architecture Tour",
    category: "Architecture",
    src: "https://res.cloudinary.com/dt3ufcdjs/video/upload/v1743487605/Professional_Mode_Cinematic_3D_animation_exploring_rspjrl.mp4",
  },
  {
    type: "video",
    title: "Photorealistic Interior Experience",
    category: "Interiors",
    src: "https://res.cloudinary.com/dt3ufcdjs/video/upload/v1743489815/Professional_Mode_Ultra_photorealistic_first_perso_gqwdud.mp4",
  },
  {
    type: "video",
    title: "Lobby & Entrance Animation",
    category: "Architecture",
    src: "https://res.cloudinary.com/dt3ufcdjs/video/upload/v1743487598/Professional_Mode_Photorealistic_3D_animation_of_a_l2i3jo.mp4",
  },
  {
    type: "video",
    title: "Full Walkthrough (Interior)",
    category: "Virtual Tours",
    src: "https://res.cloudinary.com/dt3ufcdjs/video/upload/v1743487584/Professional_Mode_Photorealistic_video_walk_throug_iiwsma.mp4",
  },
  {
    type: "video",
    title: "Penthouse View (First Person)",
    category: "Interiors",
    src: "https://res.cloudinary.com/dt3ufcdjs/video/upload/v1743487575/Professional_Mode_Photorealistic_first_person_pers_2_ci69hq.mp4",
  },
];

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#2C1E13] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="https://res.cloudinary.com/dt3ufcdjs/video/upload/v1743483897/Reef_Golf_ax5nox.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-[#1A120A]/80 z-0" />
        <div className="flex flex-col items-center justify-center h-full text-center px-6 z-10 relative">
          <h1 className="text-5xl font-serif text-[#F5E6CA] mb-4">
            Discover Reef & Golf Residences
          </h1>
          <p className="text-lg text-white/80">
            A Visual Journey Through Luxury Living
          </p>
        </div>
      </section>

      {/* Category Filters (STATIC not sticky) */}
      <div className="bg-[#2C1E13] py-4 px-6 md:px-16 border-b border-white/10">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-medium px-4 py-2 border-b-2 ${
                activeCategory === cat
                  ? "border-[#D4AF37] text-[#D4AF37]"
                  : "border-transparent text-white/70 hover:text-white"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 px-6 md:px-16 bg-[#1A120A]">
        <Masonry
          breakpointCols={{ default: 3, 1024: 2, 768: 2, 500: 1 }}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full rounded-lg object-cover group-hover:opacity-80 transition"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full rounded-lg object-cover group-hover:opacity-80 transition"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              )}
              <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-black/60 text-sm font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </Masonry>
      </section>
      <LocationSection></LocationSection>
      <FullscreenVideoSection></FullscreenVideoSection>

      <Footer />
    </div>
  
  );
};
