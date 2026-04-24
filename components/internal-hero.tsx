import Link from "next/link";

type InternalHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  aside?: { title: string; points: string[] };
};

export function InternalHero({ eyebrow, title, description, primaryCta, secondaryCta, aside }: InternalHeroProps) {
  return (
    <section className="container-shell pt-8 sm:pt-10 lg:pt-12">
      <div className="surface-dark grid-accent overflow-hidden rounded-[2.35rem] border border-white/10 p-7 text-white shadow-[0_34px_120px_rgba(5,9,10,0.34)] sm:p-10 lg:p-14 xl:p-16">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="max-w-5xl">
            <span className="section-kicker border-sand-300/30 bg-sand-300/10 text-sand-200">
              {eyebrow}
            </span>
            <h1 className="mt-6 max-w-5xl text-[2.9rem] font-semibold tracking-[-0.045em] sm:text-[3.6rem] lg:text-[4.8rem] lg:leading-[0.94]">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-[1.05rem] leading-8 text-white/78 sm:text-[1.08rem]">
              {description}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex min-w-[220px] justify-center rounded-full bg-sand-400 px-7 py-4 text-sm font-semibold text-steel-950 shadow-[0_18px_40px_rgba(201,154,81,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-sand-300"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex min-w-[220px] justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition duration-200 hover:bg-white/[0.08]"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8 lg:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-200">
              {aside?.title ?? "Foco"}
            </p>
            <div className="mt-5 grid gap-3">
              {(aside?.points ?? []).map((point, index) => (
                <div
                  key={point}
                  className={index === 0 ? "rounded-[1.45rem] border border-sand-300/20 bg-sand-300/10 px-4 py-4 text-sm leading-6 text-white/90" : "rounded-[1.45rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-6 text-white/78"}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
