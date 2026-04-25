/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { productLines, cta } from "@/content/site";

const productDescs: Record<string, string> = {
  "frankfurt-plus": "Abrasivo resinoide para polimento e acabamento técnico em pedra natural ou artificial.",
  "mo-125mm": "Solução versátil para polimento de topos, pisos e operações de acabamento com diferentes acoplamentos.",
  "fickert-140": "Linha técnica para polimento industrial de granito, quartzo e materiais de maior dureza.",
};

export default function ProdutosPage() {
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
              <span style={{ color: "var(--sand)" }}>Produtos</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-barlow),sans-serif", fontSize: "clamp(3rem,7vw,6.5rem)", fontWeight: 800, letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 0.93, marginBottom: 20 }}>
              Catálogo<br />Técnico
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.72, color: "rgba(255,255,255,0.64)", maxWidth: "48ch" }}>
              Três linhas de produto especializadas em abrasivos para pedra natural e artificial, com cobertura completa de materiais, máquinas e granulometrias.
            </p>
          </div>
        </section>

        {/* PRODUCT DETAILS */}
        <div className="container-shell" style={{ paddingTop: 64, paddingBottom: 80 }}>
          {productLines.map((product, idx) => (
            <div key={product.slug} id={product.slug}
              style={{ marginBottom: idx < productLines.length - 1 ? 80 : 0 }}>

              <div className="grid gap-10 xl:grid-cols-2 xl:gap-14 items-start">

                {/* Image */}
                <div style={{ borderRadius: "var(--radius-xl)", background: "linear-gradient(180deg,#f6f0e8 0%,#ede1d0 100%)", border: "1px solid rgba(200,180,150,0.3)", padding: 40, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 380, boxShadow: "0 24px 64px rgba(16,32,34,0.1)" }}>
                  <img src={product.image} alt={`Imagem do produto ${product.name}`}
                    style={{ maxHeight: 320, maxWidth: "100%", objectFit: "contain", filter: "drop-shadow(0 16px 40px rgba(16,32,34,0.18))" }} />
                </div>

                {/* Info */}
                <div>
                  <div className="section-kicker mb-3">Linha de produto</div>
                  <h2 style={{ fontFamily: "var(--font-barlow),sans-serif", fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--steel)", marginBottom: 12, lineHeight: 1 }}>
                    {product.name}
                  </h2>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--steel-mid)", marginBottom: 32 }}>
                    {productDescs[product.slug]}
                  </p>

                  {/* Materials */}
                  <div style={{ marginBottom: 24 }}>
                    <div className="specs-title">Materiais de aplicação</div>
                    <div className="flex flex-wrap gap-2">
                      {product.materials.map((m) => (
                        <span key={m} className={`spec-pill ${["Granito","Quartzo","Betão"].includes(m) ? "highlight" : ""}`}>{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Machines */}
                  <div style={{ marginBottom: 24 }}>
                    <div className="specs-title">Máquinas compatíveis</div>
                    <div className="flex flex-wrap gap-2">
                      {product.machines.map((m) => (
                        <span key={m} className="spec-pill">{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Grits */}
                  <div style={{ marginBottom: 24 }}>
                    <div className="specs-title">Granulometrias disponíveis</div>
                    <div className="flex flex-wrap gap-2">
                      {product.gritOptions.map((g) => (
                        <span key={g} className="spec-pill">{g}</span>
                      ))}
                    </div>
                  </div>

                  {/* Hardness */}
                  {product.hardness && (
                    <div style={{ marginBottom: 24 }}>
                      <div className="specs-title">Dureza</div>
                      <div className="flex flex-wrap gap-2">
                        {product.hardness.map((h) => (
                          <span key={h} className="spec-pill highlight">{h}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sizes */}
                  {product.sizes && (
                    <div style={{ marginBottom: 24 }}>
                      <div className="specs-title">Dimensões disponíveis</div>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((s) => (
                          <span key={s} className="spec-pill highlight">{s}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Couplings */}
                  {product.couplings && (
                    <div style={{ marginBottom: 24 }}>
                      <div className="specs-title">Acoplamentos</div>
                      <div className="flex flex-wrap gap-2">
                        {product.couplings.map((c) => (
                          <span key={c} className="spec-pill">{c}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits */}
                  <div style={{ borderRadius: "var(--radius-lg)", background: "var(--cream-2)", border: "1px solid var(--border-light)", padding: 24, marginBottom: 32 }}>
                    {product.details.map((d, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 0", borderBottom: i < product.details.length - 1 ? "1px solid var(--border-light)" : "none" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--sand)", flexShrink: 0, marginTop: 7 }} />
                        <span style={{ fontSize: 13, lineHeight: 1.65, color: "var(--steel-mid)" }}>{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/orcamento" className="btn-primary">{cta.primaryQuote}</Link>
                    <Link href="/orcamento" className="btn-secondary">Falar com técnico</Link>
                  </div>
                </div>
              </div>

              {idx < productLines.length - 1 && (
                <div style={{ borderBottom: "1px solid var(--border-light)", marginTop: 80 }} />
              )}
            </div>
          ))}
        </div>

      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
