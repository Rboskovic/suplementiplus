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

// Variant with custom metafields
export interface VariantWithMetafields {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
  popular_product?: {
    value: string; // "true" or "false"
  };
  sort_order?: {
    value: string; // number as string
  };
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
    nodes: VariantWithMetafields[];
  };
  // Custom metafields at product level
  homepage_featured?: {
    value: string; // JSON string, parse to HomepageFeaturedMetafield
  };
  sort_order?: {
    value: string; // number as string
  };
  // Optional fields added during processing
  popularVariant?: VariantWithMetafields;
  variantSortOrder?: number;
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
    const parsed = JSON.parse(metafield.value) as HomepageFeaturedMetafield;
    // Validate that required fields exist
    if (!parsed.media_url || !parsed.title || !parsed.description) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

// Helper function to check if variant is popular
export function isPopularVariant(metafield?: {value: string}): boolean {
  return metafield?.value === 'true';
}

// Helper function to get sort order from metafield
export function getSortOrder(metafield?: {value: string}): number {
  if (!metafield?.value) return 999;
  const order = parseInt(metafield.value, 10);
  return isNaN(order) ? 999 : order;
}

// Helper function to format price
export function formatPrice(amount: string, currencyCode: string): string {
  const price = parseFloat(amount);
  return new Intl.NumberFormat('sr-RS', {
    style: 'currency',
    currency: currencyCode,
  }).format(price);
}