import React from 'react';
import { CONTACT_INFO, REVIEWS } from '../constants';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const ReviewsPage = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-deep-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Star size={16} className="fill-electric-amber text-electric-amber" />
            <span className="text-white font-bold">4.9/5 Average Rating</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            What Our <span className="text-electric-amber">Customers</span> Say
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            With 83 verified reviews on Google, we are Birmingham's most trusted electrical service provider.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real Reviews from Prompt */}
            {[
              ...REVIEWS,
              { name: "John D.", role: "Landlord", text: "Fastest EICR I've ever had. Digital certificate in my inbox the same day. Highly recommend for landlords.", rating: 5 },
              { name: "Sarah K.", role: "Homeowner", text: "Tan fixed a dangerous fault in our fuse board late on a Tuesday evening. Life saver!", rating: 5 },
              { name: "Ahmed R.", role: "Business Owner", text: "Professional commercial lighting installation. The shop looks amazing now. Great price too.", rating: 5 },
              { name: "Lucy M.", role: "Local Resident", text: "Very friendly and explained everything without the technical jargon. Felt very safe having them in my home.", rating: 5 },
              { name: "Mark T.", role: "Property Manager", text: "Reliable team for all our maintenance needs. Always on time and work is top notch.", rating: 5 },
              { name: "Emma W.", role: "Homeowner", text: "Beautiful garden lighting installed. It has completely transformed our outdoor space for the summer.", rating: 5 }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 relative"
              >
                <Quote size={40} className="text-electric-amber/20 absolute top-6 right-6" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-electric-amber text-electric-amber" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">{review.role}</p>
                  </div>
                  <CheckCircle2 size={20} className="text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a 
              href="https://www.google.com/search?q=Tantech+Electricals+Birmingham+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-3"
            >
              <MessageSquare size={20} />
              Read All 83 Reviews on Google
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
