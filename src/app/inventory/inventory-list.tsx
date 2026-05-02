import Image from "next/image";
import { inventoryTabs, products } from "../data";

export default function InventoryList() {
  return (
    <section className="rounded-[2rem] bg-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.06)]">
      {/* شريط الفلاتر: يعرض تصنيفات المنتجات المتاحة في الموقع */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">Inventory</h2>
          <p className="mt-2 text-sm text-slate-500">
            تصفح أحدث الأجهزة والإكسسوارات المتاحة في المخزون.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {inventoryTabs.map((tab) => (
            <button
              key={tab}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* شبكة المنتجات: كل بطاقة تستخدم بيانات المنتج والصورة من data.ts */}
      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.title}
            className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              {product.tag ? (
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                  {product.tag}
                </span>
              ) : null}
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-slate-500">
                <span>{product.category}</span>
                <span className="rounded-full bg-slate-900/5 px-2 py-1 text-slate-700">
                  ★ 4.8
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-950">
                {product.title}
              </h3>

              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-slate-900">
                  {product.price}
                </p>
                <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-500">
                  +
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
