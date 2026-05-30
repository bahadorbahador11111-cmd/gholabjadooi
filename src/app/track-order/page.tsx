"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, PackageSearch, Clock, Sparkles, Package, Truck, CheckCircle2 } from "lucide-react";

// مراحل فرضی برای نمایش در تایم‌لاین پیگیری
const trackingSteps = [
  { id: 1, title: "ثبت سفارش", desc: "سفارش شما با موفقیت ثبت و پرداخت شد.", icon: PackageSearch, color: "text-soft-blue", bgColor: "bg-soft-blue/20", completed: true },
  { id: 2, title: "در صف بررسی", desc: "سفارش توسط پشتیبانی تایید شد.", icon: Clock, color: "text-soft-yellow", bgColor: "bg-soft-yellow/30", completed: true },
  { id: 3, title: "در حال بافت", desc: "تیم هنرمند ما در حال بافت و آماده‌سازی سفارش شما هستند.", icon: Sparkles, color: "text-primary-pink", bgColor: "bg-primary-pink/20", completed: true },
  { id: 4, title: "بسته‌بندی", desc: "محصول شما با عشق و ایمنی کامل بسته‌بندی شد.", icon: Package, color: "text-purple-500", bgColor: "bg-purple-500/20", completed: false },
  { id: 5, title: "تحویل به پست", desc: "بسته به اداره پست تحویل داده شد (کد رهگیری پیامک می‌شود).", icon: Truck, color: "text-mint-green", bgColor: "bg-mint-green/20", completed: false },
];

export default function TrackOrderPage() {
  const [trackingCode, setTrackingCode] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // شبیه‌سازی جستجوی کد رهگیری
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;
    
    setIsSearching(true);
    setShowResult(false);
    
    // شبیه‌سازی زمان لودینگ (۱.۵ ثانیه)
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان صفحه */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-soft-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <PackageSearch className="w-10 h-10 text-soft-blue" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-display text-text-dark mb-4"
          >
            پیگیری <span className="text-primary-pink">سفارشات</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-sans"
          >
            شماره موبایل یا کد سفارش خود را وارد کنید تا از وضعیت مرسوله مطلع شوید.
          </motion.p>
        </div>

        {/* فرم جستجو */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-gray-100 mb-8"
        >
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="مثال: 09123456789 یا QJ-1234"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-text-dark rounded-2xl py-4 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-primary-pink/50 text-left font-sans"
                dir="ltr"
              />
              <Search className="w-6 h-6 text-gray-400 absolute right-4 top-4" />
            </div>
            <button 
              type="submit" 
              disabled={isSearching}
              className="bg-primary-pink text-white px-8 py-4 rounded-2xl font-bold hover:shadow-md hover:bg-pink-500 transition-all flex items-center justify-center min-w-[140px]"
            >
              {isSearching ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "پیگیری وضعیت"
              )}
            </button>
          </form>
        </motion.div>

        {/* نتیجه پیگیری (تایم‌لاین) */}
        <AnimatePresence>
          {showResult && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 relative">
                
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
                  <div>
                    <p className="text-gray-400 font-sans text-sm mb-1">کد پیگیری شما</p>
                    <p className="text-xl font-bold text-text-dark" dir="ltr">{trackingCode}</p>
                  </div>
                  <div className="bg-mint-green/20 text-mint-green px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    سفارش یافت شد
                  </div>
                </div>

                {/* رسم خط تایم‌لاین */}
                <div className="relative border-r-2 border-gray-100 pr-6 space-y-10 ml-4 font-sans">
                  {trackingSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        {/* دایره آیکون روی خط */}
                        <div className={`absolute -right-[43px] w-14 h-14 rounded-full border-4 border-white flex items-center justify-center ${step.completed ? step.bgColor : 'bg-gray-100'}`}>
                          <Icon className={`w-6 h-6 ${step.completed ? step.color : 'text-gray-300'}`} />
                        </div>
                        
                        <div className="pt-2">
                          <h3 className={`text-lg font-bold mb-1 ${step.completed ? 'text-text-dark' : 'text-gray-400'}`}>
                            {step.title}
                          </h3>
                          <p className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                            {step.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}