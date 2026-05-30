// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gholabjadooi.ir';

  // ۱. مسیرهای استاتیک و اصلی سایت
  const staticRoutes = [
    '',
    '/shop',
    '/about',
    '/faq',
    '/contact',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    // اولویت صفحه اصلی ۱ و بقیه صفحات ۰.۸
    priority: route === '' ? 1 : 0.8, 
  }));

  // ۲. مسیرهای داینامیک محصولات (شبیه‌سازی برای ۸ محصول اولیه)
  // نکته: در فازهای بعدی، این آیدی‌ها مستقیماً از جداول Supabase خوانده و جایگزین می‌شوند
  const productIds = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const productRoutes = productIds.map((id) => ({
    url: `${baseUrl}/shop/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // ترکیب تمام مسیرها و تولید خروجی
  return [...staticRoutes, ...productRoutes];
}