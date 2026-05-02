import Image from "next/image";
import Link from "next/link";
import InventorySection from "./inventory/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Dashboard />
      <InventorySection />
    </main>
  );
}