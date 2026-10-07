import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";
import { CheckCircle2, Clock } from "lucide-react";

export default function ConsultationsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F5F6F9] text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">استشارات المدرسة</h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              احجز استشارة برمجية أو تقنية مخصصة مع خبرائنا، سواء كنت طالبًا أو مبرمجًا أو صاحب عمل، واخرج بخطة عمل واضحة ومصادر تعلم وتسجيل فيديو للجلسة. احجز جلستك الآن.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* 30 Minutes */}
            <div className="bg-white rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow relative">
              <h3 className="text-2xl font-bold text-center mb-2">استشارة سريعة</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <Clock className="w-4 h-4" />
                <span>30 دقيقة</span>
              </div>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-[#5700ff]">$50</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">تقييم مستواك الحالي وتحديد المسار الأنسب</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">إجابة أسئلة محددة تواجهك في مسيرتك</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">نصائح سريعة لتطوير سيرتك الذاتية</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border-2 border-[#5700ff] text-[#5700ff] hover:bg-[#5700ff] hover:text-white font-bold transition-colors">
                احجز الآن
              </button>
            </div>

            {/* 60 Minutes - Popular */}
            <div className="bg-[#14121f] rounded-2xl p-8 shadow-xl relative transform md:-translate-y-4 text-white">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#23CEDB] text-black font-bold px-4 py-1 rounded-full text-sm">
                الأكثر طلباً
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">استشارة شاملة</h3>
              <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
                <Clock className="w-4 h-4" />
                <span>60 دقيقة</span>
              </div>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-white">$90</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">خطة تعليمية مفصلة مخصصة لك</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">مراجعة شاملة للكود الخاص بك (Code Review)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">مراجعة تفصيلية للسيرة الذاتية و Portfolio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">تسجيل فيديو كامل للجلسة للرجوع إليه</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-[#5700ff] text-white hover:bg-[#5700ff]/90 font-bold transition-colors shadow-lg shadow-[#5700ff]/25">
                احجز الآن
              </button>
            </div>

            {/* Mentorship */}
            <div className="bg-white rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow relative">
              <h3 className="text-2xl font-bold text-center mb-2">توجيه مستمر</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <Clock className="w-4 h-4" />
                <span>4 جلسات (شهرياً)</span>
              </div>
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-[#5700ff]">$300</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">متابعة أسبوعية لمستواك وتطورك</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">توجيه مباشر في بناء مشاريع متكاملة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">دعم عبر الواتساب طوال فترة التوجيه</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23CEDB] shrink-0 mt-0.5" />
                  <span className="text-sm">التحضير لمقابلات العمل (Mock Interviews)</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border-2 border-[#5700ff] text-[#5700ff] hover:bg-[#5700ff] hover:text-white font-bold transition-colors">
                تواصل معنا
              </button>
            </div>

          </div>

          <div className="bg-[#14121f] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-[#5700ff]/20 to-transparent pointer-events-none"></div>
            <div className="relative z-10 md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-3">هل أنت شركة أو صاحب مشروع؟</h2>
              <p className="text-gray-300">
                نقدم استشارات متخصصة للشركات في بناء الفرق التقنية، تصميم البنية التحتية، ومراجعة الأكواد البرمجية لضمان أفضل جودة لمشروعك.
              </p>
            </div>
            <div className="relative z-10">
              <button className="bg-white text-black hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
                تواصل للمؤسسات
              </button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
