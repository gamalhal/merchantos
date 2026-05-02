import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  Bluetooth,
  Check,
  Heart,
  ShieldCheck,
  ShoppingCart,
  Volume2,
  Zap,
} from "lucide-react";
import { products } from "../data";

const selectedProduct = products[0];

const featureCards = [
  {
    title: "PCI-DSS Checkout Security",
    text: "Every terminal transaction is encrypted and monitored for enterprise merchant compliance.",
    icon: ShieldCheck,
    image: selectedProduct.image,
  },
  {
    title: "60-Hour Store Lifecycle",
    text: "Battery performance designed for long retail shifts, temporary booths, and mobile checkout counters.",
    icon: BatteryCharging,
  },
  {
    title: "Multipoint Connect",
    text: "Switch between workstation, mobile device, and tablet workflows with stable wireless pairing.",
    icon: Bluetooth,
  },
  {
    title: "Integrated Inventory Sync",
    text: "Keep checkout activity connected to product counts, procurement needs, and reporting dashboards.",
    icon: Volume2,
    image: "/Cloud Thermal Printer.jpg",
    dark: true,
  },
];

const reviews = [
  {
    initials: "JD",
    name: "James D.",
    role: "CTO, Nexus Corp",
    quote:
      "The build quality is exceptional. For our remote engineering teams, these have become the standard issue.",
  },
  {
    initials: "SR",
    name: "Sarah R.",
    role: "Product Designer",
    quote:
      "Setup was fast, and the PCI-DSS workflow gives our operations team more confidence during checkout.",
  },
];

export default function Inventory() {
  return (
    <main className="bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <ProductHero />
        <PerformanceSection />
        <ReviewsSection />
      </div>
    </main>
  );
}

function ProductHero() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr]">
      {/* معرض الصور: يعرض صورة المنتج الرئيسية وصور مصغرة من منتجات الموقع */}
      <div>
        <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-950">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.title}
            fill
            priority
            className="object-cover"
          />
          <button className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-sm">
            <Heart className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`relative aspect-square overflow-hidden rounded-md bg-slate-100 ${
                index === 0 ? "ring-4 ring-blue-600" : ""
              }`}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* تفاصيل المنتج: تستخدم بيانات المنتج الأساسية من ملف data.ts */}
      <div className="lg:pt-2">
        <span className="rounded-md bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
          Enterprise Tier
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
          {selectedProduct.title}
        </h1>
        <p className="mt-2 text-sm text-amber-500">
          ★★★★★{" "}
          <span className="text-slate-500">(1,248 verified merchant reviews)</span>
        </p>

        <div className="mt-6 flex flex-wrap items-end gap-3">
          <span className="text-3xl font-semibold text-slate-950">
            {selectedProduct.price}
          </span>
          <span className="text-sm text-slate-500 line-through">
            {selectedProduct.oldPrice}
          </span>
        </div>
        <p className="mt-3 text-slate-600">{selectedProduct.description}</p>

        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            Inventory Status
          </p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
            <Check className="h-4 w-4" />
            842 Units in Stock (Global Distribution Center)
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <Link
            href="/cart"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Procurement
          </Link>
          <Link
            href="/customers"
            className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-5 py-4 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Request Quote
          </Link>
        </div>

        <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-5">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            MerchantOS Security Guarantee
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            All transactions are PCI-DSS Level 1 compliant. 24/7 technical
            support for business accounts.
          </p>
        </div>
      </div>
    </section>
  );
}

function PerformanceSection() {
  return (
    <section>
      <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-950">
        Engineered for Performance
      </h2>

      {/* بطاقات المميزات: كل كارت يشرح قيمة عملية للمنتج داخل MerchantOS */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {featureCards.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className={`rounded-lg border p-8 ${
                feature.dark
                  ? "bg-slate-950 text-white shadow-xl shadow-slate-950/10 lg:col-span-2"
                  : index === 0
                    ? "bg-white lg:col-span-2"
                    : "bg-white"
              }`}
            >
              <div className="grid gap-6 sm:grid-cols-[1fr_0.8fr] sm:items-center">
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                  <p
                    className={`mt-4 text-sm leading-6 ${
                      feature.dark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {feature.text}
                  </p>
                  {feature.dark ? (
                    <Link
                      href="/analytics"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                    >
                      View Frequency Specs <Zap className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>

                {feature.image ? (
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-100">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Verified Feedback
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Trusted by 10,000+ organizations worldwide.
          </p>
        </div>
        <button className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
          Write a Review
        </button>
      </div>

      {/* آراء العملاء: بيانات ثابتة مرتبطة بسياق MerchantOS */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  {review.initials}
                </span>
                <div>
                  <p className="font-semibold text-slate-950">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
              <span className="text-xs text-amber-500">★★★★★</span>
            </div>
            <p className="mt-5 text-sm italic leading-6 text-slate-700">
              &quot;{review.quote}&quot;
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
