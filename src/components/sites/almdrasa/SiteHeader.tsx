import Link from "next/link";
import { Menu, Moon, Sun, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <img 
              src="https://almdrasa.com/wp-content/uploads/2025/02/Almadrasa_Horizontal_lockup_RGB-01.png" 
              alt="المدرسة" 
              className="h-8 object-contain"
            />
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/front-end-diploma" className="text-sm font-medium transition-colors hover:text-primary">
            دبلومة المدرسة
          </Link>
          <Link href="/tracks" className="text-sm font-medium transition-colors hover:text-primary">
            المسارات
          </Link>
          <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
            الدورات
          </Link>
          <Link href="/consultations" className="text-sm font-medium transition-colors hover:text-primary">
            الاستشارات
          </Link>
          <Link href="/sponsorship" className="text-sm font-medium transition-colors hover:text-primary">
            رعاة المدرسة
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            المدونة
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Toggle Theme">
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="hidden h-5 w-5 dark:block" />
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="gap-2 text-sm font-medium">
              <LogIn className="h-4 w-4" />
              دخول
            </Button>
            <Button className="gap-2 bg-[#5700ff] text-white hover:bg-[#5700ff]/90 text-sm font-medium">
              إنشاء حساب
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
