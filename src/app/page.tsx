import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { HeroSection } from "@/components/sites/almdrasa/HeroSection";
import { FeaturesSection } from "@/components/sites/almdrasa/FeaturesSection";
import { TracksSection } from "@/components/sites/almdrasa/TracksSection";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TracksSection />
      </main>
      <SiteFooter />
    </div>
  );
}
