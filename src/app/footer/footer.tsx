import Link from "next/link";
import { Globe, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Status Page", href: "/analytics" },
      { name: "API Reference", href: "/dashboard" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/customers" },
      { name: "Privacy Policy", href: "/customers" },
      { name: "Security Standards", href: "/payments" },
    ],
  },
  {
    title: "Support",
    links: [{ name: "Contact Support", href: "/customers" }],
  },
];

const socialLinks = [
  { name: "Email", href: "mailto:support@merchantos.com", icon: Mail },
  { name: "Community", href: "/customers", icon: MessageCircle },
  { name: "Website", href: "/", icon: Globe },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 px-6 pb-8">
      <div className="mx-auto max-w-7xl border-t border-slate-200 py-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_2fr]">
          <div className="max-w-md">
            <Link
              href="/"
              className="text-sm font-bold tracking-tight text-slate-950"
            >
              MerchantOS
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              &copy; 2024 MerchantOS. Enterprise-grade security for global
              commerce. All transactions are PCI-DSS Level 1 compliant and
              encrypted.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm ring-1 ring-slate-200 transition hover:text-slate-950 hover:ring-slate-300"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-semibold text-slate-950">
                  {group.title}
                </h2>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-sm text-slate-500 transition hover:text-slate-950"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
