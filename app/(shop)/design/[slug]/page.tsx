import Image from "next/image";
import { Heart, Download, Truck, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DesignPage({ params }: { params: { slug: string } }) {
  // TODO: Fetch design from Supabase
  const design = {
    id: "1",
    title: "Ocean Waves Abstract",
    slug: params.slug,
    description: "A stunning abstract representation of ocean waves, perfect for bringing a sense of calm and movement to any space. This design features deep blues and teals with dynamic brushstrokes.",
    category: "Abstract",
    style: "Modern",
    colors: ["Blue", "Teal", "White"],
    preview_url: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=1000&fit=crop",
    price_digital: 12.99,
    downloads_count: 234,
  };

  const printPrices = [
    { size: "8×10", price: 29.99 },
    { size: "16×20", price: 49.99 },
    { size: "24×36", price: 79.99 },
    { size: "Canvas 24×36", price: 129.99 },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white shadow-2xl">
            <Image src={design.preview_url} alt={design.title} fill className="object-cover" />
            <button className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-white transition-colors">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-2">{design.category}</p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">{design.title}</h1>
              <p className="text-charcoal/60 text-lg leading-relaxed">{design.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {design.colors.map((color) => (
                <span key={color} className="px-3 py-1 bg-charcoal/5 rounded-full text-sm">{color}</span>
              ))}
              <span className="px-3 py-1 bg-charcoal/5 rounded-full text-sm">{design.style}</span>
            </div>

            <Tabs defaultValue="digital" className="mb-8">
              <TabsList className="bg-charcoal/5 rounded-full p-1">
                <TabsTrigger value="digital" className="rounded-full">Digital Download</TabsTrigger>
                <TabsTrigger value="print" className="rounded-full">Order Print</TabsTrigger>
              </TabsList>

              <TabsContent value="digital" className="mt-6">
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-charcoal/50 mb-1">Digital Download</p>
                      <p className="text-4xl font-serif font-bold gradient-text">${design.price_digital}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-charcoal/50">{design.downloads_count} downloads</p>
                    </div>
                  </div>
                  <Button className="btn-primary w-full py-6 text-white font-semibold rounded-full border-0 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </Button>
                  <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-charcoal/50">
                    <span className="flex items-center space-x-1">
                      <Shield className="w-4 h-4" />
                      <span>Instant download</span>
                    </span>
                    <span>•</span>
                    <span>High-res files</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="print" className="mt-6">
                <div className="bg-white rounded-2xl p-6 border border-charcoal/10">
                  <p className="text-sm text-charcoal/50 mb-4">Select Size</p>
                  <div className="space-y-3 mb-6">
                    {printPrices.map((option) => (
                      <label key={option.size} className="flex items-center justify-between p-4 rounded-xl border border-charcoal/10 hover:border-accent cursor-pointer transition-colors">
                        <div className="flex items-center space-x-3">
                          <input type="radio" name="size" className="w-4 h-4 text-accent" />
                          <span className="font-medium">{option.size}</span>
                        </div>
                        <span className="font-semibold">${option.price}</span>
                      </label>
                    ))}
                  </div>
                  <Button className="btn-primary w-full py-6 text-white font-semibold rounded-full border-0 flex items-center justify-center space-x-2">
                    <Truck className="w-5 h-5" />
                    <span>Add Print to Cart</span>
                  </Button>
                  <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-charcoal/50">
                    <span className="flex items-center space-x-1">
                      <Truck className="w-4 h-4" />
                      <span>Ships in 3-5 days</span>
                    </span>
                    <span>•</span>
                    <span>Museum quality</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
