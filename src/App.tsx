import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ServicePage } from './components/ServicePage';
import { StickyMobileBar } from './components/StickyMobileBar';
import { AboutPage } from './components/AboutPage';
import { ReviewsPage } from './components/ReviewsPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicy, TermsOfService } from './components/LegalPages';
import { SERVICES } from './constants';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {SERVICES.map((service) => (
              <Route 
                key={service.id}
                path={service.slug.startsWith('/') ? service.slug : `/${service.slug}`} 
                element={<ServicePage />} 
              />
            ))}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <StickyMobileBar />
      </div>
    </Router>
  );
}
