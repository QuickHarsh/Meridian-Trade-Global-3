import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { IMAGES, NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const showLight = !scrolled && isHome;

  return (
    <nav
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/92 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(216,207,196,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-3 shrink-0">
          <img
            src={IMAGES.logo}
            alt="Meridian Trade Global"
            className={`w-auto transition-all duration-500 ${scrolled ? 'h-9' : 'h-11'}`}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.filter(l => l.path !== '/').map(link => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={`nav-link-${link.path.slice(1)}`}
              className={`font-sans text-[13px] tracking-wide transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-clay'
                  : showLight
                    ? 'text-white/90 hover:text-white'
                    : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            data-testid="nav-partner-cta"
            className="ml-2 px-5 py-2 bg-clay text-white font-sans text-[13px] tracking-wide hover:bg-clay/90 transition-colors duration-300"
          >
            Partner With Us
          </Link>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={showLight ? 'text-white' : 'text-charcoal'} size={22} />
          ) : (
            <Menu className={showLight ? 'text-white' : 'text-charcoal'} size={22} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ivory/95 backdrop-blur-2xl overflow-hidden border-t border-sand/50"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`mobile-nav-${link.path.slice(1) || 'home'}`}
                  className={`font-sans text-sm tracking-wide py-3 border-b border-sand/30 ${
                    location.pathname === link.path ? 'text-clay' : 'text-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                data-testid="mobile-partner-cta"
                className="mt-4 px-6 py-3 bg-clay text-white font-sans text-sm tracking-wide text-center"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
