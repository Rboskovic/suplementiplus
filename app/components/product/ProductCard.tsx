/**
 * Product Card - Suplementiplus v2
 * Uses variant image, white background, matches target design
 * 
 * FILE: app/components/product/ProductCard.tsx
 * VERSION: 2.0
 */

import {Link} from 'react-router';
import type {ProductWithMetafields} from '~/lib/types';
import {formatPrice} from '~/lib/types';
import {ShoppingCart} from 'lucide-react';

interface ProductCardProps {
  product: ProductWithMetafields;
}

export function ProductCard({product}: ProductCardProps) {
  const displayVariant = product.popularVariant || product.variants.nodes[0];
  
  const formattedPrice = displayVariant 
    ? formatPrice(displayVariant.price.amount, displayVariant.price.currencyCode)
    : formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode);

  // Use variant image if available, otherwise product featured image
  const imageUrl = displayVariant?.image?.url || product.featuredImage?.url;
  const imageAlt = displayVariant?.image?.altText || product.featuredImage?.altText || product.title;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/products/${product.handle}`} className="block">
        {/* Product Image - Smaller aspect ratio */}
        <div className="aspect-[4/3] bg-gray-50 overflow-hidden p-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span>Nema slike</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Title */}
          <h3 className="font-bold text-gray-900 mb-1 text-center">
            {product.title}
          </h3>

          {/* Variant Title (Size/Flavor) */}
          {displayVariant && displayVariant.title !== 'Default Title' && (
            <p className="text-sm text-gray-600 mb-3 text-center">
              {displayVariant.title}
            </p>
          )}

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-gray-900">
              {formattedPrice}
            </span>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log('Add to cart:', product.id, displayVariant?.id);
              }}
              className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors"
              aria-label="Dodaj u korpu"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {/* Availability Badge */}
          {displayVariant && !displayVariant.availableForSale && (
            <div className="mt-2 text-center">
              <span className="inline-block px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded">
                Rasprodato
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}