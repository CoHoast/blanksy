import { DesignCard } from "@/components/gallery/design-card";
import type { Design } from "@/types";

// Mock data - replace with Supabase query
const mockDesigns: Design[] = [
  {
    id: "1",
    title: "Ocean Waves Abstract",
    slug: "ocean-waves-abstract",
    category: "Abstract",
    style: "Blue Tones",
    preview_url: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=533&fit=crop",
    price_digital: 12.99,
    downloads_count: 234,
    views_count: 1520,
    is_active: true,
    is_featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Botanical Dreams",
    slug: "botanical-dreams",
    category: "Nature",
    style: "Green Tones",
    preview_url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=533&fit=crop",
    price_digital: 14.99,
    downloads_count: 456,
    views_count: 2340,
    is_active: true,
    is_featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Sunset Geometry",
    slug: "sunset-geometry",
    category: "Abstract",
    style: "Warm Tones",
    preview_url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=533&fit=crop",
    price_digital: 9.99,
    downloads_count: 189,
    views_count: 980,
    is_active: true,
    is_featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Modern Lines",
    slug: "modern-lines",
    category: "Minimal",
    style: "Neutral",
    preview_url: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=533&fit=crop",
    price_digital: 12.99,
    downloads_count: 312,
    views_count: 1890,
    is_active: true,
    is_featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Browse All Designs</h1>
          <p className="text-charcoal/60 text-lg">Discover 10,000+ original art prints and digital downloads</p>
        </div>

        {/* Filters - TODO */}
        <div className="mb-8 flex flex-wrap gap-4">
          <select className="px-4 py-2 rounded-full border border-charcoal/20 bg-white text-sm">
            <option>All Categories</option>
            <option>Abstract</option>
            <option>Nature</option>
            <option>Minimal</option>
            <option>Typography</option>
          </select>
          <select className="px-4 py-2 rounded-full border border-charcoal/20 bg-white text-sm">
            <option>All Styles</option>
            <option>Modern</option>
            <option>Vintage</option>
            <option>Boho</option>
          </select>
          <select className="px-4 py-2 rounded-full border border-charcoal/20 bg-white text-sm">
            <option>Sort: Popular</option>
            <option>Sort: Newest</option>
            <option>Sort: Price Low-High</option>
            <option>Sort: Price High-Low</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockDesigns.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>
      </div>
    </div>
  );
}
