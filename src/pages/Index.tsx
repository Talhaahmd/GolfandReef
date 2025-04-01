import { useEffect, useState } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GolfSection } from "@/components/sections/GolfSection";
import { FloorplanSelector } from "@/components/sections/CoreValuesSection";
import { InvestmentBenefitsSection } from "@/components/sections/BlogSection";
import { PopupForm } from "@/components/sections/Popupform";
import { LocationSection } from "@/components/sections/Location";
import { FullscreenVideoSection } from "@/components/sections/FooterVideo";
import { DeveloperSection } from "@/components/sections/DeveloperSection";

const Index = () => {
  const [showGallery, setShowGallery] = useState(false);

  // ✅ Listen for global event from Navbar button
  useEffect(() => {
    const handleOpenGallery = () => setShowGallery(true);
    window.addEventListener("openGallery", handleOpenGallery);
    return () => window.removeEventListener("openGallery", handleOpenGallery);
  }, []);

  return (
    <div className="flex flex-col items-start w-full">
      <Navbar />
      <PopupForm />

      <main>
        <HeroSection />
        <DeveloperSection />
        <FeaturesSection />
        <FloorplanSelector />
        <GolfSection />
        <LocationSection />

        <InvestmentBenefitsSection />
        <FullscreenVideoSection />
      </main>

      <Footer />

      {/* ✅ Conditionally show gallery section as overlay */}
      {showGallery && (
        <div className="fixed inset-0 z-[100] bg-[#0A1A2F] overflow-y-auto px-6 md:px-16 py-12 text-white">
          <button
            onClick={() => setShowGallery(false)}
            className="fixed top-6 right-6 text-white bg-black/30 px-3 py-1 rounded hover:bg-black/50"
          >
          </button>
          <GallerySection />
        </div>
      )}
    </div>
  );
};

export default Index;
