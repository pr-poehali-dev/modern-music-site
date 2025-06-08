import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SearchSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Все периоды", icon: "Calendar" },
    { id: "1700s", label: "XVIII век", icon: "Clock" },
    { id: "1800s", label: "XIX век", icon: "Clock" },
    { id: "1900s", label: "XX век", icon: "Clock" },
    { id: "2000s", label: "XXI век", icon: "Clock" },
  ];

  const features = [
    {
      icon: "MapPin",
      title: "Интерактивная карта",
      description:
        "Исследуйте места рождения и деятельности известных личностей",
    },
    {
      icon: "Timeline",
      title: "Временная шкала",
      description: "Путешествуйте по эпохам развития Кузбасса",
    },
    {
      icon: "Search",
      title: "Умный поиск",
      description: "Находите личности по профессии, достижениям или периоду",
    },
    {
      icon: "Network",
      title: "Связи и влияние",
      description: "Изучайте взаимодействия между историческими фигурами",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#0F1117] to-[#1A1F2C]">
      <div className="max-w-7xl mx-auto">
        {/* Search Interface */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-montserrat mb-4">
            Исследуйте историю
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Используйте мощные инструменты для изучения наследия Кузбасса
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Найти личность, период или достижение..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] transition-colors"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#B8860B] hover:bg-[#DAA520] text-black rounded-full px-6">
                Поиск
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`${
                  activeFilter === filter.id
                    ? "bg-[#B8860B] text-black hover:bg-[#DAA520]"
                    : "border-gray-600 text-gray-300 hover:bg-white/10"
                }`}
              >
                <Icon name={filter.icon as any} className="mr-2" size={16} />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={feature.icon as any}
                    className="text-black"
                    size={24}
                  />
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-[#B8860B] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#2F4F4F] to-[#1A1F2C] rounded-2xl p-8 border border-[#B8860B]/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Станьте частью истории
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Знаете интересные факты о личностях Кузбасса? Поделитесь ими с
              сообществом и помогите сохранить историю региона для будущих
              поколений.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#B8860B] hover:bg-[#DAA520] text-black px-6 py-3">
                <Icon name="Plus" className="mr-2" size={20} />
                Добавить информацию
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-white/10 px-6 py-3"
              >
                <Icon name="Mail" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
