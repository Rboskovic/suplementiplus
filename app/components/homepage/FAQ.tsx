/**
 * FAQ Component - Suplementiplus
 * Gray gradient background, full-width, black-to-dark-gray container
 */

import {useState} from 'react';
import {Plus, Minus} from 'lucide-react';

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: 'Gde se vrši istraživanje, razvoj i proizvodnja?',
      answer:
        'Sve naše proizvode razvijamo i proizvodimo u našim sopstvenim prostorijama u Srbiji. To nam omogućava potpunu kontrolu nad kvalitetom i sastojcima.',
    },
    {
      id: '2',
      question: 'Da li je protein zaista bez laktoze?',
      answer:
        'Da, naši proteini su formulisani da budu bez laktoze i pogodni za osobe sa intolerancijom na laktozu.',
    },
    {
      id: '3',
      question: 'Kakvo je poreklo sirovina?',
      answer:
        'Koristimo isključivo najkvalitetnije sirovine od renomiranih evropskih dobavljača. Svaka šarža je testirana i sertifikovana.',
    },
    {
      id: '4',
      question: 'Zašto je skuplje od konkurencije?',
      answer:
        'Naša cena odražava kvalitet sastojaka, lokalna proizvodnja, transparentnost procesa i posvećenost kvalitetu bez kompromisa.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50" id="faq">
      {/* Full width with page boundary padding */}
      <div style={{paddingLeft: 'max(1rem, calc((100vw - 1600px) / 2))', paddingRight: 'max(1rem, calc((100vw - 1600px) / 2))'}}>
        {/* Black to dark gray gradient container */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-[3rem] p-8 lg:p-12 xl:p-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Column - Heading */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                Često postavljana pitanja
              </h2>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-md">
                Ovde ćete pronaći odgovore na pitanja koja nam najčešće postavljate. Ukoliko ne pronađete odgovor koji tražite, ne oklevajte da nas kontaktirate.
              </p>
            </div>

            {/* Right Column - Accordion */}
            <div className="space-y-3">
              {faqs.map((faq) => {
                const isOpen = openItem === faq.id;
                
                return (
                  <div
                    key={faq.id}
                    className="border border-white/20 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenItem(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left text-white hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm lg:text-base font-medium pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4 text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}