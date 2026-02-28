import React from 'react';
import { CONTACT_INFO, SERVICES } from '../constants';
import { Phone, MapPin, Clock, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactPage = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      <section className="bg-deep-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Contact <span className="text-electric-amber">Tantech</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Get a free, no-obligation quote today. We're available until 9:30 PM for all your electrical needs.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="bg-slate-100 p-4 rounded-2xl">
                    <Phone size={28} className="text-electric-amber" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">Call Tan Directly</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-2xl font-extrabold hover:text-electric-amber transition-colors">
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <p className="text-slate-500 text-sm mt-1">Open until 9:30 PM daily</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-slate-100 p-4 rounded-2xl">
                    <MessageSquare size={28} className="text-electric-amber" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">WhatsApp Us</p>
                    <a 
                      href={`https://wa.me/${CONTACT_INFO.phone.replace('+', '')}`} 
                      className="text-2xl font-extrabold hover:text-green-600 transition-colors"
                    >
                      Message Now
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-slate-100 p-4 rounded-2xl">
                    <MapPin size={28} className="text-electric-amber" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">Our Location</p>
                    <p className="text-xl font-bold">{CONTACT_INFO.address}</p>
                    <p className="text-slate-500 text-sm mt-1">Serving Birmingham & West Midlands</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden h-80 bg-slate-100 border border-slate-200 shadow-lg">
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

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-green-100 p-6 rounded-full w-fit mx-auto mb-8">
                    <CheckCircle2 size={64} className="text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                  <p className="text-slate-600 text-lg mb-8">
                    Your request has been received. Tan will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">Request a Free Quote</h3>
                  <p className="text-slate-500 mb-8">Fill out the form below and we'll be in touch within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-electric-amber transition-colors" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                        <input required type="tel" className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-electric-amber transition-colors" placeholder="07123 456789" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                      <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-electric-amber transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Service Required</label>
                      <select required className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-electric-amber transition-colors appearance-none">
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                        <option value="other">Other / General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Property Address</label>
                      <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-electric-amber transition-colors" placeholder="Street, Postcode" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                      <textarea required rows={4} className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-electric-amber transition-colors" placeholder="Tell us about your requirements..."></textarea>
                    </div>
                    <button type="submit" className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3">
                      <Send size={20} />
                      Send Request
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
