/**
 * Featured Product Card - Suplementiplus
 * Large cards for hero carousel - 570x456px on desktop
 */

import {Link} from 'react-router';
import type {HomepageFeaturedMetafield} from '~/lib/types';
import {Button} from '~/components/ui/button';

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
      className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      style={{
        height: '456px', // Fixed height - target size
        minWidth: '100%', // Take full column width
      }}
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
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 lg:p-8 text-white">
        {/* Badge */}
        {featuredData.badge && (
          <span className="absolute top-6 left-6 px-3 py-1.5 text-xs font-bold bg-primary rounded-full uppercase tracking-wider shadow-lg">
            {featuredData.badge}
          </span>
        )}

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
          {featuredData.title}
        </h3>

        {/* Description */}
        <p className="text-sm lg:text-base text-gray-200 mb-6 leading-relaxed max-w-md">
          {featuredData.description}
        </p>

        {/* CTA Button */}
        <div>
          <Button
            variant="default"
            size="lg"
            className="rounded-full font-semibold bg-green-500 hover:bg-green-600 text-white shadow-lg"
            asChild
          >
            <span>
              Kupi <span className="ml-1">›</span>
            </span>
          </Button>
        </div>
      </div>
    </Link>
  );
}