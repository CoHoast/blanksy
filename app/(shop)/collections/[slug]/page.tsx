"use client";

import Link from "next/link";
import { DesignCard } from "@/components/gallery/design-card";

// Sample data - in production this would come from the database
const collectionsData: Record<string, {
  title: string;
  description: string;
  designs: Array<{
    id: string;
    title: string;
    image: string;
    price: string;
    isNew?: boolean;
    isBestseller?: boolean;
  }>;
}> = {
  botanical: {
    title: "Botanical",
    description: "Nature-inspired prints featuring leaves, flowers, and organic forms. From Matisse-style cutouts to lush tropical greenery.",
    designs: [
      { id: "1", title: "Matisse Coral Line Art", image: "/preview-images/15001.jpeg", price: "12.99", isBestseller: true },
      { id: "4", title: "Sage Leaf Collection", image: "/preview-images/gardenposter_26.jpg", price: "12.99" },
      { id: "5", title: "Tropical Monstera", image: "/preview-images/gardenposter_30.jpg", price: "12.99", isNew: true },
      { id: "7", title: "Abstract Botanical", image: "/preview-images/15002.jpeg", price: "12.99" },
      { id: "8", title: "Impressionist Garden", image: "/preview-images/19001_1-49044.jpg", price: "14.99", isBestseller: true },
    ],
  },
  coastal: {
    title: "Coastal",
    description: "Beach scenes, ocean views, and seaside tranquility. Transport yourself to sun-soaked shores.",
    designs: [
      { id: "3", title: "Beach Path Coastal", image: "/preview-images/beach-18952.jpg", price: "12.99", isBestseller: true },
    ],
  },
  whimsical: {
    title: "Whimsical",
    description: "Playful, charming art that brings joy and personality to any room.",
    designs: [
      { id: "2", title: "Cat in Bathtub", image: "/preview-images/cat-18518.jpg", price: "12.99", isBestseller: true },
    ],
  },
  "pop-culture": {
    title: "Pop Culture",
    description: "Fan favorites and iconic references for the culture. Show off your favorite fandoms.",
    designs: [
      { id: "6", title: "Vader Sunset", image: "/preview-images/starwars-19100.jpg", price: "12.99", isNew: true },
    ],
  },
};

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = collectionsData[params.slug] || {
    title: "Collection",
    description: "Explore this curated collection of beautiful art prints.",
    designs: [],
  };

  return (
    <div className="px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm">
          <Link href="/collections" className="text-ink/40 hover:text-ink transition-colors">Collections</Link>
          <span className="text-ink/20 mx-2">/</span>
          <span className="text-ink/60">{collection.title}</span>
        </div>

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h1 className="font-stencil text-5xl md:text-6xl mb-4">{collection.title.toUpperCase()}</h1>
          <p className="text-ink/50 text-lg">{collection.description}</p>
        </div>

        {/* Results count */}
        <p className="text-sm text-ink/40 mb-6">{collection.designs.length} designs</p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collection.designs.map((design) => (
            <DesignCard
              key={design.id}
              id={design.id}
              title={design.title}
              image={design.image}
              price={design.price}
              isNew={design.isNew}
              isBestseller={design.isBestseller}
            />
          ))}
        </div>

        {/* Empty State */}
        {collection.designs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink/40 mb-4">No designs in this collection yet.</p>
            <Link href="/gallery" className="text-pop hover:underline">
              Browse all designs →
            </Link>
          </div>
        )}

        {/* Load More */}
        {collection.designs.length > 0 && (
          <div className="mt-16 text-center">
            <button className="border border-ink/20 px-8 py-4 text-sm font-medium hover:bg-ink hover:text-paper transition-colors">
              Load More Designs
            </button>
          </div>
        )}

        {/* Other Collections */}
        <div className="mt-24 pt-16 border-t border-ink/10">
          <h2 className="font-stencil text-3xl mb-8">OTHER COLLECTIONS</h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(collectionsData)
              .filter(([slug]) => slug !== params.slug)
              .map(([slug, data]) => (
                <Link
                  key={slug}
                  href={`/collections/${slug}`}
                  className="px-4 py-2 bg-ink/5 hover:bg-ink hover:text-paper transition-colors text-sm"
                >
                  {data.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
