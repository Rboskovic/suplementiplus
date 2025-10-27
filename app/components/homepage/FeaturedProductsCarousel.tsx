/**
 * Featured Products Carousel - Suplementiplus
 * Large hero cards with increased size (30vw) and horizontal overflow
 * 
 * Updates:
 * - Cards are 30vw on desktop (larger than before)
 * - Horizontal scroll with overflow visible on right
 * - Maintains peek-through effect on mobile
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
      {/* Desktop: Horizontal scrolling - left aligned with page, right extends to edge */}
      <div className="hidden lg:block">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 pb-4" style={{paddingLeft: 'max(2rem, calc((100vw - 1600px) / 2))'}}>
            {products.map((product) => {
              const featuredData = parseHomepageFeatured(product.homepage_featured);
              if (!featuredData) return null;

              return (
                <div key={product.id} className="flex-none w-[22vw] min-w-[320px]">
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

      {/* Mobile: Horizontal scroll with peek effect */}
      <div className="lg:hidden">
        <div className="overflow-x-auto scrollbar-hide -mx-4">
          <div className="flex gap-4 px-4 pb-4">
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