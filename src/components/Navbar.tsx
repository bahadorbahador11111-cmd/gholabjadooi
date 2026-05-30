"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  // استیت‌های مربوط به منوی موبایل و جلوگیری از ارور رندر Next.js
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // دریافت زنده تعداد کل محصولات از حافظه Zustand
  const totalItems = useCartStore((state) => state.getTotalItems());

  // این ترفند باعث میشه تا وقتی سایت کامل لود نشده، عدد سبد خرید رندر نشه تا ارور نگیریم
  useEffect(() => {
    setMounted(true);
  }, []);

  // لیست تمام صفحاتی که ساخته شده
  const navLinks = [
    { name: "صفحه اصلی", path: "/" },
    { name: "فروشگاه", path: "/shop" },
    { name: "درباره ما", path: "/about" },
    { name: "سوالات متداول", path: "/faq" },
    { name: "تماس با ما", path: "/contact" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* لوگو و نام برند با آیکون حرفه‌ای CDN */}
          <Link href="/" className="flex items-center gap-2">
            <img src="https://api.iconify.design/fluent/magic-wand-24-filled.svg?color=%23ff6b81" alt="قلاب جادویی" className="w-8 h-8" />
            <span className="font-display text-2xl text-primary-pink font-bold">قلاب جادویی</span>
          </Link>

          {/* منوی دسکتاپ (در موبایل مخفی می‌شه) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.path}
                className="text-text-dark/80 hover:text-primary-pink font-sans font-bold transition-colors text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* بخش سمت چپ: سبد خرید و دکمه همبرگری موبایل */}
          <div className="flex items-center gap-4">
            
            {/* دکمه سبد خرید متصل به Zustand */}
            <Link href="/cart" className="relative p-2 bg-primary-pink/10 rounded-xl hover:bg-primary-pink/20 transition-colors group">
              <img src="https://api.iconify.design/fluent/shopping-bag-24-filled.svg?color=%23ff6b81" alt="سبد خرید" className="w-6 h-6 group-hover:scale-110 transition-transform" />
              
              {/* بج نمایش تعداد محصولات داخل سبد (فقط اگر محصولی باشد و صفحه لود شده باشد) */}
              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-mint-green text-text-dark text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* دکمه همبرگری مخصوص موبایل (در دسکتاپ مخفی می‌شه) */}
            <button 
              className="md:hidden p-2 text-text-dark hover:bg-gray-50 rounded-xl transition-colors"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
            
          </div>

        </div>
      </div>

      {/* منوی بازشونده موبایل (با انیمیشن نرم) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.path}
                  onClick={() => setIsOpen(false)} // وقتی روی لینک کلیک شد، منو بسته بشه
                  className="text-text-dark/80 hover:text-primary-pink hover:bg-primary-pink/5 font-sans font-bold p-3 rounded-xl transition-colors block text-right"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}