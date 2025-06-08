import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] via-[#2D2D2D] to-[#B8860B] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#B8860B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#696969] rounded-full blur-3xl"></div>
      </div>

      {/* Coal texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[#B8860B] to-[#C0C0C0] bg-clip-text text-transparent font-montserrat">
          Личности Кузбасса
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto">
          Откройте истории выдающихся людей, которые формировали промышленное
          сердце Сибири. От первопроходцев до современных новаторов.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-[#B8860B] hover:bg-[#DAA520] text-black px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            <Icon name="Users" className="mr-2" size={24} />
            Исследовать личности
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            <Icon name="Map" className="mr-2" size={24} />
            Карта региона
          </Button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#B8860B] mb-2">500+</div>
            <div className="text-sm text-gray-300">Выдающихся личностей</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C0C0C0] mb-2">150</div>
            <div className="text-sm text-gray-300">Лет истории</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#B8860B] mb-2">12</div>
            <div className="text-sm text-gray-300">Сфер деятельности</div>
          </div>
        </div>
      </div>

      {/* Industrial elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-[#B8860B]/30 text-4xl animate-pulse">
          ⚒️
        </div>
        <div className="absolute top-1/3 right-1/3 text-[#C0C0C0]/30 text-6xl animate-bounce">
          🏭
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-[#B8860B]/30 text-5xl animate-pulse delay-500">
          ⛏️
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
