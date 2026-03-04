"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import catalogData from "@/data/catalog.json";

// Find design by slug or id
function findDesign(slug: string) {
  return catalogData.designs.find(d => d.slug === slug || d.id === slug);
}

// Get related designs from same category
function getRelatedDesigns(design: typeof catalogData.designs[0], count: number = 4) {
  return catalogData.designs
    .filter(d => d.id !== design.id && d.category === design.category)
    .slice(0, count);
}

export default function DesignPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const design = findDesign(resolvedParams.slug);
  
  const [purchaseType, setPurchaseType] = useState<"digital" | "print">("digital");
  const [selectedSize, setSelectedSize] = useState("8x10");

  if (!design) {
    return (
      <div className="px-8 py-24 text-center">
        <h1 className="font-stencil text-4xl mb-4">Design Not Found</h1>
        <p className="text-ink/50 mb-8">Sorry, we couldn&apos;t find that design.</p>
        <Link href="/gallery" className="bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-pop transition-colors">
          Browse Gallery
        </Link>
      </div>
    );
  }

  const sizes = [
    { name: "8x10", printPrice: design.pricing["8x10"] },
    { name: "11x14", printPrice: design.pricing["11x14"] },
    { name: "16x20", printPrice: design.pricing["16x20"] },
    { name: "18x24", printPrice: design.pricing["18x24"] },
    { name: "24x30", printPrice: design.pricing["24x30"] },
  ];

  const selectedSizeData = sizes.find(s => s.name === selectedSize);
  const relatedDesigns = getRelatedDesigns(design);
  
  // Get the best available image
  const mainImage = design.images?.lg || design.thumbnails?.lg || `/designs/${design.id}/${design.id}-lg.jpg`;

  return (
    <div className="px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm">
          <Link href="/gallery" className="text-ink/40 hover:text-ink transition-colors">Gallery</Link>
          <span className="text-ink/20 mx-2">/</span>
          <Link href={`/collections/${design.category.toLowerCase()}`} className="text-ink/40 hover:text-ink transition-colors">{design.category}</Link>
          <span className="text-ink/20 mx-2">/</span>
          <span className="text-ink/60 line-clamp-1">{design.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image */}
          <div className="aspect-[4/5] bg-ink/5 relative overflow-hidden">
            <Image
              src={mainImage}
              alt={design.title}
              fill
              className="object-contain bg-ink/5"
              priority
            />
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-ink/40 uppercase tracking-widest mb-2">{design.category}</p>
            <h1 className="font-stencil text-4xl md:text-5xl mb-4 leading-tight">{design.title}</h1>
            
            <p className="text-ink/60 leading-relaxed mb-8">{design.description}</p>

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
                ${purchaseType === "digital" ? design.pricing.digital.toFixed(2) : selectedSizeData?.printPrice.toFixed(2)}
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
                  {sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        selectedSize === size.name
                          ? "border-ink bg-ink text-paper"
                          : "border-ink/20 hover:border-ink"
                      }`}
                    >
                      {size.name}&quot; — ${size.printPrice.toFixed(2)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <button className="w-full bg-ink text-paper py-4 text-sm font-medium hover:bg-pop transition-colors mb-4">
              {purchaseType === "digital" ? "Download Now" : "Add to Cart"} — ${purchaseType === "digital" ? design.pricing.digital.toFixed(2) : selectedSizeData?.printPrice.toFixed(2)}
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
                    <span className="text-sm text-ink/60">Multiple sizes included (8x10 to 24x30)</span>
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
                  <p>{design.style}</p>
                </div>
                <div>
                  <p className="text-ink/40 mb-1">Mood</p>
                  <p>{design.mood}</p>
                </div>
                <div>
                  <p className="text-ink/40 mb-1">Colors</p>
                  <p>{design.colors?.join(", ") || "—"}</p>
                </div>
                <div>
                  <p className="text-ink/40 mb-1">Best for</p>
                  <p>{design.rooms?.join(", ") || "—"}</p>
                </div>
              </div>
              {design.tags && design.tags.length > 0 && (
                <div className="mt-4">
                  <p className="text-ink/40 mb-2 text-sm">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {design.tags.map((tag) => (
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
              )}
            </div>
          </div>
        </div>

        {/* Related Designs */}
        {relatedDesigns.length > 0 && (
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
              {relatedDesigns.map((related) => (
                <Link key={related.id} href={`/design/${related.slug}`} className="group">
                  <div className="aspect-[4/5] bg-ink/5 mb-4 overflow-hidden relative">
                    <Image
                      src={related.images?.sm || `/designs/${related.id}/${related.id}-sm.jpg`}
                      alt={related.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-medium mb-1 line-clamp-1">{related.title}</h3>
                  <p className="text-sm text-ink/50">${related.pricing.digital.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
