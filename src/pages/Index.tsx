import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GolfSection } from "@/components/sections/GolfSection";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { PopupForm } from "@/components/sections/Popupform"; // 👈 Import it here

const Index = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <Navbar />
      <PopupForm /> {/* 👈 Add it here so it overlays the whole page */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <CoreValuesSection />
        <GolfSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
