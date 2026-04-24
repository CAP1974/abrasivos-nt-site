export function ContentSection({ title, description, children, dark = false }: { title: string; description: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section className="container-shell pt-24 sm:pt-28">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <div>
          <span className={dark ? "section-kicker border-white/15 bg-white/[0.04] text-sand-200" : "section-kicker border-sand-300/70 bg-white/70 text-sand-700"}>
            Secção principal
          </span>
          <h2 className={dark ? "mt-5 text-[2.5rem] font-semibold tracking-[-0.04em] text-white sm:text-[3rem] lg:text-[3.4rem] lg:leading-[0.98]" : "section-title mt-5"}>{title}</h2>
        </div>
        <p className={dark ? "max-w-3xl text-base leading-8 text-white/72 lg:justify-self-end" : "section-copy lg:justify-self-end"}>{description}</p>
      </div>
      <div className="mt-12 lg:mt-14">{children}</div>
    </section>
  );
}
