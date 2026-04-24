"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ProductLine } from "@/content/site";

function getApplicationLine(product: ProductLine) {
  if (product.name === "Frankfurt Plus") return "Polimento técnico para mármore e superfícies minerais.";
  if (product.name === "Mó 125 mm") return "Acabamento, topos e operações de detalhe com diferentes acoplamentos.";
  return "Polimento industrial para granito, quartzo e materiais de maior dureza.";
}

export function ProductSummarySlider({ products }: { products: ProductLine[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const resumeRef = useRef<number | null>(null);
  const hoverRef = useRef(false);
  const interactionRef = useRef(false);
  const initializedRef = useRef(false);
  const setWidthRef = useRef(0);
  const startAutoplayRef = useRef<() => void>(() => {});
  const tripledProducts = [...products, ...products, ...products];

  function clearAutoplay() {
    if (autoplayRef.current !== null) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }

  function clearResumeTimer() {
    if (resumeRef.current !== null) {
      window.clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
  }

  function measureTrack() {
    const track = trackRef.current;
    if (!track) return false;
    const setWidth = track.scrollWidth / 3;
    if (!setWidth || track.scrollWidth <= track.clientWidth) return false;
    setWidthRef.current = setWidth;
    return true;
  }

  function ensureMiddlePosition(force = false) {
    const track = trackRef.current;
    const setWidth = setWidthRef.current;
    if (!track || !setWidth) return;

    if (force || !initializedRef.current) {
      track.scrollLeft = setWidth;
      initializedRef.current = true;
      return;
    }

    if (track.scrollLeft >= setWidth * 2) {
      track.scrollLeft -= setWidth;
    } else if (track.scrollLeft <= setWidth * 0.35) {
      track.scrollLeft += setWidth;
    }
  }

  function getStepWidth() {
    const track = trackRef.current;
    if (!track) return 0;
    const firstCard = track.querySelector("article") as HTMLElement | null;
    if (!firstCard) return track.clientWidth * 0.72;
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "20") || 20;
    return firstCard.offsetWidth + gap;
  }

  function startAutoplay() {
    if (autoplayRef.current !== null || hoverRef.current || interactionRef.current || products.length <= 1) return;
    if (!measureTrack()) return;
    ensureMiddlePosition();

    autoplayRef.current = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || hoverRef.current || interactionRef.current) return;
      const step = getStepWidth() * 0.92;
      track.scrollBy({ left: step, behavior: "smooth" });
      window.setTimeout(() => {
        ensureMiddlePosition();
      }, 520);
    }, 2600);
  }

  startAutoplayRef.current = startAutoplay;

  function scheduleResume(delay = 2400) {
    clearResumeTimer();
    resumeRef.current = window.setTimeout(() => {
      interactionRef.current = false;
      startAutoplayRef.current();
    }, delay);
  }

  function markInteraction(delay = 2800) {
    interactionRef.current = true;
    clearAutoplay();
    scheduleResume(delay);
  }

  function scrollByAmount(direction: "prev" | "next") {
    const track = trackRef.current;
    if (!track) return;
    markInteraction(3200);
    const amount = getStepWidth();
    track.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
    window.setTimeout(() => {
      ensureMiddlePosition();
    }, 520);
  }

  useEffect(() => {
    initializedRef.current = false;
    setWidthRef.current = 0;

    const setup = () => {
      if (!measureTrack()) return;
      ensureMiddlePosition(true);
      startAutoplayRef.current();
    };

    const initialTimer = window.setTimeout(setup, 150);
    const delayedTimer = window.setTimeout(setup, 1000);
    const resizeObserver = new ResizeObserver(() => {
      if (!measureTrack()) return;
      if (!initializedRef.current) {
        ensureMiddlePosition(true);
      }
      if (!hoverRef.current && !interactionRef.current) {
        clearAutoplay();
        startAutoplayRef.current();
      }
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    return () => {
      window.clearTimeout(initialTimer);
      window.clearTimeout(delayedTimer);
      resizeObserver.disconnect();
      clearAutoplay();
      clearResumeTimer();
    };
  }, [products.length]);

  return (
    <section className="container-shell pt-18 sm:pt-20">
      <div className="grid gap-5 lg:grid-cols-[0.88fr_0.12fr] lg:items-end">
        <div>
          <span className="section-kicker border-sand-300/70 bg-white/70 text-sand-800">Linhas de produto</span>
          <h2 className="mt-4 max-w-[18ch] text-[2.05rem] font-semibold tracking-[-0.045em] text-steel-950 sm:text-[2.45rem] lg:leading-[0.98]">
            Navegação pelos principais produtos.
          </h2>
        </div>
        <div className="hidden items-center justify-end gap-3 lg:flex">
          <button
            type="button"
            onClick={() => scrollByAmount("prev")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#cfbea5] bg-white text-steel-950 shadow-[0_12px_24px_rgba(15,22,23,0.08),inset_0_1px_0_rgba(255,255,255,0.92)] transition duration-200 hover:-translate-y-0.5 hover:border-sand-400"
            aria-label="Ver produto anterior"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount("next")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#cfbea5] bg-white text-steel-950 shadow-[0_12px_24px_rgba(15,22,23,0.08),inset_0_1px_0_rgba(255,255,255,0.92)] transition duration-200 hover:-translate-y-0.5 hover:border-sand-400"
            aria-label="Ver produto seguinte"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="product-slider mt-8 flex gap-5 overflow-x-auto pb-2"
        onMouseEnter={() => {
          hoverRef.current = true;
          clearAutoplay();
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
          scheduleResume(700);
        }}
        onPointerDown={() => markInteraction(3000)}
        onTouchStart={() => markInteraction(3000)}
        onScroll={() => {
          ensureMiddlePosition();
        }}
      >
        {tripledProducts.map((product, index) => (
          <article
            key={`${product.slug}-${index}`}
            className="panel-strong min-w-[88%] overflow-hidden border-[color:var(--border-strong)] md:min-w-[48%] xl:min-w-[39%] 2xl:min-w-[35%]"
          >
            <div className="p-5 sm:p-6">
              <div className="overflow-hidden rounded-[1.7rem] border border-[#ddcfbb] bg-[linear-gradient(180deg,#fffdfa_0%,#f3eadf_100%)] p-4 shadow-[0_16px_34px_rgba(16,32,34,0.07),inset_0_1px_0_rgba(255,255,255,0.94)]">
                <div className="flex min-h-[238px] items-center justify-center rounded-[1.3rem] border border-[#eadfcc] bg-[radial-gradient(circle_at_top,#ffffff_0%,#f3e9dc_58%,#e7dac4_100%)]">
                  <img src={product.image} alt={`Imagem principal do produto ${product.name}`} className="block max-h-[252px] w-full object-contain p-5" loading="lazy" />
                </div>
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-700">Linha de produto</p>
                <h3 className="mt-3 text-[1.9rem] font-semibold tracking-[-0.045em] text-steel-950">{product.name}</h3>
                <p className="mt-3 max-w-[30rem] text-[0.98rem] leading-8 text-steel-900/82">{getApplicationLine(product)}</p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="rounded-full border border-[#d9cbb7] bg-[#f8f0e4] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sand-800">
                  Catálogo técnico
                </div>
                <Link
                  href={`#${product.slug}`}
                  className="inline-flex justify-center rounded-full border border-steel-200 bg-white px-5 py-3 text-sm font-semibold text-steel-950 shadow-[0_14px_28px_rgba(16,32,34,0.08),inset_0_1px_0_rgba(255,255,255,0.92)] transition duration-200 hover:-translate-y-0.5 hover:border-sand-400"
                  onClick={() => markInteraction(2200)}
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
