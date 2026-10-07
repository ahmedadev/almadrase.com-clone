import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";
import { PlayCircle } from "lucide-react";

export default function CoursesPage() {
  const courses = [
    { title: "HTML الأساسية", desc: "تعلم هيكلة صفحات الويب", level: "مبتدئ" },
    { title: "CSS و التصميم", desc: "تعلم تنسيق المواقع", level: "مبتدئ" },
    { title: "JavaScript المتقدمة", desc: "احترف لغة الويب", level: "متوسط" },
    { title: "React.js", desc: "بناء تطبيقات تفاعلية", level: "متقدم" },
    { title: "Node.js", desc: "تطوير الباك إند", level: "متوسط" },
    { title: "Python للمبتدئين", desc: "أسهل لغة للبدء", level: "مبتدئ" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">مكتبة الدورات</h1>
            <p className="text-muted-foreground text-lg">
              تصفح أكثر من 50 دورة تعليمية باللغة العربية في مختلف مجالات البرمجة والتكنولوجيا.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition-all group">
                <div className="aspect-video bg-muted relative flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-muted-foreground/50 group-hover:text-[#5700ff] transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold px-2 py-1 rounded bg-[#5700ff]/10 text-[#5700ff]">{course.level}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-6">{course.desc}</p>
                  <button className="w-full py-2 rounded border border-[#5700ff] text-[#5700ff] hover:bg-[#5700ff] hover:text-white transition-colors font-medium">
                    تفاصيل الدورة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
