"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Bell, Settings } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // روابط التنقل الحقيقية في التطبيق
  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Payments', href: '/payments' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Customers', href: '/customers' },
    { name: 'Analytics', href: '/analytics' },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-white border-b border-slate-200 shadow-sm">
      {/* قسم الشعار والروابط */}
      <div className="flex min-w-0 flex-1 items-center gap-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          MerchantOS
        </Link>

        <div className="hidden xl:flex items-center gap-6 overflow-x-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'border-b-2 border-slate-900 text-slate-900 pb-1'
                    : 'border-b-2 border-transparent text-slate-500 hover:border-slate-200 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* قسم البحث والأزرار وحساب المستخدم */}
      <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
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

        <div className="h-7 w-px bg-slate-200" />

        <button className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-slate-200">
            <Image src="/avatar-placeholder.jpg" alt="Account" fill className="object-cover" />
          </div>
          <span className="hidden sm:inline">Account</span>
        </button>
      </div>
    </nav>
  );
}
