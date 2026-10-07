import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { TracksSection } from "@/components/sites/almdrasa/TracksSection";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";

export default function TracksPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">مسارات التعلم</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اختر المسار المناسب لك وابدأ رحلتك في تعلم البرمجة من الصفر بخطوات مدروسة ومنهجية واضحة.
          </p>
        </div>
        <TracksSection />
      </main>
      <SiteFooter />
    </div>
  );
}
