import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-charcoal/10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-gold rounded-xl flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">B</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Blanksy</span>
            </Link>
            <p className="text-charcoal/50 text-sm leading-relaxed mb-6 max-w-sm">
              Premium art prints and digital downloads for design lovers worldwide. 
              Transform your space with art that speaks to you.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-charcoal/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-charcoal/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-charcoal/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/gallery" className="text-charcoal/50 text-sm hover:text-accent transition-colors">All Designs</Link></li>
              <li><Link href="/gallery?featured=true" className="text-charcoal/50 text-sm hover:text-accent transition-colors">Collections</Link></li>
              <li><Link href="/gallery?sort=popular" className="text-charcoal/50 text-sm hover:text-accent transition-colors">Bestsellers</Link></li>
              <li><Link href="/gallery?sort=newest" className="text-charcoal/50 text-sm hover:text-accent transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-charcoal/50 text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-charcoal/50 text-sm hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-charcoal/50 text-sm hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-charcoal/50 text-sm hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/shipping" className="text-charcoal/50 text-sm hover:text-accent transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-charcoal/50 text-sm hover:text-accent transition-colors">Returns</Link></li>
              <li><Link href="/license" className="text-charcoal/50 text-sm hover:text-accent transition-colors">License Terms</Link></li>
              <li><Link href="/privacy" className="text-charcoal/50 text-sm hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-charcoal/40 text-sm">© {new Date().getFullYear()} Blanksy. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-charcoal/30 text-sm">Powered by Stripe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
