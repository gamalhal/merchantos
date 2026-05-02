import Image from "next/image";
import { ArrowRight, KeyRound, Lock, Mail, ShieldCheck, Smartphone } from "lucide-react";

const codeDigits = ["5", "2", "0", "", "", ""];

export default function Login() {
  return (
    <main className="bg-slate-50 px-6 py-16">
      <section className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-2xl shadow-slate-200 lg:grid-cols-2">
        <LoginForm />
        <TwoFactorPanel />
      </section>
    </main>
  );
}

function LoginForm() {
  return (
    <section className="p-8 sm:p-12 lg:p-16">
      {/* مقدمة تسجيل الدخول: تشرح للمستخدم أنه يدخل لوحة MerchantOS بأمان */}
      <p className="text-2xl font-bold tracking-tight text-slate-950">
        MerchantOS
      </p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">
        Welcome back
      </h1>
      <p className="mt-3 text-xl text-slate-600">
        Access your merchant dashboard securely.
      </p>

      {/* فورم الدخول: الحقول شكلية حاليا ويمكن ربطها لاحقا بنظام auth */}
      <form className="mt-16 space-y-8">
        <label className="grid gap-3">
          <span className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">
            Business Email
          </span>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-500" />
            <input
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-14 py-5 text-lg outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="name@company.com"
              type="email"
            />
          </div>
        </label>

        <label className="grid gap-3">
          <span className="flex items-center justify-between gap-4">
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">
              Password
            </span>
            <a href="#" className="text-lg font-medium text-blue-600">
              Forgot password?
            </a>
          </span>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-500" />
            <input
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-14 py-5 text-lg outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              defaultValue="password"
              type="password"
            />
          </div>
        </label>

        <label className="flex items-center gap-3 text-lg text-slate-700">
          <input
            className="h-5 w-5 rounded border-slate-300 text-blue-600"
            type="checkbox"
          />
          Remember this device for 30 days
        </label>

        <button className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-5 text-xl font-semibold text-white transition hover:bg-blue-500">
          Continue
          <ArrowRight className="h-5 w-5" />
        </button>
      </form>

      {/* رسالة الأمان: تستخدم نفس وعد MerchantOS الموجود في الفوتر وصفحة الدفع */}
      <div className="mt-16 border-t border-slate-200 pt-8">
        <div className="flex gap-4 rounded-lg bg-blue-50 p-6 text-lg leading-8 text-slate-800">
          <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
          Enterprise-grade security powered by PCI-DSS Level 1 encryption.
        </div>
      </div>
    </section>
  );
}

function TwoFactorPanel() {
  return (
    <section className="border-t border-slate-200 bg-[linear-gradient(#e8eef7_1px,transparent_1px),linear-gradient(90deg,#e8eef7_1px,transparent_1px)] bg-[size:40px_40px] p-8 text-center sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
      {/* أيقونة 2FA: توضح أن الخطوة الثانية تعتمد على جهاز المستخدم */}
      <div className="mx-auto inline-flex h-24 w-24 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg ring-1 ring-slate-200">
        <Smartphone className="h-10 w-10" />
      </div>

      <h2 className="mt-16 text-3xl font-semibold tracking-tight text-slate-950">
        Two-Factor Required
      </h2>
      <p className="mx-auto mt-4 max-w-sm text-xl leading-8 text-slate-600">
        Enter the 6-digit verification code sent to your registered mobile
        device.
      </p>

      {/* خانات كود التحقق: تعرض أول أرقام من المثال وتترك الباقي فارغا للمستخدم */}
      <div className="mt-12 flex justify-center gap-3">
        {codeDigits.map((digit, index) => (
          <input
            key={index}
            className={`h-16 w-12 rounded-lg border bg-white text-center text-xl text-blue-600 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 ${
              index === 3 ? "border-blue-600" : "border-slate-300"
            }`}
            defaultValue={digit}
            maxLength={1}
            type="text"
          />
        ))}
      </div>

      <div className="mt-12 text-lg text-slate-700">
        <p>Didn&apos;t receive a code?</p>
        <button className="mt-2 font-medium text-blue-600">
          Resend Code (45s)
        </button>
      </div>

      <div className="relative mx-auto mt-10 aspect-[4/3] max-w-lg overflow-hidden rounded-xl bg-slate-200 shadow-lg">
        <Image
          src="/hero-bg.jpg"
          alt="Secure mobile authentication"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-white/25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-xl bg-slate-950/50 px-6 py-4 text-white backdrop-blur-sm">
            <KeyRound className="mx-auto h-8 w-8" />
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide">
              Secure Authentication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
