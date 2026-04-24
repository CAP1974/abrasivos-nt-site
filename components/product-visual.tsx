/* eslint-disable @next/next/no-img-element */
export function ProductVisual({ src, alt, label, variant = "primary", className = "" }: { src?: string; alt: string; label: string; variant?: "primary" | "sheet"; className?: string }) {
  const hasImage = Boolean(src);
  const frameClass =
    variant === "primary"
      ? "rounded-[1.8rem] border border-[#e2d6c4] bg-[linear-gradient(180deg,#fffdf8_0%,#f3ebdf_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
      : "rounded-[1.65rem] border border-white/10 bg-white/[0.05] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]";

  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className={variant === "primary" ? "text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-700" : "text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-200"}>
          {label}
        </p>
      </div>

      <div className={variant === "primary" ? "flex min-h-[260px] items-center justify-center overflow-hidden rounded-[1.4rem] border border-[#eadfcc] bg-[radial-gradient(circle_at_top,#ffffff_0%,#f1e7d8_62%,#e8dcc7_100%)]" : "flex min-h-[220px] items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/20"}>
        {hasImage ? (
          <img src={src} alt={alt} className="block max-h-[340px] w-full object-contain p-5" loading="lazy" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
            <div className={variant === "primary" ? "h-16 w-16 rounded-[1.2rem] border border-[#dbcdb7] bg-white/70" : "h-14 w-14 rounded-[1rem] border border-white/10 bg-white/[0.05]"} />
            <p className={variant === "primary" ? "mt-4 max-w-[14rem] text-sm leading-7 text-steel-700" : "mt-4 max-w-[14rem] text-sm leading-7 text-white/68"}>
              Estrutura pronta para receber a imagem final do produto ou a ficha técnica visual.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
