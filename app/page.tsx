/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { company, cta, productLines, trustPillars, processHighlights } from "@/content/site";

const applications = [
  { num: "01", icon: "🪨", name: "Mármore", desc: "Polimento progressivo, acabamento e brilho em mármore com abrasivos resinoide de granulometria fina a extra-fina.", tags: "Frankfurt Plus · Mó 125 mm" },
  { num: "02", icon: "🔩", name: "Granito", desc: "Linhas adequadas a granito e materiais de elevada dureza, com formulação técnica para contexto industrial de alto volume.", tags: "Fickert 140 · Frankfurt Plus" },
  { num: "03", icon: "💎", name: "Quartzo", desc: "Abrasivos cerâmicos para polimento de superfícies em quartzo engineered stone com acabamento de alta precisão.", tags: "Fickert 140 · Frankfurt Plus" },
  { num: "04", icon: "🏛️", name: "Terrazzo", desc: "Soluções de polimento e restauro de pavimentos em terrazzo clássico e moderno, incluindo micro-cimento.", tags: "Mó 125 mm · Frankfurt Plus" },
];

const productDescs: Record<string, string> = {
  "frankfurt-plus": "Abrasivo resinoide para polimento e acabamento técnico em pedra natural ou artificial.",
  "mo-125mm": "Solução versátil para polimento de topos, pisos e acabamento com diferentes acoplamentos.",
  "fickert-140": "Linha técnica para polimento industrial de granito, quartzo e materiais de maior dureza.",
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-white/10 pb-0"
          style={{ background: "var(--deep)", color: "#fff", paddingTop: "clamp(64px,10vh,120px)" }}>
          <div className="absolute inset-0 grid-accent opacity-100" />
          <div className="hero-glow-1" />
          <div className="hero-glow-2" />

          <div className="container-shell relative z-10">
            <div className="hero-kicker mb-7">Experiência de Anos. Um Novo Conceito.</div>
            <h1 className="mb-8 max-w-[14ch]"
              style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "clamp(4rem,10vw,9rem)",
                fontWeight: 800, lineHeight: 0.92,
                letterSpacing: "-0.02em", textTransform: "uppercase"
              }}>
              Soluções para{" "}
              <em style={{ display: "block", color: "var(--sand)", fontStyle: "normal" }}>
                Cada Pedra.
              </em>{" "}
              Cada Processo.
            </h1>
            <p className="mb-10 max-w-[520px] text-white/72 leading-7"
              style={{ fontSize: "clamp(15px,1.1vw,18px)" }}>
              {company.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4" style={{ marginBottom: "clamp(48px,8vw,96px)" }}>
              <Link href="/produtos" className="btn-primary">{cta.primaryProducts}</Link>
              <Link href="/orcamento" className="btn-outline">{cta.primaryQuote}</Link>
            </div>

            {/* Stats strip */}
            <div className="border-t border-white/10 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "1px", background: "rgba(255,255,255,0.09)" }}>
                {[
                  { num: "3", label: "Linhas de produto especializadas" },
                  { num: "15+", label: "Granulometrias disponíveis por linha" },
                  { num: "5", label: "Materiais de aplicação cobertos" },
                  { num: "100%", label: "Foco em abrasivos para pedra" },
                ].map((s) => (
                  <div key={s.label} style={{ background: "var(--deep)", padding: "28px 24px" }}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── APPLICATIONS ── */}
        <section style={{ padding: "clamp(64px,8vw,112px) 0" }}>
          <div className="container-shell">
            <div className="section-kicker mb-5">Setores de Aplicação</div>
            <h2 className="section-title mb-3">Solução certa<br />para cada material</h2>
            <p className="section-sub mb-12">
              Cada pedra tem características distintas. As nossas linhas estão otimizadas para dar resposta técnica precisa a cada tipo de aplicação.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {applications.map((a) => (
                <div key={a.num} className="app-card">
                  <div className="app-icon">{a.icon}</div>
                  <div className="app-num">{a.num} — Aplicação</div>
                  <div className="app-name">{a.name}</div>
                  <p className="app-desc">{a.desc}</p>
                  <div className="app-tag">{a.tags}</div>
                </div>
              ))}
              {/* Dark CTA card */}
              <Link href="/orcamento" className="app-card sm:col-span-2 xl:col-span-1"
                style={{ background: "var(--deep)", borderColor: "var(--border-dark)", cursor: "pointer" }}>
                <div className="app-icon" style={{ background: "rgba(201,152,79,0.2)" }}>📋</div>
                <div className="app-num" style={{ color: "rgba(255,255,255,0.4)" }}>Assistência técnica</div>
                <div className="app-name" style={{ color: "#fff" }}>Não encontrou<br />a sua aplicação?</div>
                <p className="app-desc" style={{ color: "rgba(255,255,255,0.56)" }}>
                  Contacte-nos com o detalhe da sua aplicação. A nossa equipa técnica recomenda a solução mais adequada.
                </p>
                <div className="app-tag" style={{ color: "var(--sand)" }}>Pedir recomendação</div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section style={{ padding: "clamp(64px,8vw,112px) 0", background: "var(--deep)", color: "#fff" }}>
          <div className="container-shell">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <div>
                <div className="section-kicker mb-4">Catálogo técnico</div>
                <h2 className="section-title mb-3" style={{ color: "#fff" }}>Linhas de produto</h2>
                <p className="section-sub" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Três linhas especializadas, cada uma otimizada para um conjunto específico de materiais, máquinas e operações.
                </p>
              </div>
              <Link href="/produtos" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-all hover:gap-4"
                style={{ color: "var(--sand)" }}>
                Ver catálogo completo →
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {productLines.map((p) => (
                <Link href={`/produtos#${p.slug}`} key={p.slug} className="product-card">
                  <div className="flex items-center justify-center border-b border-white/10"
                    style={{ background: "linear-gradient(180deg,#1a2e31 0%,#0f2022 100%)", height: 220, padding: 24 }}>
                    <img src={p.image} alt={`Imagem do produto ${p.name}`}
                      className="object-contain"
                      style={{ maxHeight: 170, maxWidth: "100%", filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.5))" }} />
                  </div>
                  <div style={{ padding: 28 }}>
                    <div className="product-line-tag">Linha de produto</div>
                    <h3 style={{ fontFamily: "var(--font-barlow),sans-serif", fontSize: "1.9rem", fontWeight: 800, textTransform: "uppercase", color: "#fff", marginBottom: 10, lineHeight: 1 }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: 13, lineHeight: 1.72, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
                      {productDescs[p.slug]}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.materials.slice(0, 4).map((m) => (
                        <span key={m} className="material-tag">{m}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-5">
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                        {p.gritOptions.length} granulometrias
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 9999, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontSize: 13, fontWeight: 600 }}>
                        Ver detalhes →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY NT ── */}
        <section style={{ padding: "clamp(64px,8vw,112px) 0" }}>
          <div className="container-shell">
            <div className="grid gap-5 xl:grid-cols-2">
              <div className="why-card-dark">
                <div className="section-kicker mb-4">Porquê a Abrasivos NT</div>
                <h2 className="section-title mb-4" style={{ color: "#fff" }}>Especialização<br />sem compromisso.</h2>
                <p className="section-sub mb-0" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Trabalhamos exclusivamente no setor de abrasivos para pedra. Não somos um distribuidor generalista — somos uma empresa técnica focada num domínio específico.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-7">
                  {[
                    { t: "Formulações exclusivas", d: "Desenvolvimento de abrasivos adaptados a cada tipo de pedra e processo." },
                    { t: "Identificação individual", d: "Marcação com botão numérico de cor em cada unidade de produto." },
                    { t: "Armazenamento indefinido", d: "Produtos com estabilidade alargada sem perda de desempenho." },
                    { t: "Redução de custos", d: "Maior produtividade e menos paragens face a abrasivos tradicionais." },
                  ].map((p) => (
                    <div key={p.t} className="why-pillar">
                      <h4>{p.t}</h4>
                      <p>{p.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="why-card-light">
                <div className="section-kicker mb-4" style={{ color: "var(--steel-mid)", borderColor: "var(--border-light)", background: "rgba(16,32,34,0.04)" }}>
                  Empresa
                </div>
                <h2 className="section-title mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>A Abrasivos NT</h2>
                <p className="leading-7 text-[var(--steel-mid)] mb-4 text-[15px]">{company.about}</p>
                <p className="leading-7 text-[var(--steel-mid)] mb-6 text-[15px]">{company.companyStatement}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/orcamento" className="btn-secondary">Contactar equipa →</Link>
                  <Link href="/produtos" className="btn-secondary">Ver produtos →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOTE CTA ── */}
        <section style={{ padding: "clamp(64px,8vw,112px) 0", background: "var(--cream-2)", borderTop: "1px solid var(--border-light)" }}>
          <div className="container-shell">
            <div className="relative overflow-hidden flex flex-wrap items-center justify-between gap-10 rounded-[var(--radius-xl)] border border-white/10 p-10 xl:p-20"
              style={{ background: "var(--deep)", boxShadow: "0 48px 120px rgba(7,16,18,0.4)" }}>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle,rgba(201,152,79,0.1) 0%,transparent 70%)", transform: "translate(20%,-40%)" }} />
              <h2 className="relative max-w-[18ch]"
                style={{ fontFamily: "var(--font-barlow),sans-serif", fontSize: "clamp(2rem,4vw,3.4rem)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", color: "#fff", lineHeight: 0.97 }}>
                Tem uma necessidade{" "}
                <em style={{ color: "var(--sand)", fontStyle: "normal" }}>específica</em>{" "}
                de polimento?
              </h2>
              <div className="relative flex flex-col gap-3 items-start">
                <Link href="/orcamento" className="btn-primary" style={{ minWidth: 220 }}>
                  {cta.primaryQuote}
                </Link>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>
                  Resposta técnica e comercial com brevidade
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
