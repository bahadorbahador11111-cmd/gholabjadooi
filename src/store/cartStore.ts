import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// تعریف ساختار هر محصول در سبد خرید
export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

// تعریف ساختار کل حافظه سبد خرید
interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

// ساخت سیستم مدیریت وضعیت (State Management)
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      // اضافه کردن محصول به سبد
      addToCart: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);
        
        if (existingItem) {
          // اگر محصول از قبل بود، فقط تعدادش رو ببر بالا
          set({
            items: currentItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          });
        } else {
          // اگر نبود، به عنوان محصول جدید اضافه‌اش کن
          set({ items: [...currentItems, item] });
        }
      },
      
      // حذف کامل یک محصول از سبد
      removeFromCart: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },
      
      // زیاد کردن تعداد یک محصول
      increaseQuantity: (id) => {
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        });
      },
      
      // کم کردن تعداد یک محصول
      decreaseQuantity: (id) => {
        set({
          items: get().items.map((i) =>
            i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
          ),
        });
      },
      
      // خالی کردن کل سبد خرید (بعد از پرداخت موفق)
      clearCart: () => set({ items: [] }),
      
      // محاسبه قیمت کل سبد خرید
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      // محاسبه تعداد کل آیتم‌های داخل سبد
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'gholabjadooi-cart-storage', // اسمی که در حافظه مرورگر کاربر ذخیره میشه
    }
  )
);