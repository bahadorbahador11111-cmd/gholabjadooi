"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* یه المان تزئینی برای پس‌زمینه */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-pink/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* سمت راست: تصویر (اسپلیت) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* قاب فانتزی پشت عکس */}
            <div className="absolute inset-0 bg-soft-blue rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <Image 
  src="/about-magic.webp" /* 👈 فقط همین پسوند رو تغییر دادم */
  alt="هنر دست و بافتنی‌های فانتزی قلاب جادویی" 
  fill 
  className="object-cover hover:scale-110 transition-transform duration-700"
/>
            </div>
            
            {/* یه بج کوچیک شناور روی عکس */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border-2 border-mint-green flex items-center gap-3"
            >
              <div className="bg-mint-green p-2 rounded-full">
                <HeartHandshake className="w-6 h-6 text-text-dark" />
              </div>
              <div className="font-sans">
                <p className="text-sm font-bold text-text-dark">بافته شده با عشق</p>
                <p className="text-xs text-text-dark/60">۱۰۰٪ هنر دست</p>
              </div>
            </motion.div>
          </motion.div>

          {/* سمت چپ: متن‌های سئو شده و معرفی برند */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 text-right"
          >
            <div className="inline-flex items-center gap-2 text-primary-pink font-bold">
              <Sparkles className="w-5 h-5" />
              <span>داستان ما رو بشنوید</span>
            </div>
            
            {/* تگ h2 برای سئو بسیار مهمه */}
            <h2 className="text-4xl sm:text-5xl font-display text-text-dark leading-snug">
              اینجا کلاف‌ها به <span className="text-primary-pink">جادو</span> تبدیل می‌شوند!
            </h2>
            
            <p className="text-lg font-sans text-text-dark/80 leading-relaxed text-justify">
              در فروشگاه <strong className="text-primary-pink">قلاب جادویی</strong>، ما معتقدیم که هر هدیه باید روح و احساس داشته باشه. محصولات ما، از دسته گل‌های کاموایی همیشه بهار گرفته تا عروسک‌های فانتزی، همگی با ظرافت، عشق و ساعت‌ها هنرِ دستِ خلق شده‌اند. 
              ما اینجا نیستیم که فقط یک محصول بفروشیم؛ ما یک اثر هنری ماندگار برای لحظات خاص شما می‌سازیم.
            </p>

            {/* لیست ویژگی‌ها (بسیار عالی برای خوانایی و سئو) */}
            <div className="flex flex-col gap-4 mt-4 font-sans text-text-dark/80">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-mint-green" />
                <span className="text-lg">استفاده از بهترین و نرم‌ترین کامواهای بازار</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-mint-green" />
                <span className="text-lg">تنوع بی‌نظیر در رنگ‌بندی و طراحی اختصاصی</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-mint-green" />
                <span className="text-lg">هدیه‌ای متفاوت، ماندگار و دوست‌دار محیط زیست</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}