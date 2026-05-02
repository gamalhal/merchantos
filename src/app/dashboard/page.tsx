import Link from "next/link";
import {
  Banknote,
  Building2,
  CalendarDays,
  Download,
  Landmark,
  MoreVertical,
  Plus,
  RefreshCcw,
} from "lucide-react";

const stats = [
  {
    label: "Total Revenue",
    value: "$124,592.00",
    change: "+8.4%",
    trend: "up",
    icon: Banknote,
  },
  {
    label: "Total Orders",
    value: "1,842",
    change: "+12.1%",
    trend: "up",
    icon: CalendarDays,
  },
  {
    label: "Active Subscriptions",
    value: "412",
    change: "-2.4%",
    trend: "down",
    icon: RefreshCcw,
  },
];

const chartBars = [42, 58, 48, 76, 62, 72, 86, 66, 52, 68, 80, 42];

const companies = [
  { name: "Velocity Corp", value: "$42,500 LTV", icon: Landmark },
  { name: "Horizon Ventures", value: "$28,100 LTV", icon: Building2 },
  { name: "Atlas Logistics", value: "$19,400 LTV", icon: Building2 },
];

const transactions = [
  {
    initials: "SM",
    customer: "Sarah Mitchell",
    email: "sarah.m@example.com",
    status: "Completed",
    date: "Oct 24, 2024",
    amount: "$1,240.00",
  },
  {
    initials: "JK",
    customer: "James Kinsley",
    email: "j.kinsley@logistics.co",
    status: "Processing",
    date: "Oct 24, 2024",
    amount: "$890.50",
  },
  {
    initials: "EL",
    customer: "Emma Lawson",
    email: "emma.lawson@design.io",
    status: "Pending",
    date: "Oct 23, 2024",
    amount: "$2,100.00",
  },
];

export default function Dashboard() {
  return (
    <main className="bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <DashboardHeader />
        <StatsGrid />

        <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
          <RevenuePerformance />
          <InstitutionalGrowth />
        </section>

        <RecentTransactions />
      </div>
    </main>
  );
}

function DashboardHeader() {
  return (
    <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Overview
        </h1>
        <p className="mt-2 text-base text-slate-500">
          Welcome back. Your store activity is up 12% this week.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-50">
          <Download className="h-4 w-4" />
          Export Report
        </button>
        <Link
          href="/payments"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
        >
          <Plus className="h-4 w-4" />
          New Payment
        </Link>
      </div>
    </header>
  );
}

function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isPositive = stat.trend === "up";

        return (
          <article
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" />
              </span>
              <span
                className={`rounded-md px-2 py-1 text-xs font-bold ${
                  isPositive
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              {stat.label}
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              {stat.value}
            </p>
          </article>
        );
      })}
    </section>
  );
}

function RevenuePerformance() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          Revenue Performance
        </h2>
        <div className="inline-flex w-fit rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200">
          {["7D", "30D", "1Y"].map((range) => (
            <button
              key={range}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                range === "30D"
                  ? "bg-blue-600 text-white"
                  : "text-slate-950 hover:bg-slate-50"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="flex h-80 items-end gap-3 px-6 pb-8 pt-10 sm:gap-5">
        {chartBars.map((height, index) => (
          <div key={index} className="flex min-w-0 flex-1 flex-col items-center gap-4">
            <div
              className={`w-full max-w-14 rounded-t-sm ${
                index === 3 ? "bg-blue-600" : "bg-slate-100"
              }`}
              style={{ height: `${height}%` }}
            />
            <span className="h-4 text-xs text-slate-400">
              {index === 0 ? "Oct 1" : index === 3 ? "Oct 10" : index === 7 ? "Oct 20" : index === 11 ? "Oct 31" : ""}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function InstitutionalGrowth() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/10">
      <h2 className="text-xl font-semibold">Institutional Growth</h2>

      <div className="mt-7 space-y-5">
        {companies.map((company) => {
          const Icon = company.icon;

          return (
            <div key={company.name} className="flex items-center gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-slate-300" />
              </span>
              <div>
                <p className="font-semibold">{company.name}</p>
                <p className="text-sm text-slate-300">{company.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-7 w-full rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold ring-1 ring-white/15 transition hover:bg-white/15">
        View Segment Analysis
      </button>

      <div className="absolute -bottom-8 -right-7 h-28 w-28 rotate-45 border-[18px] border-slate-700/50" />
    </section>
  );
}

function RecentTransactions() {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          Recent Transactions
        </h2>
        <Link href="/payments" className="text-sm font-semibold text-blue-600">
          View All Transactions
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead className="bg-slate-50 text-xs font-semibold text-slate-500">
            <tr>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.map((transaction) => (
              <tr key={transaction.email}>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                      {transaction.initials}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-950">
                        {transaction.customer}
                      </p>
                      <p className="text-sm text-slate-400">{transaction.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <StatusBadge status={transaction.status} />
                </td>
                <td className="px-6 py-5 text-slate-600">{transaction.date}</td>
                <td className="px-6 py-5 font-medium text-slate-950">
                  {transaction.amount}
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-50 hover:text-slate-950">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center gap-4 border-t border-slate-100 bg-slate-50 px-6 py-4 text-sm">
        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 font-medium text-slate-300">
          Previous
        </button>
        <span className="font-medium text-slate-950">Page 1 of 42</span>
        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 font-medium text-slate-400 transition hover:text-slate-950">
          Next
        </button>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Completed: "bg-emerald-100 text-emerald-700",
    Processing: "bg-blue-100 text-blue-700",
    Pending: "bg-amber-100 text-amber-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles[status]}`}
    >
      {status}
    </span>
  );
}
