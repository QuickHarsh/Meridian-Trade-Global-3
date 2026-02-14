import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Globe, Award } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { IMAGES, PRODUCTS, SUSTAINABILITY_ITEMS } from '@/lib/constants';

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']); // Reduced parallax depth
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]); // Fade out faster
  // Removed scale animation for performance

  return (
    <section ref={ref} data-testid="hero-section" className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%] parallax-img">
        <img src={IMAGES.heroTexture} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/50" />
      </motion.div>
      <motion.div style={{ opacity: textOpacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-xs uppercase tracking-[0.35em] text-white/50 mb-8"
        >
          The Marketplace For Responsible Sourcing
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-white tracking-tight max-w-5xl leading-[1.05]"
        >
          Refined Home Living.<br />
          <span className="italic font-normal">Responsible Sourcing.</span><br />
          Global Scale.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-sans text-base text-white/65 mt-10 max-w-xl leading-relaxed"
        >
          Your premier partner for ethically sourced bedding, bath, and living textiles. Serving retailers, hospitality groups, and brands worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <Link
            to="/products"
            data-testid="hero-explore-cta"
            className="px-8 py-3.5 bg-clay text-white font-sans text-sm tracking-wide hover:bg-clay/90 transition-colors duration-300 flex items-center gap-2"
          >
            Explore Our Collections <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            data-testid="hero-partner-cta"
            className="px-8 py-3.5 border border-white/30 text-white font-sans text-sm tracking-wide hover:bg-white/10 transition-colors duration-300"
          >
            Partner With Us
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto animate-pulse" />
      </motion.div>
    </section>
  );
}

function BrandIntro() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <AnimatedSection>
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Global Sourcing Partner</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.15]">
            A Sourcing Studio Built for Scale & Conscience
          </h2>
          <p className="font-sans text-base text-charcoal/60 mt-8 leading-relaxed max-w-lg">
            Meridian Trade Global acts as an extension of your procurement team. We connect discerning retailers and hospitality brands with ethically sourced, premium home textiles. By bridging artisan craftsmanship with industrial capability, we deliver collections that honor tradition while meeting the rigorous demands of global supply chains.
          </p>
          <Link
            to="/about"
            data-testid="brand-intro-link"
            className="inline-flex items-center gap-2 font-sans text-sm text-clay mt-8 hover:gap-3 transition-all duration-300"
          >
            Our Corporate Profile <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="relative img-zoom">
            <img
              src={IMAGES.craftsmanship}
              alt="Artisan weaving on traditional loom"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/60 to-transparent">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">Artisan Heritage</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CollectionCard({ product, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Internal parallax effect - image moves slightly slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <Link
      to="/products"
      ref={ref}
      data-testid={`product-tile-${product.id}`}
      className={`group block relative overflow-hidden aspect-[4/5] ${className}`}
    >
      <motion.div
        style={{ y, height: "130%", top: "-15%", willChange: "transform" }}
        className="absolute inset-x-0 w-full"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/50 block mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">{product.materials[0]}</span>
        <h3 className="font-serif text-3xl text-white mb-2">{product.name}</h3>
        <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
          <p className="font-sans text-sm text-white/70 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">{product.tagline}</p>
        </div>
      </div>
    </Link>
  );
}

function ProductGrid() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Our Collections</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            Curated for Conscious Commerce
          </h2>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <StaggerItem key={product.id} className={i === 0 || i === 3 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <CollectionCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function SustainabilityStrip() {
  const items = [...SUSTAINABILITY_ITEMS, ...SUSTAINABILITY_ITEMS, ...SUSTAINABILITY_ITEMS];
  return (
    <section data-testid="sustainability-strip" className="py-6 bg-olive overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="mx-8 lg:mx-12 font-sans text-xs uppercase tracking-[0.25em] text-white/80 flex items-center gap-3">
            <Leaf size={12} className="text-white/50 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function GlobalSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']); // Reduced parallax depth

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative overflow-hidden aspect-[4/3] order-2 lg:order-1">
          <motion.img
            style={{ y: imgY }}
            src={IMAGES.shippingLogistics}
            alt="Global shipping and logistics"
            className="w-full h-[120%] object-cover"
            loading="lazy"
          />
        </div>
        <AnimatedSection className="order-1 lg:order-2">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Global Reach</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.15]">
            Built on Responsible Global Sourcing
          </h2>
          <p className="font-sans text-base text-charcoal/60 mt-8 leading-relaxed">
            From the loom to the loading dock, every step in our supply chain is structured for quality, compliance, and environmental accountability. We source across established regions, manage logistics with precision, and deliver with the reliability that global partners demand.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              { num: '15+', label: 'Sourcing Regions' },
              { num: '40+', label: 'Export Destinations' },
              { num: '100%', label: 'Quality Inspected' },
              { num: '10+', label: 'Years Experience' },
            ].map(stat => (
              <div key={stat.label}>
                <span className="font-serif text-3xl text-clay">{stat.num}</span>
                <p className="font-sans text-xs text-charcoal/50 mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
          <Link
            to="/global-network"
            data-testid="global-section-link"
            className="inline-flex items-center gap-2 font-sans text-sm text-clay mt-10 hover:gap-3 transition-all duration-300"
          >
            Explore Our Network <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TrustIndicators() {
  const indicators = [
    { icon: Award, title: 'GOTS Certified', desc: 'Global Organic Textile Standard compliance across our supply chain' },
    { icon: Shield, title: 'Quality Assured', desc: 'Multi-point inspection framework from fiber to finished product' },
    { icon: Globe, title: 'Export Expertise', desc: 'Proven international trade documentation and compliance systems' },
    { icon: Leaf, title: 'Eco-Responsible', desc: 'Natural dyes, responsible sourcing, and traceable supply chains' },
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Trust & Credentials</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
            Standards That Define Our Practice
          </h2>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map(item => (
            <StaggerItem key={item.title} className="p-8 border border-sand/60 hover:border-clay/30 transition-colors duration-500">
              <item.icon size={24} className="text-olive mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
              <p className="font-sans text-sm text-charcoal/50 leading-relaxed">{item.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']); // Reduced parallax depth

  return (
    <section ref={ref} data-testid="final-cta" className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[130%]">
        <img src={IMAGES.fabricStack} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
      </motion.div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <AnimatedSection>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-white tracking-tight max-w-3xl leading-[1.1]">
            Let's Build a Responsible Supply Chain Together.
          </h2>
          <Link
            to="/contact"
            data-testid="final-cta-btn"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-clay text-white font-sans text-sm tracking-wide hover:bg-clay/90 transition-colors duration-300"
          >
            Initiate Partnership Discussion <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div data-testid="home-page" className="page-wrapper">
      <HeroSection />
      <BrandIntro />
      <ProductGrid />
      <SustainabilityStrip />
      <GlobalSection />
      <TrustIndicators />
      <FinalCTA />
    </div>
  );
}
