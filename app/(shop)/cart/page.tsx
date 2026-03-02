"use client";

export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  // TODO: Replace with real cart state
  const cartItems = [
    {
      id: "1",
      title: "Ocean Waves Abstract",
      type: "Digital Download",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=200&h=250&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-charcoal/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-charcoal/30" />
          </div>
          <h1 className="font-serif text-3xl font-medium mb-4">Your cart is empty</h1>
          <p className="text-charcoal/60 mb-8">Looks like you haven't added any designs yet.</p>
          <Link href="/gallery">
            <Button className="btn-primary text-white px-8 py-6 rounded-full border-0">
              Browse Gallery
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-medium mb-8">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 flex items-center space-x-4">
                <div className="relative w-20 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-charcoal/50">{item.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold gradient-text">${item.price.toFixed(2)}</p>
                  <button className="text-charcoal/40 hover:text-red-500 transition-colors mt-2">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl p-6 h-fit">
            <h2 className="font-serif text-xl font-medium mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-charcoal/60">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-charcoal/60">Tax</span>
                <span>$0.00</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span className="gradient-text text-lg">${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <Button className="btn-primary w-full py-6 text-white font-semibold rounded-full border-0 flex items-center justify-center space-x-2">
              <span>Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
