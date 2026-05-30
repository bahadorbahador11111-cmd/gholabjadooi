// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // جلوگیری از خزش ربات‌ها در صفحات خصوصی و سبد خرید
      disallow: ['/cart', '/checkout', '/track-order'], 
    },
    // معرفی آدرس دقیق نقشه سایت به موتورهای جستجو
    sitemap: 'https://gholabjadooi.ir/sitemap.xml',
  };
}