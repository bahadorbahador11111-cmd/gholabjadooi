"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// تعریف ساختار دیتای ورودی
interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export default function Categories({ categories }: { categories: Category[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display text-text-dark mb-4">
          دنبال چه جادویی می‌گردی؟ ✨
        </h2>
        <p className="text-lg font-sans text-text-dark/70">
          از بین دسته‌بندی‌های زیر، اثر هنری مورد نظرت رو انتخاب کن
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* استفاده از علامت سوال برای جلوگیری از خطای احتمالی خالی بودن دیتا */}
        {categories?.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/category/${category.slug}`} className="block h-full">
              <motion.div
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-8 rounded-[2.5rem] cursor-pointer border-2 border-transparent hover:border-primary-pink/30 transition-all shadow-sm hover:shadow-xl bg-white h-full group"
              >
                {/* قاب دایره‌ای برای عکس‌های 3D */}
                <div className="w-32 h-32 flex items-center justify-center rounded-full mb-6 overflow-hidden border-4 border-gray-50 shadow-inner group-hover:scale-105 transition-transform duration-500 bg-soft-blue/10">
                  {category.image ? (
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // در صورتی که عکسی لود نشد، یه بک‌گراند ساده نشون بده
                    <div className="w-full h-full bg-primary-pink/20"></div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-text-dark mb-2">
                  {category.name}
                </h3>
                
                <p className="text-primary-pink font-sans text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                  مشاهده محصولات &larr;
                </p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}