/**
 * Homepage Route - Suplementiplus
 * Main route file for the homepage with all sections
 */

import {type LoaderFunctionArgs} from 'react-router';
import {Await, useLoaderData} from 'react-router';
import type {MetaFunction} from 'react-router';
import {Suspense} from 'react';
import {Header} from '~/components/layout/Header';
import {Footer} from '~/components/layout/Footer';
import {FeaturedProductsCarousel} from '~/components/homepage/FeaturedProductsCarousel';
import {PopularProducts} from '~/components/homepage/PopularProducts';
import {ValuePropositions} from '~/components/homepage/ValuePropositions';
import {CollectionsGrid} from '~/components/homepage/CollectionsGrid';
import {BlogSection} from '~/components/homepage/BlogSection';
import {FAQ} from '~/components/homepage/FAQ';
import {getSortOrder, parseHomepageFeatured} from '~/lib/types';

export const meta: MetaFunction = () => {
  return [
    {title: 'Suplementiplus - Kvalitetni sportski suplementi'},
    {
      name: 'description',
      content:
        'Sopstvena proizvodnja, najkvalitetnije sirovine i testiranje sa pravim kupcima. Otkrijte Suplementiplus - srpski brend sportskih suplemenata.',
    },
  ];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;

  // Return raw objects with Promises - Single Fetch handles them automatically
  return {
    featuredProducts: storefront.query(FEATURED_PRODUCTS_QUERY),
    popularProducts: storefront.query(POPULAR_PRODUCTS_QUERY),
    collections: storefront.query(COLLECTIONS_QUERY),
    articles: storefront.query(ARTICLES_QUERY),
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      
      <main>
        {/* Featured Products Carousel */}
        <Suspense fallback={<FeaturedProductsSkeleton />}>
          <Await resolve={data.featuredProducts}>
            {(response: any) => {
              const products = response?.products?.nodes || [];
              
              // Filter products that have valid homepage_featured metafield
              const featuredProducts = products
                .filter((p: any) => {
                  // Check if homepage_featured metafield exists and can be parsed
                  const featuredData = parseHomepageFeatured(p.homepage_featured);
                  return featuredData !== null;
                })
                .sort((a: any, b: any) => {
                  // Sort by sort_order if present
                  const orderA = getSortOrder(a.sort_order);
                  const orderB = getSortOrder(b.sort_order);
                  return orderA - orderB;
                })
                .slice(0, 4);

              return <FeaturedProductsCarousel products={featuredProducts} />;
            }}
          </Await>
        </Suspense>

        {/* Popular Products */}
        <Suspense fallback={<PopularProductsSkeleton />}>
          <Await resolve={data.popularProducts}>
            {(response: any) => {
              const products = response?.products?.nodes || [];
              
              // Filter products that have at least one variant with popular_product = true
              const popularProducts = products
                .filter((p: any) => {
                  // Check if any variant has popular_product set to true
                  return p.variants?.nodes?.some((v: any) => 
                    v.popular_product?.value === 'true'
                  );
                })
                .map((p: any) => {
                  // Find the first popular variant for this product
                  const popularVariant = p.variants.nodes.find((v: any) => 
                    v.popular_product?.value === 'true'
                  );
                  
                  return {
                    ...p,
                    // Attach the popular variant's sort order to the product
                    variantSortOrder: getSortOrder(popularVariant?.sort_order),
                    popularVariant, // Keep reference to the popular variant
                  };
                })
                .sort((a: any, b: any) => {
                  // Sort by variant sort_order
                  return a.variantSortOrder - b.variantSortOrder;
                });

              return <PopularProducts products={popularProducts} />;
            }}
          </Await>
        </Suspense>

        {/* Value Propositions */}
        <ValuePropositions />

        {/* Collections Grid */}
        <Suspense fallback={<CollectionsSkeleton />}>
          <Await resolve={data.collections}>
            {(response: any) => {
              const collections = response?.collections?.nodes || [];
              return <CollectionsGrid collections={collections} />;
            }}
          </Await>
        </Suspense>

        {/* Blog Section */}
        <Suspense fallback={<BlogSkeleton />}>
          <Await resolve={data.articles}>
            {(response: any) => {
              const articles = response?.articles?.nodes || [];
              return <BlogSection articles={articles.slice(0, 6)} />;
            }}
          </Await>
        </Suspense>

        {/* FAQ */}
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

// Loading Skeletons
function FeaturedProductsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-[4/5] lg:aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

function PopularProductsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="flex items-center justify-between mb-8">
        <div className="h-10 w-64 bg-gray-200 rounded animate-pulse" />
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-white rounded-lg p-4 space-y-4">
            <div className="aspect-square bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CollectionsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="flex items-center justify-between mb-8">
        <div className="h-10 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-[4/5] lg:aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

function BlogSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="text-center mb-8">
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse mx-auto mb-4" />
        <div className="flex justify-center gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 animate-pulse" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// GraphQL Fragments and Queries
const PRODUCT_FRAGMENT = `#graphql
  fragment ProductFragment on Product {
    id
    handle
    title
    description
    featuredImage {
      url
      altText
      width
      height
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 20) {
      nodes {
        id
        title
        price {
          amount
          currencyCode
        }
        availableForSale
        popular_product: metafield(namespace: "custom", key: "popular_product") {
          value
        }
        sort_order: metafield(namespace: "custom", key: "sort_order") {
          value
        }
      }
    }
    homepage_featured: metafield(namespace: "custom", key: "homepage_featured") {
      value
    }
    sort_order: metafield(namespace: "custom", key: "sort_order") {
      value
    }
  }
`;

const FEATURED_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_FRAGMENT}
  query FeaturedProducts {
    products(first: 10) {
      nodes {
        ...ProductFragment
      }
    }
  }
`;

const POPULAR_PRODUCTS_QUERY = `#graphql
  ${PRODUCT_FRAGMENT}
  query PopularProducts {
    products(first: 50) {
      nodes {
        ...ProductFragment
      }
    }
  }
`;

const COLLECTIONS_QUERY = `#graphql
  query Collections {
    collections(
      first: 8
      query: "handle:trening-snage OR handle:izdrzljivost OR handle:oporavak OR handle:veganski-proizvodi"
    ) {
      nodes {
        id
        handle
        title
        description
        image {
          url
          altText
          width
          height
        }
      }
    }
  }
`;

const ARTICLES_QUERY = `#graphql
  query Articles {
    articles(first: 6, sortKey: PUBLISHED_AT, reverse: true) {
      nodes {
        id
        handle
        title
        excerpt
        publishedAt
        image {
          url
          altText
          width
          height
        }
        blog {
          handle
        }
      }
    }
  }
`;