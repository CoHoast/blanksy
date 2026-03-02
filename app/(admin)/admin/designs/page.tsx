"use client";

export const dynamic = "force-dynamic";

import Image from "next/image";
import { Plus, Search, Edit, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function AdminDesignsPage() {
  const designs = [
    { id: "1", title: "Ocean Waves Abstract", category: "Abstract", price: 12.99, downloads: 234, active: true, image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=100&h=100&fit=crop" },
    { id: "2", title: "Botanical Dreams", category: "Nature", price: 14.99, downloads: 456, active: true, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=100&h=100&fit=crop" },
    { id: "3", title: "Sunset Geometry", category: "Abstract", price: 9.99, downloads: 189, active: true, image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl font-medium mb-2">Manage Designs</h1>
            <p className="text-charcoal/60">Add, edit, and organize your design catalog.</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Bulk Upload</span>
            </Button>
            <Button className="btn-primary text-white border-0 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Design</span>
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
            <Input placeholder="Search designs..." className="pl-10 rounded-full" />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-charcoal/5">
              <tr>
                <th className="text-left p-4 text-sm font-semibold">Design</th>
                <th className="text-left p-4 text-sm font-semibold">Category</th>
                <th className="text-left p-4 text-sm font-semibold">Price</th>
                <th className="text-left p-4 text-sm font-semibold">Downloads</th>
                <th className="text-left p-4 text-sm font-semibold">Status</th>
                <th className="text-right p-4 text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {designs.map((design) => (
                <tr key={design.id} className="border-t border-charcoal/5">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                        <Image src={design.image} alt={design.title} fill className="object-cover" />
                      </div>
                      <span className="font-medium">{design.title}</span>
                    </div>
                  </td>
                  <td className="p-4 text-charcoal/60">{design.category}</td>
                  <td className="p-4 font-semibold">${design.price}</td>
                  <td className="p-4 text-charcoal/60">{design.downloads}</td>
                  <td className="p-4">
                    <Badge className={design.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}>
                      {design.active ? "Active" : "Draft"}
                    </Badge>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 hover:bg-charcoal/5 rounded-lg transition-colors">
                      <Edit className="w-4 h-4 text-charcoal/60" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors ml-1">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
