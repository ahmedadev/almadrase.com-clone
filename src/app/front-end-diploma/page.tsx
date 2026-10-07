import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";
import { PlayCircle, Code, Clock, Award } from "lucide-react";

export default function FrontEndDiplomaPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#14121f] text-white pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5700ff]/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6 text-right">
                <span className="inline-block bg-[#5700ff]/20 text-[#5700ff] px-4 py-1.5 rounded-full text-sm font-bold">
                  تحديث 2024
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  دبلومة تعلم البرمجة والـ Frontend من الصفر
                </h1>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                  تعلم البرمجة من الصفر واحترف تطوير الواجهات الأمامية (Frontend) حتى React عبر دبلومة مهنية بمشاريع من بيئة العمل الحقيقية تؤهلك لوظائف Junior Frontend.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3">
                    <Clock className="w-5 h-5 text-[#5700ff]" />
                    <span>أكثر من 50 ساعة</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3">
                    <Code className="w-5 h-5 text-[#5700ff]" />
                    <span>مشاريع عملية</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3">
                    <Award className="w-5 h-5 text-[#5700ff]" />
                    <span>شهادة معتمدة</span>
                  </div>
                </div>

                <div className="pt-6">
                  <button className="bg-[#5700ff] hover:bg-[#5700ff]/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center gap-3">
                    اشترك الآن في الدبلومة
                  </button>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-xl">
                <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl flex items-center justify-center group cursor-pointer">
                  <img 
                    src="https://almdrasa.com/wp-content/uploads/2024/06/og-front-end-diploma.jpg" 
                    alt="دبلومة Frontend" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  />
                  <PlayCircle className="w-20 h-20 text-white relative z-10 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            <h2 className="text-3xl font-bold text-foreground">ماذا ستتعلم في هذه الدبلومة؟</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              هذه الدبلومة مصممة لتأخذك من الصفر تماماً، حتى لو لم تكتب سطراً برمجياً واحداً في حياتك، لتصل بك إلى مستوى مطور واجهات أمامية محترف قادر على بناء تطبيقات ويب تفاعلية ومعقدة باستخدام أحدث التقنيات المطلوبة في سوق العمل.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-right pt-8">
              <div className="p-6 rounded-2xl border bg-card">
                <h3 className="text-xl font-bold mb-4 text-[#5700ff]">الأساسيات (HTML, CSS)</h3>
                <p className="text-muted-foreground">بناء هيكل وتصميم المواقع بأفضل الممارسات وجعلها متجاوبة مع جميع الشاشات.</p>
              </div>
              <div className="p-6 rounded-2xl border bg-card">
                <h3 className="text-xl font-bold mb-4 text-[#5700ff]">جافاسكريبت (JavaScript)</h3>
                <p className="text-muted-foreground">لغة الويب الأساسية، ستتعلمها بعمق لفهم كيفية عمل المتصفحات وإضافة التفاعلية.</p>
              </div>
              <div className="p-6 rounded-2xl border bg-card">
                <h3 className="text-xl font-bold mb-4 text-[#5700ff]">مكتبة ريأكت (React.js)</h3>
                <p className="text-muted-foreground">أشهر مكتبة لبناء واجهات المستخدم في العالم، مطلوبة في معظم وظائف الواجهات الأمامية.</p>
              </div>
              <div className="p-6 rounded-2xl border bg-card">
                <h3 className="text-xl font-bold mb-4 text-[#5700ff]">مشاريع حقيقية</h3>
                <p className="text-muted-foreground">تطبيق عملي مستمر وبناء بورتفوليو قوي يعرض مهاراتك أمام أصحاب العمل.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
