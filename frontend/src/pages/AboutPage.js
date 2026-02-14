import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Target, Heart, ShieldCheck, Handshake, TrendingUp } from 'lucide-react';
import { PageHero, AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { IMAGES } from '@/lib/constants';

const values = [
  {
    icon: Target,
    title: 'Mission',
    text: 'To connect the world with premium eco-conscious home textiles by building transparent, sustainable, and artisan-centered supply chains that serve global retail and hospitality markets.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'To be the most trusted sourcing partner for environmentally responsible home textiles, recognized globally for quality consistency, ethical operations, and long-term partnership value.',
  },
  {
    icon: Heart,
    title: 'Ethical Sourcing',
    text: 'Every fiber we source, every artisan we partner with, and every process we oversee meets rigorous ethical standards. We prioritize fair wages, safe conditions, and community development at every level.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Standards',
    text: 'Our multi-point quality assurance framework operates from raw material inspection through finished product dispatch. Independent testing, batch tracking, and compliance documentation are standard practice.',
  },
  {
    icon: Handshake,
    title: 'Partnership Philosophy',
    text: 'We build relationships measured in years, not transactions. Our approach centers on understanding each partner\'s requirements and developing supply solutions that scale with their growth.',
  },
  {
    icon: TrendingUp,
    title: 'Trade Expertise',
    text: 'With deep experience in international textile trade, we manage documentation, logistics coordination, regulatory compliance, and customs processes with precision and reliability.',
  },
];

export default function AboutPage() {
  return (
    <div data-testid="about-page" className="page-wrapper">
      <PageHero
        image={IMAGES.weavingHands}
        title="About Meridian Trade Global"
        subtitle="Structured systems. Responsible growth. Partnerships built for the long term."
      />

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <AnimatedSection className="lg:col-span-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Our Story</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.15]">
              Bridging Artisan Heritage with Global Commerce
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-6">
              Meridian Trade Global was founded on the conviction that sustainable trade and premium quality are not competing priorities. They are inseparable. We work at the intersection of artisan textile traditions and modern global supply chains, delivering home textile collections that meet the highest standards of environmental and social responsibility.
            </p>
            <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-6">
              Our sourcing network spans established textile regions across South Asia, where generations of craft expertise meet contemporary production capabilities. We specialize in organic cotton, linen, hemp, peace silk, and recycled fibers, transformed into finished products through processes that respect both people and planet.
            </p>
            <p className="font-sans text-base text-charcoal/60 leading-relaxed">
              Every partnership begins with understanding. We listen to what our clients need, then develop sourcing and development solutions that align with their brand values, quality expectations, and commercial requirements. The result is supply that performs consistently, scales reliably, and improves continuously.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Our Foundation</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
              Principles That Guide Every Decision
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(item => (
              <StaggerItem key={item.title} className="p-8 border border-sand/60">
                <item.icon size={22} className="text-olive mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-charcoal/55 leading-relaxed">{item.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="relative img-zoom">
            <img
              src={IMAGES.craftsmanship}
              alt="Artisan craftsmanship in textile production"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Our Commitment</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight leading-[1.15]">
              Responsible Relationships at Every Level
            </h2>
            <p className="font-sans text-base text-charcoal/60 mt-8 leading-relaxed">
              We maintain direct relationships with artisan cooperatives, certified production facilities, and sustainable fiber suppliers. This proximity ensures transparency, quality control, and the ability to respond quickly to our partners' evolving requirements.
            </p>
            <p className="font-sans text-base text-charcoal/60 mt-4 leading-relaxed">
              Our commitment extends beyond product quality to include fair labor practices, environmental stewardship, community development, and the preservation of traditional textile craft knowledge.
            </p>
            <Link
              to="/contact"
              data-testid="about-partner-cta"
              className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-clay text-white font-sans text-sm tracking-wide hover:bg-clay/90 transition-colors duration-300"
            >
              Start a Partnership Conversation <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
