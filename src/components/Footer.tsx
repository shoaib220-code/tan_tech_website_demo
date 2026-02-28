import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Star, Heart } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-deep-charcoal text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-white font-display font-extrabold text-2xl tracking-tighter">
                TANTECH <span className="text-electric-amber">ELECTRICALS</span>
              </span>
              <p className="text-white/60 text-sm mt-2">
                Birmingham's most trusted electrical services provider. Professional, reliable, and compliant.
              </p>
            </Link>
            <div className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10">
              <div className="bg-electric-amber p-2 rounded">
                <Star size={20} className="text-black fill-black" />
              </div>
              <div>
                <p className="font-bold text-sm leading-none">{CONTACT_INFO.googleRating}★ Google Rated</p>
                <p className="text-xs text-white/50">{CONTACT_INFO.reviewCount} Verified Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <Heart size={14} className="text-pink-500 fill-pink-500" />
              <span>LGBTQ+ Friendly Business</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-electric-amber font-bold uppercase tracking-widest text-sm mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link to={`/${s.slug}`} className="text-white/60 hover:text-electric-amber transition-colors text-sm">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-electric-amber font-bold uppercase tracking-widest text-sm mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-electric-amber shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Call Anytime</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-white hover:text-electric-amber font-bold">
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-electric-amber shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Our Location</p>
                  <p className="text-white text-sm">{CONTACT_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-electric-amber shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Business Hours</p>
                  <p className="text-white text-sm font-bold">{CONTACT_INFO.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Areas Column */}
          <div>
            <h3 className="text-electric-amber font-bold uppercase tracking-widest text-sm mb-6">Service Areas</h3>
            <p className="text-white/60 text-sm mb-4">
              We cover all of Birmingham and the West Midlands including:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Solihull', 'Hall Green', 'Moseley', 'Kings Heath', 'Shirley', 'Acocks Green'].map((area) => (
                <span key={area} className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded text-white/70">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Tantech Electricals Birmingham. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/40 hover:text-white text-xs">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 hover:text-white text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
