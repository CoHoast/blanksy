import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Star, Truck, Shield, RefreshCw, Play, Zap } from "lucide-react";

const categories = [
  { name: "Abstract", count: "2,400+", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=600&fit=crop" },
  { name: "Nature", count: "3,100+", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop" },
  { name: "Minimal", count: "1,800+", image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=400&h=600&fit=crop" },
  { name: "Typography", count: "1,500+", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=600&fit=crop" },
];

const featuredDesigns = [
  { id: 1, title: "Urban Flow", price: 12.99, originalPrice: 19.99, image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=533&fit=crop", badge: "SALE" },
  { id: 2, title: "Botanical Dreams", price: 14.99, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=533&fit=crop", badge: "NEW" },
  { id: 3, title: "Geometry", price: 9.99, image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=533&fit=crop" },
  { id: 4, title: "Modern Edge", price: 12.99, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=533&fit=crop" },
  { id: 5, title: "Desert Sun", price: 11.99, originalPrice: 16.99, image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=533&fit=crop", badge: "SALE" },
  { id: 6, title: "Vintage Soul", price: 13.99, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=533&fit=crop" },
];

export default function Home() {
  return (
    <>
      {/* Promo Banner — Bold Marquee */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0a0a0a] text-[#FAFAFA] py-2 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
              <span className="text-[#E85D04]">★</span>
              <span>30% OFF FIRST ORDER</span>
              <span className="text-[#E85D04]">★</span>
              <span>CODE: WELCOME30</span>
              <span className="text-[#E85D04]">★</span>
              <span>FREE SHIPPING $50+</span>
              <span className="text-[#E85D04]">★</span>
              <span>INSTANT DOWNLOADS</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero — Bold Split */}
      <section className="min-h-screen pt-32 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-8rem)]">
          {/* Left — Typography */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16 bg-[#FAFAFA] texture-grain relative">
            <div className="max-w-xl relative z-10">
              {/* Stamp Badge */}
              <div className="stamp-filled inline-block mb-8">
                Art For The People
              </div>

              {/* Massive Headline */}
              <h1 className="headline-massive text-[#0a0a0a] mb-6">
                <span className="block">Blank</span>
                <span className="block text-[#E85D04]">Walls</span>
                <span className="block">Are</span>
                <span className="block relative inline-block">
                  Dead
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,6 Q40,0 100,6 T200,6" fill="none" stroke="#E85D04" strokeWidth="6"/>
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-[#0a0a0a]/60 mb-8 max-w-md leading-relaxed">
                10,000+ original designs. Instant downloads. Museum-quality prints. 
                <span className="font-bold text-[#0a0a0a]"> Make your space speak.</span>
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/gallery">
                  <button className="btn-accent text-sm flex items-center space-x-2 rounded-none">
                    <span>Shop Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/quiz">
                  <button className="btn-outline-bold text-sm flex items-center space-x-2 rounded-none">
                    <Play className="w-4 h-4" />
                    <span>Find Your Style</span>
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-4xl font-black text-[#0a0a0a]">50K+</p>
                  <p className="text-sm uppercase tracking-wide text-[#0a0a0a]/50 font-bold">Happy Customers</p>
                </div>
                <div className="w-px h-12 bg-[#0a0a0a]/20"></div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#E85D04] text-[#E85D04]" />)}
                  </div>
                  <p className="text-sm uppercase tracking-wide text-[#0a0a0a]/50 font-bold">4.9/5 Rating</p>
                </div>
              </div>
            </div>

            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E85D04]/10 -z-0"></div>
          </div>

          {/* Right — Visual Grid */}
          <div className="bg-[#0a0a0a] relative hidden lg:flex items-center justify-center p-12">
            {/* Grid of frames */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="space-y-4">
                <div className="frame-urban transform hover:-rotate-2 transition-transform">
                  <div className="aspect-[3/4] relative">
                    <Image src="https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=533&fit=crop" alt="" fill className="object-cover" />
                  </div>
                </div>
                <div className="frame-urban transform hover:rotate-2 transition-transform">
                  <div className="aspect-square relative">
                    <Image src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop" alt="" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="frame-urban transform hover:rotate-2 transition-transform">
                  <div className="aspect-square relative">
                    <Image src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop" alt="" fill className="object-cover" />
                  </div>
                </div>
                <div className="frame-urban transform hover:-rotate-2 transition-transform">
                  <div className="aspect-[3/4] relative">
                    <Image src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=533&fit=crop" alt="" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Price Tag */}
            <div className="absolute top-20 right-20 bg-[#E85D04] text-[#FAFAFA] px-4 py-2 font-black text-lg transform rotate-12">
              FROM $9.99
            </div>

            {/* Download Badge */}
            <div className="absolute bottom-20 left-12 bg-[#FAFAFA] text-[#0a0a0a] px-6 py-4 border-4 border-[#0a0a0a]">
              <div className="flex items-center space-x-3">
                <Download className="w-8 h-8" />
                <div>
                  <p className="font-black uppercase text-sm">Instant</p>
                  <p className="font-black uppercase text-sm">Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#0a0a0a] text-[#FAFAFA] py-6 border-y-4 border-[#E85D04]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            {[
              { icon: Download, text: "Instant Downloads" },
              { icon: Shield, text: "Premium Quality" },
              { icon: Truck, text: "Fast Shipping" },
              { icon: RefreshCw, text: "30-Day Returns" },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <item.icon className="w-6 h-6 text-[#E85D04]" />
                <span className="font-bold uppercase tracking-wide text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories — Bold Cards */}
      <section className="py-24 px-6 bg-[#FAFAFA] texture-grain">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="tag-raw mb-4">Collections</div>
              <h2 className="headline-bold text-[#0a0a0a]">Shop by Style</h2>
            </div>
            <Link href="/gallery" className="hidden md:flex items-center space-x-2 font-bold uppercase tracking-wide text-sm hover:text-[#E85D04]">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link key={cat.name} href={`/gallery?category=${cat.name.toLowerCase()}`}>
                <div className="group relative aspect-[2/3] overflow-hidden border-4 border-[#0a0a0a] card-lift cursor-pointer">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-black text-2xl uppercase text-[#FAFAFA] mb-1">{cat.name}</h3>
                    <p className="text-[#FAFAFA]/70 text-sm font-bold">{cat.count} designs</p>
                  </div>
                  {/* Hover Reveal */}
                  <div className="absolute top-4 right-4 bg-[#E85D04] text-[#FAFAFA] px-3 py-1 font-bold text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured — Product Grid */}
      <section className="py-24 px-6 bg-white stripe-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag-raw inline-block mb-4">Trending</div>
            <h2 className="headline-bold text-[#0a0a0a] mb-4">Hot Right Now</h2>
            <p className="text-[#0a0a0a]/60 max-w-lg mx-auto">
              The designs everyone's talking about. Updated weekly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredDesigns.map((design) => (
              <Link key={design.id} href={`/design/${design.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] border-4 border-[#0a0a0a] overflow-hidden mb-3 shadow-offset transition-all">
                    <Image src={design.image} alt={design.title} fill className="object-cover" />
                    
                    {design.badge && (
                      <div className={`absolute top-0 left-0 px-3 py-1 font-black text-xs uppercase ${
                        design.badge === 'SALE' ? 'bg-[#E85D04] text-[#FAFAFA]' : 'bg-[#0a0a0a] text-[#FAFAFA]'
                      }`}>
                        {design.badge}
                      </div>
                    )}

                    {/* Quick View */}
                    <div className="absolute inset-0 bg-[#0a0a0a]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="btn-accent text-xs py-2 px-4">Quick View</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-sm text-[#0a0a0a] uppercase truncate">{design.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="font-black text-[#E85D04]">${design.price}</span>
                    {design.originalPrice && (
                      <span className="text-xs text-[#0a0a0a]/40 line-through">${design.originalPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <button className="btn-bold inline-flex items-center space-x-2">
                <span>View All Designs</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bold Statement Section */}
      <section className="py-32 px-6 bg-[#0a0a0a] text-[#FAFAFA] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[40vw] font-black uppercase leading-none">ART</span>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="headline-massive mb-8">
            Make A <span className="text-[#E85D04]">Statement</span>
          </h2>
          <p className="text-xl text-[#FAFAFA]/60 mb-12 max-w-2xl mx-auto">
            Your walls deserve better than mass-produced posters. Get original art that 
            actually means something. Downloaded instantly. Printed beautifully.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gallery">
              <button className="btn-accent inline-flex items-center space-x-2">
                <span>Start Shopping</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/pricing">
              <button className="btn-outline-bold border-[#FAFAFA] text-[#FAFAFA] hover:bg-[#FAFAFA] hover:text-[#0a0a0a]">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-[#E85D04] text-[#E85D04]" />)}
            </div>
            <h2 className="headline-bold text-[#0a0a0a] mb-4">Loved by 50,000+</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "The quality is INSANE. My living room looks like a gallery now.", name: "Sarah M.", location: "NYC" },
              { text: "Fast download, perfect resolution. Printed 24x36 — absolutely stunning.", name: "James K.", location: "LA" },
              { text: "Finally, affordable art that doesn't look cheap. Obsessed!", name: "Emily R.", location: "Chicago" },
            ].map((review, i) => (
              <div key={i} className="bg-white border-4 border-[#0a0a0a] p-8 shadow-offset">
                <div className="flex items-center space-x-1 mb-4">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-[#E85D04] text-[#E85D04]" />)}
                </div>
                <p className="text-[#0a0a0a] mb-6 font-medium">"{review.text}"</p>
                <div>
                  <p className="font-black uppercase text-sm">{review.name}</p>
                  <p className="text-[#0a0a0a]/50 text-sm">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#E85D04] text-[#FAFAFA] relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-massive text-[#FAFAFA] mb-6">
            Ready?
          </h2>
          <p className="text-xl text-[#FAFAFA]/80 mb-10 max-w-lg mx-auto">
            10,000+ designs waiting for you. Start transforming your space today.
          </p>
          <Link href="/gallery">
            <button className="bg-[#FAFAFA] text-[#0a0a0a] font-black uppercase tracking-wide px-12 py-5 text-lg border-4 border-[#0a0a0a] shadow-offset hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
