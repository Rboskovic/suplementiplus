/**
 * Header Component - Suplementiplus
 * Responsive header with logo, navigation, and utility icons
 * Refactored to match VOXBERG design
 */

import {Link} from 'react-router';
import {useState} from 'react';
import {Menu, X, ShoppingCart, User, Heart, Search} from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="max-w-[1600px] mx-auto px-6 xl:px-8">
          {/* Single Row Navigation */}
          <div className="flex items-center justify-between py-5">
            {/* Far Left - Language/Currency Selector */}
            <div className="flex items-center flex-1">
              <button className="flex items-center gap-2 text-sm text-gray-900 hover:text-gray-600 transition-colors font-bold">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0682/0239/7857/files/serbia-flag-round-circle-icon.svg?v=1761602689" 
                  alt="Serbia"
                  className="w-5 h-5"
                />
                <span className="text-gray-400">|</span>
                <span>RSD</span>
              </button>
            </div>

            {/* Center Group - PRODUKTY + Logo + BLOG */}
            <div className="flex items-center gap-12">
              {/* PRODUKTY Link */}
              <Link
                to="/products"
                className="text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors"
              >
                PRODUKTY
              </Link>

              {/* Logo */}
              <Link to="/">
                <span className="text-3xl font-black uppercase tracking-tight text-gray-900">
                  VOXBERG
                </span>
              </Link>

              {/* BLOG Link */}
              <Link
                to="/articles"
                className="text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors"
              >
                BLOG
              </Link>
            </div>

            {/* Far Right - Utility Icons */}
            <div className="flex items-center justify-end gap-5 flex-1">
              <Link
                to="/cart"
                className="text-gray-900 hover:text-gray-600 transition-colors"
                aria-label="Korpa"
              >
                <ShoppingCart className="w-5 h-5" />
              </Link>
              <Link
                to="/account"
                className="text-gray-900 hover:text-gray-600 transition-colors"
                aria-label="Nalog"
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                to="/search"
                className="text-gray-900 hover:text-gray-600 transition-colors"
                aria-label="Pretraga"
              >
                <Search className="w-5 h-5" />
              </Link>
              <button
                className="text-gray-900 hover:text-gray-600 transition-colors"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
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
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo - Center */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="text-lg font-bold tracking-tight">
              VOXBERG
            </span>
          </Link>

          {/* Utility Icons */}
          <div className="flex items-center gap-3">
            <Link to="/cart" aria-label="Korpa">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link to="/account" aria-label="Nalog">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/search" aria-label="Pretraga">
              <Search className="w-5 h-5" />
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
            <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
                <span className="font-bold text-lg">VOXBERG</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Zatvori"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col p-4 gap-2">
                {/* Language Selector in Mobile Menu */}
                <div className="px-4 py-3 border-b">
                  <button className="flex items-center gap-2 text-sm text-gray-700">
                    <img 
                      src="https://cdn.shopify.com/s/files/1/0682/0239/7857/files/serbia-flag-round-circle-icon.svg?v=1761602689" 
                      alt="Serbia"
                      className="w-5 h-5"
                    />
                    <span className="font-medium">| RSD</span>
                  </button>
                </div>

                <Link
                  to="/"
                  className="px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Početna
                </Link>
                <Link
                  to="/products"
                  className="px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Produkty
                </Link>
                <Link
                  to="/articles"
                  className="px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/wishlist"
                  className="px-4 py-3 text-base font-medium hover:bg-gray-100 rounded-lg transition-colors"
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