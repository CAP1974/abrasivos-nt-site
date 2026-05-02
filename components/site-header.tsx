"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, cta, navigation } from "@/content/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", background: "rgba(7,16,18,0.97)", boxShadow: "0 18px 46px rgba(4,8,9,0.32)" }}>
      <div className="container-shell" style={{ paddingTop: 14, paddingBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>

          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 0 }}>
            <div style={{ display: "flex", height: 48, width: 72, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: 18, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", padding: "0 8px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/abrasivos-nt-logo.png" alt={`${company.brandName} logótipo`} style={{ height: 32, width: "auto" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <span style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.34em", color: "#e2b96e", fontFamily: "var(--font-barlow), sans-serif", whiteSpace: "nowrap" }}>
                {company.brandName}
              </span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap" }}>
                {company.legalName}
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav style={{ display: "none", alignItems: "center", gap: 4 }} className="xl:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} style={{
                fontSize: 13, fontWeight: 500,
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "8px 16px", borderRadius: 9999,
                color: pathname === item.href ? "#ffffff" : "#aaaaaa",
                background: pathname === item.href ? "rgba(255,255,255,0.08)" : "transparent",
                transition: "color .2s, background .2s",
                whiteSpace: "nowrap",
              }}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* CTA button */}
            <Link href="/orcamento" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              borderRadius: 9999, padding: "11px 22px",
              fontSize: 13, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.06em",
              background: "#c9984f", color: "#071012",
              boxShadow: "0 16px 36px rgba(201,152,79,0.26)",
              whiteSpace: "nowrap",
            }} className="hidden sm:inline-flex">
              {cta.primaryQuote}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              style={{ display: "flex", flexDirection: "column", gap: 5, padding: 8, borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", cursor: "pointer" }}
              className="xl:hidden"
            >
              <span style={{ display: "block", width: 22, height: 2, background: "#ffffff", borderRadius: 2 }} />
              <span style={{ display: "block", width: 22, height: 2, background: "#ffffff", borderRadius: 2 }} />
              <span style={{ display: "block", width: 22, height: 2, background: "#ffffff", borderRadius: 2 }} />
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {mobileOpen && (
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 12, paddingTop: 12, paddingBottom: 8, gap: 4 }}>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "12px 16px", borderRadius: 10,
                  fontSize: 14, fontWeight: 500,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  color: "#dddddd",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                {item.label}
              </Link>
            ))}
            <Link href="/orcamento"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block", textAlign: "center",
                marginTop: 8, padding: "12px 16px", borderRadius: 9999,
                fontSize: 13, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.06em",
                background: "#c9984f", color: "#071012",
              }}>
              {cta.primaryQuote}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
