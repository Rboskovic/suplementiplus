/**
 * Featured Products Carousel - Suplementiplus
 * 4-column grid desktop, horizontal scroll mobile
 */

import {FeaturedProductCard} from '~/components/product/FeaturedProductCard';
import type {ProductWithMetafields} from '~/lib/types';
import {parseHomepageFeatured} from '~/lib/types';

interface FeaturedProductsCarouselProps {
  products: ProductWithMetafields[];
}

export function FeaturedProductsCarousel({
  products,
}: FeaturedProductsCarouselProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-8 lg:py-12">
      {/* Desktop: 4-column grid */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4">
        {products.map((product) => {
          const featuredData = parseHomepageFeatured(product.homepage_featured);
          if (!featuredData) return null;

          return (
            <FeaturedProductCard
              key={product.id}
              product={product}
              featuredData={featuredData}
            />
          );
        })}
      </div>

      {/* Mobile: Horizontal scroll with peek */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4">
        <div className="flex gap-4 px-4">
          {products.map((product) => {
            const featuredData = parseHomepageFeatured(
              product.homepage_featured,
            );
            if (!featuredData) return null;

            return (
              <div key={product.id} className="flex-none w-[85vw]">
                <FeaturedProductCard
                  product={product}
                  featuredData={featuredData}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}