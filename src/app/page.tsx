import Link from "next/link";
import InventorySection from "./inventory/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Dashboard />
      <InventorySection />
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Ready to scale your business?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Connect with a commerce specialist to build a custom hardware
                bundle designed for your specific industry and volume needs.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/analytics"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Schedule Demo
              </Link>
              <Link
                href="/customers"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
