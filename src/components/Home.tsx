import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SERVICES, REVIEWS } from '../constants';
import { Star, Phone, ShieldCheck, Clock, MapPin, CheckCircle2, ArrowRight, AlertTriangle, ClipboardCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Urgency Banner */}
      <div className="bg-electric-amber text-black py-2 px-4 text-center text-xs md:text-sm font-bold flex items-center justify-center gap-2">
        <AlertTriangle size={16} className="shrink-0" />
        <span>Landlords: EICR inspections are a legal requirement. Fines up to £30,000 for non-compliance.</span>
        <Link to="/eicr-certificates-birmingham" className="underline ml-2">Book Now →</Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-deep-charcoal min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
            alt="Electrician at work" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal via-deep-charcoal/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-electric-amber text-electric-amber" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">4.9★ Rated by 83 Customers</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6"
            >
              Birmingham's Most <span className="text-electric-amber">Trusted</span> Electrician
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 mb-10 leading-relaxed"
            >
              EICR Certificates, Full Rewires, Lighting & More. <br className="hidden md:block" />
              <span className="text-white font-bold">Open Until 9:30 PM</span> — No Job Too Big or Small in Birmingham & West Midlands.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={`tel:${CONTACT_INFO.phone}`} className="btn-primary text-lg flex items-center justify-center gap-3 px-8">
                <Phone size={24} />
                Call Now: {CONTACT_INFO.phoneDisplay}
              </a>
              <Link to="/contact" className="btn-outline text-lg flex items-center justify-center gap-2 px-8">
                Get a Free Quote
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock size={18} className="text-electric-amber" />
                Open Until 9:30 PM
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <ShieldCheck size={18} className="text-electric-amber" />
                EICR Certified
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={18} className="text-electric-amber" />
                Local Birmingham
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle2 size={18} className="text-electric-amber" />
                NICEIC Standards
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Professional Electrical Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Comprehensive electrical solutions for homeowners, landlords, and businesses across Birmingham.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link 
                key={service.id} 
                to={`/${service.slug}`}
                className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-electric-amber transition-all hover:shadow-xl flex flex-col"
              >
                <div className="bg-slate-100 p-4 rounded-xl w-fit mb-6 group-hover:bg-electric-amber transition-colors">
                  <service.icon size={32} className="text-deep-charcoal" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{service.description}</p>
                <div className="flex items-center text-electric-amber font-bold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-deep-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">83 Customers Can't Be Wrong</h2>
              <p className="text-white/60 text-lg mb-10">
                We take pride in our 4.9★ rating. Our commitment to safety, reliability, and professional service has made us Birmingham's first choice for electrical work.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="text-center">
                  <p className="text-5xl font-extrabold text-electric-amber leading-none">4.9</p>
                  <p className="text-xs uppercase tracking-widest font-bold mt-2">Rating</p>
                </div>
                <div className="h-12 w-px bg-white/10"></div>
                <div className="text-center">
                  <p className="text-5xl font-extrabold text-electric-amber leading-none">83</p>
                  <p className="text-xs uppercase tracking-widest font-bold mt-2">Reviews</p>
                </div>
                <div className="h-12 w-px bg-white/10"></div>
                <div className="text-center">
                  <p className="text-5xl font-extrabold text-electric-amber leading-none">100%</p>
                  <p className="text-xs uppercase tracking-widest font-bold mt-2">Reliable</p>
                </div>
              </div>
              <Link to="/reviews" className="btn-outline inline-block">Read All Reviews →</Link>
            </div>

            <div className="space-y-6">
              {REVIEWS.map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-electric-amber text-electric-amber" />
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-sm">— {review.name}</p>
                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">{review.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EICR Focus */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                alt="Electrical panel inspection" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Landlord Compliance
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Need an EICR Certificate?</h2>
              <p className="text-slate-600 text-lg mb-8">
                Since 2020, landlords are legally required to have a valid EICR for their properties. Non-compliance can lead to fines of up to £30,000 and invalidate your insurance.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Fast, thorough inspections',
                  'Same-week availability in Birmingham',
                  'Digital certificates issued promptly',
                  'Expert advice on remedial works'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 size={20} className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/eicr-certificates-birmingham" className="btn-primary inline-block px-10">Book My EICR Today</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Why Birmingham Trusts Tan</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              We go above and beyond to ensure every customer receives the best possible service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '4.9★ Rated', desc: 'Consistently top-rated electrician in Birmingham.', icon: Star },
              { title: 'Open Until 9:30 PM', desc: 'We\'re there when other electricians have gone home.', icon: Clock },
              { title: 'EICR Specialists', desc: 'Keep your property legal, safe, and compliant.', icon: ClipboardCheck },
              { title: 'Transparent Pricing', desc: 'No hidden costs, no jargon, just great work.', icon: ShieldCheck }
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="bg-electric-amber/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <item.icon size={32} className="text-electric-amber" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Book?</h2>
              <p className="text-slate-600 text-lg mb-10">
                Get in touch today for a free, no-obligation quote. Whether it's a small repair or a full rewire, we're here to help.
              </p>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Phone size={24} className="text-electric-amber" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-slate-400">Call Tan Directly</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-2xl font-extrabold hover:text-electric-amber transition-colors">
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <MapPin size={24} className="text-electric-amber" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-slate-400">Our Location</p>
                    <p className="text-lg font-bold">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Clock size={24} className="text-electric-amber" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-slate-400">Business Hours</p>
                    <p className="text-lg font-bold">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="rounded-2xl overflow-hidden h-64 bg-slate-100 border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.482834548488!2d-1.8540854!3d52.4341144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb938743126d%3A0x63366472669e4695!2s386%20Shaftmoor%20Ln%2C%20Birmingham%20B28%208SY!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold mb-8">Get a Free Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-electric-amber" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-electric-amber" placeholder="07123 456789" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Service Needed</label>
                  <select className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-electric-amber">
                    <option>Select a service...</option>
                    {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Property Address</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-electric-amber" placeholder="Street, Postcode" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-electric-amber" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="w-full btn-primary py-4 text-lg">Send Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
