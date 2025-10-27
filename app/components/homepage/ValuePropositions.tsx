/**
 * Value Propositions - Suplementiplus
 * "Why Suplementiplus?" section with 4 value cards
 */

import {Link} from 'react-router';

export function ValuePropositions() {
  const values = [
    {
      id: 1,
      icon: 'PLACEHOLDER_ICON_1',
      title: 'Istraživanje i proizvodnja u sopstvenoj režiji.',
      // Replace icon with: <img src="https://cdn.shopify.com/..." />
    },
    {
      id: 2,
      icon: 'PLACEHOLDER_ICON_2',
      title:
        'Koristimo samo najkvalitetnije sirovine dostupne na tržištu.',
      // Replace icon with: <img src="https://cdn.shopify.com/..." />
    },
    {
      id: 3,
      icon: 'PLACEHOLDER_ICON_3',
      title:
        'Od prve ideje do zatvaranja pakovanja, kontrolišemo proces.',
      // Replace icon with: <img src="https://cdn.shopify.com/..." />
    },
    {
      id: 4,
      icon: 'PLACEHOLDER_ICON_4',
      title: 'Testiramo ukuse naših proizvoda sa pravim kupcima.',
      // Replace icon with: <img src="https://cdn.shopify.com/..." />
    },
  ];

  return (
    <section className="bg-background-light py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Zašto Suplementiplus?
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-primary font-medium">
            <Link
              to="/pages/o-nama"
              className="flex items-center gap-1 hover:text-primary-700 transition-colors"
            >
              Pročitajte više o nama
              <span className="text-lg">›</span>
            </Link>
            <Link
              to="#faq"
              className="flex items-center gap-1 hover:text-primary-700 transition-colors"
            >
              Često postavljana pitanja
              <span className="text-lg">›</span>
            </Link>
          </div>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon Placeholder - Replace with your SVG */}
              <div className="w-16 h-16 mb-4 rounded-lg bg-primary-100 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-300 rounded" />
                {/* TODO: Replace with: <img src="YOUR_CDN_URL" className="w-8 h-8" /> */}
              </div>
              <p className="text-sm leading-relaxed">{value.title}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4">
          <div className="flex gap-4 px-4">
            {values.map((value) => (
              <div
                key={value.id}
                className="flex-none w-[75vw] bg-white rounded-xl p-6 shadow-sm"
              >
                {/* Icon Placeholder */}
                <div className="w-16 h-16 mb-4 rounded-lg bg-primary-100 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary-300 rounded" />
                  {/* TODO: Replace with: <img src="YOUR_CDN_URL" className="w-8 h-8" /> */}
                </div>
                <p className="text-sm leading-relaxed">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}