import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PopularTracks = () => {
  const tracks = [
    {
      id: 1,
      title: "Звездная пыль",
      artist: "Космический Джаз",
      duration: "3:45",
      plays: "2.1M",
    },
    {
      id: 2,
      title: "Неоновые огни",
      artist: "Синтвейв Коллектив",
      duration: "4:12",
      plays: "1.8M",
    },
    {
      id: 3,
      title: "Лунная соната 2.0",
      artist: "Цифровой Оркестр",
      duration: "5:23",
      plays: "3.2M",
    },
    {
      id: 4,
      title: "Электрические сны",
      artist: "Техно Мечтатели",
      duration: "3:56",
      plays: "1.5M",
    },
    {
      id: 5,
      title: "Галактический блюз",
      artist: "Космические Странники",
      duration: "4:33",
      plays: "2.7M",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#1A1F2C] to-[#0F1117]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-white font-montserrat">
            Популярные треки
          </h2>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
          >
            Смотреть все
          </Button>
        </div>

        <div className="grid gap-4">
          {tracks.map((track, index) => (
            <Card
              key={track.id}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center p-4 space-x-4">
                <div className="flex items-center justify-center w-8 h-8 text-purple-300 font-semibold">
                  {index + 1}
                </div>

                <div className="w-12 h-12 bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] rounded-lg flex items-center justify-center">
                  <Icon name="Music" className="text-white" size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold truncate">
                    {track.title}
                  </h3>
                  <p className="text-purple-300 text-sm truncate">
                    {track.artist}
                  </p>
                </div>

                <div className="hidden md:block text-purple-300 text-sm">
                  {track.plays} прослушиваний
                </div>

                <div className="text-purple-300 text-sm">{track.duration}</div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 text-white hover:text-[#9b87f5] transition-all duration-300"
                >
                  <Icon name="Play" size={20} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTracks;
