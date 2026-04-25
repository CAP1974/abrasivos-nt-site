import Link from "next/link";
import { ProductSummarySlider } from "@/components/product-summary-slider";
import { ProductVisual } from "@/components/product-visual";
import { QuoteCta } from "@/components/quote-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { cta, productLines } from "@/content/site";

const heroHighlights = [
  "Catálogo técnico estruturado",
  "Imagem real e leitura comercial",
  "Pedido de orçamento direto"
];

function renderList(values?: string[]) {
  return values?.join(" • ") ?? "";
}

export default function ProdutosPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-12">
        <section className="container-shell pt-7 sm:pt-8 lg:pt-10">
          <div className="mx-auto max-w-[1360px] overflow-hidden rounded-[2.3rem] border border-[#d2c2ad] bg-[radial-gradient(circle_at_top_left,rgba(201,154,81,0.14),transparent_30%),radial-gradient(circle_at_88%_14%,rgba(16,32,34,0.08),transparent_24%),linear-gradient(180deg,#fbf6ee_0%,#f0e5d7_50%,#e9ddcb_100%)] px-6 py-5 shadow-[0_34px_120px_rgba(16,32,34,0.12)] sm:px-8 sm:py-6 lg:px-10 lg:py-6 xl:px-12 xl:py-7">
            <div className="max-w-[760px] self-center">
              <div className="flex flex-wrap gap-2">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#baa788] bg-[#f5ede0]/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#344446] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.24em] text-sand-800">Produtos</p>
              <h1 className="mt-3 max-w-[12.2ch] text-[2.05rem] font-semibold tracking-[-0.062em] text-[#1a2527] sm:text-[2.45rem] sm:leading-[0.99] lg:text-[2.72rem] lg:leading-[0.965] xl:text-[2.95rem]">
                Três linhas apresentadas como catálogo técnico premium, com imagem real e leitura comercial clara.
              </h1>
              <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-7 text-[#334345] sm:text-[17px] sm:leading-[1.8]">
                A página de produtos reúne Frankfurt Plus, Mó 125 mm e Fickert 140 com imagem principal limpa, ficha técnica visual secundária e conteúdo técnico organizado para leitura rápida, profissional e orientada a orçamento.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/orcamento"
                  className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-full bg-[#142325] px-7 py-4 text-sm font-semibold text-[#faf3e7] shadow-[0_18px_40px_rgba(16,32,34,0.26)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0d181a]"
                >
                  {cta.primaryQuote}
                </Link>
                <Link
                  href="/empresa"
                  className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-full border border-[#b39e81] bg-white/28 px-7 py-4 text-sm font-semibold text-[#223133] shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/44"
                >
                  {cta.secondaryCompany}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductSummarySlider products={productLines} />

        <section className="container-shell pt-20 sm:pt-24">
          <div className="grid gap-8">
            {productLines.map((line) => (
              <article
                id={line.slug}
                key={line.slug}
                className="panel-strong overflow-hidden border-[color:var(--border-strong)] p-7 sm:p-8 lg:p-9 xl:p-10"
              >
                <div className="grid gap-8 xl:grid-cols-[0.47fr_0.53fr] xl:items-start xl:gap-12">
                  <div className="space-y-5">
                    <ProductVisual
                      src={line.image}
                      alt={`Imagem principal do produto ${line.name}`}
                      label="Imagem principal do produto"
                      className="[&_img]:max-h-[500px]"
                    />

                    {line.gallery.map((galleryImage, galleryIndex) => (
                      <div key={galleryImage}>
                        <ProductVisual
                          src={galleryImage}
                          alt={`Ficha técnica visual ${galleryIndex + 1} do produto ${line.name}`}
                          label="Ficha técnica visual"
                          variant="sheet"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-2xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-700">Linha técnica</p>
                        <h2 className="mt-3 text-[2.55rem] font-semibold tracking-[-0.05em] text-steel-950 sm:text-[3rem] lg:leading-[0.95]">
                          {line.name}
                        </h2>
                        <p className="mt-4 max-w-[42rem] text-[1.06rem] font-medium leading-8 text-steel-900/86 sm:text-[1.08rem]">
                          {line.subtitle}
                        </p>
                      </div>
                      <Link
                        href="/orcamento"
                        className="inline-flex min-w-[220px] justify-center rounded-full bg-steel-950 px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(16,32,34,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-steel-800"
                      >
                        {cta.primaryQuote}
                      </Link>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      <div className="rounded-[1.65rem] border border-[#dfd4c4] bg-[#f7f1e7] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-700">Materiais</p>
                        <p className="mt-3 text-[0.96rem] font-medium leading-8 text-steel-950/90">{renderList(line.materials)}</p>
                      </div>
                      <div className="rounded-[1.65rem] border border-[#dfd4c4] bg-[#fbf7ef] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-700">Máquinas</p>
                        <p className="mt-3 text-[0.96rem] font-medium leading-8 text-steel-950/90">{renderList(line.machines)}</p>
                      </div>
                      <div className="rounded-[1.65rem] border border-[#dfd4c4] bg-white px-6 py-6 shadow-[0_8px_26px_rgba(16,32,34,0.05),inset_0_1px_0_rgba(255,255,255,0.85)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-700">Granulometrias</p>
                        <p className="mt-3 text-[0.96rem] font-medium leading-8 text-steel-950/90">{renderList(line.gritOptions)}</p>
                      </div>
                      <div className="rounded-[1.65rem] border border-[#dfd4c4] bg-[#fbf7ef] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-700">
                          {line.hardness ? "Dureza" : line.sizes ? "Tamanhos" : "Acoplamentos"}
                        </p>
                        <p className="mt-3 text-[0.96rem] font-medium leading-8 text-steel-950/90">
                          {line.hardness ? renderList(line.hardness) : line.sizes ? renderList(line.sizes) : renderList(line.couplings)}
                        </p>
                        {line.sizes && line.couplings ? (
                          <div className="mt-5 border-t border-[#e7dcc8] pt-5">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-700">Acoplamentos</p>
                            <p className="mt-3 text-[0.96rem] font-medium leading-8 text-steel-950/90">{renderList(line.couplings)}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-8 rounded-[1.8rem] border border-[#e0d5c4] bg-white px-6 py-6 shadow-[0_10px_28px_rgba(16,32,34,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-700">Detalhes técnicos</p>
                      <ul className="mt-4 grid gap-3 text-[0.96rem] text-steel-950/92">
                        {line.details.map((detail) => (
                          <li
                            key={detail}
                            className="rounded-[1.2rem] border border-[#ece1d1] bg-[#faf6ef] px-4 py-4 font-medium leading-7"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container-shell pt-24 sm:pt-28">
          <QuoteCta
            title="Quer validar a linha mais adequada antes de pedir proposta?"
            description="A Abrasivos NT pode enquadrar o pedido por aplicação, material e máquina, mantendo o processo comercial simples, técnico e objetivo."
            buttonLabel={cta.primaryQuote}
          />
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
