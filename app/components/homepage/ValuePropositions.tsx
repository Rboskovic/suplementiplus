/**
 * Value Propositions - Suplementiplus v2
 * Left aligned with page, overflow to right on mobile
 */

import {Link} from 'react-router';

export function ValuePropositions() {
  const values = [
    {
      id: 1,
      icon: 'PLACEHOLDER_ICON_1',
      title: 'Istraživanje i proizvodnja u sopstvenoj režiji.',
    },
    {
      id: 2,
      icon: 'PLACEHOLDER_ICON_2',
      title: 'Koristimo samo najkvalitetnije sirovine dostupne na tržištu.',
    },
    {
      id: 3,
      icon: 'PLACEHOLDER_ICON_3',
      title: 'Od prve ideje do zatvaranja pakovanja, kontrolišemo proces.',
    },
    {
      id: 4,
      icon: 'PLACEHOLDER_ICON_4',
      title: 'Testiramo ukuse naših proizvoda sa pravim kupcima.',
    },
  ];

  return (
    <section className="bg-background-light py-12 lg:py-16">
      {/* Section Header */}
      <div style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))', paddingRight: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
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
      </div>

      {/* Desktop: 4-column grid */}
      <div className="hidden lg:block" style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))', paddingRight: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
        <div className="grid grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mb-4 rounded-lg bg-primary-100 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-300 rounded" />
              </div>
              <p className="text-sm leading-relaxed">{value.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Horizontal scroll */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4" style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
          {values.map((value) => (
            <div
              key={value.id}
              className="flex-none w-[75vw] bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="w-16 h-16 mb-4 rounded-lg bg-primary-100 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-300 rounded" />
              </div>
              <p className="text-sm leading-relaxed">{value.title}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}