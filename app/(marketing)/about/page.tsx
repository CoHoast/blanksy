import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm text-ink/40 tracking-widest uppercase mb-2">Our Story</p>
          <h1 className="mb-6">
            <span className="font-stencil text-5xl md:text-6xl block leading-[0.95]">WE BELIEVE</span>
            <span className="font-serif text-5xl md:text-6xl italic text-pop block leading-[0.95]">great art</span>
            <span className="font-stencil text-5xl md:text-6xl block leading-[0.95]">BELONGS EVERYWHERE</span>
          </h1>
          <p className="text-ink/50 text-xl leading-relaxed">
            Not just in fancy galleries with velvet ropes and $500 price tags. On your walls. In your home. 
            In the places where you actually live your life.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="aspect-square bg-ink/5 relative overflow-hidden">
            <Image
              src="/preview-images/15001.jpeg"
              alt="Art on walls"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-stencil text-3xl md:text-4xl mb-6">THE PROBLEM</h2>
            <p className="text-ink/60 text-lg leading-relaxed mb-6">
              Walk into any art gallery. See that beautiful print you love? That&apos;ll be $300. 
              Plus framing. Plus shipping. Plus the weird pressure from the salesperson asking 
              if you&apos;re &ldquo;a collector.&rdquo;
            </p>
            <p className="text-ink/60 text-lg leading-relaxed">
              Meanwhile, your walls stay blank because somehow &ldquo;affordable art&rdquo; means 
              mass-produced prints of the same Eiffel Tower photo everyone else has.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-ink text-paper py-20 px-8 md:px-16 mb-24 -mx-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-stencil text-3xl md:text-4xl mb-6">THE BLANKSY WAY</h2>
            <p className="text-paper/60 text-lg leading-relaxed mb-8">
              We work directly with artists to bring you 10,000+ original designs—no middlemen, 
              no gallery markup, no pretentious gatekeeping.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-pop rounded-full flex items-center justify-center mb-4">
                  <span className="font-stencil text-xl">1</span>
                </div>
                <h3 className="font-medium mb-2">Curated Collection</h3>
                <p className="text-paper/50 text-sm">Every design is hand-selected. No algorithm dumps. Quality over quantity.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-pop rounded-full flex items-center justify-center mb-4">
                  <span className="font-stencil text-xl">2</span>
                </div>
                <h3 className="font-medium mb-2">Fair Prices</h3>
                <p className="text-paper/50 text-sm">Digital downloads from $9.99. Premium prints from $29.99. No surprises.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-pop rounded-full flex items-center justify-center mb-4">
                  <span className="font-stencil text-xl">3</span>
                </div>
                <h3 className="font-medium mb-2">Your Choice</h3>
                <p className="text-paper/50 text-sm">Download and print yourself, or let us handle it. Either way, gallery-quality.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="text-center mb-24">
          <h2 className="font-stencil text-3xl md:text-4xl mb-12">BY THE NUMBERS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="font-stencil text-5xl md:text-6xl text-pop mb-2">10K+</p>
              <p className="text-ink/50">Original Designs</p>
            </div>
            <div>
              <p className="font-stencil text-5xl md:text-6xl mb-2">50K+</p>
              <p className="text-ink/50">Happy Customers</p>
            </div>
            <div>
              <p className="font-stencil text-5xl md:text-6xl mb-2">100+</p>
              <p className="text-ink/50">Partner Artists</p>
            </div>
            <div>
              <p className="font-stencil text-5xl md:text-6xl text-pop mb-2">4.9★</p>
              <p className="text-ink/50">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="font-stencil text-3xl md:text-4xl mb-8 text-center">WHAT WE STAND FOR</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="border border-ink/10 p-8">
              <h3 className="font-medium text-lg mb-2">Art for Everyone</h3>
              <p className="text-ink/50 text-sm">Great design shouldn&apos;t require a trust fund. We&apos;re making beautiful art accessible to real people with real budgets.</p>
            </div>
            <div className="border border-ink/10 p-8">
              <h3 className="font-medium text-lg mb-2">Support Artists</h3>
              <p className="text-ink/50 text-sm">Every purchase directly supports independent artists. Better margins than galleries, wider reach than going solo.</p>
            </div>
            <div className="border border-ink/10 p-8">
              <h3 className="font-medium text-lg mb-2">Quality Matters</h3>
              <p className="text-ink/50 text-sm">High-resolution files. Archival-quality prints. We don&apos;t cut corners on the stuff that matters.</p>
            </div>
            <div className="border border-ink/10 p-8">
              <h3 className="font-medium text-lg mb-2">No Gatekeeping</h3>
              <p className="text-ink/50 text-sm">You don&apos;t need to be a &ldquo;collector&rdquo; to appreciate art. If you like it, hang it. That&apos;s all that matters.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-16 border-t border-ink/10">
          <h2 className="mb-4">
            <span className="font-stencil text-4xl md:text-5xl block">READY TO FILL</span>
            <span className="font-serif text-4xl md:text-5xl italic text-pop block">those blank walls?</span>
          </h2>
          <p className="text-ink/50 mb-8 max-w-md mx-auto">
            Browse 10,000+ designs and find the perfect art for your space.
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-ink text-paper px-8 py-4 text-sm font-medium hover:bg-pop transition-colors"
          >
            Start Exploring →
          </Link>
        </div>
      </div>
    </div>
  );
}
