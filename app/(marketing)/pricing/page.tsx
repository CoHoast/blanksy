import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "19",
    period: "/month",
    description: "For casual art lovers",
    features: [
      { text: "5 downloads per month", included: true },
      { text: "High-resolution files", included: true },
      { text: "Personal use license", included: true },
      { text: "Commercial license", included: false },
      { text: "Print discounts", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "49",
    period: "/month",
    description: "For creators & businesses",
    features: [
      { text: "25 downloads per month", included: true },
      { text: "High-resolution files", included: true },
      { text: "Commercial license", included: true },
      { text: "10% off print orders", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Unlimited",
    price: "99",
    period: "/month",
    description: "For agencies & power users",
    features: [
      { text: "Unlimited downloads", included: true },
      { text: "Extended commercial license", included: true },
      { text: "20% off print orders", included: true },
      { text: "API access", included: true },
      { text: "Dedicated support", included: true },
    ],
    cta: "Go Unlimited",
    popular: false,
  },
];

const faqs = [
  {
    question: "What's included in a digital download?",
    answer: "Every digital download includes high-resolution files (300 DPI) in multiple sizes, from 8x10 to 24x36. You can print at home or at any print shop.",
  },
  {
    question: "Can I use the art commercially?",
    answer: "Personal use is included with all plans. Commercial use (selling prints, using in products, client work) requires a Pro or Unlimited subscription.",
  },
  {
    question: "Do unused downloads roll over?",
    answer: "Downloads reset monthly and don't roll over. We recommend the Unlimited plan if you need flexibility.",
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all subscriptions. Digital downloads are non-refundable once accessed.",
  },
];

export default function PricingPage() {
  return (
    <div className="px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-ink/40 tracking-widest uppercase mb-2">Pricing</p>
          <h1 className="font-stencil text-5xl md:text-6xl mb-4">SIMPLE & FAIR</h1>
          <p className="text-ink/50 max-w-md mx-auto text-lg">
            Pay per download or subscribe for more value. No hidden fees, no surprises.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 ${
                plan.popular
                  ? "border-2 border-ink relative"
                  : "border border-ink/10 hover:border-ink/30 transition-colors"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pop text-white px-4 py-1 text-xs font-medium">
                  POPULAR
                </div>
              )}
              <p className="text-sm text-ink/40 uppercase tracking-widest mb-4">{plan.name}</p>
              <p className="font-stencil text-5xl mb-1">${plan.price}</p>
              <p className="text-sm text-ink/50 mb-2">{plan.period}</p>
              <p className="text-sm text-ink/60 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm">
                    <span className={feature.included ? "text-pop" : "text-ink/20"}>
                      {feature.included ? "✓" : "✗"}
                    </span>
                    <span className={feature.included ? "" : "text-ink/40"}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/sign-up"
                className={`block text-center py-3 text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-ink text-paper hover:bg-pop"
                    : "border border-ink/20 hover:bg-ink hover:text-paper"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Single Purchase */}
        <div className="text-center py-12 border-y border-ink/10 mb-20">
          <h2 className="font-stencil text-2xl mb-2">NOT READY TO SUBSCRIBE?</h2>
          <p className="text-ink/50 mb-6">Buy individual designs starting at just $9.99 each.</p>
          <Link
            href="/gallery"
            className="inline-block border border-ink/20 px-6 py-3 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
          >
            Browse Gallery →
          </Link>
        </div>

        {/* Print Pricing */}
        <div className="mb-20">
          <h2 className="font-stencil text-3xl mb-8 text-center">PRINT PRICING</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {[
              { size: "8×10", price: "29.99" },
              { size: "11×14", price: "39.99" },
              { size: "16×20", price: "49.99" },
              { size: "18×24", price: "59.99" },
              { size: "24×30", price: "79.99" },
            ].map((item) => (
              <div key={item.size} className="text-center p-4 bg-ink/5">
                <p className="font-stencil text-xl mb-1">{item.size}&quot;</p>
                <p className="text-ink/50">${item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-ink/40 mt-4">
            Museum-quality archival paper • Free shipping on orders over $50
          </p>
        </div>

        {/* FAQs */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-stencil text-3xl mb-8 text-center">FAQS</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-ink/10 pb-6">
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-ink/50 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center py-16 border-t border-ink/10">
          <h2 className="mb-4">
            <span className="font-stencil text-4xl md:text-5xl block">READY TO</span>
            <span className="font-serif text-4xl md:text-5xl italic text-pop block">get started?</span>
          </h2>
          <p className="text-ink/50 mb-8 max-w-md mx-auto">
            Join 50,000+ people who&apos;ve discovered gallery-worthy art at prices that make sense.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-ink text-paper px-8 py-4 text-sm font-medium hover:bg-pop transition-colors"
          >
            Start Free Trial →
          </Link>
        </div>
      </div>
    </div>
  );
}
