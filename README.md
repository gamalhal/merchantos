# MerchantOS

MerchantOS is a responsive Next.js merchant dashboard UI for enterprise commerce hardware, secure checkout, inventory product details, cart management, and account login.

## Live Demo

https://merchantos-gamalhal.netlify.app/

## Features

- Responsive navbar with mobile dropdown navigation.
- Account/avatar link connected to the login page.
- Cart icon with a live badge count stored in `localStorage`.
- Home page with hero, inventory cards, and CTA section.
- Dashboard overview with stats, revenue chart, growth panel, and transactions table.
- Payments checkout page using MerchantOS cart data.
- Inventory product detail page using shared product data.
- Cart page with order summary, promo code UI, and checkout link.
- Login page with secure sign-in and two-factor verification UI.
- Shared footer across all pages.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home page |
| `/dashboard` | Dashboard overview |
| `/payments` | Secure checkout |
| `/inventory` | Product detail |
| `/cart` | Shopping cart |
| `/login` | Login and two-factor screen |
| `/customers` | Customers placeholder |
| `/analytics` | Analytics placeholder |

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Lucide React icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Important Files

```text
src/app/page.tsx                    Home page
src/app/dashboard/page.tsx          Dashboard overview
src/app/payments/page.tsx           Checkout page
src/app/inventory/page.tsx          Product detail page
src/app/inventory/inventory-list.tsx Home inventory cards
src/app/cart/page.tsx               Cart page
src/app/cart/add-to-cart-button.tsx  Add-to-cart client behavior
src/app/login/page.tsx              Login and 2FA page
src/app/navbar/navbar.tsx           Navbar, cart badge, mobile menu
src/app/footer/footer.tsx           Shared footer
src/app/data.ts                     Shared product and cart data
src/app/globals.css                 Global styles and input helpers
```

## Notes

Product and cart data currently live in `src/app/data.ts`. The add-to-cart badge is a frontend-only interaction and stores its count in the browser using `localStorage`.
