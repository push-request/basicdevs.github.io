import heroBg from "@/assets/hero-bg.jpg";
import { Mail } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-background/70" />

    <div className="relative z-10 container mx-auto px-6">
      <div className="glass-card max-w-2xl mx-auto p-10 md:p-14 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          Basic Devs
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
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
      </div>
    </div>
  </section>
);

export default HeroSection;
