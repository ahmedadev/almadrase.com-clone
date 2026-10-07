import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function TracksSection() {
  const tracks = [
    {
      title: "دبلومة المدرسة",
      description: "رحلة متكاملة من الصفر وحتى الاحتراف لتصبح مطور واجهات أمامية متكامل (Front-End Developer).",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "مسار تطوير الويب",
      description: "تعلم أساسيات الويب HTML, CSS, JavaScript وابدأ رحلتك في عالم البرمجة.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop",
    },
    {
      title: "مسار بايثون",
      description: "تعلم لغة بايثون من الصفر واكتشف عالم تحليل البيانات والذكاء الاصطناعي.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2064&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">مسارات <span className="text-[#5700ff]">التعلم</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              اختر المسار المناسب لك وابدأ رحلة التعلم بخطوات مدروسة ومنهجية واضحة
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            عرض كل المسارات
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className="group rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-all bg-background">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={track.image} 
                  alt={track.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#5700ff] transition-colors">{track.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {track.description}
                </p>
                <Button className="w-full bg-muted text-foreground hover:bg-[#5700ff] hover:text-white transition-colors">
                  تفاصيل المسار
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
