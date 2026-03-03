"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-8 border-b border-ink/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-ink flex items-center justify-center">
            <span className="text-paper font-stencil text-xl">B</span>
          </div>
          <span className="font-stencil text-2xl tracking-wide">BLANKSY</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-sm">
          <Link href="/gallery" className="hover:text-pop transition-colors">
            Gallery
          </Link>
          <Link href="/collections" className="hover:text-pop transition-colors">
            Collections
          </Link>
          <Link href="/pricing" className="hover:text-pop transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-pop transition-colors">
            About
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-5">
          <Link href="/sign-in" className="text-sm hover:text-pop transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="bg-ink text-paper px-5 py-2.5 text-sm font-medium hover:bg-pop transition-colors"
          >
            Get Started
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-ink/10 pt-4">
          <div className="flex flex-col space-y-4">
            <Link href="/gallery" className="hover:text-pop transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/collections" className="hover:text-pop transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Collections
            </Link>
            <Link href="/pricing" className="hover:text-pop transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/about" className="hover:text-pop transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/sign-in" className="hover:text-pop transition-colors sm:hidden" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
