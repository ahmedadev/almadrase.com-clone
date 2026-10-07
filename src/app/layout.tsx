import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: "منصة المدرسة - تعلم البرمجة بالعربية",
  description: "تعلم البرمجة بالعربية من الصفر حتى الاحتراف مع خبراء من شركات مثل جوجل ومايكروسوفت وأمازون.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${almarai.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
