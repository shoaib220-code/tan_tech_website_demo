import { 
  ClipboardCheck, 
  Zap, 
  Lightbulb, 
  Settings, 
  Bath, 
  Search, 
  Building2, 
  AlertCircle,
  Star,
  Clock,
  MapPin,
  ShieldCheck,
  Phone,
  CheckCircle2,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: any;
  description: string;
  fullDescription: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'eicr',
    title: 'EICR Certificates',
    slug: 'eicr-certificates-birmingham',
    icon: ClipboardCheck,
    description: 'Electrical Installation Condition Reports for landlords and homeowners.',
    fullDescription: 'Landlords are legally required to have an EICR every 5 years. We provide fast, thorough inspections to keep you compliant and your tenants safe.',
    features: ['Legal compliance for landlords', 'Detailed safety reports', 'Same-week availability', 'Fines up to £30k avoided']
  },
  {
    id: 'rewires',
    title: 'Full House Rewires',
    slug: 'full-house-rewires-birmingham',
    icon: Zap,
    description: 'Complete electrical system upgrades for older properties.',
    fullDescription: 'Modernize your home with a full rewire. We minimize disruption while ensuring your property meets the latest safety standards.',
    features: ['Modern safety standards', 'Increased property value', 'New sockets & switches', 'Full certification']
  },
  {
    id: 'lighting',
    title: 'Lighting Installation',
    slug: 'lighting-installation-birmingham',
    icon: Lightbulb,
    description: 'Indoor and outdoor lighting solutions to transform your space.',
    fullDescription: 'From energy-efficient LED downlights to decorative outdoor garden lighting and security lights.',
    features: ['LED energy saving', 'Security lighting', 'Garden & pathway lights', 'Smart lighting controls']
  },
  {
    id: 'fuseboard',
    title: 'Fuse Board Upgrades',
    slug: 'fuse-board-upgrade-birmingham',
    icon: Settings,
    description: 'Replace old fuse boxes with modern, safe consumer units.',
    fullDescription: 'Upgrade to a modern consumer unit with RCD protection to significantly reduce the risk of electrical fires and shocks.',
    features: ['RCD protection', 'Surge protection', '1-day installation', 'NICEIC certified']
  },
  {
    id: 'bathroom',
    title: 'Bathroom Electrical',
    slug: 'bathroom-electrical-work',
    icon: Bath,
    description: 'Safe installation of fans, lighting, and shaver points.',
    fullDescription: 'Specialized electrical work for wet zones. We ensure all bathroom installations are IP-rated and fully compliant.',
    features: ['Extractor fan relocation', 'IP-rated lighting', 'Heated mirrors', 'Shaver points']
  },
  {
    id: 'testing',
    title: 'Testing & Inspection',
    slug: 'electrical-testing-inspection',
    icon: Search,
    description: 'Comprehensive electrical health checks for peace of mind.',
    fullDescription: 'Regular testing identifies potential issues before they become dangerous. Essential for both residential and commercial properties.',
    features: ['Fault finding', 'Visual inspections', 'Periodic testing', 'Safety certificates']
  },
  {
    id: 'commercial',
    title: 'Commercial Services',
    slug: 'commercial-electrical-services',
    icon: Building2,
    description: 'Reliable electrical solutions for Birmingham businesses.',
    fullDescription: 'From office fit-outs to retail maintenance, we provide professional electrical services tailored to your business needs.',
    features: ['Office fit-outs', 'Maintenance contracts', 'Emergency lighting', 'PAT testing']
  },
  {
    id: 'emergency',
    title: 'Emergency Callout',
    slug: 'emergency-electrician-birmingham',
    icon: AlertCircle,
    description: 'Available until 9:30 PM for urgent electrical issues.',
    fullDescription: 'Electrical emergency? We are open late when others are closed. Fast response times across Birmingham and West Midlands.',
    features: ['Open until 9:30 PM', 'Fast response', 'Fault diagnosis', 'Safe isolation']
  }
];

export const REVIEWS = [
  {
    name: "NH A",
    role: "Local Guide",
    text: "I would give 6 stars here if I could... so happy with everything. Professional, clean and very knowledgeable.",
    rating: 5
  },
  {
    name: "Isaac W.",
    role: "Homeowner",
    text: "Tan and his team have always been reliable, friendly and very professional. Highly recommend for any electrical work.",
    rating: 5
  },
  {
    name: "Saima M.",
    role: "Landlord",
    text: "Excellent and prompt service... very pleased with the new indoor and outdoor lighting. EICR was handled perfectly.",
    rating: 5
  }
];

export const CONTACT_INFO = {
  phone: "+44 7386 775618",
  phoneDisplay: "07386 775618",
  address: "386 Shaftmoor Ln, Birmingham B28 8SY",
  hours: "Open until 9:30 PM",
  email: "info@tantechelectricals.co.uk",
  googleRating: "4.9",
  reviewCount: "83"
};
