import heroBg from "@/assets/hero-bg.jpg";
import { Gamepad2, TrendingUp } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 gradient-hero opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground mb-8 backdrop-blur-sm">
        <Gamepad2 size={14} className="text-primary" />
        Roblox Game Acquisition & Development Studio
      </div>

      <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-glow">
        Basic<span className="text-primary">Devs</span>
      </h1>

      <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
        We acquire, develop, and scale hit Roblox experiences. From concept to millions of players — we turn great games into thriving businesses.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#games"
          className="rounded-lg bg-primary px-8 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:box-glow animate-pulse-glow"
        >
          View Our Games
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-border bg-secondary/30 px-8 py-3 font-heading text-sm font-semibold text-foreground transition-colors hover:bg-secondary/60"
        >
          Partner With Us
        </a>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
        {[
          { value: "50M+", label: "Total Visits" },
          { value: "12+", label: "Games" },
          { value: "24/7", label: "Live Ops" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
