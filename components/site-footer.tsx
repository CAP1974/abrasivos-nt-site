/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { company, contact, footerContent, navigation } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8 sm:pt-20 lg:pt-24"
      style={{ background: "var(--deep-2)", color: "#fff" }}>
      <div className="container-shell">
        <div className="grid gap-10 xl:grid-cols-[1.4fr_0.8fr_1fr] xl:gap-16 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-14 w-[5.4rem] items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/[0.05] px-2">
                <img src="/abrasivos-nt-logo.png" alt={`${company.brandName} logótipo`} className="h-9 w-auto" />
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.34em]"
                  style={{ color: "#e2b96e", fontFamily: "var(--font-barlow), sans-serif" }}>
                  {company.brandName}
                </p>
                <p className="mt-1 text-[11px] text-white/50">{company.legalName}</p>
              </div>
            </div>
            <p className="text-[0.95rem] leading-7 text-white/68 max-w-[34ch]">
              {footerContent.summary}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] mb-5"
              style={{ color: "var(--sand)" }}>
              Navegação
            </p>
            <div className="grid gap-3 text-sm text-white/64">
              <Link href="/" className="hover:text-white transition">Home</Link>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] mb-5"
              style={{ color: "var(--sand)" }}>
              Contato Comercial
            </p>
            <p className="text-[0.95rem] leading-7 text-white/68 mb-5 max-w-[32ch]">
              {footerContent.contactNote}
            </p>
            <div className="footer-contact-card">
              <div className="mb-4">
                <div className="contact-label">Email</div>
                <a href={`mailto:${contact.email}`}
                  className="contact-val hover:text-white transition"
                  style={{ color: "#e2b96e" }}>
                  {contact.email}
                </a>
              </div>
              <div className="mb-4">
                <div className="contact-label">WhatsApp Business</div>
                <div className="contact-val">{contact.whatsapp}</div>
              </div>
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="contact-val text-white/80 text-sm">
                  {contact.locationLabel} — {contact.locationValue}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © 2026 {company.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-white/36 hover:text-white/70 transition">Política de Privacidade</a>
            <a href="#" className="text-xs text-white/36 hover:text-white/70 transition">Termos e Condições</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
