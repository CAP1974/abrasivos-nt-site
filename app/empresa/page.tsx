import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { company, contact } from "@/content/site";

export default function EmpresaPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* PAGE HEADER */}
        <section className="border-b border-white/10" style={{ background: "var(--deep)", color: "#fff", padding: "clamp(48px,7vw,96px) 0" }}>
          <div className="container-shell">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-white/40 mb-5">
              <Link href="/" className="hover:text-white/70 transition">Home</Link>
              <span>/</span>
              <span style={{ color: "var(--sand)" }}>Empresa</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-barlow),sans-serif", fontSize: "clamp(3rem,7vw,6.5rem)", fontWeight: 800, letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 0.93, marginBottom: 20 }}>
              A Nossa<br />Empresa
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.72, color: "rgba(255,255,255,0.64)", maxWidth: "48ch" }}>
              Especialistas em abrasivos cerâmicos e resinoide para a indústria da pedra natural e artificial, com foco em clareza técnica e apoio comercial direto.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <div className="container-shell" style={{ paddingTop: 64, paddingBottom: 80 }}>

          {/* About grid */}
          <div className="empresa-grid-main">
            <div className="why-card-dark">
              <div className="section-kicker mb-3">Identidade</div>
              <h2 style={{ fontFamily: "var(--font-barlow),sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff", marginTop: 12, lineHeight: 0.95 }}>
                Abrasivos NT —{" "}
                <em style={{ color: "var(--sand)", fontStyle: "normal" }}>Precisão<br />em cada processo.</em>
              </h2>
              <p style={{ marginTop: 20, fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
                {company.about}
              </p>
              <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
                {company.companyStatement}
              </p>
            </div>
            <div className="empresa-grid-pillars">
              {[
                { icon: "🎯", name: "Especialização", desc: "Focados exclusivamente em abrasivos para pedra — não somos distribuidores generalistas." },
                { icon: "🔬", name: "Formulações", desc: "Desenvolvimento de abrasivos adaptados a cada tipo de pedra, máquina e processo de acabamento." },
                { icon: "🤝", name: "Apoio Direto", desc: "Contato comercial simples e objetivo, com resposta técnica personalizada para cada cliente." },
                { icon: "📈", name: "Crescimento", desc: "Estrutura comercial preparada para crescimento do catálogo e expansão de mercados." },
              ].map((p) => (
                <div key={p.name} className="app-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div className="app-icon">{p.icon}</div>
                  <div>
                    <div className="app-name" style={{ fontSize: "1.1rem" }}>{p.name}</div>
                    <p className="app-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div style={{ borderRadius: "var(--radius-xl)", background: "var(--cream-2)", border: "1px solid var(--border-light)", padding: "clamp(36px,5vw,64px)", marginBottom: 20 }}>
            <div className="section-kicker mb-4">Missão</div>
            <blockquote style={{ fontFamily: "var(--font-barlow),sans-serif", fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 700, color: "var(--steel)", lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "-0.01em", maxWidth: "28ch" }}>
              Ajudar cada cliente a identificar o abrasivo mais adequado ao material, à máquina e ao resultado pretendido.
            </blockquote>
          </div>

          {/* Audience + Contact */}
          <div className="empresa-grid-bottom">
            <div className="why-card-light">
              <div className="section-kicker mb-3" style={{ color: "var(--steel-mid)", borderColor: "var(--border-light)", background: "rgba(16,32,34,0.04)" }}>
                A quem nos dirigimos
              </div>
              <h3 style={{ fontFamily: "var(--font-barlow),sans-serif", fontSize: "1.8rem", fontWeight: 800, textTransform: "uppercase", color: "var(--steel)", marginTop: 12, marginBottom: 20 }}>
                Público-alvo
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                {[
                  "Empresas de transformação de pedra",
                  "Marmorarias",
                  "Profissionais de acabamento e polimento",
                  "Serviço exclusivo para Revendedores",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 14, background: "var(--cream-2)", border: "1px solid var(--border-light)" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--sand)", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--steel)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-card-dark" style={{ justifyContent: "space-between" }}>
              <div>
                <div className="section-kicker mb-3">Localização</div>
                <h3 style={{ fontFamily: "var(--font-barlow),sans-serif", fontSize: "1.8rem", fontWeight: 800, textTransform: "uppercase", color: "#fff", marginTop: 12, marginBottom: 8 }}>
                  {contact.locationLabel},<br />{contact.locationValue}
                </h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 24 }}>{company.legalName}</p>
                <div style={{ display: "grid", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(201,152,79,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#c9984f" strokeWidth={2} width={16} height={16}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <a href={`mailto:${contact.email}`} style={{ fontSize: 14, color: "var(--sand-light)", fontWeight: 500 }}>{contact.email}</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(37,211,102,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" fill="#25D366" width={16} height={16}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <a href={`https://wa.me/${contact.whatsapp.replace(/\s/g, "")}`} style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>{contact.whatsapp}</a>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/orcamento" className="btn-primary">Pedir Orçamento</Link>
              </div>
            </div>
          </div>

        </div>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
