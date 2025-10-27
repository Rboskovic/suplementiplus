/**
 * Popular Products - Suplementiplus
 * Grid of product cards with "View all" link
 */

import {Link} from 'react-router';
import {ProductCard} from '~/components/product/ProductCard';
import type {ProductWithMetafields} from '~/lib/types';

interface PopularProductsProps {
  products: ProductWithMetafields[];
}

export function PopularProducts({products}: PopularProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-12 lg:py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold">Popularni proizvodi</h2>
        <Link
          to="/products"
          className="text-primary hover:text-primary-700 font-medium flex items-center gap-1 transition-colors"
        >
          Prikaži sve proizvode
          <span className="text-lg">›</span>
        </Link>
      </div>

      {/* Desktop: 4-column grid */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Mobile: Horizontal scroll */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4">
        <div className="flex gap-4 px-4">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="flex-none w-[45vw]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}