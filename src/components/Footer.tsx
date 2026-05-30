import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-soft-blue mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-right">
          
          {/* ستون اول: معرفی تیم و برند */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="https://api.iconify.design/fluent/magic-wand-24-filled.svg?color=%23ff6b81" alt="قلاب جادویی" className="w-8 h-8" />
              <h3 className="text-3xl font-display text-primary-pink font-bold">قلاب جادویی</h3>
            </Link>
            <p className="text-text-dark/70 font-sans leading-relaxed text-justify">
              خلق زیباترین و خاص‌ترین دست‌بافت‌های فانتزی. یک اثر هنری ماندگار، بافته شده با عشق و ظرافت توسط تیم حرفه‌ای و هنرمند ما برای خلق لحظات شیرین شما.
            </p>
          </div>

          {/* ستون دوم: نقشه سایت و لینک‌های مفید (آپدیت شده با تمام صفحات) */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-xl font-bold text-text-dark mb-2">لینک‌های مفید</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 font-sans w-full max-w-xs">
              <Link href="/shop" className="text-text-dark/70 hover:text-primary-pink transition-colors">فروشگاه</Link>
              <Link href="/track-order" className="text-text-dark/70 hover:text-primary-pink transition-colors">پیگیری سفارش</Link>
              <Link href="/about" className="text-text-dark/70 hover:text-primary-pink transition-colors">درباره ما</Link>
              <Link href="/faq" className="text-text-dark/70 hover:text-primary-pink transition-colors">سوالات متداول</Link>
              <Link href="/contact" className="text-text-dark/70 hover:text-primary-pink transition-colors">تماس با ما</Link>
              <Link href="/terms" className="text-text-dark/70 hover:text-primary-pink transition-colors">قوانین و مقررات</Link>
            </div>
          </div>

          {/* ستون سوم: ارتباط با پشتیبانی */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-xl font-bold text-text-dark mb-2">ارتباط با پشتیبانی</h4>
            
            <div className="flex items-center gap-2 text-text-dark/70 font-sans">
              <Phone className="w-5 h-5 text-soft-blue" />
              <span dir="ltr">۰۲۱ - ۱۲۳۴۵۶۷۸</span>
            </div>
            
            <div className="mt-2">
              <a href="#" className="bg-mint-green/20 p-3 rounded-2xl text-text-dark hover:bg-mint-green transition-all shadow-sm flex items-center gap-2 group w-fit">
                <MessageCircle className="w-5 h-5 text-mint-green group-hover:text-text-dark transition-colors" />
                <span className="font-sans text-sm font-bold">پشتیبانی آنلاین در بله</span>
              </a>
            </div>
          </div>

        </div>

        {/* کپی رایت */}
        <div className="border-t border-soft-blue/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-dark/60 font-sans">
          <p>© {new Date().getFullYear()} تمامی حقوق برای تیم قلاب جادویی محفوظ است.</p>
          <p className="flex items-center gap-1 font-bold">
            طراحی و توسعه توسط تیم حرفه‌ای
          </p>
        </div>
      </div>
    </footer>
  );
}