import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import { ExternalLink } from "lucide-react";

const games = [
  { image: game1, title: "Adventure Quest", players: "12M+ Visits", genre: "Adventure" },
  { image: game2, title: "Factory Empire", players: "22M+ Visits", genre: "Tycoon" },
  { image: game3, title: "Pet World", players: "16M+ Visits", genre: "Simulator" },
];

const GamesSection = () => (
  <section id="games" className="py-24 md:py-32 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Our <span className="text-primary">Games</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A growing portfolio of hit Roblox experiences loved by millions of players worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.title}
            className="group relative overflow-hidden rounded-xl border border-border gradient-card transition-all hover:border-primary/40"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                loading="lazy"
                width={640}
                height={640}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-lg font-semibold">{game.title}</h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-primary">{game.genre}</span>
                <span>{game.players}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GamesSection;
