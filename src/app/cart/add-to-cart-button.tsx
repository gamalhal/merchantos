"use client";

import type { ReactNode } from "react";

type AddToCartButtonProps = {
  children: ReactNode;
  className: string;
};

const cartStorageKey = "merchantos-cart-count";
const cartUpdatedEvent = "merchantos-cart-updated";

export default function AddToCartButton({
  children,
  className,
}: AddToCartButtonProps) {
  function handleAddToCart() {
    // نقرأ عدد المنتجات الحالي من المتصفح، ثم نزوده بواحد عند الضغط على زر الإضافة.
    const currentCount = Number(localStorage.getItem(cartStorageKey) ?? "0");
    const nextCount = currentCount + 1;

    localStorage.setItem(cartStorageKey, String(nextCount));

    // نرسل حدث مخصص للناف بار حتى يحدث badge السلة فورًا بدون إعادة تحميل الصفحة.
    window.dispatchEvent(
      new CustomEvent(cartUpdatedEvent, { detail: { count: nextCount } })
    );
  }

  return (
    <button type="button" className={className} onClick={handleAddToCart}>
      {children}
    </button>
  );
}
