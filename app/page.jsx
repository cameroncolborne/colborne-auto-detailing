export default function HomePage() {
  const trustBadges = [
    'Fully Mobile Service',
    'Halifax-Based',
    'Premium Products',
    'Satisfaction Focused',
  ]

  const serviceCards = [
    {
      title: 'Interior Detail',
      price: 'Starting at $149',
      desc: 'Deep interior cleaning designed to refresh the surfaces you touch every day.',
      features: ['Full vacuum', 'Surface wipe down', 'Windows cleaned', 'Door jambs cleaned'],
    },
    {
      title: 'Full Detail',
      price: 'Starting at $249',
      desc: 'A complete inside-and-out reset for drivers who want their vehicle looking its best.',
      features: ['Interior detail', 'Exterior hand wash', 'Wheels & tires cleaned', 'Spray wax protection'],
      featured: true,
    },
    {
      title: 'Premium Protection',
      price: 'Starting at $399',
      desc: 'A higher-end package focused on shine, protection, and long-lasting presentation.',
      features: ['Full detail included', 'Paint enhancement', 'Premium wax/sealant', 'Complete finishing touch'],
    },
  ]

  const locations = ['Halifax', 'Dartmouth', 'Bedford', 'Sackville', 'Lower Sackville', 'Clayton Park']

  const faqs = [
    {
      q: 'Do you come to my location?',
      a: 'Yes. Colborne Auto Detailing is mobile, so we can detail your vehicle at your home, workplace, apartment, or condo parking area when suitable.',
    },
    {
      q: 'Do prices change by vehicle?',
      a: 'Yes. Final pricing depends on vehicle size, condition, pet hair, stains, and the package selected. Custom quotes are available.',
    },
    {
      q: 'How do I book?',
      a: 'Use the booking button, call (902) 402-5542, or email cameroncolborneauto@gmail.com to request an appointment.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white font-sans">
      <header className="w-full border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-[#0B0B0D]/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/colborne-auto-detailing-logo.png"
              alt="Colborne Auto Detailing Logo"
              className="h-28 md:h-32 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#results" className="hover:text-white transition">Results</a>
            <a href="#about" className="hover:text-white transition">Why Us</a>
            <a href="#pricing" className="hover:text-white transition">Packages</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <a href="#contact" className="bg-gradient-to-r from-[#7B2CFF] to-[#FF2FB3] hover:from-[#8D45FF] hover:to-[#FF4FC1] transition px-5 py-2 rounded-xl font-medium shadow-lg shadow-[#FF2FB3]/20">
            Book Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,44,255,0.30),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,47,179,0.18),transparent_35%)]" />

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white/70 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Premium Mobile Detailing Across Halifax
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8">
              Luxury Detailing.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CFF] via-[#D946EF] to-[#FF2FB3]">
                Delivered To Your Door.
              </span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
              Colborne Auto Detailing brings professional mobile detailing to your home, workplace, or apartment. Built for busy professionals, car enthusiasts, and everyday drivers who want premium results without sacrificing time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-gradient-to-r from-[#7B2CFF] to-[#FF2FB3] hover:from-[#8D45FF] hover:to-[#FF4FC1] transition px-8 py-4 rounded-2xl font-semibold text-lg text-center shadow-xl shadow-[#7B2CFF]/30">
                Book Mobile Detailing
              </a>

              <a href="tel:9024025542" className="border border-white/15 hover:border-white/30 hover:bg-white/5 transition px-8 py-4 rounded-2xl font-semibold text-lg text-center">
                Call (902) 402-5542
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#7B2CFF]/20 blur-3xl rounded-full" />
            <div className="relative bg-gradient-to-br from-[#1B1B1D] to-[#101012] border border-white/10 rounded-[2rem] p-4 shadow-2xl">
              <img
                src="/hero-car.jpg"
                alt="Premium vehicle detailing"
                className="rounded-[1.5rem] object-cover h-[520px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111113]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center justify-center gap-3 rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-4 text-white/75">
              <span className="text-[#D946EF]">✓</span>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-28 bg-[#0F0F11]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[#D946EF] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">Mobile Convenience</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Professional Service Wherever You Are</h2>
            <p className="text-white/65 text-lg leading-relaxed">We make it easy to maintain a spotless vehicle without interrupting your day.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ['Home', 'Driveway or garage detailing from the comfort of your home.', '🏠'],
              ['Work', 'Have your vehicle professionally cleaned while you are on the job.', '💼'],
              ['Apartment', 'On-site detailing for apartment and condo residents.', '🏢'],
            ].map(([title, desc, icon]) => (
              <div key={title} className="group bg-[#18181B] border border-white/10 hover:border-[#D946EF]/40 transition-all duration-300 rounded-[2rem] p-10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#7B2CFF]/20">
                <div className="text-5xl mb-8">{icon}</div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-white/65 leading-relaxed text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-28 bg-[#121214] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#D946EF] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">Real Results</p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">See The Difference A Proper Detail Makes</h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">Real results from real vehicles. Our detailing process is focused on restoring cleanliness, enhancing presentation, and bringing your interior back to life. From dirt and dust to a clean, refreshed finish — the difference speaks for itself.
</p>
              <a href="#contact" className="inline-flex bg-gradient-to-r from-[#7B2CFF] to-[#FF2FB3] hover:from-[#8D45FF] hover:to-[#FF4FC1] transition px-7 py-4 rounded-2xl font-semibold">Get Your Vehicle Looking New</a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black/40">
                <div className="px-5 py-3 text-sm text-white/60 border-b border-white/10">Before</div>
                <img src="/before-detail.jpg" alt="Before detailing" className="h-80 w-full object-cover opacity-80" />
              </div>
              <div className="rounded-[2rem] overflow-hidden border border-[#D946EF]/30 bg-black/40">
                <div className="px-5 py-3 text-sm text-[#F0ABFC] border-b border-white/10">After</div>
                <img src="/after-detail.jpg" alt="After detailing" className="h-80 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <img src="/detail-work.jpg" alt="Professional detailing" className="rounded-[2rem] border border-white/10 shadow-2xl" />
          </div>

          <div>
            <p className="text-[#D946EF] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">Why Clients Choose Us</p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">Showroom Results Without The Hassle</h2>
            <div className="space-y-8">
              {[
                ['Professional Equipment', 'We use quality products and tools to deliver a polished, high-end finish.'],
                ['Time-Saving Convenience', 'Skip waiting rooms and drop-offs. We come directly to your location.'],
                ['Owner-Operated Care', 'Built from a passion for cars, customer service, and reliable work.'],
              ].map(([title, desc]) => (
                <div key={title} className="border-b border-white/10 pb-8">
                  <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                  <p className="text-white/65 text-lg leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#101012] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#D946EF] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">Perfect For</p>
            <h2 className="text-4xl lg:text-5xl font-bold">Detailing Built Around Your Lifestyle</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {['Busy Professionals', 'Apartment Residents', 'Car Enthusiasts', 'Families', 'Fleet Vehicles'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 text-center text-white/75 hover:border-[#D946EF]/40 transition">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-28 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[#D946EF] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">Packages</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Premium Detailing Services</h2>
            <p className="text-white/65 text-lg leading-relaxed">Prices vary by vehicle size, condition, and selected service. Custom quotes are available.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceCards.map((pkg) => (
              <div key={pkg.title} className={`relative bg-[#18181B] border rounded-[2rem] p-10 transition ${pkg.featured ? 'border-[#D946EF]/60 shadow-2xl shadow-[#7B2CFF]/20' : 'border-white/10 hover:border-[#D946EF]/40'}`}>
                {pkg.featured && <div className="absolute -top-4 left-8 bg-gradient-to-r from-[#7B2CFF] to-[#FF2FB3] px-4 py-2 rounded-full text-sm font-semibold">Most Popular</div>}
                <h3 className="text-3xl font-bold mb-3">{pkg.title}</h3>
                <p className="text-[#D946EF] text-2xl font-semibold mb-5">{pkg.price}</p>
                <p className="text-white/60 leading-relaxed mb-8">{pkg.desc}</p>
                <div className="space-y-4 mb-10">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-white/75">
                      <span className="text-[#D946EF]">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="block text-center w-full bg-gradient-to-r from-[#7B2CFF] to-[#FF2FB3] hover:from-[#8D45FF] hover:to-[#FF4FC1] transition py-4 rounded-2xl font-semibold">Book Package</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-28 bg-[#121214] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#D946EF] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">Client Reviews</p>
            <h2 className="text-4xl lg:text-5xl font-bold">Trusted By Vehicle Owners Across Halifax</h2>
            <p className="text-white/50 mt-5">Replace these placeholders with real Google reviews as soon as you have them.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              ['Sarah M.', 'The convenience alone is incredible. My SUV looked brand new and I never had to leave work.'],
              ['James T.', 'Professional, punctual, and extremely detailed. Easily the best detailing service I have used.'],
              ['Michael R.', 'Super clean results and excellent customer service. Highly recommend for busy professionals.'],
            ].map(([name, review]) => (
              <div key={name} className="bg-[#18181B] border border-white/10 rounded-[2rem] p-8">
                <div className="text-[#D946EF] text-2xl mb-6">★★★★★</div>
                <p className="text-white/75 text-lg leading-relaxed mb-8">“{review}”</p>
                <h3 className="font-semibold text-lg">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#D946EF] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">Service Area</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-10">Proudly Serving Halifax & Surrounding Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location) => (
              <span key={location} className="rounded-full bg-white/[0.04] border border-white/10 px-6 py-3 text-white/70">{location}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#101012] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#D946EF] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">FAQ</p>
            <h2 className="text-4xl lg:text-5xl font-bold">Common Questions</h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-[#18181B] border border-white/10 p-7">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-white/65 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#6D28D9] via-[#A21CAF] to-[#BE185D] rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl shadow-[#D946EF]/25">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Ready For A Spotless Vehicle?</h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed mb-10">Book your mobile detailing appointment today and experience premium convenience with professional results.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:cameroncolborneauto@gmail.com" className="bg-white text-black hover:bg-white/90 transition px-10 py-4 rounded-2xl font-bold text-lg shadow-xl">Get Your Quote</a>
              <a href="tel:9024025542" className="border border-white/30 hover:bg-white/10 transition px-10 py-4 rounded-2xl font-bold text-lg">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <img src="/colborne-auto-detailing-logo.png" alt="Colborne Auto Detailing Logo" className="h-20 w-auto mx-auto md:mx-0 mb-6" />
            <p className="text-white/60 leading-relaxed max-w-sm">Premium mobile detailing services in Halifax, Nova Scotia. Professional results delivered directly to your location.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4 text-white/70">
              <p>Phone: (902) 402-5542</p>
              <p>Email: cameroncolborneauto@gmail.com</p>
              <p>Halifax, Nova Scotia</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Why Choose Us</h3>
            <div className="space-y-4 text-white/70">
              <p>✓ Mobile Convenience</p>
              <p>✓ Premium Products</p>
              <p>✓ Reliable Service</p>
              <p>✓ Passion For Cars</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-white/40 text-sm px-6">© 2026 Colborne Auto Detailing. All Rights Reserved.</div>
      </footer>
    </main>
  )
}
