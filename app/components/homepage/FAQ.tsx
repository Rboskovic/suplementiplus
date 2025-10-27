/**
 * FAQ Section - Suplementiplus
 * 2-column desktop, accordion mobile with dark background
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
      question: 'Gde se odvija istraživanje, razvoj i proizvodnja?',
      answer:
        'Sva istraživanja, razvoj i proizvodnja se odvijaju u našim sopstvenim objektima. Imamo potpunu kontrolu nad celim procesom od ideje do finalnog proizvoda.',
    },
    {
      question: 'Da li je protein stvarno bez laktoze?',
      answer:
        'Da, naši proteinski proizvodi su bez laktoze. Koristimo specijalizovane sirovine i procese kako bismo obezbedili da naši proizvodi budu pogodni za osobe sa intolerancijom na laktozu.',
    },
    {
      question: 'Kakvo je poreklo sirovina?',
      answer:
        'Koristimo samo najkvalitetnije sirovine dostupne na svetskom tržištu. Sve sirovine prolaze rigoroznu kontrolu kvaliteta pre nego što ih upotrebimo u našim proizvodima.',
    },
    {
      question: 'Zašto je skuplje nego konkurencija?',
      answer:
        'Naša cena odražava kvalitet sirovina koje koristimo, sopstvenu proizvodnju i rigoroznu kontrolu kvaliteta. Investiramo u istraživanje i razvoj kako bismo vam doneli najbolje moguće proizvode.',
    },
  ];

  return (
    <section id="faq" className="bg-black text-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Desktop: 2-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Left Column: Heading */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Često postavljana pitanja
            </h2>
            <p className="text-gray-400 text-lg">
              Ovde ćete pronaći odgovore na pitanja koja nam najčešće
              postavljate. Ako ne pronađete odgovor na svoje pitanje, slobodno
              nas kontaktirajte.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-900/50 rounded-lg border-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-900/70 transition-colors text-left [&[data-state=open]>svg]:rotate-0">
                    <span className="font-medium">{faq.question}</span>
                    <div className="shrink-0 ml-4">
                      <PlusIcon />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="lg:hidden">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Često postavljana pitanja
            </h2>
            <p className="text-gray-400">
              Ovde ćete pronaći odgovore na pitanja koja nam najčešće
              postavljate. Ako ne pronađete odgovor na svoje pitanje, slobodno
              nas kontaktirajte.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/50 rounded-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gray-900/70 transition-colors text-left text-sm [&[data-state=open]>div>svg]:rotate-0">
                  <span className="font-medium pr-4">{faq.question}</span>
                  <div className="shrink-0">
                    <PlusIcon />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-400 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}