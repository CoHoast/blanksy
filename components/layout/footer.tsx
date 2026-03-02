import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#FAFAFA] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#FAFAFA] flex items-center justify-center">
                <span className="text-[#0a0a0a] font-black text-2xl">B</span>
              </div>
              <div>
                <span className="font-black text-2xl tracking-tight uppercase">Blanksy</span>
                <div className="h-1 w-full bg-[#E85D04]"></div>
              </div>
            </Link>
            <p className="text-[#FAFAFA]/60 leading-relaxed mb-6 max-w-sm">
              Art for the people. Premium wall art, instant downloads, and museum-quality prints. 
              Make your space speak.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 border-2 border-[#FAFAFA]/30 flex items-center justify-center hover:bg-[#E85D04] hover:border-[#E85D04] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-[#FAFAFA]/30 flex items-center justify-center hover:bg-[#E85D04] hover:border-[#E85D04] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-[#FAFAFA]/30 flex items-center justify-center hover:bg-[#E85D04] hover:border-[#E85D04] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black uppercase tracking-wide text-sm mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/gallery" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">All Designs</Link></li>
              <li><Link href="/gallery?featured=true" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">Collections</Link></li>
              <li><Link href="/gallery?sort=popular" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">Best Sellers</Link></li>
              <li><Link href="/gallery?sort=new" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">New Arrivals</Link></li>
              <li><Link href="/gallery?sale=true" className="text-[#E85D04] hover:underline text-sm font-bold">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-wide text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">Contact</Link></li>
              <li><Link href="/faq" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/pricing" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-wide text-sm mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/shipping" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">Shipping</Link></li>
              <li><Link href="/returns" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">Returns</Link></li>
              <li><Link href="/license" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">License Terms</Link></li>
              <li><Link href="/privacy" className="text-[#FAFAFA]/60 hover:text-[#E85D04] transition-colors text-sm">Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-[#FAFAFA]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#FAFAFA]/40 text-sm">
            © {new Date().getFullYear()} Blanksy. All rights reserved. Art for the people.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-[#FAFAFA]/30 text-xs uppercase tracking-wide">Secure payments via Stripe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
