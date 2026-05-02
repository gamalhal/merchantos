import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lock, Minus, Plus, Trash2 } from "lucide-react";
import { cartItems } from "../data";

export default function Cart() {
  return (
    <main className="bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* عنوان السلة: يوضح للمستخدم أنه يراجع حلول وأجهزة MerchantOS المختارة */}
        <header>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950">
            Your Cart
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Manage your selected enterprise solutions and hardware.
          </p>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.68fr]">
          <CartTable />

          {/* العمود الجانبي: يحتوي ملخص الطلب وكود الخصم */}
          <aside className="space-y-8">
            <OrderSummary />
            <PromoCode />
          </aside>
        </div>
      </div>
    </main>
  );
}

function CartTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* رأس الجدول: يظهر على الشاشات المتوسطة والكبيرة مثل التصميم المرجعي */}
      <div className="hidden grid-cols-[1fr_180px_180px_48px] bg-blue-50 px-8 py-6 text-sm font-bold uppercase tracking-[0.16em] text-slate-700 md:grid">
        <span>Product</span>
        <span className="text-center">Quantity</span>
        <span className="text-center">Price</span>
        <span />
      </div>

      {/* صفوف السلة: كل صف يستخدم بيانات cartItems من data.ts */}
      <div className="divide-y divide-slate-100">
        {cartItems.map((item) => (
          <article
            key={item.name}
            className="grid gap-5 px-6 py-8 md:grid-cols-[1fr_180px_180px_48px] md:items-center md:px-8"
          >
            <div className="flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">
                  {item.name}
                </h2>
                <p className="mt-1 text-lg text-slate-600">{item.detail}</p>
              </div>
            </div>

            <div className="flex w-fit overflow-hidden rounded-lg border border-slate-200 bg-white md:mx-auto">
              <button className="inline-flex h-12 w-14 items-center justify-center text-slate-500 transition hover:bg-slate-50">
                <Minus className="h-4 w-4" />
              </button>
              <span className="inline-flex h-12 w-14 items-center justify-center border-x border-slate-200 font-semibold">
                {item.quantity}
              </span>
              <button className="inline-flex h-12 w-14 items-center justify-center text-slate-500 transition hover:bg-slate-50">
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <p className="text-xl font-medium text-slate-950 md:text-center">
              {item.price}
            </p>

            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-600">
              <Trash2 className="h-5 w-5" />
            </button>
          </article>
        ))}
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-8 py-7">
        <Link
          href="/inventory"
          className="inline-flex items-center gap-3 text-lg font-medium text-blue-600"
        >
          <ArrowLeft className="h-5 w-5" />
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

function OrderSummary() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-950/5">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
        Order Summary
      </h2>

      {/* أرقام الطلب: محسوبة هنا كقيم ثابتة لتطابق بيانات السلة الحالية */}
      <div className="mt-8 space-y-5 text-lg">
        <SummaryLine label="Subtotal" value="$2,045.00" />
        <SummaryLine label="Tax (VAT 10%)" value="$204.50" />
        <SummaryLine label="Shipping" value="FREE" valueClassName="text-blue-600" />
      </div>

      <div className="my-8 h-px bg-slate-200" />

      <div className="flex items-end justify-between gap-4">
        <span className="text-2xl text-slate-950">Total</span>
        <div className="text-right">
          <p className="text-4xl font-semibold tracking-tight text-slate-950">
            $2,249.50
          </p>
          <p className="mt-2 text-xs uppercase tracking-wide text-slate-600">
            USD Currency
          </p>
        </div>
      </div>

      <Link
        href="/payments"
        className="mt-10 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-5 text-xl font-semibold text-white transition hover:bg-blue-500"
      >
        Proceed to Checkout
      </Link>

      <div className="mt-5 flex items-center justify-center gap-3 rounded-lg bg-blue-50 px-4 py-4 text-slate-700">
        <Lock className="h-4 w-4 text-blue-600" />
        256-bit Secure Encryption
      </div>
    </section>
  );
}

function PromoCode() {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
      {/* كود الخصم: واجهة شكلية جاهزة لربطها بمنطق الخصومات لاحقا */}
      <label className="text-lg font-medium uppercase text-slate-800">
        Promo Code
      </label>
      <div className="mt-4 flex gap-3">
        <input
          className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-5 py-4 text-lg outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Enter code"
          type="text"
        />
        <button className="rounded-lg bg-slate-950 px-6 py-4 text-lg font-semibold text-white transition hover:bg-slate-800">
          Apply
        </button>
      </div>
    </section>
  );
}

function SummaryLine({
  label,
  value,
  valueClassName = "text-slate-950",
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-700">{label}</span>
      <span className={`font-semibold ${valueClassName}`}>{value}</span>
    </div>
  );
}
