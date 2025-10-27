/**
 * Collections Grid - Suplementiplus
 * Large image cards with overlay text
 */

import {Link} from 'react-router';
import {Image} from '@shopify/hydrogen';
import type {CollectionData} from '~/lib/types';

interface CollectionsGridProps {
  collections: CollectionData[];
}

export function CollectionsGrid({collections}: CollectionsGridProps) {
  if (!collections || collections.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-12 lg:py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold">Kolekcije</h2>
        <Link
          to="/collections"
          className="text-primary hover:text-primary-700 font-medium flex items-center gap-1 transition-colors"
        >
          Prikaži sve kolekcije
          <span className="text-lg">›</span>
        </Link>
      </div>

      {/* Desktop: 4-column grid */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>

      {/* Mobile: Horizontal scroll */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4">
        <div className="flex gap-4 px-4">
          {collections.map((collection) => (
            <div key={collection.id} className="flex-none w-[85vw]">
              <CollectionCard collection={collection} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({collection}: {collection: CollectionData}) {
  return (
    <Link
      to={`/collections/${collection.handle}`}
      className="group relative block aspect-[3/4] rounded-2xl overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {collection.image ? (
          <Image
            data={collection.image}
            aspectRatio="3/4"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 85vw"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 lg:p-8 text-white">
        <h3 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight">
          {collection.title}
        </h3>
        {collection.description && (
          <p className="text-sm lg:text-base text-gray-200 leading-relaxed">
            {collection.description}
          </p>
        )}
      </div>
    </Link>
  );
}