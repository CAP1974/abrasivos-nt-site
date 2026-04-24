/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { WhatsAppBusinessIcon } from "@/components/whatsapp-business-icon";
import { company, contact, footerContent, navigation } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-white/10 bg-[#071012] text-white">
      <div className="container-shell py-14 sm:py-18 lg:py-24">
        <div className="surface-dark rounded-[2.45rem] border border-white/10 p-8 shadow-[0_34px_120px_rgba(5,9,10,0.34)] sm:p-10 lg:p-12 xl:p-14">
          <div className="grid gap-10 xl:grid-cols-[1fr_0.56fr_1.12fr] xl:items-start xl:gap-12">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-[5.4rem] items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/[0.05] px-2 sm:h-16 sm:w-[6rem]">
                  <img src="/abrasivos-nt-logo.png" alt={`${company.brandName} logótipo`} className="h-9 w-auto sm:h-10" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.34em] text-sand-200">{company.brandName}</p>
                  <p className="mt-1 text-[11px] font-medium text-white/68 sm:text-xs">{company.legalName}</p>
                </div>
              </div>
              <p className="mt-6 max-w-xl text-[0.99rem] leading-8 text-white/82">{footerContent.summary}</p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-200">Navegação</p>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-white/82">
                <Link href="/" className="transition hover:text-white">Home</Link>
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-200">Contacto comercial</p>
              <div className="mt-5 grid gap-5 text-sm leading-7 text-white/82">
                <p className="max-w-[32rem] text-[0.96rem] leading-8 text-white/78">{footerContent.contactNote}</p>

                <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-7 sm:py-7">
                  <div className="grid gap-4">
                    <a
                      href={`mailto:${contact.email}`}
                      className="break-all text-[0.98rem] font-semibold leading-7 text-white transition hover:text-white"
                    >
                      {contact.email}
                    </a>

                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1f9f61] shadow-[0_10px_20px_rgba(31,159,97,0.18)]">
                        <WhatsAppBusinessIcon className="h-4.5 w-4.5 shrink-0" />
                      </span>
                      <div>
                        <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-white/54">WhatsApp Business</p>
                        <p className="mt-1 text-[1.08rem] font-semibold leading-6 text-white">{contact.whatsapp}</p>
                      </div>
                    </div>

                    <div className="border-t border-white/8 pt-4">
                      <p className="text-[0.94rem] font-medium leading-7 text-white/90">{contact.locationLabel} - {contact.locationValue}</p>
                    </div>
                  </div>
                </div>

                <p className="max-w-[30rem] text-[0.93rem] leading-7 text-white/72">{contact.responseWindow}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
