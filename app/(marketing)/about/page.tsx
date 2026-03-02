import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Our Story</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium mb-6">Art for everyone</h1>
          <p className="text-charcoal/60 text-xl max-w-2xl mx-auto">
            We believe beautiful art shouldn't be exclusive. That's why we've curated over 10,000 designs 
            that anyone can access, download, and use to transform their spaces.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-12">
            <h2 className="font-serif text-3xl font-medium mb-6">The Beginning</h2>
            <p className="text-charcoal/70 leading-relaxed">
              Blanksy started with a simple idea: make high-quality art accessible to everyone. 
              After running a print business for over 10 years, we realized that people want flexibility — 
              the ability to download files instantly or order museum-quality prints delivered to their door.
            </p>
            <p className="text-charcoal/70 leading-relaxed mt-4">
              Today, we offer thousands of original designs across every style imaginable. 
              From abstract to botanical, minimal to typography — there's something for every space 
              and every taste.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-4xl font-serif font-bold gradient-text mb-2">10K+</p>
              <p className="text-charcoal/50">Original Designs</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-4xl font-serif font-bold gradient-text mb-2">50K+</p>
              <p className="text-charcoal/50">Happy Customers</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-4xl font-serif font-bold gradient-text mb-2">10+</p>
              <p className="text-charcoal/50">Years Experience</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12">
            <h2 className="font-serif text-3xl font-medium mb-6">Our Promise</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <div>
                  <p className="font-semibold">High-Quality Files</p>
                  <p className="text-charcoal/60">Every design is print-ready at the highest resolution.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Instant Access</p>
                  <p className="text-charcoal/60">Download your files immediately after purchase.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Museum-Quality Prints</p>
                  <p className="text-charcoal/60">Our print partners use archival inks and premium materials.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
