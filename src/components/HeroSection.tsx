import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] via-[#2D1B69] to-[#9b87f5] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#9b87f5] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7E69AB] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent font-montserrat">
          Твоя Музыка
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-100 font-light max-w-2xl mx-auto">
          Открой для себя миллионы треков, создай свои плейлисты и наслаждайся
          музыкой в высоком качестве
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            <Icon name="Play" className="mr-2" size={24} />
            Слушать сейчас
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            <Icon name="Search" className="mr-2" size={24} />
            Найти музыку
          </Button>
        </div>
      </div>

      {/* Floating music notes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-white/20 text-4xl animate-bounce">
          ♪
        </div>
        <div className="absolute top-1/3 right-1/3 text-white/20 text-6xl animate-pulse">
          ♫
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-white/20 text-5xl animate-bounce delay-500">
          ♪
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
