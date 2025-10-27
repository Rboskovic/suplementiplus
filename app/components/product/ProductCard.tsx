/**
 * Product Card - Suplementiplus
 * Displays product information with add to cart button
 * Used in Popular Products section
 */

import {Link} from 'react-router';
import type {ProductWithMetafields} from '~/lib/types';
import {formatPrice} from '~/lib/types';
import {ShoppingCart} from 'lucide-react';

interface ProductCardProps {
  product: ProductWithMetafields;
}

export function ProductCard({product}: ProductCardProps) {
  // Use the popular variant if available, otherwise use first variant
  const displayVariant = product.popularVariant || product.variants.nodes[0];
  
  // Format the price
  const formattedPrice = displayVariant 
    ? formatPrice(displayVariant.price.amount, displayVariant.price.currencyCode)
    : formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode);

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Product Link */}
      <Link to={`/products/${product.handle}`} className="block">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 overflow-hidden">
          {product.featuredImage ? (
            <img
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>

          {/* Variant Title (Size/Flavor) */}
          {displayVariant && displayVariant.title !== 'Default Title' && (
            <p className="text-sm text-gray-600 mb-2">
              {displayVariant.title}
            </p>
          )}

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-gray-900">
              {formattedPrice}
            </span>
            
            {/* Add to Cart Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                // TODO: Implement add to cart functionality
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
            <div className="mt-2">
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