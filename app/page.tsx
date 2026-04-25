import Link from "next/link";
import { CategoryGrid } from "@/components/category-grid";
import { ContentSection } from "@/components/content-section";
import { QuoteCta } from "@/components/quote-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { company, cta, processHighlights, productLines, trustPillars } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-12">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#071012] text-white">
          <div className="absolute inset-0 grid-accent opacity-[0.08]" />
          <div className="absolute left-[-6%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-sand-400/10 blur-3xl" />
          <div className="absolute right-[-8%] top-[-6%] h-[28rem] w-[28rem] rounded-full bg-sand-300/12 blur-3xl" />
          <div className="container-shell relative flex min-h-[86vh] items-center py-8 sm:min-h-[88vh] lg:py-10 xl:min-h-[92vh]">
            <div className="grid w-full gap-6 xl:grid-cols-[1.18fr_0.82fr] xl:items-end">
              <div className="max-w-[70rem] xl:pr-8">
                <span className="section-kicker border-sand-300/30 bg-sand-300/10 text-sand-200">
                  {company.tagline}
                </span>
                <h1 className="mt-5 max-w-[14ch] text-[2.9rem] font-semibold tracking-[-0.055em] leading-[0.94] sm:text-[4.2rem] lg:text-[6rem] lg:leading-[0.9] xl:text-[6.65rem]">
                  {company.heroTitle}
                </h1>
                <p className="mt-6 max-w-[46rem] text-[1.02rem] leading-8 text-white/78 sm:text-[1.08rem] lg:text-[1.16rem]">
                  {company.heroDescription}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/produtos" className="inline-flex min-w-[230px] justify-center rounded-full bg-sand-400 px-7 py-4 text-sm font-semibold text-steel-950 shadow-[0_18px_40px_rgba(201,154,81,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-sand-300">
                    {cta.primaryProducts}
                  </Link>
                  <Link href="/orcamento" className="inline-flex min-w-[230px] justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition duration-200 hover:bg-white/[0.08]">
                    {cta.primaryQuote}
                  </Link>
                </div>

                <div className="mt-9 grid gap-3 sm:grid-cols-3">
                  {company.trustHighlights.slice(0, 3).map((item, index) => (
                    <div key={item} className={index === 0 ? "rounded-[1.45rem] border border-sand-300/22 bg-sand-300/10 px-4 py-4 text-sm leading-6 text-white/90" : "rounded-[1.45rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-6 text-white/78"}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 xl:gap-5">
                <div className="rounded-[2.2rem] border border-white/10 bg-black/24 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8 lg:p-9">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-200">Posicionamento</p>
                  <p className="mt-4 text-[2rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[2.4rem]">
                    Catálogo comercial claro, leitura técnica objetiva e presença institucional forte para o setor da pedra.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] px-5 py-5 text-sm leading-7 text-white/78">
                    Orientação por aplicação, material e máquina para tornar o pedido de orçamento mais qualificado.
                  </div>
                  <div className="rounded-[1.8rem] border border-sand-300/20 bg-sand-300/10 px-5 py-5 text-sm leading-7 text-white/86">
                    Comunicação comercial direta, navegação simples e foco em decisão técnica com rapidez.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell relative z-10 -mt-12 sm:-mt-14 lg:-mt-16">
          <div className="grid gap-4 lg:grid-cols-3">
            {processHighlights.map((item, index) => (
              <article key={item.title} className={index === 1 ? "panel-strong border-[color:var(--border-strong)] p-7 lg:p-8" : "panel border-white/60 p-7 lg:p-8"}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-700">Aplicação / material</p>
                <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.04em] text-steel-900">{item.title}</h2>
                <p className="mt-4 text-sm leading-8 text-steel-700">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <ContentSection
          title="Linhas principais"
          description="A homepage concentra a apresentação comercial nas três linhas iniciais com enquadramento técnico, leitura rápida e presença suficiente para suportar contacto e orçamento sem dispersão."
        >
          <CategoryGrid categories={productLines} />
        </ContentSection>

        <section className="container-shell pt-24 sm:pt-28">
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-stretch">
            <div className="surface-dark rounded-[2.25rem] border border-white/10 p-8 text-white shadow-[0_34px_120px_rgba(5,9,10,0.34)] sm:p-10 lg:p-12">
              <span className="section-kicker border-sand-300/30 bg-sand-300/10 text-sand-200">Empresa</span>
              <h2 className="mt-5 max-w-md text-[2.35rem] font-semibold tracking-[-0.04em] sm:text-[3rem] lg:leading-[0.98]">
                Marca especializada, comunicação objetiva e estrutura pronta para crescer.
              </h2>
            </div>
            <div className="panel-strong border-[color:var(--border-strong)] p-8 sm:p-10 lg:p-12">
              <p className="text-[1.05rem] leading-8 text-steel-700">{company.about}</p>
              <p className="mt-6 text-base leading-8 text-steel-700">{company.companyStatement}</p>
            </div>
          </div>
        </section>

        <section className="container-shell pt-24 sm:pt-28">
          <div className="surface-dark overflow-hidden rounded-[2.35rem] border border-white/10 p-8 text-white shadow-[0_34px_120px_rgba(5,9,10,0.34)] sm:p-10 lg:p-12">
            <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-200">Confiança</p>
                <h2 className="mt-5 text-[2.35rem] font-semibold tracking-[-0.04em] sm:text-[3rem] lg:leading-[0.98]">
                  Uma presença comercial pensada para compradores técnicos e responsáveis de produção.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-8 text-white/76">
                  Sem recorrer a números artificiais, a autoridade vem da clareza do catálogo, da leitura por aplicação e da simplicidade com que o contacto comercial é enquadrado.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {trustPillars.map((item) => (
                  <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/74">{item.description}</p>
                  </article>
                ))}
                <article className="rounded-[1.75rem] border border-sand-300/18 bg-sand-300/10 p-6 md:col-span-2">
                  <h3 className="text-lg font-semibold text-white">Apoio comercial direto</h3>
                  <p className="mt-3 text-sm leading-7 text-white/82">
                    A navegação e os blocos de produto foram desenhados para facilitar leitura, enquadramento técnico e pedido de orçamento com o mínimo de fricção.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-24 sm:pt-28">
          <QuoteCta
            title="Tem uma necessidade específica de polimento ou acabamento?"
            description="A Abrasivos NT está estruturada para responder com clareza comercial e enquadramento técnico, ajudando a encaminhar o pedido para a linha mais adequada."
            buttonLabel={cta.primaryQuote}
          />
        </section>

      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
