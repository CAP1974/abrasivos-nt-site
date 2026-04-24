import { TechnicalSpec } from "@/content/site";

export function TechnicalSpecs({ title = "Especificações técnicas", specs, compact = false }: { title?: string; specs: TechnicalSpec[]; compact?: boolean }) {
  return (
    <section className={compact ? "rounded-[1.8rem] border border-[#ddd1bd] bg-[#fbf7f0] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]" : "panel-strong border-[color:var(--border-strong)] p-6 sm:p-8"}>
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-steel-900">{title}</h3>
      <div className="mt-4 divide-y divide-steel-200/70">
        {specs.map((spec) => (
          <div key={spec.label} className="grid gap-2 py-3.5 sm:grid-cols-[0.88fr_1.12fr] sm:gap-4">
            <p className="text-sm font-semibold text-steel-900">{spec.label}</p>
            <p className="text-sm leading-7 text-steel-700">{spec.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
