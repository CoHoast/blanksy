import Link from "next/link";
import { Check, X, Download, Users, Building2, Sparkles, ShieldCheck, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-cream">
      {/* Hero */}
      <section className="px-6 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Simple Pricing</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium mb-6">
            Art for everyone.<br />
            <span className="text-accent">Pricing for every need.</span>
          </h1>
          <p className="text-charcoal/60 text-xl max-w-2xl mx-auto">
            Download for personal use or license for commercial projects. Choose what works for you.
          </p>
        </div>
      </section>

      {/* Toggle - Personal vs Commercial */}
      <section className="px-6 mb-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-charcoal/10">
              <div className="flex items-center space-x-2 bg-charcoal text-cream px-6 py-3 rounded-full">
                <Users className="w-4 h-4" />
                <span className="font-semibold text-sm">Personal Use</span>
              </div>
              <Link href="#commercial" className="flex items-center space-x-2 px-6 py-3 text-charcoal/60 hover:text-charcoal transition-colors">
                <Building2 className="w-4 h-4" />
                <span className="font-semibold text-sm">Commercial License</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Use Plans */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" />
              <span className="font-semibold text-sm">Personal Use</span>
            </div>
            <h2 className="font-serif text-3xl font-medium mb-3">For Home & Gifts</h2>
            <p className="text-charcoal/60 max-w-lg mx-auto">
              Perfect for decorating your space or creating thoughtful gifts. Not for resale.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Single Purchase */}
            <div className="bg-white rounded-3xl p-8 border-2 border-charcoal/10 hover:border-accent/30 transition-colors">
              <div className="mb-6">
                <span className="text-xs font-bold text-charcoal/40 uppercase tracking-wider">Pay As You Go</span>
                <h3 className="font-serif text-2xl font-medium mt-2">Single</h3>
              </div>
              <p className="text-4xl font-bold mb-1">$9.99</p>
              <p className="text-sm text-charcoal/50 mb-6">per image</p>
              <ul className="space-y-3 mb-8">
                {[
                  { text: "1 high-res download", included: true },
                  { text: "All available sizes", included: true },
                  { text: "Personal use license", included: true },
                  { text: "Print at home or local shop", included: true },
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/gallery">
                <Button variant="outline" className="w-full py-5 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-cream">
                  Browse Gallery
                </Button>
              </Link>
            </div>

            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border-2 border-charcoal/10 hover:border-accent/30 transition-colors">
              <div className="mb-6">
                <span className="text-xs font-bold text-charcoal/40 uppercase tracking-wider">Subscription</span>
                <h3 className="font-serif text-2xl font-medium mt-2">Starter</h3>
              </div>
              <p className="text-4xl font-bold mb-1">$19.99</p>
              <p className="text-sm text-charcoal/50 mb-6">per month</p>
              <ul className="space-y-3 mb-8">
                {[
                  { text: "10 downloads/month", included: true, bold: true },
                  { text: "All available sizes", included: true },
                  { text: "Personal use license", included: true },
                  { text: "New releases access", included: true },
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className={feature.bold ? "font-semibold" : ""}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full py-5 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-cream">
                Start Free Trial
              </Button>
            </div>

            {/* Pro - Popular */}
            <div className="bg-charcoal text-cream rounded-3xl p-8 relative transform md:-translate-y-4 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gold text-charcoal text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>MOST POPULAR</span>
                </span>
              </div>
              <div className="mb-6 pt-2">
                <span className="text-xs font-bold text-cream/40 uppercase tracking-wider">Subscription</span>
                <h3 className="font-serif text-2xl font-medium mt-2">Pro</h3>
              </div>
              <p className="text-4xl font-bold mb-1">$49.99</p>
              <p className="text-sm text-cream/50 mb-6">per month</p>
              <ul className="space-y-3 mb-8">
                {[
                  { text: "50 downloads/month", bold: true },
                  { text: "All available sizes" },
                  { text: "Personal use license" },
                  { text: "Priority new releases" },
                  { text: "Curated collections" },
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className={feature.bold ? "font-semibold" : ""}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full py-5 rounded-full text-sm font-semibold bg-gold hover:bg-gold/90 text-charcoal border-0">
                Start Free Trial
              </Button>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-3xl p-8 border-2 border-charcoal/10 hover:border-accent/30 transition-colors">
              <div className="mb-6">
                <span className="text-xs font-bold text-charcoal/40 uppercase tracking-wider">Subscription</span>
                <h3 className="font-serif text-2xl font-medium mt-2">Premium</h3>
              </div>
              <p className="text-4xl font-bold mb-1">$99</p>
              <p className="text-sm text-charcoal/50 mb-6">per month</p>
              <ul className="space-y-3 mb-8">
                {[
                  { text: "100 downloads/month", bold: true },
                  { text: "All available sizes" },
                  { text: "Personal use license" },
                  { text: "Early access to new art" },
                  { text: "Exclusive collections" },
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className={feature.bold ? "font-semibold" : ""}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full py-5 rounded-full text-sm font-semibold hover:bg-charcoal hover:text-cream">
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Personal Use Note */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start space-x-4">
            <ShieldCheck className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">What's Personal Use?</p>
              <p className="text-amber-800 text-sm">
                Print for your home, create gifts for friends & family, or use in personal projects. 
                <strong className="text-amber-900"> Not for resale or commercial products.</strong> Need to sell? Check out our Commercial Licenses below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial License Section */}
      <section id="commercial" className="px-6 py-24 bg-charcoal text-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-4">
              <Building2 className="w-4 h-4" />
              <span className="font-semibold text-sm">Commercial License</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">For Business & Resale</h2>
            <p className="text-cream/60 max-w-2xl mx-auto text-lg">
              Sell on products, use in client work, or create merchandise. One-time purchase, lifetime commercial rights.
            </p>
          </div>

          {/* Commercial Pricing Table */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden mb-12">
            <div className="grid grid-cols-3 gap-px bg-white/10">
              <div className="bg-charcoal p-6 text-center">
                <p className="text-cream/50 text-sm mb-1">Images</p>
                <p className="font-serif text-lg font-medium">Quantity</p>
              </div>
              <div className="bg-charcoal p-6 text-center">
                <p className="text-cream/50 text-sm mb-1">Total Price</p>
                <p className="font-serif text-lg font-medium">One-Time</p>
              </div>
              <div className="bg-charcoal p-6 text-center">
                <p className="text-cream/50 text-sm mb-1">Per Image</p>
                <p className="font-serif text-lg font-medium">Savings</p>
              </div>
            </div>
            
            {[
              { qty: 1, price: 49, per: 49.00, savings: null },
              { qty: 5, price: 199, per: 39.80, savings: "20%" },
              { qty: 10, price: 349, per: 34.90, savings: "29%" },
              { qty: 25, price: 699, per: 27.96, savings: "43%" },
              { qty: 50, price: 1199, per: 23.98, savings: "51%", popular: true },
              { qty: 100, price: 1999, per: 19.99, savings: "59%" },
            ].map((tier, i) => (
              <div 
                key={i} 
                className={`grid grid-cols-3 gap-px ${tier.popular ? 'bg-gold/20' : 'bg-white/5'} border-t border-white/10`}
              >
                <div className={`${tier.popular ? 'bg-gold/10' : 'bg-charcoal'} p-6 flex items-center justify-center`}>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{tier.qty}</p>
                    <p className="text-cream/50 text-sm">image{tier.qty > 1 ? 's' : ''}</p>
                  </div>
                  {tier.popular && (
                    <span className="ml-3 bg-gold text-charcoal text-xs font-bold px-2 py-1 rounded-full">BEST VALUE</span>
                  )}
                </div>
                <div className={`${tier.popular ? 'bg-gold/10' : 'bg-charcoal'} p-6 text-center`}>
                  <p className="text-3xl font-bold">${tier.price.toLocaleString()}</p>
                </div>
                <div className={`${tier.popular ? 'bg-gold/10' : 'bg-charcoal'} p-6 text-center`}>
                  <p className="text-xl font-semibold">${tier.per.toFixed(2)}</p>
                  {tier.savings && (
                    <p className="text-green-400 text-sm font-medium">Save {tier.savings}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Commercial Rights Include */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-serif text-xl font-medium mb-6 flex items-center space-x-2">
                <Check className="w-6 h-6 text-green-400" />
                <span>What's Included</span>
              </h3>
              <ul className="space-y-4">
                {[
                  "Sell on print-on-demand products (mugs, shirts, prints)",
                  "Use in client work and design projects",
                  "Sell physical prints (up to 5,000 units per design)",
                  "Use in social media and marketing",
                  "Lifetime license — no recurring fees",
                  "All available sizes and formats",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-cream/80">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-serif text-xl font-medium mb-6 flex items-center space-x-2">
                <X className="w-6 h-6 text-red-400" />
                <span>What's Not Included</span>
              </h3>
              <ul className="space-y-4">
                {[
                  "Reselling the digital files themselves",
                  "Claiming the artwork as your own creation",
                  "Using in trademark or logo designs",
                  "Unlimited print runs (contact us for Extended License)",
                  "Exclusive rights (design remains available to others)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-cream/60">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/gallery">
              <Button className="bg-gold hover:bg-gold/90 text-charcoal px-10 py-6 text-base font-semibold rounded-full">
                Browse Designs for Commercial Use
              </Button>
            </Link>
            <p className="text-cream/50 text-sm mt-4">
              Need more than 100 images or unlimited print runs? <Link href="/contact" className="text-gold hover:underline">Contact us</Link> for custom pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Extended License Teaser */}
      <section className="px-6 py-16 bg-gradient-to-br from-accent/10 to-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-10 h-10 text-accent mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-medium mb-3">Need Unlimited Print Runs?</h3>
          <p className="text-charcoal/60 mb-6 max-w-lg mx-auto">
            Our Extended Commercial License removes the 5,000 unit limit. Perfect for large-scale production and established businesses.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="rounded-full px-8">
              Contact Sales
            </Button>
          </Link>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-medium mb-3">Compare License Types</h2>
            <p className="text-charcoal/60">Choose the right license for your needs</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead className="bg-charcoal/5">
                <tr>
                  <th className="text-left p-6 font-semibold">Feature</th>
                  <th className="text-center p-6 font-semibold">Personal Use</th>
                  <th className="text-center p-6 font-semibold bg-accent/5">Commercial License</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/5">
                {[
                  { feature: "Print for your home", personal: true, commercial: true },
                  { feature: "Give as gifts", personal: true, commercial: true },
                  { feature: "Social media (personal)", personal: true, commercial: true },
                  { feature: "Sell prints & products", personal: false, commercial: true },
                  { feature: "Client work & design projects", personal: false, commercial: true },
                  { feature: "Print-on-demand (Etsy, Shopify)", personal: false, commercial: true },
                  { feature: "Marketing & advertising", personal: false, commercial: true },
                  { feature: "Starting price", personal: "$9.99", commercial: "$49" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-6 text-sm">{row.feature}</td>
                    <td className="p-6 text-center">
                      {typeof row.personal === 'boolean' ? (
                        row.personal ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-charcoal/20 mx-auto" />
                      ) : (
                        <span className="font-semibold">{row.personal}</span>
                      )}
                    </td>
                    <td className="p-6 text-center bg-accent/5">
                      {typeof row.commercial === 'boolean' ? (
                        row.commercial ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-charcoal/20 mx-auto" />
                      ) : (
                        <span className="font-semibold">{row.commercial}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-medium mb-3">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              { 
                q: "What counts as 'commercial use'?", 
                a: "Any use where you're making money from the design — selling prints, putting designs on products for sale, using in client work, or marketing materials for a business."
              },
              { 
                q: "Can I use personal downloads for my Etsy shop?", 
                a: "No, selling products with our designs requires a Commercial License. Personal use is only for your home, gifts, or personal projects."
              },
              { 
                q: "Is the commercial license a subscription?", 
                a: "No! Commercial licenses are one-time purchases with lifetime rights. Pay once, use forever (within the license terms)."
              },
              { 
                q: "What if I need more than 5,000 print runs?", 
                a: "Contact us for an Extended Commercial License which removes print quantity limits. Great for established businesses and larger operations."
              },
              { 
                q: "Can multiple people on my team use the same license?", 
                a: "Commercial licenses are per-company, not per-person. Your whole team can access designs purchased under your company's account."
              },
              { 
                q: "Do I need a commercial license for social media?", 
                a: "For personal accounts, no. For business accounts promoting products/services, technically yes — but we're pretty relaxed about social media use for marketing."
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-charcoal/10 pb-6">
                <h3 className="font-semibold mb-2 flex items-start space-x-2">
                  <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-charcoal/60 text-sm ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-medium mb-6">Ready to get started?</h2>
          <p className="text-charcoal/60 text-lg mb-8">
            Browse 10,000+ designs and find the perfect art for your space or business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gallery">
              <Button className="bg-charcoal hover:bg-charcoal/90 text-cream px-10 py-6 text-base font-semibold rounded-full">
                Browse Gallery
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-10 py-6 text-base font-semibold rounded-full">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
