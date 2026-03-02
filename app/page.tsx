import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, ShoppingCart, Heart, Download, Check, X, Star, Truck, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data
const categories = [
  { name: "Abstract", count: "2,400+", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=500&fit=crop" },
  { name: "Nature", count: "3,100+", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop" },
  { name: "Minimal", count: "1,800+", image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=400&h=500&fit=crop" },
  { name: "Typography", count: "1,500+", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=500&fit=crop" },
  { name: "Vintage", count: "1,200+", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop" },
  { name: "Photography", count: "2,800+", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop" },
];

const rooms = [
  { name: "Living Room", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop", count: "4,200+" },
  { name: "Bedroom", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop", count: "3,100+" },
  { name: "Office", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", count: "2,400+" },
  { name: "Kids Room", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop", count: "1,800+" },
];

const trendingDesigns = [
  { id: 1, title: "Ocean Waves Abstract", category: "Abstract", price: 12.99, originalPrice: 19.99, image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=533&fit=crop", badge: "Best Seller" },
  { id: 2, title: "Botanical Dreams", category: "Nature", price: 14.99, originalPrice: null, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=533&fit=crop", badge: "New" },
  { id: 3, title: "Sunset Geometry", category: "Abstract", price: 9.99, originalPrice: 14.99, image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=533&fit=crop", badge: "Sale" },
  { id: 4, title: "Modern Lines", category: "Minimal", price: 12.99, originalPrice: null, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=533&fit=crop", badge: null },
  { id: 5, title: "Desert Dunes", category: "Photography", price: 11.99, originalPrice: 16.99, image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=533&fit=crop", badge: "Trending" },
  { id: 6, title: "Vintage Bloom", category: "Vintage", price: 13.99, originalPrice: null, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=533&fit=crop", badge: null },
];

const testimonials = [
  { name: "Sarah M.", location: "New York", text: "The quality is incredible. My living room looks like a gallery now!", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { name: "James K.", location: "Los Angeles", text: "Fast download, perfect resolution. Printed at 24x36 and it's stunning.", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { name: "Emily R.", location: "Chicago", text: "Finally found affordable art that doesn't look cheap. Love it!", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
];

export default function Home() {
  return (
    <>
      {/* Promo Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-charcoal text-cream py-2.5 text-center text-sm font-medium">
        <span className="text-gold">🔥 FLASH SALE:</span> Get 30% off your first order with code <span className="font-bold text-white">WELCOME30</span>
        <span className="hidden sm:inline"> — Limited time only!</span>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-44 pb-20 px-6 overflow-hidden bg-charcoal text-cream">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop" 
            alt="Interior" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span className="text-gold font-medium text-sm">Over 10,000 Premium Designs</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-6">
              Transform your walls into <span className="text-gold italic">art galleries</span>
            </h1>
            
            <p className="text-xl text-cream/70 leading-relaxed mb-8 max-w-lg">
              Discover museum-quality prints and instant digital downloads. From abstract to photography — find art that speaks to your space.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/gallery">
                <Button className="bg-gold hover:bg-gold/90 text-charcoal px-8 py-6 text-base font-semibold rounded-full border-0 inline-flex items-center space-x-2 shadow-xl shadow-gold/30">
                  <span>Shop All Prints</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/gallery?type=digital">
                <Button variant="outline" className="px-8 py-6 text-base font-semibold rounded-full border-2 border-cream/30 text-cream hover:bg-cream/10">
                  Digital Downloads
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-sm text-cream/60">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-gold" />
                <span>Free Shipping $50+</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-gold" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-5 h-5 text-gold" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Preview Cards */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <div className="w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
              <Image src="https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=533&fit=crop" alt="" fill className="object-cover" />
            </div>
            <div className="absolute -left-20 top-20 w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform">
              <Image src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=533&fit=crop" alt="" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white text-charcoal rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-1 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-sm font-medium">50,000+ Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Room - NEW */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Find Your Perfect Fit</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium">Shop by Room</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rooms.map((room) => (
              <Link key={room.name} href={`/gallery?room=${room.name.toLowerCase().replace(' ', '-')}`}>
                <div className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
                  <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-white text-2xl font-medium mb-1">{room.name}</h3>
                    <p className="text-white/70 text-sm">{room.count} designs</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now - Enhanced */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">🔥 Hot Right Now</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium">Trending Designs</h2>
            </div>
            <Link href="/gallery?sort=trending" className="hidden md:flex items-center space-x-2 text-sm font-semibold text-accent hover:text-accent-dark group">
              <span>View All</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trendingDesigns.map((design) => (
              <Link key={design.id} href={`/design/${design.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 mb-3">
                    <Image src={design.image} alt={design.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    
                    {/* Badge */}
                    {design.badge && (
                      <span className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full ${
                        design.badge === 'Sale' ? 'bg-red-500 text-white' :
                        design.badge === 'New' ? 'bg-charcoal text-white' :
                        design.badge === 'Best Seller' ? 'bg-gold text-charcoal' :
                        'bg-accent text-white'
                      }`}>
                        {design.badge}
                      </span>
                    )}
                    
                    {/* Quick actions */}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button className="bg-white text-charcoal px-4 py-2 rounded-full text-xs font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        Quick View
                      </button>
                    </div>
                    
                    {/* Wishlist */}
                    <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent hover:text-white">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <h3 className="font-medium text-sm text-charcoal truncate">{design.title}</h3>
                  <p className="text-xs text-charcoal/50 mb-1">{design.category}</p>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-accent">${design.price}</span>
                    {design.originalPrice && (
                      <span className="text-xs text-charcoal/40 line-through">${design.originalPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Curated Collections</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium">Browse by Style</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.name} href={`/gallery?category=${cat.name.toLowerCase()}`}>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-white text-lg font-medium">{cat.name}</h3>
                    <p className="text-white/60 text-xs">{cat.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 px-6 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-gold text-gold" />)}
            </div>
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Loved by 50,000+ Customers</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium">What People Are Saying</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-1 mb-4">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-cream/80 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={t.image} alt={t.name} width={40} height={40} className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-cream/50 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-6 bg-white border-y border-charcoal/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">Instant Download</h3>
              <p className="text-sm text-charcoal/60">Get your files immediately after purchase</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">Premium Quality</h3>
              <p className="text-sm text-charcoal/60">High-resolution files ready to print</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">Fast Shipping</h3>
              <p className="text-sm text-charcoal/60">Prints ship in 3-5 business days</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">Easy Returns</h3>
              <p className="text-sm text-charcoal/60">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Save More with Subscriptions</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Unlimited Downloads</h2>
            <p className="text-charcoal/60 max-w-lg mx-auto">Get access to our entire library with a monthly subscription</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-charcoal/10 text-center">
              <p className="font-serif text-xl font-medium mb-2">Starter</p>
              <p className="text-4xl font-bold mb-1">$19<span className="text-lg font-normal text-charcoal/50">/mo</span></p>
              <p className="text-sm text-charcoal/50 mb-4">5 downloads/month</p>
              <Button variant="outline" className="w-full rounded-full">Get Started</Button>
            </div>
            <div className="bg-charcoal text-cream rounded-2xl p-6 text-center transform md:-translate-y-2 shadow-xl relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</span>
              <p className="font-serif text-xl font-medium mb-2 pt-2">Pro</p>
              <p className="text-4xl font-bold mb-1">$49<span className="text-lg font-normal text-cream/50">/mo</span></p>
              <p className="text-sm text-cream/50 mb-4">25 downloads/month</p>
              <Button className="w-full rounded-full bg-gold hover:bg-gold/90 text-charcoal border-0">Start Free Trial</Button>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-charcoal/10 text-center">
              <p className="font-serif text-xl font-medium mb-2">Unlimited</p>
              <p className="text-4xl font-bold mb-1">$99<span className="text-lg font-normal text-charcoal/50">/mo</span></p>
              <p className="text-sm text-charcoal/50 mb-4">Unlimited downloads</p>
              <Button variant="outline" className="w-full rounded-full">Go Unlimited</Button>
            </div>
          </div>
          
          <p className="text-center text-charcoal/60 mt-8">
            Or buy single designs starting at <span className="font-bold text-accent">$9.99</span>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-accent via-accent to-gold text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-medium mb-6">
            Ready to transform your space?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-lg mx-auto">
            Join 50,000+ design lovers who've discovered the perfect art for their homes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gallery">
              <Button className="bg-white text-accent hover:bg-white/90 px-10 py-6 text-base font-semibold rounded-full shadow-xl">
                Start Shopping
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="px-10 py-6 text-base font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
