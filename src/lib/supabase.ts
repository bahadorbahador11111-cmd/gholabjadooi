import { createClient } from '@supabase/supabase-js';

// دریافت کلیدها از متغیرهای محیطی که ساختی
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// ایجاد و خروجی گرفتن از کلاینت سوپابیس برای استفاده در کل پروژه
export const supabase = createClient(supabaseUrl, supabaseAnonKey);