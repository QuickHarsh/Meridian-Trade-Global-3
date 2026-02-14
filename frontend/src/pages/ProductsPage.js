import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero, AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { IMAGES, PRODUCTS } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { ShinyText } from '@/components/reactbits/ShinyText';
import { Magnet } from '@/components/reactbits/Magnet';
import { DecryptedText } from '@/components/reactbits/DecryptedText';

export default function ProductsPage() {
  return (
    <div data-testid="products-page" className="page-wrapper bg-ivory">
      <PageHero
        image={IMAGES.fabricStack}
        title="Our Collections"
        subtitle="Curated eco-conscious home textiles designed for global retail, hospitality, and wholesale partnerships."
      />

      <section className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-vibrant-purple/5 rounded-full filter blur-[100px] animate-blob" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="mb-8 max-w-3xl">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-purple mb-4 block font-bold">Product Portfolio</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight leading-[1.15]">
              Six Collections, One Standard of <span className="text-vibrant-purple">Excellence</span>
            </h2>
            <p className="font-sans text-base text-charcoal/60 mt-6 leading-relaxed">
              Each collection is developed with certified sustainable materials, artisan craftsmanship, and the scalability that B2B partners require. Minimum order capabilities, private labeling, and custom development are available across all categories.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {PRODUCTS.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          data-testid={`product-section-${product.id}`}
          className={`py-20 lg:py-28 px-6 lg:px-8 relative overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-ivory'}`}
        >
          {/* Alternating Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className={`absolute ${index % 2 === 0 ? 'top-10 left-[-10%]' : 'bottom-10 right-[-10%]'} w-[400px] h-[400px] ${['bg-vibrant-green/5', 'bg-vibrant-blue/5', 'bg-vibrant-orange/5', 'bg-vibrant-purple/5'][index % 4]} rounded-full filter blur-[100px] animate-blob`} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
              <AnimatedSection className={index % 2 !== 0 ? 'lg:[direction:ltr]' : ''}>
                <div className="relative img-zoom aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className={index % 2 !== 0 ? 'lg:[direction:ltr]' : ''}>
                <div className="mb-4">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-purple/60 block mb-1">
                    Collection
                  </span>
                  <ShinyText text={String(index + 1).padStart(2, '0')} disabled={false} speed={3} className="font-serif text-4xl text-vibrant-purple" />
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight leading-[1.15]">
                  {product.name}
                </h2>
                <p className="font-sans text-base text-charcoal/60 mt-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-8">
                  <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-4">Key Materials</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map(mat => (
                      <Badge
                        key={mat}
                        variant="outline"
                        className="border-sand bg-sand/10 text-charcoal/80 font-sans text-xs px-3 py-1 rounded-full hover:bg-vibrant-purple/10 hover:border-vibrant-purple/30 hover:text-vibrant-purple transition-all duration-300"
                      >
                        {mat}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-4">Capabilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map(feat => (
                      <div key={feat} className="flex items-center gap-2">
                        <Check size={14} className="text-vibrant-green shrink-0" />
                        <span className="font-sans text-sm text-charcoal/60">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    data-testid={`product-inquire-${product.id}`}
                    className="inline-flex items-center gap-2 font-sans text-sm text-vibrant-orange font-medium hover:gap-3 transition-all duration-300 group"
                  >
                    Inquire About {product.name} <ArrowRight size={14} className="group-hover:text-vibrant-orange transition-colors" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-charcoal text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vibrant-purple/20 rounded-full filter blur-[120px] pointer-events-none" />

        <AnimatedSection className="relative z-10">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mb-6 block">Custom Development</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight max-w-2xl mx-auto leading-[1.15]">
            Need Something Specific?
          </h2>
          <p className="font-sans text-base text-white/50 mt-6 max-w-lg mx-auto leading-relaxed">
            We develop custom textile products to your specifications. From fiber selection to finishing, our team works with you to create collections that align perfectly with your brand.
          </p>
          <div className="mt-12 flex justify-center">
            <Magnet padding={50} magnetStrength={4}>
              <Link
                to="/contact"
                data-testid="products-custom-cta"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-clay text-white font-sans text-sm tracking-wide hover:bg-clay/90 transition-colors duration-300 rounded-sm shadow-xl"
              >
                Discuss Custom Development <ArrowRight size={16} />
              </Link>
            </Magnet>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
