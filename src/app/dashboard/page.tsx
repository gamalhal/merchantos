import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid gap-6 xl:grid-cols-[1.8fr_1fr]">
        {/* البطاقة الرئيسية */}
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.jpg"
              alt="Hero background"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-slate-950/40" />
          </div>

          <div className="relative p-8 lg:p-12">
            <span className="inline-flex rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              New arrival
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Enterprise Hardware for High-Volume Commerce
            </h1>

            <p className="mt-6 max-w-2xl text-sm text-slate-200 sm:text-base">
              Upgrade your storefront with our PCI-DSS Level 1 compliant
              terminals and integrated inventory systems.
            </p>

            <Link
              href="/inventory"
              className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Explore Full System
            </Link>
          </div>
        </div>

        {/* البطاقتين الجانبيتين */}
        <div className="grid gap-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Secure
              </span>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-slate-950">
              Fraud Protection
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Real-time monitoring and 256-bit encryption for every transaction.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-blue-600 p-6 text-white shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              Fast Shipping
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Next-day delivery on all POS hardware orders placed before 2PM.
            </h2>
            <div className="mt-6 flex items-center gap-3 text-sm text-blue-100">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10">
                🚚
              </span>
              <span>Delivery available for all POS orders.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}