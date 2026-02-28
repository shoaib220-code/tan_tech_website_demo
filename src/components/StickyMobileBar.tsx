import { Phone, MessageSquare, ClipboardCheck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';

export const StickyMobileBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-deep-charcoal border-t border-white/10 px-2 py-2 flex gap-2">
      <a 
        href={`tel:${CONTACT_INFO.phone}`}
        className="flex-1 bg-electric-amber text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm"
      >
        <Phone size={18} />
        Call Now
      </a>
      <a 
        href={`https://wa.me/${CONTACT_INFO.phone.replace('+', '')}`}
        className="flex-1 bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm"
      >
        <MessageSquare size={18} />
        WhatsApp
      </a>
      <Link 
        to="/contact"
        className="flex-1 bg-white/10 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm border border-white/20"
      >
        <ClipboardCheck size={18} />
        Quote
      </Link>
    </div>
  );
};
