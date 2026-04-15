import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GamesSection from "@/components/GamesSection";
import GameAcquisitionSection from "@/components/GameAcquisitionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <GamesSection />
    <GameAcquisitionSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
