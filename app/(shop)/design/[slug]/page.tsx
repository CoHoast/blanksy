"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample data - in production this would come from the database
const designData = {
  id: "1",
  title: "Matisse-Inspired Coral Line Art in Neutral Beige",
  description: "An elegant minimalist print featuring a white organic coral or leaf form against a warm beige background with a bold black accent. Inspired by Matisse's iconic cut-out style, this piece brings effortless sophistication to any modern interior.",
  image: "/preview-images/15001.jpeg",
  category: "Botanical",
  style: "Minimalist Abstract",
  colors: ["Beige", "White", "Black"],
  tags: ["Matisse inspired", "minimalist art", "line art", "neutral wall art", "organic shapes"],
  rooms: ["Living Room", "Bedroom"],
  mood: "Serene",
  digitalPrice: "12.99",
  sizes: [
    { name: "8x10", printPrice: "29.99" },
    { name: "11x14", printPrice: "39.99" },
    { name: "16x20", printPrice: "49.99" },
    { name: "18x24", printPrice: "59.99" },
    { name: "24x30", printPrice: "79.99" },
  ],
};

const relatedDesigns = [
  { id: "4", title: "Sage Leaf Collection", image: "/preview-images/gardenposter_26.jpg", price: "12.99" },
  { id: "5", title: "Tropical Monstera", image: "/preview-images/gardenposter_30.jpg", price: "12.99" },
  { id: "7", title: "Abstract Botanical", image: "/preview-images/15002.jpeg", price: "12.99" },
  { id: "8", title: "Impressionist Garden", image: "/preview-images/19001_1-49044.jpg", price: "14.99" },
];

export default function DesignPage({ params }: { params: { slug: string } }) {
  const [purchaseType, setPurchaseType] = useState<"digital" | "print">("digital");
  const [selectedSize, setSelectedSize] = useState(designData.sizes[0].name);

  const selectedSizeData = designData.sizes.find(s => s.name === selectedSize);

  return (
    <div className="px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm">
          <Link href="/gallery" className="text-ink/40 hover:text-ink transition-colors">Gallery</Link>
          <span className="text-ink/20 mx-2">/</span>
          <Link href={`/collections/${designData.category.toLowerCase()}`} className="text-ink/40 hover:text-ink transition-colors">{designData.category}</Link>
          <span className="text-ink/20 mx-2">/</span>
          <span className="text-ink/60">{designData.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image */}
          <div className="aspect-[3/4] bg-ink/5 relative overflow-hidden">
            <Image
              src={designData.image}
              alt={designData.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-ink/40 uppercase tracking-widest mb-2">{designData.category}</p>
            <h1 className="font-stencil text-4xl md:text-5xl mb-4 leading-tight">{designData.title}</h1>
            
            <p className="text-ink/60 leading-relaxed mb-8">{designData.description}</p>

            {/* Purchase Type Toggle */}
            <div className="mb-6">
              <div className="flex border border-ink/20 inline-flex">
                <button
                  onClick={() => setPurchaseType("digital")}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    purchaseType === "digital" ? "bg-ink text-paper" : "hover:bg-ink/5"
                  }`}
                >
                  Digital Download
                </button>
                <button
                  onClick={() => setPurchaseType("print")}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    purchaseType === "print" ? "bg-ink text-paper" : "hover:bg-ink/5"
                  }`}
                >
                  Order Print
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="font-stencil text-5xl text-pop mb-1">
                ${purchaseType === "digital" ? designData.digitalPrice : selectedSizeData?.printPrice}
              </p>
              {purchaseType === "digital" ? (
                <p className="text-sm text-ink/40">Instant download • High-resolution files</p>
              ) : (
                <p className="text-sm text-ink/40">Museum-quality print • Free shipping over $50</p>
              )}
            </div>

            {/* Size Selection (for prints) */}
            {purchaseType === "print" && (
              <div className="mb-8">
                <p className="text-sm font-medium mb-3">Select Size</p>
                <div className="flex flex-wrap gap-2">
                  {designData.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        selectedSize === size.name
                          ? "border-ink bg-ink text-paper"
                          : "border-ink/20 hover:border-ink"
                      }`}
                    >
                      {size.name}" — ${size.printPrice}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <button className="w-full bg-ink text-paper py-4 text-sm font-medium hover:bg-pop transition-colors mb-4">
              {purchaseType === "digital" ? "Download Now" : "Add to Cart"} — ${purchaseType === "digital" ? designData.digitalPrice : selectedSizeData?.printPrice}
            </button>

            {/* Features */}
            <div className="border-t border-ink/10 pt-8 mt-8 space-y-4">
              {purchaseType === "digital" ? (
                <>
                  <div className="flex items-start space-x-3">
                    <span className="text-pop">✓</span>
                    <span className="text-sm text-ink/60">High-resolution files (300 DPI)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-pop">✓</span>
                    <span className="text-sm text-ink/60">Multiple sizes included (8x10 to 24x36)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-pop">✓</span>
                    <span className="text-sm text-ink/60">Print at home or any print shop</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-pop">✓</span>
                    <span className="text-sm text-ink/60">Personal use license included</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start space-x-3">
                    <span className="text-pop">✓</span>
                    <span className="text-sm text-ink/60">Premium archival paper (200gsm)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-pop">✓</span>
                    <span className="text-sm text-ink/60">Fade-resistant inks</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-pop">✓</span>
                    <span className="text-sm text-ink/60">Ships in 3-5 business days</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-pop">✓</span>
                    <span className="text-sm text-ink/60">Free shipping on orders over $50</span>
                  </div>
                </>
              )}
            </div>

            {/* Meta */}
            <div className="border-t border-ink/10 pt-8 mt-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-ink/40 mb-1">Style</p>
                  <p>{designData.style}</p>
                </div>
                <div>
                  <p className="text-ink/40 mb-1">Mood</p>
                  <p>{designData.mood}</p>
                </div>
                <div>
                  <p className="text-ink/40 mb-1">Colors</p>
                  <p>{designData.colors.join(", ")}</p>
                </div>
                <div>
                  <p className="text-ink/40 mb-1">Best for</p>
                  <p>{designData.rooms.join(", ")}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-ink/40 mb-2 text-sm">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {designData.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/gallery?tag=${encodeURIComponent(tag)}`}
                      className="text-xs bg-ink/5 px-2 py-1 hover:bg-ink/10 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Designs */}
        <section className="mt-24 pt-16 border-t border-ink/10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm text-ink/40 tracking-widest uppercase mb-2">You might also like</p>
              <h2 className="font-stencil text-3xl md:text-4xl">RELATED DESIGNS</h2>
            </div>
            <Link href="/gallery" className="text-sm text-ink/50 hover:text-ink transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedDesigns.map((design) => (
              <Link key={design.id} href={`/design/${design.id}`} className="group">
                <div className="aspect-[3/4] bg-ink/5 mb-4 overflow-hidden relative">
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium mb-1 line-clamp-1">{design.title}</h3>
                <p className="text-sm text-ink/50">${design.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
