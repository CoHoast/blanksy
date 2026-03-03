import Link from "next/link";
import Image from "next/image";

const collections = [
  { 
    slug: "botanical", 
    title: "Botanical", 
    description: "Nature-inspired prints featuring leaves, flowers, and organic forms",
    count: 111, 
    image: "/preview-images/15001.jpeg" 
  },
  { 
    slug: "coastal", 
    title: "Coastal", 
    description: "Beach scenes, ocean views, and seaside tranquility",
    count: 50, 
    image: "/preview-images/beach-18952.jpg" 
  },
  { 
    slug: "whimsical", 
    title: "Whimsical", 
    description: "Playful, charming art that brings joy and personality",
    count: 50, 
    image: "/preview-images/cat-18518.jpg" 
  },
  { 
    slug: "pop-culture", 
    title: "Pop Culture", 
    description: "Fan favorites and iconic references for the culture",
    count: 88, 
    image: "/preview-images/starwars-19100.jpg" 
  },
  { 
    slug: "abstract", 
    title: "Abstract", 
    description: "Bold shapes, colors, and forms that spark imagination",
    count: 75, 
    image: "/preview-images/gardenposter_26.jpg" 
  },
  { 
    slug: "minimal", 
    title: "Minimal", 
    description: "Clean lines and simple beauty for modern spaces",
    count: 60, 
    image: "/preview-images/gardenposter_30.jpg" 
  },
];

export default function CollectionsPage() {
  return (
    <div className="px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm text-ink/40 tracking-widest uppercase mb-2">Browse by Style</p>
          <h1 className="font-stencil text-5xl md:text-6xl mb-4">COLLECTIONS</h1>
          <p className="text-ink/50 text-lg">
            Explore our curated collections, organized by style and mood. Find the perfect art for your space.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group block"
            >
              <div className="aspect-[4/5] bg-ink/5 mb-4 overflow-hidden relative">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-stencil text-3xl text-paper mb-1">{collection.title}</h2>
                  <p className="text-paper/60 text-sm">{collection.count} designs</p>
                </div>
              </div>
              <p className="text-ink/50 text-sm">{collection.description}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center py-16 border-t border-ink/10">
          <h2 className="font-stencil text-3xl md:text-4xl mb-4">CAN&apos;T DECIDE?</h2>
          <p className="text-ink/50 mb-8 max-w-md mx-auto">
            Browse our full gallery to discover all 10,000+ designs and find your perfect match.
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-ink text-paper px-8 py-4 text-sm font-medium hover:bg-pop transition-colors"
          >
            Browse Full Gallery →
          </Link>
        </div>
      </div>
    </div>
  );
}
