/**
 * Suplementiplus - TypeScript Types
 * Types for Shopify metafields and custom data structures
 */

// Homepage Featured Product Metafield
export interface HomepageFeaturedMetafield {
  media_url: string;
  title: string;
  description: string;
  badge?: 'NEW' | 'BESTSELLER';
}

// Product with custom metafields
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
    nodes: Array<{
      id: string;
      title: string;
      price: {
        amount: string;
        currencyCode: string;
      };
      availableForSale: boolean;
    }>;
  };
  // Custom metafields
  homepage_featured?: {
    value: string; // JSON string, parse to HomepageFeaturedMetafield
  };
  popular_product?: {
    value: string; // "true" or "false"
  };
  sort_order?: {
    value: string; // number as string
  };
}

// Collection data structure
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

// Blog Article data structure
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

// Helper function to parse homepage featured metafield
export function parseHomepageFeatured(
  metafield?: {value: string},
): HomepageFeaturedMetafield | null {
  if (!metafield?.value) return null;
  try {
    return JSON.parse(metafield.value) as HomepageFeaturedMetafield;
  } catch {
    return null;
  }
}

// Helper function to check if product is popular
export function isPopularProduct(metafield?: {value: string}): boolean {
  return metafield?.value === 'true';
}

// Helper function to get sort order
export function getSortOrder(metafield?: {value: string}): number {
  if (!metafield?.value) return 999;
  const order = parseInt(metafield.value, 10);
  return isNaN(order) ? 999 : order;
}