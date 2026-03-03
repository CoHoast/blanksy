"use client";

import { useState } from "react";
import { DesignCard } from "@/components/gallery/design-card";
import catalogData from "@/data/catalog.json";

// Get unique categories from catalog
const categories = ["All", ...new Set(catalogData.designs.map(d => d.category))];
const sortOptions = ["Newest", "Popular", "Price: Low to High", "Price: High to Low"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [visibleCount, setVisibleCount] = useState(24);

  const filteredDesigns = selectedCategory === "All" 
    ? catalogData.designs 
    : catalogData.designs.filter(d => d.category === selectedCategory);

  // Sort designs
  const sortedDesigns = [...filteredDesigns].sort((a, b) => {
    switch (selectedSort) {
      case "Price: Low to High":
        return a.pricing.digital - b.pricing.digital;
      case "Price: High to Low":
        return b.pricing.digital - a.pricing.digital;
      default:
        return 0; // Keep original order for now
    }
  });

  const visibleDesigns = sortedDesigns.slice(0, visibleCount);
  const hasMore = visibleCount < sortedDesigns.length;

  return (
    <div className="px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-ink/40 tracking-widest uppercase mb-2">Browse</p>
          <h1 className="font-stencil text-5xl md:text-6xl mb-4">GALLERY</h1>
          <p className="text-ink/50 max-w-xl">
            Explore our curated collection of {catalogData.total}+ original artworks. Filter by style, find your perfect piece.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-ink/10">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(24);
                }}
                className={`px-4 py-2 text-sm transition-colors ${
                  selectedCategory === cat
                    ? "bg-ink text-paper"
                    : "bg-ink/5 text-ink/60 hover:bg-ink/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-ink/40">Sort:</span>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="bg-transparent border border-ink/20 px-3 py-2 text-sm focus:outline-none focus:border-ink"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-ink/40 mb-6">
          {sortedDesigns.length} designs {selectedCategory !== "All" && `in ${selectedCategory}`}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleDesigns.map((design, index) => (
            <DesignCard
              key={design.id}
              id={design.id}
              slug={design.slug}
              title={design.title}
              image={design.images.sm || design.thumbnails?.sm || `/designs/${design.id}/${design.id}-sm.jpg`}
              price={design.pricing.digital.toFixed(2)}
              category={design.category}
              isNew={index < 4}
              isBestseller={design.mood?.toLowerCase() === "bold" || design.mood?.toLowerCase() === "vibrant"}
            />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 24)}
              className="border border-ink/20 px-8 py-4 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
            >
              Load More Designs ({sortedDesigns.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
