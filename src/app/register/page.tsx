import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex font-sans bg-background">
      {/* Right Side (Form) */}
      <main className="flex-1 flex flex-col justify-center items-center p-8 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-start text-right space-y-6">
            <Link href="/" aria-label="الرئيسية">
              <img 
                src="https://almdrasa.com/wp-content/uploads/2025/02/Almadrasa_Horizontal_lockup_RGB-01.png" 
                alt="المدرسة" 
                className="h-10 object-contain dark:invert"
              />
            </Link>
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2 text-[#14121f] dark:text-white">إنشاء حساب</h1>
              <p className="text-muted-foreground">
                لديك حساب؟ <Link href="/login" className="text-[#5700ff] hover:underline font-medium">سجّل الدخول</Link>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-md p-3 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm font-medium">
              <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"></path><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"></path><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"></path><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"></path></svg>
              المتابعة بحساب جوجل
            </button>
            <div className="flex gap-4 flex-col sm:flex-row">
              <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md p-3 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm font-medium">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z"></path></svg>
                فيسبوك
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md p-3 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm font-medium">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="#0A66C2" d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"></path></svg>
                لينكدإن
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-muted-foreground">أو بالبريد الإلكتروني</span>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="firstName">
                  الاسم الأول
                </label>
                <input 
                  id="firstName" 
                  type="text" 
                  className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5700ff]" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="lastName">
                  الاسم الأخير
                </label>
                <input 
                  id="lastName" 
                  type="text" 
                  className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5700ff]" 
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground" htmlFor="email">
                البريد الإلكتروني
              </label>
              <input 
                id="email" 
                type="email" 
                dir="ltr"
                className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5700ff]" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground" htmlFor="password">
                كلمة المرور
              </label>
              <div className="relative">
                <input 
                  id="password" 
                  type="password" 
                  dir="ltr"
                  className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5700ff] pl-16 text-left" 
                  required 
                />
                <button type="button" className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-foreground">
                  إظهار
                </button>
              </div>
            </div>
            
            <div>
              <label className="flex items-start gap-2 text-sm cursor-pointer select-none">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#5700ff] focus:ring-[#5700ff]" required />
                <span className="text-muted-foreground leading-relaxed">
                  أوافق على <Link href="/terms" className="text-[#5700ff] hover:underline">الشروط والأحكام</Link> و<Link href="/privacy" className="text-[#5700ff] hover:underline">سياسة الخصوصية</Link>.
                </span>
              </label>
            </div>

            <button type="button" className="w-full h-12 inline-flex items-center justify-center rounded-md bg-[#5700ff] px-4 py-2 text-base font-bold text-white shadow hover:bg-[#5700ff]/90 transition-colors">
              إنشاء الحساب
            </button>
          </form>
        </div>
      </main>

      {/* Left Side (Panel) */}
      <aside className="hidden lg:flex w-[45%] bg-[#14121f] text-white p-12 items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5700ff]/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10 space-y-8 max-w-md">
          <h2 className="text-4xl font-bold leading-tight">ابدأ رحلتك اليوم</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            أنشئ حسابك وتعلّم البرمجة بالعربية على يد خبراء من كبرى الشركات.
          </p>
          <ul className="space-y-6 mt-8">
            <li className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#5700ff]/20 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-[#5700ff]" />
              </div>
              <span className="text-gray-300 text-lg">أكثر من 50 دورة و7 مسارات تعليمية</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#5700ff]/20 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-[#5700ff]" />
              </div>
              <span className="text-gray-300 text-lg">مشاريع عملية وشهادات إتمام موثّقة</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#5700ff]/20 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-[#5700ff]" />
              </div>
              <span className="text-gray-300 text-lg">مجتمع يضم أكثر من 37 ألف طالب</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
