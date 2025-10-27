/**
 * Popular Products - Suplementiplus v3
 * Left aligned with page, overflow to right edge
 * 
 * FILE: app/components/homepage/PopularProducts.tsx
 * VERSION: 3.0
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
      {/* Section Header - aligned with page */}
      <div style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))', paddingRight: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
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
      </div>

      {/* Products - overflow to right edge */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-4" style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
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

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}