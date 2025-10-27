/**
 * FAQ Component - Suplementiplus
 * Frequently Asked Questions with accordion
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export function FAQ() {
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
    <section className="w-full py-12 lg:py-16 bg-black text-white" id="faq">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Heading */}
          <div className="lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Često postavljana pitanja
            </h2>
            <p className="text-gray-400 text-base">
              Ovde ćete pronaći odgovore na pitanja koja nam najčešće postavljate.
              Ukoliko ne pronađete odgovor koji tražite, ne oklevajte da nas
              kontaktirate.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-gray-900 rounded-xl px-6 border-0"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}