
import "./globals.css";

import Link from 'next/link'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <nav>
          {/* Prefetched when the link is hovered or enters the viewport */}
          
           <Link href="/dashboard">Dashboard</Link>
            <Link href="/payments">Payment</Link>
            <Link href="/inventory">Inventory</Link>
            <Link href="/customers">Customers</Link>
            <Link href="/analytics">Analytics</Link>
          {/* No prefetching */}
          <a href="/contact">Contact</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
