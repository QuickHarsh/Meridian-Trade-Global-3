import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Globe, Award } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { IMAGES, PRODUCTS, SUSTAINABILITY_ITEMS } from '@/lib/constants';
import { SplitText } from '@/components/reactbits/SplitText';
import { BlurText } from '@/components/reactbits/BlurText';
import { Magnet } from '@/components/reactbits/Magnet';
import { SpotlightCard } from '@/components/reactbits/SpotlightCard';
import { DecryptedText } from '@/components/reactbits/DecryptedText';
import { ShinyText } from '@/components/reactbits/ShinyText';

function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative h-screen bg-charcoal overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-vibrant-purple/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-vibrant-blue/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-vibrant-green/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000" />

      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-charcoal z-10" />
        <img src={IMAGES.heroTexture} alt="" className="w-full h-full object-cover opacity-60" />
      </motion.div>

      <div className="relative z-10 max-w-[90vw] lg:max-w-7xl mx-auto px-6 text-center">
        <StaggerContainer>
          <div className="mb-8 flex justify-center">
            <AnimatedSection className="inline-block px-4 py-1.5 border border-white/20 rounded-full backdrop-blur-md bg-white/5">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/80">
                The Marketplace For Responsible Sourcing
              </span>
            </AnimatedSection>
          </div>

          <div className="overflow-hidden mb-8">
            <SplitText
              text="Refined Home Living."
              className="font-serif text-4xl sm:text-6xl lg:text-8xl text-white tracking-tight block leading-[1.1]"
              delay={40}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.1}
              textAlign="center"
            />
            <SplitText
              text="Responsible Sourcing."
              className="font-serif text-4xl sm:text-6xl lg:text-8xl text-gold tracking-tight block leading-[1.1] italic"
              delay={40}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.1}
              textAlign="center"
            />
            <SplitText
              text="Global Scale."
              className="font-serif text-4xl sm:text-6xl lg:text-8xl text-white tracking-tight block leading-[1.1]"
              delay={40}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.1}
              textAlign="center"
            />
          </div>

          <div className="flex justify-center mb-12">
            <BlurText
              text="Your premier partner for ethically sourced bedding, bath, and living textiles. Serving retailers, hospitality groups, and brands worldwide."
              className="font-sans text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed"
              delay={10}
              animateBy="words"
              direction="bottom"
              threshold={0.2}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Magnet padding={50} magnetStrength={3}>
              <Link
                to="/products"
                data-testid="hero-explore-cta"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-clay text-white rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all hover:bg-clay/90"
              >
                Explore Collections
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnet>

            <Magnet padding={50} magnetStrength={3}>
              <Link
                to="/contact"
                data-testid="hero-partner-cta"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all hover:bg-white/10 hover:border-white"
              >
                Partner With Us
              </Link>
            </Magnet>
          </div>
        </StaggerContainer>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}

function BrandIntro() {
  return (
    <section className="py-24 lg:py-40 px-6 lg:px-8 bg-soft-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <img
            src={IMAGES.craftsmanship}
            alt="Textile Loom"
            className="w-full h-[600px] object-cover rounded-2xl opacity-80 shadow-2xl"
          />
        </AnimatedSection>
        <div className="max-w-xl">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-6 block">Global Sourcing Partner</span>
          <SplitText
            text="A Sourcing Studio Built for Scale & Conscience"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.15] mb-8"
            delay={30}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,20px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.4}
            textAlign="left"
          />
          <BlurText
            text="Meridian Trade Global acts as an extension of your procurement team. We connect discerning retailers and hospitality brands with ethically sourced, premium home textiles. By bridging artisan craftsmanship with industrial capability, we deliver collections that honor tradition while meeting the rigorous demands of global supply chains."
            className="font-sans text-base text-charcoal/60 leading-relaxed"
            delay={5}
            animateBy="words"
            direction="bottom"
            threshold={0.4}
          />

          <div className="mt-10">
            <Link
              to="/about"
              data-testid="brand-intro-link"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-clay hover:gap-3 transition-all duration-300 uppercase tracking-wider"
            >
              Our Corporate Profile <ArrowRight size={14} />
            </Link>
          </div>
        </div>
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

import { CircularGallery } from '@/components/CircularGallery';

function ProductGrid() {
  return (
    <section className="py-24 lg:py-32 px-4 bg-charcoal relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-clay/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        <AnimatedSection className="mb-10 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Our Collections</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Curated for Conscious Commerce
          </h2>
          <p className="font-sans text-white/50 mt-4 text-sm">Drag to explore our global portfolio</p>
        </AnimatedSection>

        <div className="w-full h-[600px]">
          <CircularGallery
            items={PRODUCTS}
            bend={2}
            textColor="#ffffff"
            borderRadius={0.05}
          />
        </div>
      </div>
    </section>
  );
}

function SustainabilityStrip() {
  const items = [...SUSTAINABILITY_ITEMS, ...SUSTAINABILITY_ITEMS, ...SUSTAINABILITY_ITEMS];
  return (
    <section data-testid="sustainability-strip" className="py-6 bg-vibrant-green overflow-hidden relative">
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
      <div className="flex animate-marquee whitespace-nowrap relative z-10">
        {items.map((item, i) => (
          <span key={i} className="mx-8 lg:mx-12 font-sans text-xs uppercase tracking-[0.25em] text-white flex items-center gap-3 font-semibold">
            <Leaf size={14} className="text-white shrink-0" fill="currentColor" />
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
        <div className="relative overflow-hidden aspect-[4/3] order-2 lg:order-1 rounded-2xl shadow-2xl">
          <motion.img
            style={{ y: imgY }}
            src={IMAGES.shippingLogistics}
            alt="Global shipping and logistics"
            className="w-full h-[120%] object-cover"
            loading="lazy"
          />
        </div>
        <AnimatedSection className="order-1 lg:order-2 relative">
          {/* Ambient Blob */}
          <div className="absolute -z-10 top-1/2 right-0 w-80 h-80 bg-vibrant-blue/10 rounded-full filter blur-[100px] opacity-60 pointer-events-none" />

          <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-blue mb-4 block font-bold">Global Reach</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.15]">
            Built on <span className="text-vibrant-blue">Responsible</span> Global Sourcing
          </h2>
          <p className="font-sans text-base text-charcoal/60 mt-8 leading-relaxed">
            From the loom to the loading dock, every step in our supply chain is structured for quality, compliance, and environmental accountability. We source across established regions, manage logistics with precision, and deliver with the reliability that global partners demand.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              { num: '15+', label: 'Sourcing Regions', color: '#2E5CFF' }, // Blue
              { num: '40+', label: 'Export Destinations', color: '#00D26A' }, // Green
              { num: '100%', label: 'Quality Inspected', color: '#FF725E' }, // Orange
              { num: '10+', label: 'Years Experience', color: '#6200EA' }, // Purple
            ].map(stat => (
              <SpotlightCard key={stat.label} className="bg-white border-sand/40 hover:border-clay/20 p-6" spotlightColor={`${stat.color}20`}>
                <div className="font-serif text-3xl flex items-center mb-1" style={{ color: stat.color }}>
                  <DecryptedText
                    text={stat.num}
                    speed={80}
                    maxIterations={15}
                    className=""
                  />
                </div>
                <p className="font-sans text-[10px] text-charcoal/50 uppercase tracking-widest">{stat.label}</p>
              </SpotlightCard>
            ))}
          </div>
          <div className="mt-10">
            <Magnet padding={40} magnetStrength={3}>
              <Link
                to="/global-network"
                data-testid="global-section-link"
                className="inline-flex items-center gap-2 font-sans text-sm text-clay hover:gap-3 transition-all duration-300 cursor-pointer"
              >
                Explore Our Network <ArrowRight size={14} />
              </Link>
            </Magnet>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TrustIndicators() {
  const indicators = [
    { icon: Award, title: 'GOTS Certified', desc: 'Global Organic Textile Standard compliance across our supply chain', color: '#00D26A' },
    { icon: Shield, title: 'Quality Assured', desc: 'Multi-point inspection framework from fiber to finished product', color: '#FF725E' },
    { icon: Globe, title: 'Export Expertise', desc: 'Proven international trade documentation and compliance systems', color: '#2E5CFF' },
    { icon: Leaf, title: 'Eco-Responsible', desc: 'Natural dyes, responsible sourcing, and traceable supply chains', color: '#6200EA' },
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      {/* Ambient Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibrant-purple/10 rounded-full filter blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibrant-orange/10 rounded-full filter blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-green mb-4 block font-bold">Trust & Credentials</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
            Standards That Define Our Practice
          </h2>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map(item => (
            <StaggerItem key={item.title}>
              <SpotlightCard className="h-full border-white/10 bg-white/5 hover:bg-white/10 transition-colors" spotlightColor={`${item.color}40`}>
                <item.icon size={24} className="mb-6 transition-colors duration-300" style={{ color: item.color }} strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section data-testid="final-cta" className="py-24 lg:py-32 px-6 lg:px-8 bg-olive overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <SplitText
          text="Let's Build a Responsible Supply Chain Together."
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
          delay={40}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.4}
          textAlign="center"
        />

        <div className="mt-12 flex justify-center">
          <Magnet padding={80} magnetStrength={5}>
            <Link
              to="/contact"
              data-testid="final-cta-btn"
              className="inline-flex items-center gap-3 px-10 py-5 bg-clay text-white font-sans text-sm font-semibold uppercase tracking-widest shadow-2xl hover:bg-clay/90 transition-all rounded-sm"
            >
              Initiate Partnership Discussion <ArrowRight size={16} />
            </Link>
          </Magnet>
        </div>
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
