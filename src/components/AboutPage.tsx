import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-deep-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            About <span className="text-electric-amber">Tantech</span> Electricals
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Birmingham's local experts in safe, reliable, and professional electrical solutions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8">The Tantech Story</h2>
              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  Founded by Tan, Tantech Electricals was born out of a desire to provide Birmingham residents and businesses with an electrical service they could truly rely on. With deep roots in the local community, we understand the specific needs of properties in areas like Hall Green, Moseley, and Kings Heath.
                </p>
                <p>
                  Our mission is simple: <strong>"Safe, reliable, affordable electrical work for every home and business in Birmingham."</strong> We don't just fix wires; we provide peace of mind.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
                  <Heart className="text-pink-500 shrink-0" size={32} />
                  <p className="m-0 font-bold text-slate-800">
                    We are a proud LGBTQ+ friendly business, welcoming and respecting all customers in our diverse Birmingham community.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional electrician" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-electric-amber p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-extrabold text-black leading-none">10+</p>
                <p className="text-xs uppercase font-bold tracking-widest text-black/60 mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Our Core Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              The principles that guide every job we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Safety First', desc: 'We never cut corners. Every installation is tested to the highest safety standards.', icon: ShieldCheck },
              { title: 'Local Expertise', desc: 'Based in Birmingham, we know the local area and property types inside out.', icon: Award },
              { title: 'Customer Focused', desc: 'Our 4.9★ rating is a testament to our commitment to your satisfaction.', icon: Users }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm text-center">
                <div className="bg-electric-amber/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <value.icon size={32} className="text-electric-amber" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-deep-charcoal rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2074&auto=format&fit=crop" alt="Sparks" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Ready to experience the Tantech difference?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${CONTACT_INFO.phone}`} className="btn-primary px-10 py-4 text-lg">Call {CONTACT_INFO.phoneDisplay}</a>
                <Link to="/contact" className="btn-outline px-10 py-4 text-lg">Get a Free Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
