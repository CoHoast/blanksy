import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Pricing</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium mb-4">Simple, transparent pricing</h1>
          <p className="text-charcoal/60 max-w-lg mx-auto text-lg">Choose the plan that works for you. Upgrade or cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {/* Starter */}
          <div className="bg-white rounded-3xl p-8 border-2 border-charcoal/10 hover:border-accent/30 transition-colors">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-medium mb-2">Starter</h3>
              <p className="text-charcoal/50 text-sm">Perfect for personal projects</p>
            </div>
            <p className="text-5xl font-serif font-bold mb-1">$19<span className="text-xl text-charcoal/50 font-normal">/mo</span></p>
            <p className="text-sm text-charcoal/50 mb-8">Billed monthly</p>
            <ul className="space-y-4 mb-8">
              {[
                { text: "5 downloads per month", included: true, bold: true },
                { text: "High-resolution files", included: true },
                { text: "Personal use license", included: true },
                { text: "Commercial use", included: false },
                { text: "Print discounts", included: false },
                { text: "API access", included: false },
              ].map((feature, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm">
                  <div className={`w-5 h-5 ${feature.included ? "bg-accent/10" : "bg-charcoal/5"} rounded-full flex items-center justify-center flex-shrink-0`}>
                    {feature.included ? <Check className="w-3 h-3 text-accent" /> : <X className="w-3 h-3 text-charcoal/30" />}
                  </div>
                  <span className={`${feature.included ? "" : "text-charcoal/40"} ${feature.bold ? "font-semibold" : ""}`}>{feature.text}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full py-6 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-cream">
              Get Started
            </Button>
          </div>

          {/* Pro */}
          <div className="pricing-popular rounded-3xl p-8 text-cream transform md:-translate-y-4 shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-accent to-gold text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">⭐ MOST POPULAR</span>
            </div>
            <div className="mb-6 pt-2">
              <h3 className="font-serif text-2xl font-medium mb-2">Pro</h3>
              <p className="text-cream/50 text-sm">For creators & small business</p>
            </div>
            <p className="text-5xl font-serif font-bold mb-1">$49<span className="text-xl text-cream/50 font-normal">/mo</span></p>
            <p className="text-sm text-cream/50 mb-8">Billed monthly</p>
            <ul className="space-y-4 mb-8">
              {[
                { text: "25 downloads per month", bold: true },
                { text: "High-resolution files" },
                { text: "Commercial license" },
                { text: "10% off print orders" },
                { text: "Priority support" },
              ].map((feature, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className={feature.bold ? "font-semibold" : ""}>{feature.text}</span>
                </li>
              ))}
            </ul>
            <Button className="btn-primary w-full py-6 rounded-full text-sm font-semibold text-white border-0">
              Start Free Trial
            </Button>
          </div>

          {/* Unlimited */}
          <div className="bg-white rounded-3xl p-8 border-2 border-charcoal/10 hover:border-accent/30 transition-colors">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-medium mb-2">Unlimited</h3>
              <p className="text-charcoal/50 text-sm">For agencies & power users</p>
            </div>
            <p className="text-5xl font-serif font-bold mb-1">$99<span className="text-xl text-charcoal/50 font-normal">/mo</span></p>
            <p className="text-sm text-charcoal/50 mb-8">Billed monthly</p>
            <ul className="space-y-4 mb-8">
              {[
                { text: "Unlimited downloads", bold: true },
                { text: "High-resolution files" },
                { text: "Extended commercial license" },
                { text: "20% off print orders" },
                { text: "API access" },
                { text: "Dedicated support" },
              ].map((feature, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm">
                  <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className={feature.bold ? "font-semibold" : ""}>{feature.text}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full py-6 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-cream">
              Go Unlimited
            </Button>
          </div>
        </div>

        {/* Single purchase note */}
        <div className="text-center">
          <p className="text-charcoal/60 mb-4">Don't need a subscription?</p>
          <p className="text-lg">
            Buy individual designs starting at <span className="font-bold gradient-text">$9.99</span>
          </p>
          <Link href="/gallery" className="inline-block mt-4">
            <Button variant="outline" className="rounded-full">Browse Gallery</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
