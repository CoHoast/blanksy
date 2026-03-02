export const dynamic = "force-dynamic";

import Link from "next/link";
import { Download, Package, Heart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl font-medium mb-2">Welcome back!</h1>
        <p className="text-charcoal/60 mb-8">Manage your downloads, orders, and account settings.</p>

        {/* Quick Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-accent" />
            </div>
            <p className="text-3xl font-serif font-bold">12</p>
            <p className="text-sm text-charcoal/50">Downloads this month</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
              <Package className="w-6 h-6 text-gold" />
            </div>
            <p className="text-3xl font-serif font-bold">3</p>
            <p className="text-sm text-charcoal/50">Orders</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-coral" />
            </div>
            <p className="text-3xl font-serif font-bold">8</p>
            <p className="text-sm text-charcoal/50">Saved designs</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/dashboard/downloads" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Download className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-semibold mb-1">My Downloads</h3>
            <p className="text-sm text-charcoal/50">Access your purchased files</p>
          </Link>
          <Link href="/dashboard/orders" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Package className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-semibold mb-1">Order History</h3>
            <p className="text-sm text-charcoal/50">View past purchases</p>
          </Link>
          <Link href="/dashboard/favorites" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Heart className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-semibold mb-1">Saved Designs</h3>
            <p className="text-sm text-charcoal/50">Your wishlist</p>
          </Link>
          <Link href="/dashboard/settings" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Settings className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-semibold mb-1">Account Settings</h3>
            <p className="text-sm text-charcoal/50">Manage your account</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
