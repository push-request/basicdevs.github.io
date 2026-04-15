import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";

const games = [
  { image: game1, title: "Adventure Quest", visits: "12M+ Visits" },
  { image: game2, title: "Factory Empire", visits: "22M+ Visits" },
  { image: game3, title: "Pet World", visits: "16M+ Visits" },
];

const GamesSection = () => (
  <section id="games" className="py-28 md:py-36">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold blue-underline mb-14">
        Our Games
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {games.map((game) => (
          <div
            key={game.title}
            className="glass-card overflow-hidden group cursor-pointer transition-all hover:border-primary/40"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                loading="lazy"
                width={640}
                height={640}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold mb-1">{game.title}</h3>
              <p className="text-xs text-muted-foreground">{game.visits}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GamesSection;
