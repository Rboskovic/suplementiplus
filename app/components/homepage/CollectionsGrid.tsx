/**
 * Collections Grid - Suplementiplus
 * Featured collections with large image cards
 */

import {Link} from 'react-router';
import type {CollectionData} from '~/lib/types';

interface CollectionsGridProps {
  collections: CollectionData[];
}

export function CollectionsGrid({collections}: CollectionsGridProps) {
  if (!collections || collections.length === 0) return null;

  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-5">
          {collections.slice(0, 4).map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4">
          <div className="flex gap-4 px-4">
            {collections.slice(0, 4).map((collection) => (
              <div key={collection.id} className="flex-none w-[85vw]">
                <CollectionCard collection={collection} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionCard({collection}: {collection: CollectionData}) {
  return (
    <Link
      to={`/collections/${collection.handle}`}
      className="group relative block aspect-[4/5] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {collection.image ? (
          <img
            src={collection.image.url}
            alt={collection.image.altText || collection.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 lg:p-8 text-white">
        <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
          {collection.title}
        </h3>
        {collection.description && (
          <p className="text-sm lg:text-base text-gray-200 leading-relaxed line-clamp-3">
            {collection.description}
          </p>
        )}
      </div>
    </Link>
  );
}