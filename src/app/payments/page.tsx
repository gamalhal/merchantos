import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  HelpCircle,
  Info,
  Lock,
  Shield,
  ShieldCheck,
} from "lucide-react";

const orderItems = [
  {
    name: "Precision Keyboard Pro",
    quantity: 1,
    price: "$189.00",
    image: "/Cloud Thermal Printer.jpg",
  },
  {
    name: "ErgoMotion Wireless Mouse",
    quantity: 1,
    price: "$89.00",
    image: "/hero-bg.jpg",
  },
];

export default function Payments() {
  return (
    <main className="bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* عنوان الصفحة: يوضح للمستخدم أنه داخل عملية دفع آمنة */}
        <header className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Secure Checkout
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Verify your order details and complete your transaction securely.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr]">
          {/* العمود الأيسر: يحتوي على الفورم الأساسي للدفع والشحن */}
          <div className="space-y-6">
            <ShippingInformation />
            <PaymentMethod />

            {/* زر إتمام الشراء: في تطبيق حقيقي سيرسل بيانات الفورم للباك إند */}
            <button className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-5 text-base font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-500">
              Complete Purchase
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* العمود الأيمن: ملخص الطلب ورسالة التوفير */}
          <aside className="space-y-6">
            <OrderSummary />
            <SavingsNotice />
          </aside>
        </div>
      </div>
    </main>
  );
}

function ShippingInformation() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <SectionTitle number="1" title="Shipping Information" />

      {/* بيانات الشحن: استخدمت defaultValue فقط لعرض مثال جاهز مثل الصورة */}
      <div className="mt-7 grid gap-5">
        <Field label="Full Name">
          <input
            className="form-input"
            defaultValue="Alexander Sterling"
            type="text"
          />
        </Field>

        <Field label="Email Address">
          <input
            className="form-input"
            defaultValue="alexander.sterling@enterprise.com"
            type="email"
          />
        </Field>

        <Field label="Street Address">
          <input
            className="form-input"
            defaultValue="123 Commerce Way, Suite 400"
            type="text"
          />
        </Field>

        <div className="grid gap-5 md:grid-cols-[1fr_0.5fr_0.5fr]">
          <Field label="City">
            <input className="form-input" defaultValue="San Francisco" type="text" />
          </Field>

          <Field label="State">
            <select className="form-input appearance-none" defaultValue="CA">
              <option>CA</option>
              <option>NY</option>
              <option>TX</option>
              <option>FL</option>
            </select>
          </Field>

          <Field label="Zip">
            <input className="form-input" defaultValue="94105" type="text" />
          </Field>
        </div>
      </div>
    </section>
  );
}

function PaymentMethod() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <SectionTitle number="2" title="Payment Method" />
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-blue-600">
          <ShieldCheck className="h-4 w-4" />
          Secure
        </span>
      </div>

      {/* بيانات الكارت: الحقول هنا شكلية للتصميم وليست مرتبطة ببوابة دفع فعلية */}
      <div className="mt-7 grid gap-5">
        <Field label="Card Number">
          <div className="relative">
            <CreditCard className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-700" />
            <input
              className="form-input pl-12"
              placeholder="xxxx xxxx xxxx xxxx"
              type="text"
            />
          </div>
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Expiration Date">
            <input className="form-input" placeholder="MM / YY" type="text" />
          </Field>

          <Field label="CVC">
            <div className="relative">
              <input className="form-input pr-12" placeholder="***" type="text" />
              <HelpCircle className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-700" />
            </div>
          </Field>
        </div>

        <Field label="Cardholder Name">
          <input
            className="form-input"
            placeholder="Full name as it appears on card"
            type="text"
          />
        </Field>
      </div>

      {/* شريط الثقة: يطمئن المستخدم أن الدفع مشفر ومتوافق مع المعايير */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm font-medium uppercase text-slate-500">
        <span className="inline-flex items-center gap-2">
          <Lock className="h-4 w-4" />
          PCI-DSS Compliant
        </span>
        <span className="inline-flex items-center gap-2">
          <Shield className="h-4 w-4" />
          AES-256 Encrypted
        </span>
        <span className="inline-flex items-center gap-2">
          <BadgeCheck className="h-4 w-4" />
          Level 1 Security
        </span>
      </div>
    </section>
  );
}

function OrderSummary() {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
        Order Summary
      </h2>

      {/* المنتجات المختارة: يمكن لاحقا استبدال array ببيانات من cart حقيقي */}
      <div className="mt-6 space-y-5">
        {orderItems.map((item) => (
          <div key={item.name} className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-200">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-slate-950">{item.name}</h3>
              <p className="text-sm text-slate-600">Quantity: {item.quantity}</p>
            </div>

            <p className="font-semibold text-slate-950">{item.price}</p>
          </div>
        ))}
      </div>

      <div className="my-6 h-px bg-slate-300" />

      {/* الحسابات النهائية: قيم ثابتة حاليا لتمثيل شكل شاشة الدفع */}
      <div className="space-y-3 text-slate-700">
        <SummaryRow label="Subtotal" value="$278.00" />
        <SummaryRow
          label="Shipping"
          value="Calculated at checkout"
          valueClassName="text-blue-600"
        />
        <SummaryRow label="Taxes (Estimated)" value="$23.63" />
      </div>

      <div className="mt-6 flex items-center justify-between text-2xl font-bold text-slate-950">
        <span>Total</span>
        <span>$301.63</span>
      </div>

      <div className="mt-7 flex gap-2">
        <input
          className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Promo code"
          type="text"
        />
        <button className="rounded-xl bg-blue-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-200">
          Apply
        </button>
      </div>
    </section>
  );
}

function SavingsNotice() {
  return (
    <div className="flex gap-4 rounded-xl bg-blue-50 p-5 text-blue-800">
      <Info className="mt-0.5 h-5 w-5 shrink-0" />
      <p className="text-sm leading-6">
        You&apos;re saving <strong>$12.00</strong> on this order with your member
        discount. Rewards points will be applied after checkout.
      </p>
    </div>
  );
}

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
        {number}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium uppercase tracking-wide text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}

function SummaryRow({
  label,
  value,
  valueClassName = "text-slate-900",
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>{label}</span>
      <span className={valueClassName}>{value}</span>
    </div>
  );
}
