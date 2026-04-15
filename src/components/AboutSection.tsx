import { Rocket, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Game Acquisition",
    description: "We identify and acquire high-potential Roblox games, giving creators the resources to reach the next level.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Our team of experienced developers builds and iterates fast — shipping updates that players love.",
  },
  {
    icon: Users,
    title: "Community Growth",
    description: "We scale games with data-driven marketing, live events, and community engagement strategies.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Why <span className="text-primary">Basic Devs</span>?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We combine creative passion with business strategy to build the next generation of Roblox hits.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="gradient-card rounded-xl border border-border p-8 transition-all hover:border-primary/40 hover:box-glow"
          >
            <div className="mb-5 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
              <f.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
