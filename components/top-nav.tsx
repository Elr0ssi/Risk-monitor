"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/map", label: "Global Map" }
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neon.green">Global Risk Monitor</p>
          <p className="text-lg font-semibold">Strategic Intelligence Dashboard</p>
        </div>
        <div className="flex gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm transition ${pathname === link.href ? "bg-neon.green/20 text-neon.green" : "text-slate-300 hover:bg-white/10"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
