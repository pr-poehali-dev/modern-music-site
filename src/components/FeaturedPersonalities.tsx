import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeaturedPersonalities = () => {
  const personalities = [
    {
      id: 1,
      name: "Михайло Волков",
      category: "Первооткрыватель",
      period: "1720-1795",
      achievement: "Открыл каменный уголь в Кузбассе",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
      color: "from-[#696969] to-[#2F4F4F]",
    },
    {
      id: 2,
      name: "Константин Терешенко",
      category: "Промышленник",
      period: "1840-1903",
      achievement: "Основатель Кемеровского химзавода",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
      color: "from-[#B8860B] to-[#DAA520]",
    },
    {
      id: 3,
      name: "Алексей Леонов",
      category: "Космонавт",
      period: "1934-2019",
      achievement: "Первый человек в открытом космосе",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&q=80",
      color: "from-[#C0C0C0] to-[#808080]",
    },
    {
      id: 4,
      name: "Александр Завьялов",
      category: "Ученый",
      period: "1925-2010",
      achievement: "Геолог, исследователь недр Кузбасса",
      image:
        "https://images.unsplash.com/photo-1559566140-2e0a72043d57?w=400&h=400&q=80",
      color: "from-[#B8860B] to-[#CD853F]",
    },
    {
      id: 5,
      name: "Мария Усова",
      category: "Деятель культуры",
      period: "1930-2020",
      achievement: "Народная артистка, основательница театра",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c9df071e?w=400&h=400&q=80",
      color: "from-[#2F4F4F] to-[#1C1C1C]",
    },
    {
      id: 6,
      name: "Иван Романцев",
      category: "Военный",
      period: "1918-1945",
      achievement: "Герой Советского Союза",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80",
      color: "from-[#696969] to-[#B8860B]",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#0F1117]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white font-montserrat mb-2">
              Выдающиеся личности
            </h2>
            <p className="text-gray-300">
              Герои, которые создавали историю Кузбасса
            </p>
          </div>
          <Button
            variant="outline"
            className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B]/10"
          >
            Все личности
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalities.map((person) => (
            <Card
              key={person.id}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${person.color}`}></div>
              <div className="p-6">
                <div className="relative mb-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-[#B8860B] text-sm font-medium">
                      {person.category}
                    </div>
                    <div className="text-gray-300 text-xs">{person.period}</div>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#B8860B] transition-colors duration-300">
                  {person.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {person.achievement}
                </p>

                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#B8860B] hover:bg-[#B8860B]/10 p-0"
                  >
                    Подробнее
                    <Icon name="ArrowRight" className="ml-1" size={14} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white p-2"
                  >
                    <Icon name="BookOpen" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPersonalities;
