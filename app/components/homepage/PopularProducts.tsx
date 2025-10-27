/**
 * Popular Products - Suplementiplus v2
 * Horizontal scroll overflow, white cards, matches target
 * 
 * FILE: app/components/homepage/PopularProducts.tsx
 * VERSION: 2.0
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
    <section className="w-full py-12 lg:py-16 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Popularni proizvodi</h2>
          <Link
            to="/products"
            className="text-primary hover:text-primary-700 font-medium flex items-center gap-1 transition-colors"
          >
            Pogledajte sve proizvode
            <span className="text-lg">›</span>
          </Link>
        </div>

        {/* Horizontal Scroll - All screen sizes */}
        <div className="overflow-x-auto scrollbar-hide -mx-4">
          <div className="flex gap-4 px-4 pb-4">
            {products.map((product, index) => (
              <div 
                key={`${product.id}-${product.popularVariant?.id || index}`} 
                className="flex-none w-[280px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}