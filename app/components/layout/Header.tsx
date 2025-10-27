/**
 * Header Component - Suplementiplus
 * Responsive header with logo, navigation, and utility icons
 */

import {Link} from 'react-router';
import {useState} from 'react';
import {Menu, X, ShoppingCart, User, Heart, Search} from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="max-w-[1600px] mx-auto px-6 xl:px-8">
          {/* Language/Currency Row */}
          <div className="flex items-center justify-start py-2 text-sm border-b border-gray-100">
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
              <span className="font-medium">RS</span>
            </button>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            {/* Left - PROIZVODI */}
            <nav className="flex-1">
              <Link
                to="/products"
                className="text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors"
              >
                PROIZVODI
              </Link>
            </nav>

            {/* Center - Logo */}
            <Link to="/" className="flex-1 flex justify-center">
              <span className="text-2xl font-bold tracking-tight">
                SUPLEMENTIPLUS
              </span>
            </Link>

            {/* Right - BLOG + Icons */}
            <div className="flex-1 flex items-center justify-end gap-8">
              <Link
                to="/articles"
                className="text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors"
              >
                BLOG
              </Link>

              {/* Utility Icons */}
              <div className="flex items-center gap-5">
                <Link
                  to="/cart"
                  className="hover:text-primary transition-colors"
                  aria-label="Korpa"
                >
                  <ShoppingCart className="w-5 h-5" />
                </Link>
                <Link
                  to="/account"
                  className="hover:text-primary transition-colors"
                  aria-label="Nalog"
                >
                  <User className="w-5 h-5" />
                </Link>
                <Link
                  to="/wishlist"
                  className="hover:text-primary transition-colors"
                  aria-label="Lista želja"
                >
                  <Heart className="w-5 h-5" />
                </Link>
                <Link
                  to="/search"
                  className="hover:text-primary transition-colors"
                  aria-label="Pretraga"
                >
                  <Search className="w-5 h-5" />
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
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
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
                <span className="font-bold text-lg">SUPLEMENTIPLUS</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Zatvori"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col p-4 gap-2">
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
                  Proizvodi
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