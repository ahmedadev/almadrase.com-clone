import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-right space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-[#14121f] dark:text-white">
            تعلم البرمجة بالعربية <br />
            <span className="text-[#5700ff]">من الصفر حتى الاحتراف</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
            مع خبراء من شركات مثل جوجل ومايكروسوفت وأمازون: دورات ومسارات ومشاريع عملية مع متابعة وإرشاد. ابدأ رحلتك اليوم.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto bg-[#5700ff] text-white hover:bg-[#5700ff]/90 text-lg px-8 h-14">
              تصفح المسارات
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 gap-2">
              <PlayCircle className="w-5 h-5" />
              شاهد الفيديو
            </Button>
          </div>
        </div>
        
        <div className="flex-1 relative w-full flex justify-center">
          <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/u3FzGE0xUX8?rel=0&showinfo=0" 
              title="تعلم البرمجة بالعربية | منصة المدرسة" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
