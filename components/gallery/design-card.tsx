"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Design } from "@/types";

interface DesignCardProps {
  design: Design;
}

export function DesignCard({ design }: DesignCardProps) {
  return (
    <Link href={`/design/${design.slug}`}>
      <div className="design-card group cursor-pointer bg-white rounded-3xl p-3 shadow-lg">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-4">
          <Image
            src={design.preview_url || "/placeholder.jpg"}
            alt={design.title}
            fill
            className="object-cover"
          />
          <div className="design-overlay absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent flex items-end justify-center pb-6">
            <button className="bg-white text-charcoal px-6 py-3 rounded-full text-sm font-semibold transform hover:scale-105 transition-transform shadow-lg">
              Quick View
            </button>
          </div>
          <button 
            className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-accent hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              // TODO: Add to favorites
            }}
          >
            <Heart className="w-5 h-5" />
          </button>
          
          {design.is_featured && (
            <span className="absolute top-3 left-3 bg-gradient-to-r from-accent to-gold text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              🔥 Bestseller
            </span>
          )}
        </div>
        
        <h3 className="font-semibold text-charcoal mb-1 truncate">{design.title}</h3>
        <p className="text-sm text-charcoal/50 mb-3 truncate">
          {design.category} • {design.style}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg gradient-text">
            ${design.price_digital?.toFixed(2)}
          </span>
          <Badge variant="secondary" className="text-xs bg-accent/90 text-white border-0">
            Digital
          </Badge>
        </div>
      </div>
    </Link>
  );
}
