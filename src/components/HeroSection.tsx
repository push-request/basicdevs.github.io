import heroBg from "@/assets/hero-bg.jpg";
import { Users, Play, TrendingUp, Globe } from "lucide-react";
import { Mail } from "lucide-react";

const stats = [
  { value: "50M+", label: "Players playing our games", icon: Users },
  { value: "500M+", label: "Total play sessions", icon: Play },
  { value: "4.2%", label: "Roblox Platform CCU", icon: TrendingUp },
  { value: "~8%", label: "Roblox Platform DAU", icon: Globe },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-background/60" />

    <div className="relative z-10 container mx-auto px-6">
      <div className="glass-card max-w-2xl mx-auto p-10 md:p-14 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          Basic Devs
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#games"
            className="rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 w-full sm:w-auto text-center"
          >
            Explore our games
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-border bg-transparent px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/50 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
          >
            <Mail size={16} /> Talk to us
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1.5">
                <stat.icon size={12} /> {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
