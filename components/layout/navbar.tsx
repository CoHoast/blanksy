"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-10 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-gold rounded-xl flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">B</span>
            </div>
            <span className="font-serif text-2xl font-semibold tracking-tight">Blanksy</span>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/gallery" className="nav-link text-sm font-medium text-charcoal/70 hover:text-charcoal">
              Gallery
            </Link>
            <Link href="/gallery?featured=true" className="nav-link text-sm font-medium text-charcoal/70 hover:text-charcoal">
              Collections
            </Link>
            <Link href="/gallery?type=print" className="nav-link text-sm font-medium text-charcoal/70 hover:text-charcoal">
              Prints
            </Link>
            <Link href="/pricing" className="nav-link text-sm font-medium text-charcoal/70 hover:text-charcoal">
              Pricing
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="text-charcoal/70 hover:text-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart" className="text-charcoal/70 hover:text-accent transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
            
            <Link href="/sign-in" className="hidden sm:block text-sm font-medium text-charcoal/70 hover:text-charcoal">
              Sign In
            </Link>

            <Link href="/sign-up">
              <Button className="btn-primary text-white px-6 py-2.5 text-sm font-semibold rounded-full border-0">
                Get Started
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden text-charcoal/70 hover:text-charcoal">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
