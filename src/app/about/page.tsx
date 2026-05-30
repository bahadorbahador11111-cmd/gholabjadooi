"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان صفحه */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-display text-text-dark mb-4"
          >
            درباره <span className="text-primary-pink">قلاب جادویی</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-sans text-gray-500 max-w-2xl mx-auto"
          >
            دنیایی از هنر، رنگ و ظرافت؛ خلق شده توسط تیمی حرفه‌ای
          </motion.p>
        </div>

        {/* محتوای اصلی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="w-full relative aspect-square bg-soft-blue/10 rounded-[3rem] flex items-center justify-center border-4 border-gray-50 shadow-lg overflow-hidden">
              {/* جایگذاری عکس دقیقاً با ابعاد و نامی که خواستی */}
              <Image 
                src="/about-us-image.jpg" 
                alt="درباره فروشگاه قلاب جادویی" 
                width={777} 
                height={777}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-5 text-right"
          >
            <div className="inline-flex items-center gap-2 text-primary-pink font-bold">
              <Sparkles className="w-5 h-5" />
              <span>ما چه کارهایی می‌توانیم انجام دهیم؟</span>
            </div>
            
            <h2 className="text-3xl font-bold text-text-dark mb-2">تلفیق هنر دست و خلاقیت بی‌نهایت</h2>
            
            <div className="text-lg text-gray-600 font-sans leading-relaxed text-justify flex flex-col gap-4">
              <p>
                <strong>قلاب جادویی</strong> تنها یک فروشگاه اینترنتی نیست؛ بلکه کارگاهی از عشق و هنر است که در آن، کلاف‌های ساده‌ی کاموا به دست تیمی از مجرب‌ترین و حرفه‌ای‌ترین هنرمندان، به شاهکارهایی ماندگار تبدیل می‌شوند. ما معتقدیم هدیه‌ای که با دست بافته شده باشد، بخشی از روح هنرمند را در خود دارد.
              </p>
              <p>
                <strong>خدمات و تخصص‌های ما مرزی ندارد:</strong> از طراحی و بافت انواع دسته‌گل‌های جاودان و باکس‌های هدیه فانتزی گرفته تا خلق عروسک‌های آمیگورومیِ مینیاتوری و غول‌پیکر با جزئیات خیره‌کننده، همگی در تخصص تیم هنرمند ماست. ما می‌توانیم ست‌های لباس نوزاد، اکسسوری‌های خاص دخترانه، شال و کلاه‌های زمستانی، و دکوری‌های جذاب منزل را با بالاترین کیفیت برای شما تولید کنیم.
              </p>
              <p>
                <strong>سفارشات اختصاصی و عمده:</strong> آیا به دنبال گیفت‌های خاص و بهاداده شده برای تولد، عروسی یا رویدادهای شرکتی هستید؟ آیا شخصیت کارتونی یا طرح خاصی در ذهن دارید؟ تیم حرفه‌ای ما این توانایی را دارد که هر ایده‌ای را از روی عکس، دقیقاً مطابق سلیقه و رنگ‌بندی دلخواه شما پیاده‌سازی کند.
              </p>
              <p>
                تمامی محصولات ما با استفاده از متریال درجه یک، الیاف کاملاً ضدحساسیت و کامواهای قابل شستشو تولید می‌شوند. این تعهد ماست که محصول نهایی، علاوه بر زیبایی خیره‌کننده، دوام و ماندگاری بالایی داشته باشد.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ویژگی‌های تیم با استفاده از آیکون‌های CDN حرفه‌ای (Iconify) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="bg-gray-50 p-8 rounded-3xl text-center flex flex-col items-center border border-gray-100 hover:shadow-md transition-all group"
          >
            <div className="bg-primary-pink/10 p-5 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <img src="https://api.iconify.design/fluent/people-team-28-filled.svg?color=%23ff6b81" alt="تیم حرفه‌ای" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-3">تیم هنرمند و مجرب</h3>
            <p className="text-gray-500 font-sans text-sm leading-relaxed">متشکل از بهترین بافنده‌های حرفه‌ای با توانایی اجرای پیچیده‌ترین طرح‌ها و سفارشات اختصاصی شما.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="bg-gray-50 p-8 rounded-3xl text-center flex flex-col items-center border border-gray-100 hover:shadow-md transition-all group"
          >
            <div className="bg-mint-green/10 p-5 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <img src="https://api.iconify.design/fluent/premium-28-filled.svg?color=%231dd1a1" alt="کیفیت ممتاز" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-3">تضمین بالاترین کیفیت</h3>
            <p className="text-gray-500 font-sans text-sm leading-relaxed">استفاده از متریال وارداتی و درجه یک، رنگ‌های ثابت، الیاف کاملاً ضد حساسیت و قابل شستشو.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }} 
            className="bg-gray-50 p-8 rounded-3xl text-center flex flex-col items-center border border-gray-100 hover:shadow-md transition-all group"
          >
            <div className="bg-soft-yellow/10 p-5 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <img src="https://api.iconify.design/fluent/headset-28-filled.svg?color=%23feca57" alt="پشتیبانی" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-3">مشاوره و پشتیبانی</h3>
            <p className="text-gray-500 font-sans text-sm leading-relaxed">همراهی و مشاوره رایگان تیم ما پیش از ثبت سفارش تا لحظه رسیدن شاهکار هنری به دست شما.</p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}