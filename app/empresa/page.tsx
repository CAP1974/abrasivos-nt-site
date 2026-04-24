import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { company } from "@/content/site";

type Item = {
  title: string;
  text: string;
};

const heroHighlights = [
  "Processo produtivo próprio",
  "Mais de 26 anos de experiência",
  "Expansão industrial"
];

const strategicHighlights = [
  "Processo produtivo próprio",
  "Mais de 26 anos de experiência",
  "Flexibilidade de formulação",
  "Fase de expansão internacional"
];

const processPoints = [
  "Alta capacidade produtiva e custos controlados",
  "Grande flexibilidade operacional e maior autonomia industrial",
  "Adaptação rápida a diferentes necessidades do mercado"
];

const valueCards: Item[] = [
  {
    title: "Experiência acumulada",
    text: "Mais de 26 anos de percurso profissional e conhecimento aprofundado do setor dos abrasivos."
  },
  {
    title: "Processo próprio",
    text: "Sistema de produção desenvolvido internamente para eficiência, flexibilidade e escalabilidade."
  },
  {
    title: "Capacidade de adaptação",
    text: "Formulações ajustáveis ao cliente, ao tipo de pedra e ao contexto técnico de aplicação."
  },
  {
    title: "Fase de expansão",
    text: "Base produtiva consolidada e foco atual no crescimento da capacidade industrial e da presença internacional."
  }
];

const expansionPoints = [
  "Expansão da capacidade da fábrica",
  "Crescimento comercial estruturado",
  "Entrada em novos mercados",
  "Reforço da presença internacional",
  "Valorização contínua da marca"
];

const principles: Item[] = [
  {
    title: "Especialização",
    text: "Desenvolvemos soluções orientadas para contextos reais de aplicação."
  },
  {
    title: "Consistência",
    text: "Valorizamos estabilidade de produção e confiança no desempenho."
  },
  {
    title: "Eficiência",
    text: "Acreditamos numa indústria mais inteligente, com maior controlo e competitividade."
  },
  {
    title: "Flexibilidade",
    text: "Adaptamos formulações e resposta técnica às necessidades reais do mercado."
  },
  {
    title: "Crescimento sustentável",
    text: "Trabalhamos para crescer com base sólida, visão estratégica e estrutura preparada para o futuro."
  }
];

function SectionIntro({
  eyebrow,
  title,
  description,
  className = ""
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-[760px] ${className}`.trim()}>
      {eyebrow ? (
        <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-sand-700">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.054em] text-steel-950 sm:text-[2.2rem] lg:text-[2.42rem] lg:leading-[0.98] xl:text-[2.54rem]">
        {title}
      </h2>
      {description ? <p className="mt-4 text-[16px] leading-8 text-steel-900/90 sm:text-[17px]">{description}</p> : null}
    </div>
  );
}

export default function EmpresaPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-16 sm:pb-20">
        <section className="container-shell pt-6 sm:pt-8 lg:pt-10">
          <div className="mx-auto max-w-[1360px] overflow-hidden rounded-[2.3rem] border border-[#d2c2ad] bg-[radial-gradient(circle_at_top_left,rgba(201,154,81,0.14),transparent_30%),radial-gradient(circle_at_88%_14%,rgba(16,32,34,0.08),transparent_24%),linear-gradient(180deg,#fbf6ee_0%,#f0e5d7_50%,#e9ddcb_100%)] px-6 py-5 shadow-[0_34px_120px_rgba(16,32,34,0.12)] sm:px-8 sm:py-6 lg:px-10 lg:py-6 xl:grid xl:grid-cols-[0.96fr_1.04fr] xl:gap-10 xl:px-12 xl:py-7">
            <div className="max-w-[660px] self-center">
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
              <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.24em] text-sand-800">Empresa</p>
              <h1 className="mt-3 max-w-[12.15ch] text-[2.05rem] font-semibold tracking-[-0.062em] text-[#1a2527] sm:text-[2.45rem] sm:leading-[0.99] lg:text-[2.72rem] lg:leading-[0.965] xl:text-[2.95rem]">
                Experiência real do setor, processo produtivo próprio e visão industrial para crescer com consistência.
              </h1>
              <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-7 text-[#334345] sm:text-[17px] sm:leading-[1.8]">
                A Abrasivos NT, marca da {company.legalName}, desenvolve e produz abrasivos técnicos para o setor da pedra com foco em qualidade competitiva, flexibilidade de formulação, eficiência produtiva e apoio comercial direto.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/produtos"
                  className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-full bg-[#142325] px-7 py-4 text-sm font-semibold text-[#faf3e7] shadow-[0_18px_40px_rgba(16,32,34,0.26)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0d181a]"
                >
                  Conhecer os produtos
                </Link>
                <Link
                  href="/orcamento"
                  className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-full border border-[#b39e81] bg-white/28 px-7 py-4 text-sm font-semibold text-[#223133] shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/44"
                >
                  Pedir orçamento
                </Link>
              </div>
            </div>

            <div className="mt-7 xl:mt-0 xl:self-stretch">
              <div className="h-full rounded-[2rem] border border-white/8 surface-dark px-6 py-6 text-white shadow-[0_26px_72px_rgba(5,9,10,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-8 sm:py-7 lg:px-9 lg:py-8">
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-sand-100">Base estratégica</p>
                <h2 className="mt-4 max-w-[17ch] text-[1.62rem] font-semibold tracking-[-0.045em] text-white sm:text-[1.82rem] lg:text-[1.95rem] lg:leading-[1.02]">
                  Estrutura construída para eficiência, adaptação e crescimento.
                </h2>
                <div className="mt-6 grid gap-3.5">
                  {strategicHighlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.05] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-sand-400 shadow-[0_0_0_4px_rgba(201,154,81,0.15)]" />
                      <p className="text-[15px] font-medium leading-6 text-white/92">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-5 py-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-sand-100">Leitura institucional</p>
                  <p className="mt-3 text-[15px] leading-7 text-white/84">
                    A operação industrial foi desenhada para combinar capacidade, controlo e autonomia produtiva com visão de longo prazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-9 sm:pt-10 lg:pt-11 xl:pt-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid max-w-[1068px] gap-4 lg:grid-cols-[minmax(0,820px)_248px] lg:items-start xl:gap-5">
              <div className="min-w-0 pl-0">
                <SectionIntro
                  eyebrow="Quem somos"
                  title="Conhecimento do mercado, experiência acumulada e visão construída no terreno"
                  description="A Abrasivos NT resulta de um percurso sólido no setor dos abrasivos, construído sobre experiência prática, leitura técnica do mercado e contacto direto com diferentes realidades de aplicação. Ao longo de mais de duas décadas, foi consolidada uma visão clara sobre o que cria valor neste setor: consistência, adaptação, capacidade produtiva e resposta comercial séria."
                  className="max-w-none pl-0"
                />
              </div>
              <aside className="w-full rounded-[1.55rem] border border-[#ddd0bd] bg-[#f8f1e5] px-4 py-3 shadow-[0_10px_24px_rgba(16,32,34,0.045),inset_0_1px_0_rgba(255,255,255,0.75)] lg:mt-0.5 lg:w-[248px] lg:justify-self-start">
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-sand-700">Experiência</p>
                <p className="mt-2 text-[2.05rem] font-semibold tracking-[-0.055em] text-steel-950">+26 anos</p>
                <div className="mt-2 grid gap-2 text-[13px] leading-5 text-steel-900/84">
                  <div className="rounded-[0.85rem] border border-[#e5d8c5] bg-white px-3.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">Percurso iniciado em 2000.</div>
                  <div className="rounded-[0.85rem] border border-[#e5d8c5] bg-white px-3.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">Atividade aprofundada no setor desde 2003.</div>
                  <div className="rounded-[0.85rem] border border-[#e5d8c5] bg-white px-3.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">Conhecimento consolidado sobre aplicação, mercado e realidade industrial.</div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="container-shell pt-7 sm:pt-8 lg:pt-9 xl:pt-10">
            <div className="mx-auto max-w-[1280px]">
              <div className="max-w-[780px]">
                <SectionIntro
                  eyebrow="Estrutura própria"
                  title="De uma longa experiência de mercado para uma estrutura própria de produção"
                  description="Depois de uma fase extensa de consolidação profissional em diferentes mercados, iniciou-se uma nova etapa com um objetivo claro: criar uma operação própria, com capacidade real para desenvolver processos, formulações e soluções de fabrico diferenciadas."
                />
                <p className="mt-3 text-[16px] leading-8 text-steel-900/88 sm:text-[17px]">
                  Em 2014 arrancou uma fase centrada no desenvolvimento integral dos processos de fabricação. Em 2019, o projeto regressou à Europa e, em dezembro desse ano, foi constituída a Abrasives NT Europe Lda.
                </p>
                <div className="mt-4 grid gap-2 sm:max-w-[760px] sm:grid-cols-2">
                  <div className="rounded-[0.9rem] border border-[#e5d8c5] bg-white px-3.5 py-2.5 text-[13px] font-medium leading-5 text-steel-950 shadow-[0_8px_18px_rgba(16,32,34,0.04),inset_0_1px_0_rgba(255,255,255,0.8)]">
                    2014: desenvolvimento integral de processos de fabricação.
                  </div>
                  <div className="rounded-[0.9rem] border border-[#e5d8c5] bg-white px-3.5 py-2.5 text-[13px] font-medium leading-5 text-steel-950 shadow-[0_8px_18px_rgba(16,32,34,0.04),inset_0_1px_0_rgba(255,255,255,0.8)]">
                    2019: regresso à Europa e constituição da Abrasives NT Europe Lda.
                  </div>
                </div>
              </div>
          </div>
        </section>

        <section className="container-shell pt-14 sm:pt-16 lg:pt-20 xl:pt-24">
          <div className="mx-auto max-w-[1360px] rounded-[2.15rem] border border-[#d8cab3] bg-[linear-gradient(180deg,#fbf6ed_0%,#f3eadf_100%)] px-6 py-8 shadow-[0_26px_78px_rgba(16,32,34,0.08)] sm:px-8 sm:py-10 lg:px-10 lg:py-11">
            <SectionIntro
              eyebrow="Processo produtivo"
              title="Processo produtivo exclusivo e diferenciação industrial real"
              description="Um dos principais fatores distintivos da Abrasivos NT é o desenvolvimento de um modo de fabricação próprio, criado para combinar eficiência, flexibilidade e capacidade de resposta."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
              <div className="max-w-[760px]">
                <p className="text-[16px] leading-8 text-steel-900/88 sm:text-[17px]">
                  Ao longo dos últimos anos, foi estruturado um modelo de produção orientado para alta capacidade, custos controlados, maior autonomia industrial e adaptação rápida a diferentes exigências do mercado.
                </p>
                <div className="mt-5 rounded-[1.75rem] border border-[#dfd1bc] bg-white px-6 py-6 shadow-[0_12px_32px_rgba(16,32,34,0.05)]">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-sand-700">Bloco de apoio</p>
                  <p className="mt-4 text-[16px] leading-8 text-steel-900/86 sm:text-[17px]">
                    Este processo permite produzir com maior controlo, maior consistência e melhor capacidade de adaptação.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {processPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.45rem] border border-[#dfd1bc] bg-white px-5 py-5 text-[15px] font-semibold leading-7 text-steel-950 shadow-[0_10px_24px_rgba(16,32,34,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-14 sm:pt-16 lg:pt-20 xl:pt-24">
          <div className="mx-auto grid max-w-[1280px] gap-5 md:grid-cols-2">
            {valueCards.map((card) => (
              <article
                key={card.title}
                className="panel-strong min-h-[192px] border-[color:var(--border-strong)] px-6 py-6 shadow-[0_14px_34px_rgba(16,32,34,0.05)] sm:px-7 sm:py-7 lg:px-8 lg:py-8"
              >
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-sand-700">Valor</p>
                <h3 className="mt-3 text-[1.52rem] font-semibold tracking-[-0.046em] text-steel-950 sm:text-[1.62rem]">
                  {card.title}
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-steel-900/84 sm:text-[16.5px]">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container-shell pt-14 sm:pt-16 lg:pt-20 xl:pt-24">
          <div className="mx-auto max-w-[1280px] rounded-[2rem] border border-[#ddd0bd] bg-[#f8f1e6] px-6 py-7 shadow-[0_18px_46px_rgba(16,32,34,0.06)] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <SectionIntro
              title="Flexibilidade técnica e forte relação preço/qualidade"
              description="A proposta de valor da Abrasivos NT assenta na combinação entre desempenho técnico, eficiência produtiva e capacidade de adaptação. Sempre que necessário, a empresa pode ajustar formulações ao tipo de cliente, ao tipo de pedra ou ao contexto de aplicação."
            />
            <p className="mt-5 max-w-[780px] text-[16px] leading-8 text-steel-900/88 sm:text-[17px]">
              Esta flexibilidade permite entregar uma solução com forte relação preço/qualidade, suportada por controlo de processo, experiência real do setor e foco no resultado final para o cliente.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.3rem] border border-[#ddcfbb] bg-white px-5 py-5 text-[15px] font-medium leading-7 text-steel-950 shadow-[0_10px_28px_rgba(16,32,34,0.04),inset_0_1px_0_rgba(255,255,255,0.85)]">Formulações ajustadas ao cliente e ao contexto técnico.</div>
              <div className="rounded-[1.3rem] border border-[#ddcfbb] bg-white px-5 py-5 text-[15px] font-medium leading-7 text-steel-950 shadow-[0_10px_28px_rgba(16,32,34,0.04),inset_0_1px_0_rgba(255,255,255,0.85)]">Controlo de processo orientado para consistência competitiva.</div>
              <div className="rounded-[1.3rem] border border-[#ddcfbb] bg-white px-5 py-5 text-[15px] font-medium leading-7 text-steel-950 shadow-[0_10px_28px_rgba(16,32,34,0.04),inset_0_1px_0_rgba(255,255,255,0.85)]">Forte relação preço/qualidade suportada por eficiência produtiva.</div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-14 sm:pt-16 lg:pt-20 xl:pt-24">
          <div className="mx-auto max-w-[1360px] rounded-[2.15rem] border border-white/12 surface-dark px-6 py-8 text-white shadow-[0_30px_104px_rgba(5,9,10,0.3)] sm:px-8 sm:py-10 lg:px-10 lg:py-11">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <SectionIntro
                eyebrow="Fase atual"
                title="Uma nova etapa centrada em crescimento estruturado"
                description="A Abrasivos NT encontra-se atualmente numa fase de expansão. Depois de vários anos dedicados ao desenvolvimento do processo produtivo e à consolidação técnica da operação, a empresa entra agora numa nova etapa focada em crescimento com base sólida."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {expansionPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.35rem] border border-white/12 bg-white/[0.07] px-5 py-5 text-[15px] font-semibold leading-7 text-white/94 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-14 sm:pt-16 lg:pt-20 xl:pt-24">
          <div className="mx-auto max-w-[1280px]">
            <SectionIntro title="O que orienta a nossa atuação" />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full rounded-[1.65rem] border border-[#dfd3c2] bg-white px-6 py-6 shadow-[0_12px_30px_rgba(16,32,34,0.045),inset_0_1px_0_rgba(255,255,255,0.9)]"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sand-500" />
                    <div className="flex h-full flex-col">
                      <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-sand-700">Princípio</p>
                      <h3 className="mt-3 text-[1.4rem] font-semibold tracking-[-0.04em] text-steel-950">{item.title}</h3>
                      <p className="mt-3 text-[16px] leading-8 text-steel-900/84">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell pt-14 sm:pt-16 lg:pt-20 xl:pt-24">
          <div className="mx-auto max-w-[1360px] rounded-[2.2rem] border border-[#d8cab3] bg-[linear-gradient(180deg,#fbf6ed_0%,#f1e8db_100%)] px-6 py-8 shadow-[0_26px_78px_rgba(16,32,34,0.08)] sm:px-8 sm:py-10 lg:px-10 lg:py-11">
            <SectionIntro
              eyebrow="Fecho institucional"
              title="Uma empresa industrial com identidade própria e ambição internacional."
              description="A Abrasivos NT combina experiência real, processo produtivo próprio e capacidade de adaptação para responder com consistência a mercados exigentes. O foco está em crescer com base sólida, visão industrial e proposta de valor competitiva."
            />
          </div>
        </section>

        <section className="container-shell pt-14 sm:pt-16 lg:pt-20 xl:pt-24">
          <div className="mx-auto max-w-[1360px] rounded-[2.25rem] border border-white/12 surface-dark px-6 py-8 text-white shadow-[0_34px_112px_rgba(5,9,10,0.32)] sm:px-8 sm:py-10 lg:px-10 lg:py-11">
            <div className="grid gap-8 lg:grid-cols-[0.94fr_0.56fr] lg:items-end">
              <div className="max-w-[760px]">
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-sand-100">Contacto institucional</p>
                <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-white sm:text-[2.35rem] lg:text-[2.7rem] lg:leading-[0.98]">
                  Procura um parceiro técnico e comercial com experiência, capacidade de adaptação e foco em qualidade competitiva?
                </h2>
                <p className="mt-4 max-w-[700px] text-[16px] leading-8 text-white/86 sm:text-[17px]">
                  Estamos preparados para responder com soluções técnicas, apoio comercial direto e uma estrutura pensada para crescer com consistência.
                </p>
              </div>
              <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col xl:flex-row xl:justify-end">
                <Link
                  href="/produtos"
                  className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-full bg-sand-400 px-7 py-4 text-sm font-semibold text-steel-950 shadow-[0_18px_40px_rgba(201,154,81,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-sand-300"
                >
                  Ver produtos
                </Link>
                <Link
                  href="/orcamento"
                  className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-full border border-white/18 bg-white/[0.06] px-7 py-4 text-sm font-semibold text-white transition duration-200 hover:bg-white/[0.12]"
                >
                  Pedir orçamento
                </Link>
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
