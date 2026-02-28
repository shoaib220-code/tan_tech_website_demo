import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Star, Menu, X } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'EICR', path: '/eicr-certificates-birmingham' },
    { name: 'Services', path: '#', dropdown: true },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Rating */}
          <Link to="/" className="flex flex-col">
            <span className="text-white font-display font-extrabold text-xl tracking-tighter">
              TANTECH <span className="text-electric-amber">ELECTRICALS</span>
            </span>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-electric-amber text-electric-amber" />
                ))}
              </div>
              <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                {CONTACT_INFO.googleRating}★ Rated
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-center gap-1 text-white/80 hover:text-electric-amber font-medium transition-colors cursor-pointer py-2">
                    {link.name}
                    <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                      <div className="bg-deep-charcoal border border-white/10 rounded-lg shadow-xl w-64 overflow-hidden">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            to={`/${s.slug}`}
                            className="block px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-electric-amber border-b border-white/5 last:border-0"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-white/80 hover:text-electric-amber font-medium transition-colors ${
                      location.pathname === link.path ? 'text-electric-amber' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 text-white font-bold hover:text-electric-amber transition-colors"
            >
              <Phone size={18} className="text-electric-amber" />
              {CONTACT_INFO.phoneDisplay}
            </a>
            <Link to="/contact" className="btn-primary py-2 px-4 text-sm">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-deep-charcoal border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <React.Fragment key={link.name}>
                  {link.dropdown ? (
                    <div className="py-2">
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest px-3 mb-2">Services</p>
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          to={`/${s.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-white/80 hover:text-electric-amber"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 text-lg font-medium text-white/80 hover:text-electric-amber"
                    >
                      {link.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call {CONTACT_INFO.phoneDisplay}
                </a>
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="btn-primary"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
