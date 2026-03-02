"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-10 left-0 right-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-md border-b-4 border-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo — Bold Stencil Style */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-[#0a0a0a] flex items-center justify-center transform group-hover:rotate-3 transition-transform">
                <span className="text-[#FAFAFA] font-black text-2xl tracking-tighter">B</span>
              </div>
              {/* Spray paint dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E85D04] rounded-full"></div>
            </div>
            <div>
              <span className="font-black text-2xl tracking-tight text-[#0a0a0a] uppercase">Blanksy</span>
              <div className="h-1 w-full bg-[#E85D04] transform -skew-x-12"></div>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/gallery" className="nav-link-bold text-[#0a0a0a]/70 hover:text-[#0a0a0a]">
              Shop
            </Link>
            <Link href="/gallery?featured=true" className="nav-link-bold text-[#0a0a0a]/70 hover:text-[#0a0a0a]">
              Collections
            </Link>
            <Link href="/pricing" className="nav-link-bold text-[#0a0a0a]/70 hover:text-[#0a0a0a]">
              Pricing
            </Link>
            <Link href="/about" className="nav-link-bold text-[#0a0a0a]/70 hover:text-[#0a0a0a]">
              About
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-[#0a0a0a] hover:text-[#FAFAFA] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart" className="relative p-2 hover:bg-[#0a0a0a] hover:text-[#FAFAFA] transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E85D04] text-[#FAFAFA] text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </Link>
            
            <Link href="/sign-in" className="hidden sm:block text-sm font-bold uppercase tracking-wide text-[#0a0a0a]/70 hover:text-[#0a0a0a]">
              Login
            </Link>

            <Link href="/gallery" className="hidden sm:block">
              <button className="btn-bold text-sm py-2 px-4">
                Shop Now
              </button>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-[#0a0a0a] hover:text-[#FAFAFA] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] text-[#FAFAFA] border-b-4 border-[#E85D04]">
            <div className="px-6 py-8 space-y-4">
              <Link href="/gallery" className="block text-lg font-bold uppercase tracking-wide hover:text-[#E85D04]">Shop</Link>
              <Link href="/gallery?featured=true" className="block text-lg font-bold uppercase tracking-wide hover:text-[#E85D04]">Collections</Link>
              <Link href="/pricing" className="block text-lg font-bold uppercase tracking-wide hover:text-[#E85D04]">Pricing</Link>
              <Link href="/about" className="block text-lg font-bold uppercase tracking-wide hover:text-[#E85D04]">About</Link>
              <hr className="border-[#FAFAFA]/20" />
              <Link href="/sign-in" className="block text-lg font-bold uppercase tracking-wide hover:text-[#E85D04]">Login</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
