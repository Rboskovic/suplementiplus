/**
 * Product Card - Suplementiplus
 * Used in Popular Products grid
 */

import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import {useFetcher} from 'react-router';

interface ProductCardProps {
  product: {
    id: string;
    handle: string;
    title: string;
    featuredImage?: {
      url: string;
      altText?: string;
      width?: number;
      height?: number;
    };
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    variants: {
      nodes: Array<{
        id: string;
        title: string;
        availableForSale: boolean;
      }>;
    };
  };
}

export function ProductCard({product}: ProductCardProps) {
  const fetcher = useFetcher();
  const firstVariant = product.variants.nodes[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!firstVariant?.availableForSale) return;

    fetcher.submit(
      {
        cartAction: 'ADD_TO_CART',
        lines: JSON.stringify([
          {
            merchandiseId: firstVariant.id,
            quantity: 1,
          },
        ]),
      },
      {method: 'POST', action: '/cart'},
    );
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <Link to={`/products/${product.handle}`} className="block">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100">
          {product.featuredImage ? (
            <Image
              data={product.featuredImage}
              aspectRatio="1/1"
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-base mb-1 line-clamp-2">
            {product.title}
          </h3>
          {firstVariant && (
            <p className="text-sm text-gray-500 mb-2">{firstVariant.title}</p>
          )}
          <div className="flex items-center justify-between">
            <Money
              data={product.priceRange.minVariantPrice}
              className="font-bold text-lg"
            />
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={!firstVariant?.availableForSale || fetcher.state !== 'idle'}
        className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-accent-green text-white hover:bg-accent-green/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Dodaj u korpu"
      >
        {fetcher.state !== 'idle' ? (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <PlusIcon />
        )}
      </button>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}