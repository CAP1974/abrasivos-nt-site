/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { company, cta, navigation } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071012]/95 text-white shadow-[0_18px_46px_rgba(4,8,9,0.32)] backdrop-blur-2xl">
      <div className="container-shell py-3.5 sm:py-4">
        <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-5 lg:px-6 lg:py-4">
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            <Link href="/" className="flex min-w-0 items-center gap-4 lg:gap-5">
              <div className="flex h-12 w-[4.6rem] shrink-0 items-center justify-center rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-2 soft-outline sm:h-14 sm:w-[5.2rem]">
                <img src="/abrasivos-nt-logo.png" alt={`${company.brandName} logótipo`} className="h-8 w-auto sm:h-9" />
              </div>
              <div className="flex min-w-0 flex-col justify-center">
                <span className="truncate text-[13px] font-semibold uppercase tracking-[0.34em] text-sand-200 sm:text-[15px]">
                  {company.brandName}
                </span>
                <span className="truncate text-[11px] text-white/56 sm:text-xs">
                  {company.legalName}
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-[0.16em] text-white/72 xl:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition duration-200 hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/orcamento"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-sand-300/40 bg-sand-400 px-4 py-3 text-sm font-semibold text-steel-950 shadow-[0_16px_36px_rgba(201,154,81,0.26)] transition duration-200 hover:-translate-y-0.5 hover:bg-sand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-200 sm:px-6"
            >
              {cta.primaryQuote}
            </Link>
          </div>

          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 xl:hidden">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-sand-300/30 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

