"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

// دیتای اسکیما برای صفحه تماس با ما
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "تماس با تیم قلاب جادویی",
  "description": "راه‌های ارتباطی، پشتیبانی در پیام‌رسان بله و شماره تماس‌های تیم حرفه‌ای قلاب جادویی",
  "mainEntity": {
    "@type": "Organization",
    "name": "قلاب جادویی",
    "telephone": "+982112345678",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+989123456789",
      "contactType": "customer service",
      "availableLanguage": "Persian"
    }
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان صفحه */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-display text-text-dark mb-4"
          >
            تماس با <span className="text-primary-pink">تیم ما</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-sans text-gray-500 max-w-2xl mx-auto"
          >
            مشتاقانه منتظر شنیدن صدای شما و پاسخگویی به سوالاتتان هستیم
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* سمت راست: اطلاعات تماس و پشتیبانی */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            {/* کارت آدرس */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-primary-pink/10 p-3 rounded-2xl shrink-0">
                <MapPin className="w-6 h-6 text-primary-pink" />
              </div>
              <div>
                <h3 className="font-bold text-text-dark mb-1">دفتر مرکزی تیم</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">
                  تهران، (آدرس دقیق پس از تایید نهایی درج می‌شود)
                </p>
              </div>
            </div>

            {/* کارت تماس */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-soft-blue/20 p-3 rounded-2xl shrink-0">
                <Phone className="w-6 h-6 text-soft-blue" />
              </div>
              <div>
                <h3 className="font-bold text-text-dark mb-1">شماره تماس پشتیبانی</h3>
                <p className="text-gray-500 font-sans text-sm mb-1" dir="ltr">۰۲۱ - ۱۲۳۴۵۶۷۸</p>
                <p className="text-gray-500 font-sans text-sm" dir="ltr">۰۹۱۲ - ۳۴۵۶۷۸۹</p>
              </div>
            </div>

            {/* کارت ساعات کاری */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-soft-yellow/30 p-3 rounded-2xl shrink-0">
                <Clock className="w-6 h-6 text-soft-yellow" />
              </div>
              <div>
                <h3 className="font-bold text-text-dark mb-1">ساعات کاری</h3>
                <p className="text-gray-500 font-sans text-sm">شنبه تا چهارشنبه: ۹ صبح تا ۱۸</p>
                <p className="text-gray-500 font-sans text-sm mt-1">پنجشنبه‌ها: ۹ صبح تا ۱۴</p>
              </div>
            </div>

            {/* دکمه پشتیبانی آنلاین در پیام‌رسان بله */}
            <a href="#" className="bg-mint-green text-text-dark p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center gap-3 hover:shadow-md hover:scale-[1.02] transition-all font-bold group">
              <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
              ارتباط با پشتیبانی در پیام‌رسان بله
            </a>

          </motion.div>

          {/* سمت چپ: فرم ارسال پیام */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-[3rem] shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-text-dark mb-6">برای ما پیام بفرستید</h2>
            <form className="flex flex-col gap-6 font-sans">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-dark">نام و نام خانوادگی</label>
                  <input type="text" placeholder="نام خود را وارد کنید" className="w-full bg-gray-50 border border-gray-200 text-text-dark rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-pink/50" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-dark">شماره موبایل</label>
                  <input type="tel" placeholder="۰۹xxxxxxxxx" className="w-full bg-gray-50 border border-gray-200 text-text-dark rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-pink/50 text-left" dir="ltr" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-dark">موضوع پیام</label>
                <select className="w-full bg-gray-50 border border-gray-200 text-text-dark rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-pink/50 appearance-none">
                  <option>پشتیبانی سفارشات</option>
                  <option>درخواست سفارش اختصاصی</option>
                  <option>پیشنهاد همکاری</option>
                  <option>انتقادات و پیشنهادات</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-dark">متن پیام</label>
                <textarea rows={5} placeholder="پیام خود را اینجا بنویسید..." className="w-full bg-gray-50 border border-gray-200 text-text-dark rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-pink/50 resize-none"></textarea>
              </div>

              <button type="button" className="bg-primary-pink text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:bg-pink-500 transition-all mt-2 w-full sm:w-auto sm:px-12 self-end">
                <Send className="w-5 h-5" />
                ارسال پیام
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}