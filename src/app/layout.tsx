import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 👈 ایمپورت فوتر جدید

export const metadata: Metadata = {
  title: "فروشگاه قلاب جادویی | سفارش آنلاین بافتنی و دسته گل کاموایی",
  description: "خرید آنلاین زیباترین محصولات بافتنی دست‌ساز، عروسک کاموایی، دسته گل و باکس گل بافتنی با بهترین قیمت. سفارش انواع بافتنی فانتزی و دخترانه در فروشگاه قلاب جادویی.",
  keywords: "خرید بافتنی, سفارش آنلاین عروسک کاموایی, قیمت دسته گل بافتنی, باکس گل کاموایی, فروشگاه قلاب جادویی, بافتنی فانتزی دخترانه, هدیه خاص کاموایی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased font-sans min-h-screen flex flex-col">
        <Navbar />
        
        {/* محتوای صفحات سایت کل فضای وسط رو پر می‌کنه */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 👈 اضافه شدن فوتر به انتهای سایت */}
        <Footer />
      </body>
    </html>
  );
}