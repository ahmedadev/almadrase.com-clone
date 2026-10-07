import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
            <p className="text-muted-foreground text-lg">
              هل لديك سؤال أو استفسار؟ نحن هنا لمساعدتك. تواصل مع فريق الدعم الفني وسنرد عليك في أقرب وقت.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground">الاسم الأول</label>
                    <input type="text" className="w-full px-4 py-3 bg-muted rounded-lg border-transparent focus:border-[#5700ff] focus:ring-1 focus:ring-[#5700ff] outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground">الاسم الأخير</label>
                    <input type="text" className="w-full px-4 py-3 bg-muted rounded-lg border-transparent focus:border-[#5700ff] focus:ring-1 focus:ring-[#5700ff] outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground">البريد الإلكتروني</label>
                  <input type="email" className="w-full px-4 py-3 bg-muted rounded-lg border-transparent focus:border-[#5700ff] focus:ring-1 focus:ring-[#5700ff] outline-none transition-all text-left" dir="ltr" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground">موضوع الرسالة</label>
                  <input type="text" className="w-full px-4 py-3 bg-muted rounded-lg border-transparent focus:border-[#5700ff] focus:ring-1 focus:ring-[#5700ff] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground">تفاصيل الرسالة</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-muted rounded-lg border-transparent focus:border-[#5700ff] focus:ring-1 focus:ring-[#5700ff] outline-none transition-all resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-[#5700ff] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#5700ff]/90 transition-colors">
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-[#14121f] text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6">معلومات التواصل المباشر</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5700ff]/20 flex items-center justify-center text-[#23CEDB]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">البريد الإلكتروني</div>
                      <div className="font-bold">support@almdrasa.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5700ff]/20 flex items-center justify-center text-[#23CEDB]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">رقم الهاتف (واتساب فقط)</div>
                      <div className="font-bold" dir="ltr">+20 100 000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5700ff]/20 flex items-center justify-center text-[#23CEDB]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">المقر الرئيسي</div>
                      <div className="font-bold">القاهرة، مصر (عمل عن بعد)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-2xl p-8">
                <h3 className="text-lg font-bold mb-2">أوقات العمل</h3>
                <p className="text-muted-foreground text-sm">
                  فريق الدعم الفني متواجد للرد على استفساراتكم من الأحد إلى الخميس، من الساعة 10 صباحاً وحتى 6 مساءً بتوقيت القاهرة.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
