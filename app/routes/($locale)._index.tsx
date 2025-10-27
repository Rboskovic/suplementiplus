/**
 * Homepage Route - Suplementiplus v5
 * Gradient background wrapper, no main padding
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
import {getSortOrder, parseHomepageFeatured, isPopularVariant} from '~/lib/types';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <Header />
      
      <main className="w-full">
        <Suspense fallback={<FeaturedProductsSkeleton />}>
          <Await resolve={data.featuredProducts}>
            {(response: any) => {
              const products = response?.products?.nodes || [];
              
              const featuredProducts = products
                .filter((p: any) => {
                  const featuredData = parseHomepageFeatured(p.homepage_featured);
                  return featuredData !== null;
                })
                .sort((a: any, b: any) => {
                  const orderA = getSortOrder(a.sort_order);
                  const orderB = getSortOrder(b.sort_order);
                  return orderA - orderB;
                })
                .slice(0, 4);

              return <FeaturedProductsCarousel products={featuredProducts} />;
            }}
          </Await>
        </Suspense>

        <Suspense fallback={<PopularProductsSkeleton />}>
          <Await resolve={data.popularProducts}>
            {(response: any) => {
              const products = response?.products?.nodes || [];
              
              const popularVariantCards: any[] = [];
              
              products.forEach((product: any) => {
                const popularVariants = product.variants?.nodes?.filter((v: any) => 
                  isPopularVariant(v.popular_product)
                ) || [];

                popularVariants.forEach((variant: any) => {
                  popularVariantCards.push({
                    ...product,
                    popularVariant: variant,
                    variantSortOrder: getSortOrder(variant.sort_order),
                  });
                });
              });

              popularVariantCards.sort((a: any, b: any) => 
                a.variantSortOrder - b.variantSortOrder
              );

              return <PopularProducts products={popularVariantCards} />;
            }}
          </Await>
        </Suspense>

        <ValuePropositions />

        <Suspense fallback={<CollectionsSkeleton />}>
          <Await resolve={data.collections}>
            {(response: any) => {
              const collections = response?.collections?.nodes || [];
              return <CollectionsGrid collections={collections} />;
            }}
          </Await>
        </Suspense>

        <Suspense fallback={<BlogSkeleton />}>
          <Await resolve={data.articles}>
            {(response: any) => {
              const articles = response?.articles?.nodes || [];
              return <BlogSection articles={articles} />;
            }}
          </Await>
        </Suspense>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

function FeaturedProductsSkeleton() {
  return (
    <section className="w-full py-8 lg:py-12">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-5" style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex-none w-[22vw] min-w-[320px] aspect-[3/4] bg-gray-200 rounded-[2rem] animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularProductsSkeleton() {
  return (
    <section className="w-full py-12 lg:py-16 bg-gray-50">
      <div style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))', paddingRight: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
        <div className="h-10 bg-gray-200 rounded w-64 mb-8 animate-pulse" />
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-4" style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-none w-[280px] bg-gray-100 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gray-200 animate-pulse" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionsSkeleton() {
  return (
    <section className="w-full py-12 lg:py-16">
      <div style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))', paddingRight: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
        <div className="h-10 bg-gray-200 rounded w-64 mb-8 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-gray-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSkeleton() {
  return (
    <section className="w-full py-12 lg:py-16 bg-primary text-white">
      <div style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))', paddingRight: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
        <div className="h-10 bg-white/20 rounded w-32 mx-auto mb-8 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white/10 rounded-lg p-4 animate-pulse">
              <div className="aspect-video bg-white/20 rounded mb-4" />
              <div className="h-4 bg-white/20 rounded mb-2" />
              <div className="h-4 bg-white/20 rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    variants(first: 50) {
      nodes {
        id
        title
        price {
          amount
          currencyCode
        }
        availableForSale
        image {
          url
          altText
          width
          height
        }
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
    products(first: 100) {
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