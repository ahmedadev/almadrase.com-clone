import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";
import { Target, Users, BookOpen, Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              منصة المدرسة هي الوجهة الأولى لتعلم البرمجة باللغة العربية. نهدف إلى سد الفجوة بين التعليم الأكاديمي ومتطلبات سوق العمل من خلال محتوى عملي، مشاريع حقيقية، وتوجيه مستمر.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-card border rounded-2xl p-6 text-center">
              <Users className="w-10 h-10 text-[#5700ff] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">+100,000</div>
              <div className="text-sm text-muted-foreground">طالب مسجل</div>
            </div>
            <div className="bg-card border rounded-2xl p-6 text-center">
              <BookOpen className="w-10 h-10 text-[#5700ff] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">+50</div>
              <div className="text-sm text-muted-foreground">دورة تعليمية</div>
            </div>
            <div className="bg-card border rounded-2xl p-6 text-center">
              <Target className="w-10 h-10 text-[#5700ff] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">+25</div>
              <div className="text-sm text-muted-foreground">مشروع عملي</div>
            </div>
            <div className="bg-card border rounded-2xl p-6 text-center">
              <Trophy className="w-10 h-10 text-[#5700ff] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-1">+10</div>
              <div className="text-sm text-muted-foreground">مدربين خبراء</div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-[#14121f] text-white p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5700ff] opacity-20 blur-3xl rounded-full"></div>
              <h2 className="text-3xl font-bold mb-4 relative z-10">رؤيتنا</h2>
              <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                أن نكون المنصة الأكبر والأكثر تأثيراً في الوطن العربي لتخريج مهندسي برمجيات قادرين على المنافسة عالمياً، من خلال توفير تعليم تقني حديث باللغة العربية يواكب أحدث التقنيات.
              </p>
            </div>
            <div className="bg-gray-100 p-10 rounded-3xl relative overflow-hidden dark:bg-card dark:border">
              <h2 className="text-3xl font-bold mb-4 relative z-10 text-[#5700ff]">مهمتنا</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg relative z-10">
                تبسيط المفاهيم البرمجية المعقدة، وتوفير بيئة تعليمية تفاعلية تعتمد على التطبيق العملي، وربط المتعلمين بسوق العمل مباشرة من خلال مشاريع وتوجيهات مستمرة.
              </p>
            </div>
          </div>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
