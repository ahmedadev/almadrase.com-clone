const fs = require("fs");
const path = require("path");

const routes = [
  { path: "front-end-diploma", title: "دبلومة المدرسة" },
  { path: "tracks", title: "المسارات" },
  { path: "courses", title: "الدورات" },
  { path: "consultations", title: "الاستشارات" },
  { path: "sponsorship", title: "رعاة المدرسة" },
  { path: "blog", title: "المدونة" },
  { path: "login", title: "تسجيل الدخول" },
  { path: "register", title: "إنشاء حساب جديد" },
  { path: "about", title: "عن المدرسة" },
  { path: "contact", title: "اتصل بنا" },
  { path: "faq", title: "الأسئلة الشائعة" },
  { path: "terms", title: "شروط الاستخدام" },
  { path: "privacy", title: "سياسة الخصوصية" },
  { path: "refund", title: "سياسة الاسترجاع" },
];

routes.forEach((route) => {
  const dir = path.join(__dirname, "../src/app", route.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const content = `import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";

export default function ${route.path.replace(/-/g, "")}Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SiteHeader />
      <main className="flex-1 flex flex-col items-center justify-center container mx-auto px-4 py-32 text-center">
        <div className="bg-muted/30 p-12 rounded-3xl border shadow-sm max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#14121f] dark:text-white">
            ${route.title}
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            جاري العمل على هذه الصفحة وسيتم إضافة المحتوى قريباً...
          </p>
          <a href="/" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-[#5700ff] text-white font-medium hover:bg-[#5700ff]/90 transition-colors">
            العودة للرئيسية
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
`;

  fs.writeFileSync(path.join(dir, "page.tsx"), content, "utf8");
});

console.log("Pages generated successfully.");
