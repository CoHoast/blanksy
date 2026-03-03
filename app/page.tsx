import Link from "next/link";
import Image from "next/image";

// Sample designs for placeholders
const featuredDesigns = [
  { id: "1", title: "Matisse Coral Line Art", image: "/preview-images/15001.jpeg", price: "12.99", category: "Botanical" },
  { id: "2", title: "Cat in Bathtub", image: "/preview-images/cat-18518.jpg", price: "12.99", category: "Whimsical" },
  { id: "3", title: "Beach Path Coastal", image: "/preview-images/beach-18952.jpg", price: "12.99", category: "Coastal" },
  { id: "4", title: "Sage Leaf Collection", image: "/preview-images/gardenposter_26.jpg", price: "12.99", category: "Botanical" },
];

const collections = [
  { slug: "botanical", title: "Botanical", count: 111, image: "/preview-images/15001.jpeg" },
  { slug: "coastal", title: "Coastal", count: 50, image: "/preview-images/beach-18952.jpg" },
  { slug: "whimsical", title: "Whimsical", count: 50, image: "/preview-images/cat-18518.jpg" },
  { slug: "pop-culture", title: "Pop Culture", count: 88, image: "/preview-images/starwars-19100.jpg" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-8 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-ink/40 tracking-widest uppercase mb-6">10,000+ Original Artworks</p>
              <h1 className="mb-8">
                <span className="font-stencil text-6xl md:text-7xl lg:text-8xl block leading-[0.95]">ART FOR</span>
                <span className="font-serif text-6xl md:text-7xl lg:text-8xl italic text-pop block leading-[0.95]">real walls</span>
                <span className="font-stencil text-6xl md:text-7xl lg:text-8xl block leading-[0.95]">REAL PEOPLE</span>
              </h1>
              <p className="text-lg text-ink/50 max-w-md mb-10 leading-relaxed">
                Premium art downloads from $9.99. Print at any size. Skip the gallery markup.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/gallery"
                  className="bg-ink text-paper px-8 py-4 text-sm font-medium hover:bg-pop transition-colors inline-flex items-center space-x-3"
                >
                  <span>Browse Gallery</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/about"
                  className="border border-ink/20 px-8 py-4 text-sm font-medium hover:border-ink transition-colors"
                >
                  How It Works
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-6 grid-rows-6 gap-3 aspect-square">
                <div className="col-span-4 row-span-4 bg-ink/5 overflow-hidden relative">
                  <Image
                    src="/preview-images/15001.jpeg"
                    alt="Featured Art"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-2 row-span-3 bg-ink/5 overflow-hidden relative">
                  <Image
                    src="/preview-images/cat-18518.jpg"
                    alt="Art"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-2 row-span-3 bg-ink/5 overflow-hidden relative">
                  <Image
                    src="/preview-images/beach-18952.jpg"
                    alt="Art"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-2 row-span-2 bg-ink/5 overflow-hidden relative">
                  <Image
                    src="/preview-images/gardenposter_26.jpg"
                    alt="Art"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-2 row-span-2 bg-pop flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="font-stencil text-3xl">$9.99</p>
                    <p className="text-xs opacity-80">starting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-12 border-y border-ink/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <div className="flex items-baseline space-x-2">
              <span className="font-stencil text-4xl">10K+</span>
              <span className="text-sm text-ink/40">designs</span>
            </div>
            <div className="w-px h-8 bg-ink/10 hidden md:block"></div>
            <div className="flex items-baseline space-x-2">
              <span className="font-stencil text-4xl">50K+</span>
              <span className="text-sm text-ink/40">downloads</span>
            </div>
            <div className="w-px h-8 bg-ink/10 hidden md:block"></div>
            <div className="flex items-baseline space-x-2">
              <span className="font-stencil text-4xl">4.9</span>
              <span className="text-sm text-ink/40">★ rating</span>
            </div>
            <div className="w-px h-8 bg-ink/10 hidden md:block"></div>
            <div className="flex items-baseline space-x-2">
              <span className="font-stencil text-4xl text-pop">FREE</span>
              <span className="text-sm text-ink/40">shipping $50+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm text-ink/40 tracking-widest uppercase mb-2">Browse</p>
              <h2 className="font-stencil text-4xl md:text-5xl">COLLECTIONS</h2>
            </div>
            <Link href="/collections" className="text-sm text-ink/50 hover:text-ink transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-ink/5 mb-4 overflow-hidden relative">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/80 to-transparent">
                    <p className="text-paper font-medium">{collection.title}</p>
                    <p className="text-paper/60 text-sm">{collection.count} designs</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="px-8 py-20 bg-ink text-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-paper/40 tracking-widest uppercase mb-4">Why Blanksy</p>
              <h2 className="mb-6">
                <span className="font-stencil text-5xl md:text-6xl block leading-[0.95]">GALLERY ART</span>
                <span className="font-serif text-5xl md:text-6xl italic text-pop block leading-[0.95]">without the</span>
                <span className="font-stencil text-5xl md:text-6xl block leading-[0.95]">GALLERY PRICE</span>
              </h2>
              <p className="text-paper/50 text-lg leading-relaxed mb-8 max-w-md">
                Why pay $500 for a print when you can download gallery-quality art for $12.99?
                Print it yourself, frame it yourself, keep your money.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-pop rounded-full flex items-center justify-center text-sm">✓</span>
                  <span>Instant high-res downloads</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-pop rounded-full flex items-center justify-center text-sm">✓</span>
                  <span>Print at any size</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-pop rounded-full flex items-center justify-center text-sm">✓</span>
                  <span>Commercial licenses available</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-paper/10 overflow-hidden relative">
                  <Image
                    src="/preview-images/gardenposter_26.jpg"
                    alt="Art"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-paper/10 p-6">
                  <p className="font-stencil text-3xl text-pop">$12.99</p>
                  <p className="text-paper/50 text-sm">avg. price</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-paper/10 p-6">
                  <p className="font-stencil text-3xl">5 MIN</p>
                  <p className="text-paper/50 text-sm">to download</p>
                </div>
                <div className="aspect-[3/4] bg-paper/10 overflow-hidden relative">
                  <Image
                    src="/preview-images/gardenposter_30.jpg"
                    alt="Art"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm text-ink/40 tracking-widest uppercase mb-2">Curated Picks</p>
              <h2 className="font-stencil text-4xl md:text-5xl">TRENDING NOW</h2>
            </div>
            <Link href="/gallery" className="text-sm text-ink/50 hover:text-ink transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredDesigns.map((design) => (
              <Link
                key={design.id}
                href={`/design/${design.id}`}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-ink/5 mb-4 overflow-hidden relative">
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium mb-1">{design.title}</h3>
                <p className="text-sm text-ink/50">${design.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-24 border-t border-ink/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">
            <span className="font-stencil text-5xl md:text-6xl lg:text-7xl block leading-[0.95]">STOP STARING AT</span>
            <span className="font-serif text-5xl md:text-6xl lg:text-7xl italic text-pop block leading-[0.95]">blank walls</span>
          </h2>
          <p className="text-ink/50 text-lg mb-10 max-w-md mx-auto">
            Join 50,000+ people who&apos;ve transformed their spaces with Blanksy.
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-ink text-paper px-10 py-5 text-sm font-medium hover:bg-pop transition-colors"
          >
            Explore 10,000+ Designs →
          </Link>
        </div>
      </section>
    </>
  );
}
