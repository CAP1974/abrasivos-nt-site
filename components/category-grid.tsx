import { ProductLine } from "@/content/site";
import { ProductShowcaseCard } from "@/components/product-showcase-card";

export function CategoryGrid({ categories }: { categories: ProductLine[] }) {
  return (
    <div className="grid gap-8 xl:grid-cols-1 2xl:gap-9">
      {categories.map((category) => (
        <ProductShowcaseCard key={category.slug} product={category} />
      ))}
    </div>
  );
}
