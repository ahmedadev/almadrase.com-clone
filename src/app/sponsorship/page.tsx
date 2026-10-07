import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";
import { HandHeart, Building, Globe } from "lucide-react";

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">رعاة المدرسة</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              كن جزءاً من رسالتنا في نشر التعليم التقني باللغة العربية. دعمك يساعدنا على تقديم منح دراسية وتوفير محتوى مجاني لآلاف الطلاب في جميع أنحاء الوطن العربي.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#5700ff]/10 text-[#5700ff] flex items-center justify-center mx-auto mb-6">
                <HandHeart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">دعم الأفراد</h3>
              <p className="text-muted-foreground mb-6">رعاية طالب واحد أو أكثر لدراسة مسار كامل.</p>
              <button className="w-full py-2 rounded-lg border-2 border-[#5700ff] text-[#5700ff] font-bold hover:bg-[#5700ff] hover:text-white transition-colors">
                تبرع الآن
              </button>
            </div>

            <div className="bg-card border rounded-2xl p-8 text-center relative transform md:-translate-y-4 shadow-lg border-[#5700ff]/30">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5700ff] text-white font-bold px-4 py-1 rounded-full text-sm">
                للشركات
              </div>
              <div className="w-16 h-16 rounded-full bg-[#5700ff]/10 text-[#5700ff] flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">الشراكة المؤسسية</h3>
              <p className="text-muted-foreground mb-6">رعاية برامج تعليمية أو دبلومات بوضع شعار شركتك.</p>
              <button className="w-full py-2 rounded-lg bg-[#5700ff] text-white font-bold hover:bg-[#5700ff]/90 transition-colors">
                تواصل معنا
              </button>
            </div>

            <div className="bg-card border rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#5700ff]/10 text-[#5700ff] flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">المؤسسات الخيرية</h3>
              <p className="text-muted-foreground mb-6">تعاون لتقديم منح دراسية شاملة للفئات الأقل حظاً.</p>
              <button className="w-full py-2 rounded-lg border-2 border-[#5700ff] text-[#5700ff] font-bold hover:bg-[#5700ff] hover:text-white transition-colors">
                تفاصيل الشراكة
              </button>
            </div>
          </div>

          <div className="bg-[#14121f] text-white rounded-3xl p-10 text-center relative overflow-hidden">
             <h2 className="text-2xl font-bold mb-4 relative z-10">لماذا ترعى المدرسة؟</h2>
             <p className="text-gray-300 max-w-2xl mx-auto relative z-10">
               المدرسة ليست مجرد منصة تعليمية، بل هي مجتمع. رعايتك تساهم في بناء جيل جديد من المطورين العرب القادرين على بناء مستقبل التكنولوجيا في منطقتنا.
             </p>
          </div>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
