export const dynamic = "force-dynamic";

import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadsPage() {
  const downloads = [
    {
      id: "1",
      title: "Ocean Waves Abstract",
      date: "Mar 1, 2026",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=200&h=250&fit=crop",
    },
    {
      id: "2",
      title: "Botanical Dreams",
      date: "Feb 28, 2026",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=200&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-medium mb-2">My Downloads</h1>
        <p className="text-charcoal/60 mb-8">Access and re-download your purchased designs.</p>

        <div className="space-y-4">
          {downloads.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 flex items-center space-x-4">
              <div className="relative w-16 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-charcoal/50">Purchased {item.date}</p>
              </div>
              <Button className="btn-primary text-white px-4 py-2 rounded-full border-0 flex items-center space-x-2 text-sm">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
