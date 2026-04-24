import Link from "next/link";
import { ProductLine } from "@/content/site";
import { ProductVisual } from "@/components/product-visual";

function getApplicationLine(product: ProductLine) {
  if (product.name === "Frankfurt Plus") return "Polimento técnico para mármore e superfícies minerais.";
  if (product.name === "Mó 125 mm") return "Acabamento, topos e operações de detalhe com diferentes acoplamentos.";
  return "Polimento industrial para granito, quartzo e materiais de maior dureza.";
}

function getHighlights(product: ProductLine) {
  return [
    product.materials.slice(0, 3).join(" • "),
    product.machines.slice(0, 3).join(" • "),
    product.hardness ? product.hardness.join(" • ") : product.sizes ? product.sizes.slice(0, 2).join(" • ") : product.gritOptions.slice(0, 4).join(" • ")
  ];
}

export function ProductShowcaseCard({ product }: { product: ProductLine }) {
  const highlights = getHighlights(product);

  return (
    <article className="panel-strong overflow-hidden border-[color:var(--border-strong)] p-0">
      <div className="grid gap-0 md:grid-cols-[0.28fr_0.72fr] xl:grid-cols-[0.24fr_0.76fr]">
        <div className="border-b border-[color:var(--border)] p-5 md:border-b-0 md:border-r md:p-6">
          <ProductVisual
            src={product.image}
            alt={`Imagem principal do produto ${product.name}`}
            label="Produto"
            className="h-full"
          />
        </div>

        <div className="p-6 sm:p-7 lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[40rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-700">Linha de produto</p>
              <h3 className="mt-3 text-[2rem] font-semibold leading-[1] tracking-[-0.045em] text-steel-950 sm:text-[2.25rem]">
                {product.name}
              </h3>
              <p className="mt-3 max-w-2xl text-[0.98rem] font-medium leading-7 text-steel-800">{getApplicationLine(product)}</p>
            </div>
            <Link
              href={`#${product.slug}`}
              className="inline-flex min-w-[180px] justify-center rounded-full border border-steel-200 bg-white px-5 py-3.5 text-sm font-semibold text-steel-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition duration-200 hover:-translate-y-0.5 hover:border-sand-400 hover:text-steel-950"
            >
              Ver detalhes
            </Link>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight} className="rounded-[1.25rem] border border-[#e3d7c5] bg-[#faf6ef] px-4 py-4 text-sm leading-7 text-steel-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
