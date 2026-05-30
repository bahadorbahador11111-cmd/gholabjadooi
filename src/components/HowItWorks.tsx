"use client";

import { motion } from "framer-motion";
import { MousePointerClick, CreditCard, Sparkles, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "انتخاب و افزودن به سبد خرید",
    description: "محصولات فانتزی مورد نظرت رو پیدا کن و با یک کلیک به سبد خریدت اضافه کن.",
    icon: <MousePointerClick className="w-8 h-8 text-primary-pink" />,
    delay: 0.1
  },
  {
    id: 2,
    title: "ثبت سفارش و پرداخت",
    description: "مشخصات پستی رو وارد کن و هزینه‌ رو به صورت آنلاین و کاملاً امن پرداخت کن.",
    icon: <CreditCard className="w-8 h-8 text-soft-blue" />,
    delay: 0.2
  },
  {
    id: 3,
    title: "بافتن با عشق و ظرافت",
    description: "به محض ثبت سفارش، تیم هنرمند ما دست به کار میشه و سفارشت رو با بهترین کامواها می‌بافه.",
    icon: <Sparkles className="w-8 h-8 text-soft-yellow" />,
    delay: 0.3
  },
  {
    id: 4,
    title: "بسته‌بندی و ارسال سریع",
    description: "محصول نهایی توی یه بسته‌بندی جذاب و ایمن قرار می‌گیره و به سراسر ایران ارسال میشه.",
    icon: <Truck className="w-8 h-8 text-mint-green" />,
    delay: 0.4
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-soft-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display text-text-dark mb-4">
            خرید از ما چقدر ساده‌ست؟ 🛍️
          </h2>
          <p className="text-lg font-sans text-text-dark/70 max-w-2xl mx-auto">
            فقط با چند کلیک ساده سفارشت رو ثبت کن و بقیش رو بسپار به ما!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative text-center flex flex-col items-center"
            >
              {/* شماره مرحله */}
              <div className="absolute -top-5 bg-white border-2 border-primary-pink text-primary-pink font-display text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                {step.id}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-full mb-6 mt-2">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {step.title}
              </h3>
              
              <p className="text-text-dark/70 font-sans text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}