export const dynamic = "force-dynamic";

import Link from "next/link";
import { Image, Package, Users, TrendingUp, DollarSign } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl font-medium mb-2">Admin Dashboard</h1>
        <p className="text-charcoal/60 mb-8">Manage your designs, orders, and analytics.</p>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-6 h-6 text-accent" />
              <span className="text-xs text-green-500 font-semibold">+12%</span>
            </div>
            <p className="text-3xl font-serif font-bold">$4,230</p>
            <p className="text-sm text-charcoal/50">Revenue this month</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Package className="w-6 h-6 text-gold" />
              <span className="text-xs text-green-500 font-semibold">+8%</span>
            </div>
            <p className="text-3xl font-serif font-bold">156</p>
            <p className="text-sm text-charcoal/50">Orders this month</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Image className="w-6 h-6 text-teal" />
            </div>
            <p className="text-3xl font-serif font-bold">1,234</p>
            <p className="text-sm text-charcoal/50">Total designs</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-6 h-6 text-coral" />
              <span className="text-xs text-green-500 font-semibold">+23%</span>
            </div>
            <p className="text-3xl font-serif font-bold">892</p>
            <p className="text-sm text-charcoal/50">Active users</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/admin/designs" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Image className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-serif text-xl font-medium mb-2">Manage Designs</h3>
            <p className="text-charcoal/50">Add, edit, and organize your design catalog</p>
          </Link>
          <Link href="/admin/orders" className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <Package className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-serif text-xl font-medium mb-2">View Orders</h3>
            <p className="text-charcoal/50">Track orders and manage fulfillment</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
