import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, CONTACT_INFO } from '../constants';
import { CheckCircle2, Phone, ArrowLeft, AlertTriangle, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const ServicePage = () => {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return <div className="py-20 text-center">Service not found</div>;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-deep-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=2070&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-electric-amber mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              {service.title} <span className="text-electric-amber">Birmingham</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Why Choose Tantech for {service.title}?</h2>
              <div className="prose prose-lg max-w-none text-slate-600 mb-12">
                <p className="mb-6">
                  At Tantech Electricals, we understand the importance of safe and reliable electrical work. Our team of experts is fully qualified and experienced in handling all aspects of {service.title.toLowerCase()} in Birmingham and the surrounding West Midlands areas.
                </p>
                
                {service.id === 'eicr' && (
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className="text-amber-600" />
                      <h3 className="text-amber-900 font-bold m-0">Legal Requirement for Landlords</h3>
                    </div>
                    <p className="text-amber-800 m-0">
                      Since April 2021, all existing tenancies in England must have a valid EICR. Failure to comply can result in local authorities issuing fines of up to <strong>£30,000</strong>. Don't risk it — book your inspection today.
                    </p>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <CheckCircle2 className="text-green-500 shrink-0" />
                      <span className="font-bold text-slate-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Process</h3>
                <p className="mb-4">
                  We pride ourselves on a transparent and efficient process. From the initial quote to the final certification, we keep you informed every step of the way.
                </p>
                <ol className="list-decimal pl-6 space-y-3 mb-8">
                  <li><strong>Free Consultation:</strong> We discuss your requirements and provide a transparent quote.</li>
                  <li><strong>Scheduled Visit:</strong> We arrive on time, respecting your property and schedule.</li>
                  <li><strong>Professional Execution:</strong> Work is carried out to the highest NICEIC standards.</li>
                  <li><strong>Testing & Certification:</strong> We verify all work and issue the necessary certificates.</li>
                </ol>
              </div>

              {/* FAQ Section */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {[
                    { q: `How much does ${service.title.toLowerCase()} cost?`, a: "Pricing depends on the size and complexity of the job. We provide free, no-obligation quotes after an initial consultation." },
                    { q: "Are you fully insured?", a: "Yes, Tantech Electricals is fully insured and all our work is guaranteed for your peace of mind." },
                    { q: "Do you provide certificates?", a: "Absolutely. All relevant electrical work is certified and registered with the appropriate bodies." }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                      <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                      <p className="text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-deep-charcoal text-white p-8 rounded-3xl sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Book Your Service</h3>
                <p className="text-white/60 mb-8">
                  Available until 9:30 PM for your convenience. Get a quote in minutes.
                </p>
                <div className="space-y-4 mb-8">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="btn-primary w-full flex items-center justify-center gap-3">
                    <Phone size={20} />
                    Call {CONTACT_INFO.phoneDisplay}
                  </a>
                  <Link to="/contact" className="btn-outline w-full block text-center">
                    Get Free Quote
                  </Link>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={16} className="fill-electric-amber text-electric-amber" />
                    <span className="font-bold">4.9★ Google Rated</span>
                  </div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">
                    83 Verified Reviews
                  </p>
                </div>
              </div>

              <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200">
                <h4 className="font-bold mb-4">Other Services</h4>
                <div className="space-y-3">
                  {SERVICES.filter(s => s.id !== service.id).slice(0, 5).map(s => (
                    <Link key={s.id} to={`/${s.slug}`} className="block text-slate-600 hover:text-electric-amber font-medium transition-colors">
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
