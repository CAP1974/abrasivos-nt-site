import Link from "next/link";
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sand-100/86">Base estratégica do orçamento</p>
                <div className="mt-4 grid gap-2.5">
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
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-14 sm:pt-16 lg:pt-18 xl:pt-20">
          <div className="mx-auto max-w-[1360px] grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:gap-8">
            <div className="surface-dark rounded-[2.15rem] border border-white/10 p-8 text-white shadow-[0_34px_110px_rgba(5,9,10,0.34)] sm:p-10 lg:p-12">
              <span className="section-kicker border-sand-300/30 bg-sand-300/10 text-sand-200">Orçamento</span>
              <h2 className="mt-5 max-w-[13ch] text-[2.1rem] font-semibold tracking-[-0.045em] text-white sm:text-[2.55rem] lg:leading-[0.98]">
                Peça informação comercial ou técnica.
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-white/82">
                Para acelerar a resposta, partilhe a linha de produto, o material, a aplicação e a compatibilidade de máquina relevante. Esta abordagem permite uma triagem comercial mais clara e um enquadramento técnico mais útil desde o primeiro contacto.
              </p>

              <div className="mt-8 grid gap-4 text-sm text-white/78">
                <div className="rounded-[1.55rem] border border-white/12 bg-white/[0.06] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-sand-200">O que ajuda no pedido</p>
                  <ul className="mt-3 grid gap-2.5 leading-7 text-white/84">
                    <li className="rounded-[1rem] border border-white/10 bg-black/10 px-4 py-3">Linha de produto ou referência</li>
                    <li className="rounded-[1rem] border border-white/10 bg-black/10 px-4 py-3">Material trabalhado</li>
                    <li className="rounded-[1rem] border border-white/10 bg-black/10 px-4 py-3">Aplicação principal</li>
                    <li className="rounded-[1rem] border border-white/10 bg-black/10 px-4 py-3">Máquina, processo ou compatibilidade relevante</li>
                  </ul>
                </div>

                <div className="rounded-[1.55rem] border border-white/12 bg-white/[0.06] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-sand-200">Resposta comercial</p>
                  <p className="mt-3 leading-7 text-white/84">
                    Pedidos comerciais com maior contexto recebem resposta mais útil, mais rápida e melhor orientada.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel-strong border-[color:var(--border-strong)] p-8 shadow-[0_20px_52px_rgba(16,32,34,0.07)] sm:p-10 lg:p-12">
              <div className="max-w-[760px]">
                <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-sand-700">Contacto direto</p>
                <h2 className="mt-4 max-w-[16ch] text-[2rem] font-semibold tracking-[-0.05em] text-steel-950 sm:text-[2.35rem] lg:text-[2.55rem] lg:leading-[0.98]">
                  Fale connosco por email, telefone ou WhatsApp.
                </h2>
                <p className="mt-4 max-w-[620px] text-[16px] leading-8 text-steel-900/88 sm:text-[17px]">
                  Pode enviar o seu pedido por email ou iniciar conversa imediata por WhatsApp com enquadramento comercial e técnico.
                </p>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
                <div className="rounded-[1.65rem] border border-[color:var(--border-strong)] bg-[linear-gradient(180deg,#fffdfa_0%,#f3eadf_100%)] px-6 py-6 shadow-[0_8px_26px_rgba(16,32,34,0.05),inset_0_1px_0_rgba(255,255,255,0.85)]">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-sand-700">Contacto comercial</p>
                  <div className="mt-4 grid gap-4">
                    <a
                      href="mailto:geral.carlospinto@outlook.com"
                      className="rounded-[1.1rem] border border-[#e5d8c5] bg-white px-4 py-4 text-[15px] font-semibold leading-7 text-steel-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition duration-200 hover:border-sand-400"
                    >
                      geral.carlospinto@outlook.com
                    </a>
                    <div className="rounded-[1.1rem] border border-[#e5d8c5] bg-white px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                      <div className="inline-flex items-center gap-2.5 text-[17px] font-semibold leading-7 text-steel-950">
                        <WhatsAppBusinessIcon className="h-4 w-4 shrink-0" />
                        <span>+351 963537100</span>
                      </div>
                      <p className="mt-2 text-[15px] leading-7 text-steel-900/82">Salir de Matos - Portugal</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.65rem] border border-[color:var(--border-strong)] bg-white px-6 py-6 shadow-[0_8px_26px_rgba(16,32,34,0.05),inset_0_1px_0_rgba(255,255,255,0.85)]">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-sand-700">Forma recomendada de contacto</p>
                  <div className="mt-4 space-y-5">
                    <div className="rounded-[1.15rem] border border-[#e7dcc8] bg-[#fbf7ef] px-4 py-4">
                      <p className="text-[15px] font-semibold leading-7 text-steel-950">Por email</p>
                      <p className="mt-2 text-[15px] leading-7 text-steel-900/82">
                        Envie a linha de produto, o material, a aplicação e a máquina para uma leitura comercial mais precisa.
                      </p>
                    </div>
                    <div className="rounded-[1.15rem] border border-[#e7dcc8] bg-[#fbf7ef] px-4 py-4">
                      <p className="text-[15px] font-semibold leading-7 text-steel-950">Por WhatsApp</p>
                      <p className="mt-2 text-[15px] leading-7 text-steel-900/82">
                        Ideal para um primeiro contacto rápido, confirmação de compatibilidade ou orientação inicial sobre a linha mais adequada.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="mailto:geral.carlospinto@outlook.com"
                      className="inline-flex min-h-[54px] min-w-[230px] items-center justify-center rounded-full bg-[#142325] px-7 py-4 text-sm font-semibold text-[#faf3e7] shadow-[0_18px_40px_rgba(16,32,34,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0d181a]"
                    >
                      Enviar email
                    </a>
                    <a
                      href="https://wa.me/351963537100?text=Ol%C3%A1%2C%20obrigado%20pelo%20seu%20contacto.%20Estamos%20dispon%C3%ADveis%20para%20ajudar%20com%20a%20informa%C3%A7%C3%A3o%20comercial%20ou%20t%C3%A9cnica%20de%20que%20necessita."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[54px] min-w-[230px] items-center justify-center rounded-full border border-[#cfbea5] bg-[#f8f0e4] px-7 py-4 text-sm font-semibold text-[#223133] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition duration-200 hover:-translate-y-0.5 hover:border-sand-400 hover:bg-[#f7f1e7]"
                    >
                      Abrir WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
