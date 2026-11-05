import { products } from '../data/sales/products';
export const menu = [...products, { id: 101, sku: 'CB01', name: 'Combo đôi · 2 trà sữa trân châu M', price: 69000, stock: 20, category: 'combo' }, { id: 102, sku: 'CB02', name: 'Combo tươi mát · 2 trà đào M', price: 62000, stock: 20, category: 'combo' }];
export type Product = typeof menu[number];
export type Item = { id: string; productId: number; name: string; detail: string; price: number; quantity: number };
export const money = (n: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n);
export function totals(items: Item[], member: boolean, code: string) {
 const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
 const loyalty = member ? Math.floor(subtotal * .1) : 0;
 const discount = code === 'CHAO10' && subtotal >= 100000 ? Math.min(30000, Math.floor((subtotal - loyalty) * .1)) : 0;
 const shipping = subtotal === 0 || subtotal >= 150000 ? 0 : 15000;
 return { subtotal, loyalty, discount, shipping, total: subtotal - loyalty - discount + shipping };
}
