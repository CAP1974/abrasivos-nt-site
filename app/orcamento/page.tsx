"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { contact } from "@/content/site";

export default function OrcamentoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "calc(100vh - 73px)",
          }}
          className="max-lg:grid-cols-1"
        >
          {/* LEFT */}
          <div
            className="relative overflow-hidden flex flex-col justify-between"
            style={{
              background: "var(--deep)",
              color: "#fff",
              padding: "clamp(48px,6vw,80px)",
            }}
          >
            <div className="relative z-10">
              <div className="section-kicker mb-6">Contato Comercial</div>
              <h1
                style={{
                  fontFamily: "var(--font-barlow),sans-serif",
                  fontSize: "clamp(2.8rem,5vw,4.8rem)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.93,
                  marginBottom: 20,
                }}
              >
                Peça o seu<br />
                <em style={{ color: "var(--sand)", fontStyle: "normal" }}>
                  Orçamento
                </em>
              </h1>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.64)",
                  maxWidth: "40ch",
                }}
              >
                Indique o produto, a aplicação ou o tipo de material. A nossa
                equipa técnica e comercial responde com brevidade.
              </p>

              <div style={{ display: "grid", gap: 16, marginTop: 40 }}>
                {[
                  { icon: "⚡", title: "Resposta rápida", desc: "Resposta comercial com a maior brevidade possível" },
                  { icon: "🎯", title: "Orientação técnica", desc: "Recomendamos a solução mais adequada ao seu processo" },
                  { icon: "📋", title: "Sem compromisso", desc: "Pedido de orçamento sem qualquer custo ou obrigação" },
                ].map((p) => (
                  <div
                    key={p.title}
                    style={{
                      display: "flex", alignItems: "center", gap: 14,
                      padding: 16, borderRadius: 16,
                      border: "1px solid rgba(255,255,255,0.09)",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div
                      style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: "rgba(201,152,79,0.15)",
                        border: "1px solid rgba(201,152,79,0.25)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 16, flexShrink: 0,
                      }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <h5 style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 2 }}>{p.title}</h5>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.48)" }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-10">
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Contato direto
              </p>
              <a href={`tel:${contact.phone}`} style={{ display: "block", fontSize: 18, fontWeight: 600, color: "#e2b96e" }}>
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.52)", marginTop: 4 }}>
                {contact.email}
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="flex items-start"
            style={{ background: "var(--cream)", padding: "clamp(48px,6vw,80px)" }}
          >
            <div style={{ width: "100%", maxWidth: 520 }}>
              <h2
                style={{
                  fontFamily: "var(--font-barlow),sans-serif",
                  fontSize: "2rem", fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "-0.01em",
                  color: "var(--steel)", marginBottom: 28,
                }}
              >
                Fale connosco
              </h2>

              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border-light)" }}>
                Canais de contato direto
              </p>

              <div style={{ display: "grid", gap: 16, marginBottom: 32 }}>
                <a href={`mailto:${contact.email}`}
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 22px", borderRadius: 16, border: "1.5px solid rgba(16,32,34,0.12)", background: "#fff" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(201,152,79,0.1)", border: "1px solid rgba(201,152,79,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>✉️</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a9094", marginBottom: 4 }}>Email</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "var(--steel)" }}>{contact.email}</div>
                  </div>
                </a>

                <a href={`https://wa.me/${contact.whatsapp.replace(/\s/g, "")}`} target="_blank" rel="noopener"
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 22px", borderRadius: 16, border: "1.5px solid rgba(16,32,34,0.12)", background: "#fff" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" fill="white" width={22} height={22}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a9094", marginBottom: 4 }}>WhatsApp Business</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "var(--steel)" }}>{contact.whatsapp}</div>
                  </div>
                </a>

                <a href={`tel:${contact.phone}`}
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 22px", borderRadius: 16, border: "1.5px solid rgba(16,32,34,0.12)", background: "#fff" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(201,152,79,0.1)", border: "1px solid rgba(201,152,79,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>📞</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a9094", marginBottom: 4 }}>Telefone</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "var(--steel)" }}>{contact.phone}</div>
                  </div>
                </a>
              </div>

              <div style={{ padding: 22, borderRadius: 16, background: "#e3d7c7", border: "1px solid rgba(16,32,34,0.12)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a9094", marginBottom: 8 }}>Localização</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--steel)", marginBottom: 4 }}>{contact.locationLabel}, {contact.locationValue}</div>
                <div style={{ fontSize: 13, color: "#2d4145" }}>{contact.responseWindow}</div>
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
