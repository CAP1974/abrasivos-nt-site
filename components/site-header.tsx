"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, cta, navigation } from "@/content/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-2xl"
      style={{ background: "rgba(7,16,18,0.97)", boxShadow: "0 18px 46px rgba(4,8,9,0.32)" }}>
      <div className="container-shell py-3.5 sm:py-4">
        {/* Main row */}
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4 min-w-0">
            <div className="flex h-12 w-[4.6rem] shrink-0 items-center justify-center rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-2"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/abrasivos-nt-logo.png" alt={`${company.brandName} logótipo`} className="h-8 w-auto sm:h-9" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="truncate text-[13px] font-semibold uppercase tracking-[0.34em] sm:text-[15px]"
                style={{ color: "#e2b96e", fontFamily: "var(--font-barlow), sans-serif" }}>
                {company.brandName}
              </span>
              <span className="truncate text-[11px] text-white/56 sm:text-xs">{company.legalName}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex"
            style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}
                className={`px-4 py-2 rounded-full transition duration-200 ${pathname === item.href ? "text-white bg-white/[0.06]" : "text-white/68 hover:text-white hover:bg-white/[0.05]"}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/orcamento"
              className="hidden sm:inline-flex shrink-0 items-center justify-center rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.06em] transition duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--sand)", color: "var(--deep)",
                boxShadow: "0 16px 36px rgba(201,152,79,0.26)"
              }}>
              {cta.primaryQuote}
            </Link>
            {/* Mobile hamburger */}
            <button className="xl:hidden flex flex-col gap-1.5 p-2 rounded-xl border border-white/10"
              onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <span className="block w-5 h-0.5 bg-white rounded-full" />
              <span className="block w-5 h-0.5 bg-white rounded-full" />
              <span className="block w-5 h-0.5 bg-white rounded-full" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="xl:hidden mt-3 flex flex-col border-t border-white/10 pt-3 pb-1 gap-1">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-[0.1em] text-white/78 border-b border-white/[0.04] hover:text-white hover:bg-white/[0.04] transition">
                {item.label}
              </Link>
            ))}
            <Link href="/orcamento" onClick={() => setMobileOpen(false)}
              className="mt-2 text-center rounded-full py-3 text-sm font-bold uppercase tracking-[0.06em] transition"
              style={{ background: "var(--sand)", color: "var(--deep)" }}>
              {cta.primaryQuote}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
