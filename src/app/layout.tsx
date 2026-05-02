
import "./globals.css";
import Navbar from './navbar/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
