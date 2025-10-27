/**
 * Suplementiplus - TypeScript Types v3
 * Added variant image support
 * 
 * FILE: app/lib/types.ts
 * VERSION: 3.0
 */

export interface HomepageFeaturedMetafield {
  media_url: string;
  title: string;
  description: string;
  badge?: 'NEW' | 'BESTSELLER';
}

export interface VariantWithMetafields {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
  image?: {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
  };
  popular_product?: {
    value: string;
  };
  sort_order?: {
    value: string;
  };
}

export interface ProductWithMetafields {
  id: string;
  handle: string;
  title: string;
  description: string;
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
    nodes: VariantWithMetafields[];
  };
  homepage_featured?: {
    value: string;
  };
  sort_order?: {
    value: string;
  };
  popularVariant?: VariantWithMetafields;
  variantSortOrder?: number;
}

export interface CollectionData {
  id: string;
  handle: string;
  title: string;
  description: string;
  image?: {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
  };
}

export interface ArticleData {
  id: string;
  handle: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  image?: {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
  };
  blog: {
    handle: string;
  };
}

export function parseHomepageFeatured(
  metafield?: {value: string},
): HomepageFeaturedMetafield | null {
  if (!metafield?.value) return null;
  try {
    const parsed = JSON.parse(metafield.value) as HomepageFeaturedMetafield;
    if (!parsed.media_url || !parsed.title || !parsed.description) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function isPopularVariant(metafield?: {value: string}): boolean {
  if (!metafield?.value) return false;
  const normalizedValue = metafield.value.trim().toLowerCase();
  return normalizedValue === 'true' || 
         normalizedValue === '1' || 
         normalizedValue === 'yes';
}

export function getSortOrder(metafield?: {value: string}): number {
  if (!metafield?.value) return 999;
  const order = parseInt(metafield.value, 10);
  return isNaN(order) ? 999 : order;
}

export function formatPrice(amount: string, currencyCode: string): string {
  const numericAmount = parseFloat(amount);
  
  if (currencyCode === 'RSD') {
    return `${Math.round(numericAmount)} RSD`;
  } else if (currencyCode === 'EUR') {
    return `€${numericAmount.toFixed(2)}`;
  } else if (currencyCode === 'USD') {
    return `$${numericAmount.toFixed(2)}`;
  } else {
    return `${numericAmount.toFixed(2)} ${currencyCode}`;
  }
}