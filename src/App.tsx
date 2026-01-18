import { useState } from 'react';
import { Phone, Home, Building2, Trash2, TreeDeciduous, Package, Truck } from 'lucide-react';
import logo from './assets/att.vuz3_cwwzj_elexsanuqyrpx8rqecjbftusffkf6kvc.jpg';
import tenantCleanups from './assets/att.o9xu7dznig2ebwzhyqb7evcm9omlldvhg8hu07ihas4.jpg';
import servicesImage from './assets/att.8j088bnct54uxugkksr63jrfpbd_3rmgmo7nsowy7d4.jpg';

function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const phoneNumber = '3616953499';
  const displayPhone = '361-695-3499';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black z-40 border-b border-green-500/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src={logo} alt="Big Al's Debris Removal" className="h-12" />
          <a
            href={`tel:${phoneNumber}`}
            className="bg-green-500 text-black font-bold px-4 py-2 rounded text-sm md:text-base"
          >
            {displayPhone}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span className="text-green-500">Junk & Debris Removal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-2">Fast. Reliable. We haul it all.</p>
          <p className="text-green-500 font-semibold mb-8">Hablamos Español</p>

          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-2 bg-green-500 text-black font-bold px-12 py-5 rounded-lg text-2xl mb-4"
          >
            <Phone className="w-6 h-6" />
            {displayPhone}
          </a>

          <div className="text-gray-400 mb-2">or</div>

          <a
            href="#contact"
            className="inline-block border-2 border-green-500 text-green-500 font-bold px-8 py-3 rounded-lg"
          >
            Request Free Estimate
          </a>
        </div>
      </section>

      {/* Services Image */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src={servicesImage}
            alt="Big Al's Debris Removal Services"
            className="rounded-lg w-full"
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-green-500">
            What We Haul
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Home, title: 'Residential Junk' },
              { icon: Building2, title: 'Commercial Debris' },
              { icon: Trash2, title: 'Tenant Cleanouts' },
              { icon: TreeDeciduous, title: 'Yard Waste' },
              { icon: Package, title: 'Appliances' },
              { icon: Truck, title: 'Furniture' },
            ].map((service, idx) => (
              <div key={idx} className="border border-green-500/30 rounded-lg p-4 text-center">
                <service.icon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-bold text-sm">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-green-500 font-black text-xl mb-1">Fast</div>
              <div className="text-sm text-gray-400">Same-day service</div>
            </div>
            <div>
              <div className="text-green-500 font-black text-xl mb-1">Insured</div>
              <div className="text-sm text-gray-400">Fully licensed</div>
            </div>
            <div>
              <div className="text-green-500 font-black text-xl mb-1">Veteran Owned</div>
              <div className="text-sm text-gray-400">Trusted service</div>
            </div>
            <div>
              <div className="text-green-500 font-black text-xl mb-1">Free Estimates</div>
              <div className="text-sm text-gray-400">No obligation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Cleanups */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <img
            src={tenantCleanups}
            alt="Tenant Cleanups - Before and After"
            className="rounded-lg w-full"
          />
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-green-500">
            Coastal Bend Area
          </h2>
          <p className="text-lg mb-6">Serving the local community</p>
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-2 bg-green-500 text-black font-bold px-8 py-4 rounded-lg text-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 px-4 bg-zinc-900">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-green-500">
            Free Estimate
          </h2>

          <div className="border-2 border-green-500/30 rounded-lg p-6">
            <div className="text-center mb-6">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 text-3xl font-black text-green-500"
              >
                <Phone className="w-8 h-8" />
                {displayPhone}
              </a>
              <p className="text-gray-400 text-sm mt-2">or complete form</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-black border border-green-500/30 focus:border-green-500 outline-none"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-black border border-green-500/30 focus:border-green-500 outline-none"
                  placeholder="Phone"
                />
              </div>
              <div>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-black border border-green-500/30 focus:border-green-500 outline-none resize-none"
                  placeholder="What needs removal?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-black font-bold px-8 py-4 rounded text-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Estimate'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center font-semibold">
                  Thanks! We'll call you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center font-semibold">
                  Error. Please call us.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-green-500 text-black text-center">
        <p className="font-bold mb-1">Big Al's Debris Removal</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-black md:hidden z-50 border-t border-green-500/20">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 bg-green-500 text-black font-bold px-6 py-4 rounded-lg text-lg w-full"
        >
          <Phone className="w-5 h-5" />
          {displayPhone}
        </a>
      </div>
    </div>
  );
}

export default App;
