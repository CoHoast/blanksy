import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, ShoppingCart, Heart, Download, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data for demo
const categories = [
  { name: "Abstract", count: "2,400+", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=500&fit=crop" },
  { name: "Nature", count: "3,100+", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop" },
  { name: "Minimal", count: "1,800+", image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=400&h=500&fit=crop" },
  { name: "Typography", count: "1,500+", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=500&fit=crop" },
];

const trendingDesigns = [
  { id: 1, title: "Ocean Waves Abstract", category: "Abstract", style: "Blue Tones", price: 12.99, image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=533&fit=crop" },
  { id: 2, title: "Botanical Dreams", category: "Nature", style: "Green Tones", price: 14.99, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=533&fit=crop", featured: true },
  { id: 3, title: "Sunset Geometry", category: "Abstract", style: "Warm Tones", price: 9.99, image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=533&fit=crop" },
  { id: 4, title: "Modern Lines", category: "Minimal", style: "Neutral", price: 12.99, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=533&fit=crop", new: true },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-accent font-semibold text-sm tracking-wide">10,000+ Original Designs</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-6">
                Art that <span className="gradient-text">ignites</span> your space
              </h1>
              <p className="text-xl text-charcoal/60 leading-relaxed mb-8">
                Discover our curated collection of premium wall art. Download instantly or order museum-quality prints delivered to your door.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/gallery">
                  <Button className="btn-primary text-white px-8 py-6 text-sm font-semibold rounded-full border-0 inline-flex items-center space-x-2">
                    <span>Explore Gallery</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="px-8 py-6 text-sm font-semibold rounded-full border-2 border-charcoal/20 hover:border-accent hover:text-accent">
                    View Pricing
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 flex flex-wrap gap-4">
                <div className="stat-box rounded-2xl px-5 py-4">
                  <p className="text-3xl font-serif font-bold gradient-text">10K+</p>
                  <p className="text-xs text-charcoal/50 uppercase tracking-wide font-medium">Designs</p>
                </div>
                <div className="stat-box rounded-2xl px-5 py-4">
                  <p className="text-3xl font-serif font-bold gradient-text">50K+</p>
                  <p className="text-xs text-charcoal/50 uppercase tracking-wide font-medium">Downloads</p>
                </div>
                <div className="stat-box rounded-2xl px-5 py-4">
                  <p className="text-3xl font-serif font-bold gradient-text">4.9★</p>
                  <p className="text-xs text-charcoal/50 uppercase tracking-wide font-medium">Rating</p>
                </div>
              </div>
            </div>

            {/* Right - Hero Images */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl animate-float">
                    <Image src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=533&fit=crop" alt="Abstract Art" fill className="object-cover" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl" style={{ animationDelay: "1s" }}>
                    <Image src="https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=400&fit=crop" alt="Minimal Art" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl" style={{ animationDelay: "0.5s" }}>
                    <Image src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop" alt="Nature Art" fill className="object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl" style={{ animationDelay: "1.5s" }}>
                    <Image src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=533&fit=crop" alt="Modern Art" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 flex items-center space-x-4 glow">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-gold rounded-xl flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-charcoal">Instant Download</p>
                  <p className="text-sm text-charcoal/50">High-res files ready</p>
                </div>
              </div>

              {/* New badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-gold rounded-2xl shadow-2xl p-4 text-white">
                <p className="font-bold text-lg">New!</p>
                <p className="text-sm opacity-90">500+ designs added</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Curated Collections</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Browse by Style</h2>
            <p className="text-charcoal/60 max-w-lg mx-auto text-lg">Find the perfect piece for your aesthetic</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link key={cat.name} href={`/gallery?category=${cat.name.toLowerCase()}`}>
                <div className="category-card group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-white text-2xl font-medium">{cat.name}</h3>
                    <p className="text-white/70 text-sm mt-1">{cat.count} designs</p>
                    <div className="mt-3 w-12 h-1 bg-gradient-to-r from-accent to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Designs */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Hot Right Now</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-2">Trending Designs</h2>
              <p className="text-charcoal/60 text-lg">This week&apos;s most popular picks</p>
            </div>
            <Link href="/gallery" className="hidden md:flex items-center space-x-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors group">
              <span>View All</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingDesigns.map((design) => (
              <Link key={design.id} href={`/design/${design.id}`}>
                <div className="design-card group cursor-pointer bg-white rounded-3xl p-3 shadow-lg">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-4">
                    <Image src={design.image} alt={design.title} fill className="object-cover" />
                    <div className="design-overlay absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent flex items-end justify-center pb-6">
                      <button className="bg-white text-charcoal px-6 py-3 rounded-full text-sm font-semibold transform hover:scale-105 transition-transform shadow-lg">
                        Quick View
                      </button>
                    </div>
                    <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-accent hover:text-white">
                      <Heart className="w-5 h-5" />
                    </button>
                    {design.featured && (
                      <span className="absolute top-3 left-3 bg-gradient-to-r from-accent to-gold text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        🔥 Bestseller
                      </span>
                    )}
                    {design.new && (
                      <span className="absolute top-3 left-3 bg-charcoal text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        ✨ New
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-charcoal mb-1 truncate">{design.title}</h3>
                  <p className="text-sm text-charcoal/50 mb-3 truncate">{design.category} • {design.style}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg gradient-text">${design.price.toFixed(2)}</span>
                    <span className="text-xs text-white bg-accent/90 px-2 py-1 rounded-full font-medium">Digital</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Simple Process</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">How It Works</h2>
            <p className="text-cream/60 max-w-lg mx-auto text-lg">From discovery to delivery in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Discover", desc: "Browse our curated collection of 10,000+ original designs. Filter by style, color, room, or mood.", icon: Search },
              { step: 2, title: "Choose", desc: "Download high-resolution digital files instantly, or order premium prints shipped right to your door.", icon: ShoppingCart },
              { step: 3, title: "Enjoy", desc: "Transform your space with art that reflects your unique style. Print at any size, anywhere.", icon: Heart },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-gold rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent/30">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-accent font-bold text-sm mb-2">STEP {item.step}</div>
                <h3 className="font-serif text-2xl font-medium mb-3">{item.title}</h3>
                <p className="text-cream/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Flexible Options</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Simple Pricing</h2>
            <p className="text-charcoal/60 max-w-lg mx-auto text-lg">Download à la carte or subscribe for more value</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border-2 border-charcoal/10 hover:border-accent/30 transition-colors">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-medium mb-2">Starter</h3>
                <p className="text-charcoal/50 text-sm">Perfect for personal projects</p>
              </div>
              <p className="text-5xl font-serif font-bold mb-1">$19<span className="text-xl text-charcoal/50 font-normal">/mo</span></p>
              <p className="text-sm text-charcoal/50 mb-8">Billed monthly</p>
              <ul className="space-y-4 mb-8">
                {[
                  { text: "5 downloads per month", included: true },
                  { text: "High-resolution files", included: true },
                  { text: "Personal use only", included: true },
                  { text: "Commercial license", included: false },
                ].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm">
                    <div className={`w-5 h-5 ${feature.included ? "bg-accent/10" : "bg-charcoal/5"} rounded-full flex items-center justify-center flex-shrink-0`}>
                      {feature.included ? <Check className="w-3 h-3 text-accent" /> : <X className="w-3 h-3 text-charcoal/30" />}
                    </div>
                    <span className={feature.included ? "" : "text-charcoal/40"}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full py-6 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-cream">
                Get Started
              </Button>
            </div>

            {/* Pro - Popular */}
            <div className="pricing-popular rounded-3xl p-8 text-cream transform md:-translate-y-4 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-accent to-gold text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">⭐ MOST POPULAR</span>
              </div>
              <div className="mb-6 pt-2">
                <h3 className="font-serif text-2xl font-medium mb-2">Pro</h3>
                <p className="text-cream/50 text-sm">For creators & small business</p>
              </div>
              <p className="text-5xl font-serif font-bold mb-1">$49<span className="text-xl text-cream/50 font-normal">/mo</span></p>
              <p className="text-sm text-cream/50 mb-8">Billed monthly</p>
              <ul className="space-y-4 mb-8">
                {["25 downloads per month", "High-resolution files", "Commercial license", "10% off print orders"].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="btn-primary w-full py-6 rounded-full text-sm font-semibold text-white border-0">
                Start Free Trial
              </Button>
            </div>

            {/* Unlimited */}
            <div className="bg-white rounded-3xl p-8 border-2 border-charcoal/10 hover:border-accent/30 transition-colors">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-medium mb-2">Unlimited</h3>
                <p className="text-charcoal/50 text-sm">For agencies & power users</p>
              </div>
              <p className="text-5xl font-serif font-bold mb-1">$99<span className="text-xl text-charcoal/50 font-normal">/mo</span></p>
              <p className="text-sm text-charcoal/50 mb-8">Billed monthly</p>
              <ul className="space-y-4 mb-8">
                {["Unlimited downloads", "Extended commercial license", "API access", "20% off print orders"].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm">
                    <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full py-6 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-cream">
                Go Unlimited
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-charcoal/60">
              Not ready to subscribe?{" "}
              <Link href="/gallery" className="text-accent font-semibold hover:underline">
                Buy single designs from $9.99
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90 rounded-[2.5rem] p-12 md:p-16 text-center text-cream relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gold/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Ready to transform<br />your space?
              </h2>
              <p className="text-cream/60 text-lg mb-10 max-w-lg mx-auto">
                Join thousands of design lovers who&apos;ve found their perfect art.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/gallery">
                  <Button className="btn-primary text-white px-10 py-6 text-base font-semibold rounded-full border-0 inline-flex items-center space-x-2 shadow-xl shadow-accent/30">
                    <span>Start Exploring</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="px-10 py-6 text-base font-semibold text-cream border-2 border-cream/30 rounded-full hover:bg-cream/10">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
