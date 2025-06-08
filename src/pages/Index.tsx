import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedPersonalities from "@/components/FeaturedPersonalities";
import SearchSection from "@/components/SearchSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F1117]">
      <HeroSection />
      <CategoriesSection />
      <FeaturedPersonalities />
      <SearchSection />
    </div>
  );
};

export default Index;
