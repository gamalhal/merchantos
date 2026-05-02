"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { Search, Bell, Settings, Menu, X, ShoppingCart } from 'lucide-react';

const cartStorageKey = 'merchantos-cart-count';
const cartUpdatedEvent = 'merchantos-cart-updated';

function subscribeToCartUpdates(onStoreChange: () => void) {
  // الناف بار يشترك في حدث السلة المخصص حتى يحدث badge فور الضغط على زر إضافة منتج.
  window.addEventListener(cartUpdatedEvent, onStoreChange);
  window.addEventListener('storage', onStoreChange);

  return () => {
    window.removeEventListener(cartUpdatedEvent, onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function getCartCountSnapshot() {
  return Number(localStorage.getItem(cartStorageKey) ?? '0');
}

function getServerCartCountSnapshot() {
  return 0;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = useSyncExternalStore(
    subscribeToCartUpdates,
    getCartCountSnapshot,
    getServerCartCountSnapshot
  );

  // صفحة تسجيل الدخول لها شاشة مستقلة مثل بوابات الدخول الآمنة، لذلك نخفي شريط التنقل فيها فقط.
  if (pathname === '/login') {
    return null;
  }

  // روابط التنقل الحقيقية في التطبيق
  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Payments', href: '/payments' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Customers', href: '/customers' },
    { name: 'Analytics', href: '/analytics' },
    { name: 'Login', href: '/login' },
  ];

  return (
    <nav className="bg-white px-6 py-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 xl:border-b-0 xl:pb-0">
        {/* قسم الشعار والروابط */}
        <div className="flex min-w-0 flex-1 items-center gap-4 xl:gap-8">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 xl:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
            MerchantOS
          </Link>

          <div className="hidden items-center gap-6 overflow-x-auto xl:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`border-b-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'border-slate-900 pb-1 text-slate-900'
                      : 'border-transparent text-slate-500 hover:border-slate-200 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* قسم البحث والأزرار وحساب المستخدم */}
        <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-4">
          <div className="relative hidden lg:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-72 rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-300 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </button>

          <Link
            href="/cart"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-bold text-white ring-2 ring-white">
                {cartCount}
              </span>
            ) : null}
          </Link>

          <div className="hidden h-7 w-px bg-slate-200 sm:block" />

          <Link
            href="/login"
            className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:px-3"
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-full bg-slate-200">
              <Image src="/man.png" alt="Account" fill className="object-cover" />
            </div>
            <span className="hidden sm:inline">Account</span>
          </Link>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 xl:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid gap-2 pt-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-slate-950 text-white'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
