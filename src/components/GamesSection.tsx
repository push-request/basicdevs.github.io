import towerTrollsYou from "@/assets/tower-trolls-you.png";

const games = [
  {
    image: towerTrollsYou,
    title: "Tower Trolls You",
    status: "In Active Development",
    description:
      "Our flagship title currently in early launch. We're scaling marketing investment as funding clears, with broader ad campaigns rolling out in the coming weeks.",
  },
];

const GamesSection = () => (
  <section id="games" className="py-28 md:py-36">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold blue-underline mb-14">
        Our Games
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-6 max-w-md mx-auto">
        {games.map((game) => (
          <div
            key={game.title}
            className="glass-card overflow-hidden group transition-all hover:border-primary/40 text-left"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                loading="lazy"
                width={512}
                height={512}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold">{game.title}</h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {game.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GamesSection;
