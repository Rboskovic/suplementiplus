/**
 * Header Component - Suplementiplus
 * Responsive header with logo, navigation, and utility icons
 */

import {Link} from 'react-router';
import {useState} from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4">
          {/* Language/Currency Row */}
          <div className="flex items-center justify-start py-2 text-sm">
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
              <span className="font-medium">RS</span>
            </button>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            {/* Left Navigation */}
            <nav className="flex items-center gap-8">
              <Link
                to="/products"
                className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors"
              >
                PROIZVODI
              </Link>
            </nav>

            {/* Logo - Center */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <span className="text-2xl font-bold tracking-tight">
                SUPLEMENTIPLUS
              </span>
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center gap-6">
              <Link
                to="/articles"
                className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors"
              >
                BLOG
              </Link>

              {/* Utility Icons */}
              <div className="flex items-center gap-4">
                <Link
                  to="/cart"
                  className="hover:text-primary transition-colors"
                  aria-label="Korpa"
                >
                  <CartIcon />
                </Link>
                <Link
                  to="/account"
                  className="hover:text-primary transition-colors"
                  aria-label="Nalog"
                >
                  <AccountIcon />
                </Link>
                <Link
                  to="/wishlist"
                  className="hover:text-primary transition-colors"
                  aria-label="Lista želja"
                >
                  <HeartIcon />
                </Link>
                <Link
                  to="/search"
                  className="hover:text-primary transition-colors"
                  aria-label="Pretraga"
                >
                  <SearchIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Menu"
          >
            <MenuIcon />
          </button>

          {/* Logo - Center */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="text-lg font-bold tracking-tight">
              SUPLEMENTIPLUS
            </span>
          </Link>

          {/* Utility Icons */}
          <div className="flex items-center gap-3">
            <Link to="/cart" aria-label="Korpa">
              <CartIcon className="w-5 h-5" />
            </Link>
            <Link to="/account" aria-label="Nalog">
              <AccountIcon className="w-5 h-5" />
            </Link>
            <Link to="/search" aria-label="Pretraga">
              <SearchIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-bold text-lg">SUPLEMENTIPLUS</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-md"
                  aria-label="Zatvori"
                >
                  <CloseIcon />
                </button>
              </div>

              <nav className="flex flex-col p-4 gap-2">
                <Link
                  to="/"
                  className="px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Početna
                </Link>
                <Link
                  to="/products"
                  className="px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Proizvodi
                </Link>
                <Link
                  to="/articles"
                  className="px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/wishlist"
                  className="px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lista želja
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Icon Components
function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function CartIcon({className = 'w-6 h-6'}: {className?: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function AccountIcon({className = 'w-6 h-6'}: {className?: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function HeartIcon({className = 'w-6 h-6'}: {className?: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function SearchIcon({className = 'w-6 h-6'}: {className?: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}