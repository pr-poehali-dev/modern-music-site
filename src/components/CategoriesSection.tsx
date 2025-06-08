import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      title: "Промышленники",
      description: "Основатели шахт, заводов и предприятий",
      icon: "Factory",
      count: "85",
      color: "from-[#696969] to-[#2F4F4F]",
    },
    {
      id: 2,
      title: "Ученые",
      description: "Исследователи и новаторы науки",
      icon: "Microscope",
      count: "92",
      color: "from-[#B8860B] to-[#DAA520]",
    },
    {
      id: 3,
      title: "Деятели культуры",
      description: "Писатели, художники, музыканты",
      icon: "Palette",
      count: "67",
      color: "from-[#C0C0C0] to-[#808080]",
    },
    {
      id: 4,
      title: "Спортсмены",
      description: "Олимпийские чемпионы и рекордсмены",
      icon: "Trophy",
      count: "43",
      color: "from-[#B8860B] to-[#CD853F]",
    },
    {
      id: 5,
      title: "Политики",
      description: "Государственные и общественные деятели",
      icon: "Users",
      count: "38",
      color: "from-[#2F4F4F] to-[#1C1C1C]",
    },
    {
      id: 6,
      title: "Военные",
      description: "Герои войн и защитники Отечества",
      icon: "Shield",
      count: "76",
      color: "from-[#696969] to-[#B8860B]",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#1A1F2C] to-[#0F1117]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-montserrat mb-4">
            Категории личностей
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Исследуйте вклад выдающихся людей в различных сферах развития
            Кузбасса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <Icon
                      name={category.icon as any}
                      className="text-white"
                      size={24}
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#B8860B]">
                      {category.count}
                    </div>
                    <div className="text-xs text-gray-400">личностей</div>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#B8860B] transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {category.description}
                </p>

                <Button
                  variant="ghost"
                  className="w-full text-[#B8860B] hover:bg-[#B8860B]/10 border border-[#B8860B]/20"
                >
                  Изучить категорию
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
