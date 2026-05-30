"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function BestSellers({ products }: { products: any[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display text-text-dark mb-4">
          پرفروش‌ترین جادوها 🌟
        </h2>
        <p className="text-lg font-sans text-text-dark/70">
          محبوب‌ترین دست‌بافت‌های تیم حرفه‌ای هنرمندان ما از نگاه شما
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* نمایش حداکثر ۴ محصول در صفحه اصلی */}
        {products?.slice(0, 4).map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-3xl p-4 border-2 border-transparent hover:border-primary-pink/20 shadow-sm hover:shadow-xl transition-all group relative"
          >
            <Link href={`/shop/${product.id}`}>
              <div className="w-full aspect-square rounded-2xl bg-soft-blue/10 flex items-center justify-center mb-4 relative overflow-hidden cursor-pointer">
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[0]} alt={product.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <ImageIcon className="w-16 h-16 text-soft-blue opacity-50 group-hover:scale-110 transition-transform duration-500" />
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <span className="text-xs font-bold text-text-dark mt-1">۵.۰</span>
                  <Star className="w-3 h-3 text-soft-yellow fill-soft-yellow" />
                </div>
              </div>
            </Link>

            <div className="text-right">
              <Link href={`/shop/${product.id}`}>
                <h3 className="text-lg font-bold text-text-dark mb-1 truncate hover:text-primary-pink transition-colors">
                  {product.title}
                </h3>
              </Link>
              {product.categories && (
                <p className="text-xs text-gray-400 mb-3 font-sans">{product.categories.name}</p>
              )}
              
              <div className="flex justify-between items-center mt-2 pt-4 border-t border-gray-50">
                <div className="text-primary-pink font-bold flex gap-1 items-center">
                  <span>{product.price.toLocaleString("fa-IR")}</span>
                  <span className="text-xs text-text-dark/50">تومان</span>
                </div>
                <button className="bg-soft-blue text-text-dark hover:bg-primary-pink hover:text-white p-2.5 rounded-xl transition-all shadow-sm">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/shop" className="inline-block bg-primary-pink text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:scale-105 transition-all">
          مشاهده همه محصولات فروشگاه
        </Link>
      </div>
    </div>
  );
}