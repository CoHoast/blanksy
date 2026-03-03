"use client";

import { useState } from "react";
import { DesignCard } from "@/components/gallery/design-card";

// Sample data - in production this would come from the database
const allDesigns = [
  { id: "1", title: "Matisse Coral Line Art", image: "/preview-images/15001.jpeg", price: "12.99", category: "Botanical", isNew: true },
  { id: "2", title: "Cat in Bathtub", image: "/preview-images/cat-18518.jpg", price: "12.99", category: "Whimsical", isBestseller: true },
  { id: "3", title: "Beach Path Coastal", image: "/preview-images/beach-18952.jpg", price: "12.99", category: "Coastal" },
  { id: "4", title: "Sage Leaf Collection", image: "/preview-images/gardenposter_26.jpg", price: "12.99", category: "Botanical" },
  { id: "5", title: "Tropical Monstera", image: "/preview-images/gardenposter_30.jpg", price: "12.99", category: "Botanical" },
  { id: "6", title: "Vader Sunset", image: "/preview-images/starwars-19100.jpg", price: "12.99", category: "Pop Culture" },
  { id: "7", title: "Abstract Botanical", image: "/preview-images/15002.jpeg", price: "12.99", category: "Botanical", isNew: true },
  { id: "8", title: "Impressionist Garden", image: "/preview-images/19001_1-49044.jpg", price: "14.99", category: "Botanical", isBestseller: true },
];

const categories = ["All", "Botanical", "Coastal", "Whimsical", "Pop Culture", "Abstract", "Minimal"];
const sortOptions = ["Newest", "Popular", "Price: Low to High", "Price: High to Low"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Newest");

  const filteredDesigns = selectedCategory === "All" 
    ? allDesigns 
    : allDesigns.filter(d => d.category === selectedCategory);

  return (
    <div className="px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-ink/40 tracking-widest uppercase mb-2">Browse</p>
          <h1 className="font-stencil text-5xl md:text-6xl mb-4">GALLERY</h1>
          <p className="text-ink/50 max-w-xl">
            Explore our curated collection of 10,000+ original artworks. Filter by style, find your perfect piece.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-ink/10">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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
        <p className="text-sm text-ink/40 mb-6">{filteredDesigns.length} designs</p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDesigns.map((design) => (
            <DesignCard
              key={design.id}
              id={design.id}
              title={design.title}
              image={design.image}
              price={design.price}
              category={design.category}
              isNew={design.isNew}
              isBestseller={design.isBestseller}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="border border-ink/20 px-8 py-4 text-sm font-medium hover:bg-ink hover:text-paper transition-colors">
            Load More Designs
          </button>
        </div>
      </div>
    </div>
  );
}
