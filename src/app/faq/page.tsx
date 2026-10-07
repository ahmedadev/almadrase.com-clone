import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";

export default function FAQPage() {
  const faqs = [
    {
      q: "هل يجب أن يكون لدي خلفية برمجية سابقة؟",
      a: "لا، جميع مساراتنا ودوراتنا تبدأ من الصفر تماماً ومصممة لتأخذ بيدك خطوة بخطوة."
    },
    {
      q: "هل الشهادات معتمدة؟",
      a: "نقدم شهادات إتمام معتمدة من منصة المدرسة تثبت اجتيازك للمشاريع العملية والمناهج."
    },
    {
      q: "كيف يمكنني الدفع؟",
      a: "نوفر وسائل دفع متعددة مثل البطاقات البنكية، PayPal، وبعض المحافظ الإلكترونية في بعض الدول."
    },
    {
      q: "هل يمكنني استرداد أموالي إذا لم يعجبني الكورس؟",
      a: "نعم، نقدم ضمان استرداد الأموال خلال 14 يوماً من تاريخ الشراء وفقاً لسياسة الاسترجاع."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">الأسئلة الشائعة</h1>
            <p className="text-muted-foreground text-lg">إجابات لأكثر الأسئلة التي تصلنا من الطلاب.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card border rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-[#5700ff]">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
