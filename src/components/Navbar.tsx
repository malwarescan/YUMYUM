'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-thai-cream py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-milkyway text-deep-purple">
          YUMYUM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/products" className="text-deep-purple hover:text-thai-gold transition-colors">
            Products
          </Link>
          <Link href="/login" className="text-deep-purple hover:text-thai-gold transition-colors">
            Login
          </Link>
          <Link href="/checkout" className="bg-thai-gold text-deep-purple px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">
            Checkout
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-deep-purple"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link href="/products" className="block text-deep-purple hover:text-thai-gold transition-colors">
            Products
          </Link>
          <Link href="/login" className="block text-deep-purple hover:text-thai-gold transition-colors">
            Login
          </Link>
          <Link href="/checkout" className="block bg-thai-gold text-deep-purple px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors w-fit">
            Checkout
          </Link>
        </div>
      )}
    </nav>
  );
} 