import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, ShoppingCart, Heart, Download, Check, X, Star, Truck, Shield, RefreshCw, Palette, Sparkles, Eye, Grid3X3, Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data
const categories = [
  { name: "Abstract", count: "2,400+", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=500&fit=crop", color: "#E85D04" },
  { name: "Nature", count: "3,100+", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop", color: "#2A9D8F" },
  { name: "Minimal", count: "1,800+", image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=400&h=500&fit=crop", color: "#1a1a1a" },
  { name: "Typography", count: "1,500+", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=500&fit=crop", color: "#6B5B95" },
  { name: "Vintage", count: "1,200+", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop", color: "#B5838D" },
  { name: "Photography", count: "2,800+", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop", color: "#3D5A80" },
];

const colorPalettes = [
  { name: "Earth Tones", colors: ["#D4A373", "#CCD5AE", "#E9EDC9", "#FEFAE0"], count: 1240 },
  { name: "Ocean Blues", colors: ["#03045E", "#0077B6", "#00B4D8", "#90E0EF"], count: 890 },
  { name: "Warm Sunset", colors: ["#FF6B6B", "#FEC89A", "#FFD93D", "#FF8FA3"], count: 1120 },
  { name: "Monochrome", colors: ["#1a1a1a", "#4a4a4a", "#8a8a8a", "#cacaca"], count: 2100 },
  { name: "Forest", colors: ["#2D6A4F", "#40916C", "#52B788", "#95D5B2"], count: 780 },
  { name: "Blush Pink", colors: ["#FFCAD4", "#F4ACB7", "#D8E2DC", "#FFE5D9"], count: 650 },
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

const staffPicks = [
  { id: 1, title: "Ethereal Mountains", curator: "Sarah", note: "The way light plays on these peaks reminds me of early morning hikes.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop", price: 14.99 },
  { id: 2, title: "Abstract Emotions", curator: "Marcus", note: "Bold colors that transform any room into a conversation starter.", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=800&fit=crop", price: 12.99 },
  { id: 3, title: "Serene Botanicals", curator: "Emma", note: "Brings the outdoors in — perfect for creating a calm workspace.", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=800&fit=crop", price: 11.99 },
];

const testimonials = [
  { name: "Sarah M.", location: "New York", text: "The quality is incredible. My living room looks like a gallery now!", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { name: "James K.", location: "Los Angeles", text: "Fast download, perfect resolution. Printed at 24x36 and it's stunning.", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { name: "Emily R.", location: "Chicago", text: "Finally found affordable art that doesn't look cheap. Love it!", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
];

const galleryWalls = [
  { name: "Modern Minimalist", pieces: 4, image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=400&fit=crop" },
  { name: "Eclectic Mix", pieces: 6, image: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=600&h=400&fit=crop" },
  { name: "Statement Piece", pieces: 1, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" },
];

export default function Home() {
  return (
    <>
      {/* Promo Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-charcoal via-charcoal to-accent/90 text-cream py-2.5 text-center text-sm font-medium overflow-hidden">
        <div className="animate-marquee-subtle">
          <span className="text-gold">✨ FLASH SALE:</span> Get 30% off your first order with code <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">WELCOME30</span>
          <span className="mx-4 text-cream/30">|</span>
          <span className="text-cream/70">Free shipping on orders $50+</span>
          <span className="mx-4 text-cream/30">|</span>
          <span className="text-cream/70">Instant digital downloads</span>
        </div>
      </div>

      {/* Hero Section - Split Design */}
      <section className="relative min-h-screen pt-32 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left - Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-20 bg-cream">
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-sm">Over 10,000 Curated Designs</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] mb-6 text-charcoal">
                Art that tells
                <br />
                <span className="relative">
                  <span className="relative z-10">your story</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-4 text-gold/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="4"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-charcoal/60 leading-relaxed mb-8">
                Premium wall art, instant downloads, and museum-quality prints. Transform your space with designs that speak to who you are.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/gallery">
                  <Button className="bg-charcoal hover:bg-charcoal/90 text-cream px-8 py-6 text-base font-semibold rounded-full inline-flex items-center space-x-2 shadow-xl shadow-charcoal/20 group">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/quiz">
                  <Button variant="outline" className="px-8 py-6 text-base font-semibold rounded-full border-2 border-charcoal/20 hover:border-accent hover:text-accent group">
                    <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Find Your Style
                  </Button>
                </Link>
              </div>

              {/* Mini Stats */}
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-cream bg-charcoal/10 overflow-hidden">
                      <Image src={`https://images.unsplash.com/photo-${1494790108377 + i * 1000}-be9c29b29330?w=50&h=50&fit=crop`} alt="" width={32} height={32} className="object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-cream bg-accent text-white text-xs font-bold flex items-center justify-center">
                    50k+
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                  <span className="ml-2 text-charcoal/60">4.9/5 from 12,000+ reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative bg-charcoal hidden lg:block">
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=1600&fit=crop" 
                alt="Interior" 
                fill 
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-charcoal/50 to-charcoal"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="relative z-10 h-full flex items-center justify-center p-12">
              <div className="relative">
                {/* Main Frame */}
                <div className="relative bg-white p-3 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="w-72 aspect-[3/4] rounded overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=533&fit=crop" alt="" fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gold text-charcoal px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    $12.99
                  </div>
                </div>
                
                {/* Secondary Frame */}
                <div className="absolute -left-32 top-20 bg-white p-2 rounded-lg shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="w-40 aspect-[3/4] rounded overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300&h=400&fit=crop" alt="" fill className="object-cover" />
                  </div>
                </div>

                {/* Quick Action */}
                <div className="absolute -right-20 top-10 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Download className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal/50">Instant</p>
                      <p className="font-semibold text-sm">Download</p>
                    </div>
                  </div>
                </div>

                {/* View in Room Badge */}
                <div className="absolute -bottom-8 -left-8 bg-charcoal text-cream rounded-2xl px-4 py-3 shadow-xl flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium">View in your room</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Color - UNIQUE FEATURE */}
      <section className="py-16 px-6 bg-white border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Palette className="w-6 h-6 text-accent" />
              <h2 className="font-serif text-2xl font-medium">Shop by Color</h2>
            </div>
            <Link href="/gallery?view=colors" className="text-sm font-medium text-accent hover:underline">View All Palettes</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {colorPalettes.map((palette) => (
              <Link key={palette.name} href={`/gallery?palette=${palette.name.toLowerCase().replace(' ', '-')}`}>
                <div className="group cursor-pointer">
                  <div className="flex h-20 rounded-xl overflow-hidden mb-3 shadow-sm group-hover:shadow-lg transition-shadow">
                    {palette.colors.map((color, i) => (
                      <div key={i} className="flex-1 transition-transform group-hover:scale-y-110" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <p className="font-medium text-sm text-charcoal">{palette.name}</p>
                  <p className="text-xs text-charcoal/50">{palette.count} designs</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Room */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Find Your Perfect Fit</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium">Shop by Room</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rooms.map((room) => (
              <Link key={room.name} href={`/gallery?room=${room.name.toLowerCase().replace(' ', '-')}`}>
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                  <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent group-hover:from-charcoal/95 transition-colors"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-white text-2xl font-medium mb-1">{room.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{room.count} designs</p>
                    <div className="flex items-center text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Picks - UNIQUE SECTION */}
      <section className="py-20 px-6 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Curated For You</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium">Staff Picks</h2>
            </div>
            <Link href="/gallery?collection=staff-picks" className="hidden md:flex items-center space-x-2 text-sm font-medium text-gold hover:underline">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {staffPicks.map((pick) => (
              <Link key={pick.id} href={`/design/${pick.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                    <Image src={pick.image} alt={pick.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl font-medium">{pick.title}</h3>
                      <span className="text-gold font-bold">${pick.price}</span>
                    </div>
                    <p className="text-cream/60 text-sm italic">"{pick.note}"</p>
                    <p className="text-gold text-sm font-medium">— Picked by {pick.curator}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Wall Ideas - UNIQUE SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Get Inspired</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Gallery Wall Ideas</h2>
            <p className="text-charcoal/60 max-w-lg mx-auto">Pre-designed combinations to help you create the perfect gallery wall</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryWalls.map((wall) => (
              <Link key={wall.name} href={`/gallery?collection=${wall.name.toLowerCase().replace(' ', '-')}`}>
                <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
                  <Image src={wall.image} alt={wall.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/60 transition-colors flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="font-serif text-2xl font-medium mb-2">{wall.name}</h3>
                      <p className="text-white/70 text-sm">{wall.pieces} {wall.pieces === 1 ? 'piece' : 'pieces'}</p>
                      <Button variant="outline" className="mt-4 border-white/50 text-white hover:bg-white hover:text-charcoal rounded-full text-sm">
                        Shop This Look
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-20 px-6 bg-cream">
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
                    
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button className="bg-white text-charcoal px-4 py-2 rounded-full text-xs font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        Quick View
                      </button>
                    </div>
                    
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

      {/* Browse by Style */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Curated Collections</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium">Browse by Style</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.name} href={`/gallery?category=${cat.name.toLowerCase()}`}>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                  </div>
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

      {/* Social Proof */}
      <section className="py-20 px-6 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95 text-cream">
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
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-gold/30 transition-colors">
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

          {/* As Seen In */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-center text-cream/40 text-sm uppercase tracking-widest mb-8">As Featured In</p>
            <div className="flex justify-center items-center space-x-12 opacity-50">
              <span className="font-serif text-2xl">Architectural Digest</span>
              <span className="font-serif text-2xl">Elle Decor</span>
              <span className="font-serif text-2xl">House Beautiful</span>
              <span className="font-serif text-2xl">Dwell</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-6 bg-cream border-y border-charcoal/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Download, title: "Instant Download", desc: "Get your files immediately" },
              { icon: Shield, title: "Premium Quality", desc: "High-res, print-ready files" },
              { icon: Truck, title: "Fast Shipping", desc: "Prints ship in 3-5 days" },
              { icon: RefreshCw, title: "Easy Returns", desc: "30-day money-back guarantee" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-charcoal/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-accent via-accent to-gold text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
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
            <Link href="/quiz">
              <Button variant="outline" className="px-10 py-6 text-base font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10">
                Take Style Quiz
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
