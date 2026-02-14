import { Link } from 'react-router-dom';
import { IMAGES } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer data-testid="main-footer" className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <img
              src={IMAGES.logo}
              alt="Meridian Trade Global"
              className="h-14 w-auto mb-6 brightness-0 invert opacity-80"
            />
            <p className="font-sans text-sm leading-relaxed text-white/50 max-w-xs">
              Premium eco-conscious home textiles sourced responsibly and delivered globally.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/35 mb-6">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Sustainability', path: '/sustainability' },
                { label: 'Global Network', path: '/global-network' },
                { label: 'Why Choose Us', path: '/why-choose-us' },
              ].map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`footer-link-${link.path.slice(1)}`}
                  className="font-sans text-sm text-white/50 hover:text-white/80 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/35 mb-6">Collections</h4>
            <div className="flex flex-col gap-3">
              {['Bedding', 'Table Linens', 'Throws & Blankets', 'Cushions', 'Bath Textiles', 'Floor Coverings'].map(item => (
                <Link
                  key={item}
                  to="/products"
                  className="font-sans text-sm text-white/50 hover:text-white/80 transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/35 mb-6">Contact</h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-white/50">
              <a href="mailto:info@meridiantradeglobal.com" data-testid="footer-email" className="hover:text-white/80 transition-colors duration-300">
                info@meridiantradeglobal.com
              </a>
              <p>Mon - Fri, 9:00 - 18:00 IST</p>
              <p className="mt-2 text-white/35 text-xs leading-relaxed">
                Registered Office<br />
                Meridian Trade Global<br />
                Mumbai, India
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Meridian Trade Global. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="font-sans text-xs text-white/30">GOTS Certified Partner</span>
            <span className="font-sans text-xs text-white/30">Privacy Policy</span>
            <span className="font-sans text-xs text-white/30">Terms of Service</span>
          </div>
        </div>

        <p className="mt-8 font-sans text-xs text-white/20 max-w-3xl leading-relaxed">
          Meridian Trade Global is committed to responsible trade practices, environmental stewardship, and the preservation of artisan heritage. All products meet international quality and sustainability standards.
        </p>
      </div>
    </footer>
  );
}
