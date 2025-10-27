/**
 * Featured Products Carousel - Suplementiplus
 * Large hero cards with increased size and gradient background
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
    <section className="w-full py-8 lg:py-12 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: 4-column grid */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-5">
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
      </div>
    </section>
  );
}