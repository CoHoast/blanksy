export const dynamic = "force-dynamic";

import { Package, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-001",
      date: "Mar 1, 2026",
      total: 12.99,
      status: "Completed",
      items: 1,
    },
    {
      id: "ORD-002",
      date: "Feb 15, 2026",
      total: 79.99,
      status: "Shipped",
      items: 1,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-medium mb-2">Order History</h1>
        <p className="text-charcoal/60 mb-8">View your past purchases and order status.</p>

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-charcoal/50">{order.date}</p>
                </div>
                <Badge variant={order.status === "Completed" ? "default" : "secondary"} className="bg-accent/10 text-accent border-0">
                  {order.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
                <p className="text-sm text-charcoal/50">{order.items} item(s)</p>
                <p className="font-bold gradient-text">${order.total.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
