import Link from "next/link";

type QuoteCtaProps = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function QuoteCta({
  eyebrow = "Contacto comercial",
  title,
  description,
  buttonLabel,
  buttonHref = "/orcamento"
}: QuoteCtaProps) {
  return (
    <section className="surface-dark overflow-hidden rounded-[2.3rem] border border-white/10 p-8 text-white shadow-[0_34px_120px_rgba(5,9,10,0.34)] sm:p-10 lg:p-12 xl:p-14">
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-200">{eyebrow}</p>
          <h3 className="mt-4 max-w-4xl text-[2.25rem] font-semibold tracking-[-0.045em] text-white sm:text-[2.85rem] lg:leading-[1]">{title}</h3>
          <p className="mt-5 max-w-3xl text-[1.02rem] leading-8 text-white/84">{description}</p>
        </div>
        <div className="flex items-start xl:items-end xl:justify-end">
          {buttonLabel ? (
            <Link href={buttonHref} className="inline-flex min-w-[250px] justify-center rounded-full bg-sand-400 px-7 py-4 text-sm font-semibold text-steel-950 shadow-[0_18px_40px_rgba(201,154,81,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-sand-300">
              {buttonLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
