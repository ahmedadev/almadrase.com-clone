import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";

export default function TextPageTemplate({ title }: { title?: string }) {
  const pageTitle = title || "الشروط والأحكام";
  
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#5700ff] pb-6 border-b">{pageTitle}</h1>
            
            <div className="space-y-6 text-muted-foreground leading-loose text-lg">
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">البند الأول: القبول بالشروط</h3>
              <p>
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص.
              </p>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li>الالتزام بحقوق الملكية الفكرية للمنصة.</li>
                <li>عدم مشاركة بيانات الحساب مع أشخاص آخرين.</li>
                <li>استخدام المنصة للأغراض التعليمية المخصصة لها فقط.</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">البند الثاني: الخصوصية</h3>
              <p>
                نحن نهتم بخصوصيتك. يتم تشفير جميع البيانات ولا يتم مشاركتها مع أطراف ثالثة لأغراض دعائية دون موافقتك الصريحة.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
