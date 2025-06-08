import HeroSection from "@/components/HeroSection";
import MusicPlayer from "@/components/MusicPlayer";
import PopularTracks from "@/components/PopularTracks";
import FeaturedArtists from "@/components/FeaturedArtists";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F1117]">
      <HeroSection />
      <PopularTracks />
      <FeaturedArtists />
      <MusicPlayer />
    </div>
  );
};

export default Index;
