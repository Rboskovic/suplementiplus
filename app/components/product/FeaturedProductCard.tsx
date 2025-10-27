/**
 * Featured Product Card - Suplementiplus
 * Large cards for hero carousel with video/image backgrounds
 * 
 * Updates:
 * - Increased card size (30vw on desktop)
 * - Content positioned at top
 * - Smaller text sizes
 * - Black CTA button with "Kupi >"
 */

import {Link} from 'react-router';
import type {HomepageFeaturedMetafield} from '~/lib/types';

interface FeaturedProductCardProps {
  product: {
    handle: string;
  };
  featuredData: HomepageFeaturedMetafield;
}

export function FeaturedProductCard({
  product,
  featuredData,
}: FeaturedProductCardProps) {
  const isVideo = featuredData.media_url.includes('.mp4') || 
                  featuredData.media_url.includes('.webm');

  return (
    <Link
      to={`/products/${product.handle}`}
      className="group relative block w-full aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] overflow-hidden flex-shrink-0"
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        {isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={featuredData.media_url} type="video/mp4" />
          </video>
        ) : (
          <img
            src={featuredData.media_url}
            alt={featuredData.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {/* Dark Gradient Overlay - lighter for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      {/* Content - Top aligned with button at bottom */}
      <div className="relative h-full flex flex-col justify-between p-6 lg:p-8 text-white">
        {/* Top Section */}
        <div className="pt-4">
          {/* Badge */}
          {featuredData.badge && (
            <span className="inline-block px-3 py-1 text-xs font-bold bg-primary rounded-full uppercase tracking-wider mb-4">
              {featuredData.badge}
            </span>
          )}

          {/* Title - Smaller size */}
          <h3 className="text-xl lg:text-2xl font-bold mb-2 leading-tight">
            {featuredData.title}
          </h3>

          {/* Description - Smaller size */}
          <p className="text-xs lg:text-sm text-gray-200 leading-relaxed max-w-xs">
            {featuredData.description}
          </p>
        </div>

        {/* CTA Button - Bottom, Black background */}
        <div className="pb-2">
          <button className="px-8 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-900 transition-colors inline-flex items-center gap-1">
            Kupi <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </Link>
  );
}