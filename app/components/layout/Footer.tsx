/**
 * Footer Component - Suplementiplus
 * 5-column desktop layout, accordion mobile layout
 */

import {Link} from 'react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Desktop Footer - 5 Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8">
          {/* Column 1 - Brand & Contact */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-bold tracking-tight">
                SUPLEMENTIPLUS
              </span>
            </Link>

            <div className="space-y-2 text-sm text-gray-400">
              <p>info@suplementiplus.rs</p>
              <p>+381 xxx xxx xxx</p>
              <address className="not-italic mt-4">
                SUPLEMENTIPLUS d.o.o.
                <br />
                Adresa
                <br />
                Grad, Zemlja
              </address>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Spotify"
              >
                <SpotifyIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Column 2 - Suplementiplus */}
          <div>
            <h3 className="font-semibold text-base mb-4">Suplementiplus</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/pages/o-nama" className="hover:text-white transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/pages/newsletter" className="hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Proteinski Šejkovi */}
          <div>
            <h3 className="font-semibold text-base mb-4">Proteinski šejkovi</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/products/whey-100" className="hover:text-white transition-colors">
                  Whey 100
                </Link>
              </li>
              <li>
                <Link to="/products/zenski-protein" className="hover:text-white transition-colors">
                  Ženski Protein
                </Link>
              </li>
              <li>
                <Link to="/products/veganski-protein" className="hover:text-white transition-colors">
                  Veganski Protein
                </Link>
              </li>
              <li>
                <Link to="/products/clear-water-shake" className="hover:text-white transition-colors">
                  Clear Water Shake
                </Link>
              </li>
              <li>
                <Link to="/products/complex-protein" className="hover:text-white transition-colors">
                  Complex Protein
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Ostali Proizvodi */}
          <div>
            <h3 className="font-semibold text-base mb-4">Ostali proizvodi</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/collections/puteri-namazi" className="hover:text-white transition-colors">
                  Puteri i namazi
                </Link>
              </li>
              <li>
                <Link to="/collections/vitamini-minerali" className="hover:text-white transition-colors">
                  Vitamini i minerali
                </Link>
              </li>
              <li>
                <Link to="/products/bcaa" className="hover:text-white transition-colors">
                  BCAA
                </Link>
              </li>
              <li>
                <Link to="/products/eaa" className="hover:text-white transition-colors">
                  EAA
                </Link>
              </li>
              <li>
                <Link to="/products/gainer" className="hover:text-white transition-colors">
                  Gainer
                </Link>
              </li>
              <li>
                <Link to="/products/kreatine" className="hover:text-white transition-colors">
                  Kreatine
                </Link>
              </li>
              <li>
                <Link to="/products/preworkout" className="hover:text-white transition-colors">
                  Preworkout
                </Link>
              </li>
              <li>
                <Link to="/collections/podrska-zglobova" className="hover:text-white transition-colors">
                  Podrška zglobova
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Pomoć */}
          <div>
            <h3 className="font-semibold text-base mb-4">Pomoć</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/pages/uslovi-koriscenja" className="hover:text-white transition-colors">
                  Uslovi korišćenja
                </Link>
              </li>
              <li>
                <Link to="/pages/politika-privatnosti" className="hover:text-white transition-colors">
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link to="/pages/kolacici" className="hover:text-white transition-colors">
                  Kolačići
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Footer - Stacked with Accordions */}
        <div className="lg:hidden">
          {/* Brand & Contact - Always Visible */}
          <div className="mb-8">
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-bold tracking-tight">
                SUPLEMENTIPLUS
              </span>
            </Link>

            <div className="space-y-2 text-sm text-gray-400">
              <p>info@suplementiplus.rs</p>
              <p>+381 xxx xxx xxx</p>
              <address className="not-italic mt-4">
                SUPLEMENTIPLUS d.o.o.
                <br />
                Adresa
                <br />
                Grad, Zemlja
              </address>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Spotify"
              >
                <SpotifyIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Accordion for Link Groups */}
          <Accordion type="single" collapsible className="border-t border-gray-800">
            <AccordionItem value="suplementiplus" className="border-gray-800">
              <AccordionTrigger className="text-white hover:no-underline py-4">
                Suplementiplus
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-400 pb-4">
                  <li>
                    <Link to="/pages/o-nama" className="hover:text-white transition-colors">
                      O nama
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages/newsletter" className="hover:text-white transition-colors">
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="proteinski-sejkovi" className="border-gray-800">
              <AccordionTrigger className="text-white hover:no-underline py-4">
                Proteinski šejkovi
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-400 pb-4">
                  <li>
                    <Link to="/products/whey-100" className="hover:text-white transition-colors">
                      Whey 100
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/zenski-protein" className="hover:text-white transition-colors">
                      Ženski Protein
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/veganski-protein" className="hover:text-white transition-colors">
                      Veganski Protein
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/clear-water-shake" className="hover:text-white transition-colors">
                      Clear Water Shake
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/complex-protein" className="hover:text-white transition-colors">
                      Complex Protein
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ostali-proizvodi" className="border-gray-800">
              <AccordionTrigger className="text-white hover:no-underline py-4">
                Ostali proizvodi
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-400 pb-4">
                  <li>
                    <Link to="/collections/puteri-namazi" className="hover:text-white transition-colors">
                      Puteri i namazi
                    </Link>
                  </li>
                  <li>
                    <Link to="/collections/vitamini-minerali" className="hover:text-white transition-colors">
                      Vitamini i minerali
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/bcaa" className="hover:text-white transition-colors">
                      BCAA
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/eaa" className="hover:text-white transition-colors">
                      EAA
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/gainer" className="hover:text-white transition-colors">
                      Gainer
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/kreatine" className="hover:text-white transition-colors">
                      Kreatine
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/preworkout" className="hover:text-white transition-colors">
                      Preworkout
                    </Link>
                  </li>
                  <li>
                    <Link to="/collections/podrska-zglobova" className="hover:text-white transition-colors">
                      Podrška zglobova
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pomoc" className="border-gray-800 border-b-0">
              <AccordionTrigger className="text-white hover:no-underline py-4">
                Pomoć
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-400 pb-4">
                  <li>
                    <Link to="/pages/uslovi-koriscenja" className="hover:text-white transition-colors">
                      Uslovi korišćenja
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages/politika-privatnosti" className="hover:text-white transition-colors">
                      Politika privatnosti
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages/kolacici" className="hover:text-white transition-colors">
                      Kolačići
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </footer>
  );
}

// Social Media Icons
function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}