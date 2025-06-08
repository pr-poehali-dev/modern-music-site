import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeaturedArtists = () => {
  const artists = [
    {
      id: 1,
      name: "Космический Джаз",
      followers: "1.2M",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&q=80",
    },
    {
      id: 2,
      name: "Синтвейв Коллектив",
      followers: "890K",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&q=80",
    },
    {
      id: 3,
      name: "Цифровой Оркестр",
      followers: "2.1M",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&q=80",
    },
    {
      id: 4,
      name: "Техно Мечтатели",
      followers: "756K",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&q=80",
    },
    {
      id: 5,
      name: "Космические Странники",
      followers: "1.5M",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&q=80",
    },
    {
      id: 6,
      name: "Неоновая Волна",
      followers: "634K",
      image:
        "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400&h=400&q=80",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#0F1117]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-white font-montserrat">
            Популярные артисты
          </h2>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
          >
            Все артисты
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {artists.map((artist) => (
            <Card
              key={artist.id}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="p-6 text-center">
                <div className="relative mb-4">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:text-[#9b87f5] bg-white/20 rounded-full w-12 h-12 p-0"
                    >
                      <Icon name="Play" size={20} />
                    </Button>
                  </div>
                </div>

                <h3 className="text-white font-semibold mb-1 text-sm group-hover:text-[#9b87f5] transition-colors duration-300">
                  {artist.name}
                </h3>
                <p className="text-purple-300 text-xs">
                  {artist.followers} подписчиков
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
