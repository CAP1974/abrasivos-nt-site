import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { QuoteCta } from "@/components/quote-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppBusinessIcon } from "@/components/whatsapp-business-icon";
import { WhatsAppButton } from "@/components/whatsapp-button";

const heroItems = [
  "Linha de produto",
  "Material trabalhado",
  "Aplicação principal",
  "Máquina ou processo",
  "Necessidade técnica específica"
];

const directContactLines = [
  <a key="email" href="mailto:geral.carlospinto@outlook.com" className="text-[15px] font-medium leading-7 text-white transition hover:text-white">
    geral.carlospinto@outlook.com
  </a>,
  <div key="whatsapp" className="inline-flex items-center gap-2.5 text-[17px] font-semibold leading-7 text-white">
    <WhatsAppBusinessIcon className="h-4 w-4 shrink-0" />
    <span>+351 963537100</span>
  </div>,
  <span key="location" className="text-[15px] font-medium leading-7 text-white/92">
    Salir de Matos - Portugal
  </span>
];

export default function OrcamentoPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-14 sm:pb-16">
        <section className="container-shell pt-7 sm:pt-8 lg:pt-10">
          <div className="mx-auto max-w-[1360px] overflow-hidden rounded-[2.3rem] border border-[#d2c2ad] bg-[radial-gradient(circle_at_top_left,rgba(201,154,81,0.14),transparent_30%),radial-gradient(circle_at_88%_14%,rgba(16,32,34,0.08),transparent_24%),linear-gradient(180deg,#fbf6ee_0%,#f0e5d7_50%,#e9ddcb_100%)] px-6 py-5 shadow-[0_34px_120px_rgba(16,32,34,0.12)] sm:px-8 sm:py-6 lg:px-10 lg:py-6 xl:grid xl:grid-cols-[0.96fr_1.04fr] xl:gap-10 xl:px-12 xl:py-7">
            <div className="max-w-[620px] self-center">
              <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.24em] text-sand-800">CONTACTO / ORÇAMENTO</p>
              <h1 className="mt-3 max-w-[12.2ch] text-[1.95rem] font-semibold tracking-[-0.06em] text-[#1a2527] sm:text-[2.25rem] sm:leading-[1] lg:text-[2.5rem] lg:leading-[0.97] xl:text-[2.7rem]">
                Pedido comercial com enquadramento técnico e resposta qualificada.
              </h1>
              <p className="mt-4 max-w-[560px] text-[15px] font-medium leading-7 text-[#334345] sm:text-[16px] sm:leading-[1.75] lg:text-[16.5px]">
                A página foi pensada para recolher a informação essencial desde o primeiro envio e acelerar a resposta comercial com maior precisão.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/produtos"
                  className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-full bg-[#142325] px-7 py-4 text-sm font-semibold text-[#faf3e7] shadow-[0_18px_40px_rgba(16,32,34,0.26)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0d181a]"
                >
                  Ver linhas de produto
                </Link>
                <Link
                  href="/empresa"
                  className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-full border border-[#b39e81] bg-white/28 px-7 py-4 text-sm font-semibold text-[#223133] shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/44"
                >
                  Conhecer a empresa
                </Link>
              </div>
            </div>

            <div className="mt-7 xl:mt-0 xl:self-stretch">
              <div className="h-full rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(201,154,81,0.1),transparent_24%),linear-gradient(155deg,rgba(7,16,18,0.98)_0%,rgba(13,23,24,0.97)_34%,rgba(20,35,37,0.96)_100%)] px-5 py-5 text-white shadow-[0_28px_72px_rgba(5,9,10,0.24),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-10px_24px_rgba(0,0,0,0.07)] sm:px-6 sm:py-6 lg:px-7 lg:py-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sand-100/86">Base estratégica</p>
                <h2 className="mt-3.5 max-w-[15.5ch] text-[1.34rem] font-semibold tracking-[-0.04em] text-white sm:text-[1.45rem] lg:text-[1.56rem] lg:leading-[1.02]">
                  Estrutura pensada para recolher contexto útil e acelerar a resposta comercial.
                </h2>
                <div className="mt-5 grid gap-2.5">
                  {heroItems.map((item) => (
                    <div
                      key={item}
                      className="group flex min-h-[50px] items-center gap-2.5 rounded-[1.05rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.022)_100%)] px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.045)] transition duration-300 ease-out hover:border-sand-300/18 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.055)_0%,rgba(255,255,255,0.03)_100%)] hover:shadow-[0_8px_18px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.05)]"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-sand-400 shadow-[0_0_0_3px_rgba(201,154,81,0.12),0_0_10px_rgba(201,154,81,0.12)] transition duration-300 group-hover:shadow-[0_0_0_3px_rgba(201,154,81,0.14),0_0_12px_rgba(201,154,81,0.14)]" />
                      <p className="text-[13px] font-medium leading-5.5 text-white/93 sm:text-[13.5px]">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4.5 rounded-[1.28rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.055)_0%,rgba(255,255,255,0.03)_100%)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.045)] sm:px-5 sm:py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-100/92">Leitura comercial</p>
                  <p className="mt-2.5 text-[13px] leading-6 text-white/84 sm:text-[13.5px]">
                    A entrada comercial foi desenhada para ser clara, rápida e orientada por aplicação, material, máquina e necessidade técnica específica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-14 sm:pt-16 lg:pt-18 xl:pt-20">
          <ContactForm
            eyebrow="Orçamento"
            title="Peça informação comercial ou técnica."
            description="Para acelerar a resposta, partilhe a linha de produto, o material, a aplicação e a compatibilidade de máquina relevante. Esta abordagem permite uma triagem comercial mais clara e um enquadramento técnico mais útil desde o primeiro contacto."
            introPanel={{
              title: "O que ajuda no pedido",
              items: [
                "Linha de produto ou referência",
                "Material trabalhado",
                "Aplicação principal",
                "Máquina, processo ou compatibilidade relevante"
              ]
            }}
            directPanel={{
              title: "Contacto direto",
              lines: directContactLines
            }}
            responsePanel={{
              title: "Resposta comercial",
              content: "Pedidos comerciais com maior contexto recebem resposta mais útil, mais rápida e melhor orientada."
            }}
            submitLabel="Enviar pedido"
            simpleFields
          />
        </section>

        <section className="container-shell pt-16 sm:pt-18 lg:pt-22 xl:pt-24">
          <QuoteCta
            eyebrow="Contacto comercial"
            title="Ainda não sabe qual é a linha mais adequada?"
            description="O pedido pode começar pela aplicação, pelo material ou pela máquina. A página foi desenhada para apoiar esse processo com clareza técnica e resposta comercial objetiva."
          />
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
