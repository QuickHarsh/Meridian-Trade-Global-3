import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Ship, FileCheck, CheckCircle, Package, Eye } from 'lucide-react';
import { PageHero, AnimatedSection, StaggerContainer, StaggerItem, ParallaxImage } from '@/components/AnimatedSection';
import { IMAGES } from '@/lib/constants';

const regions = [
  { name: 'India', specialty: 'Organic cotton, handloom textiles, hand-embroidered collections' },
  { name: 'Bangladesh', specialty: 'GOTS-certified knitted and woven textiles' },
  { name: 'Nepal', specialty: 'Handwoven wool and pashmina, artisan throws' },
  { name: 'Sri Lanka', specialty: 'Coconut fiber, coir-based floor textiles' },
  { name: 'Pakistan', specialty: 'Premium cotton bedding, terry toweling' },
  { name: 'Turkey', specialty: 'Linen blends, Turkish towels, premium weaves' },
];

const capabilities = [
  { icon: Ship, title: 'Export Logistics', text: 'End-to-end logistics management including containerization, documentation, customs clearance, and delivery scheduling across global trade lanes.' },
  { icon: FileCheck, title: 'Documentation & Compliance', text: 'Complete export documentation including commercial invoices, packing lists, certificates of origin, and compliance certificates aligned with destination market requirements.' },
  { icon: CheckCircle, title: 'Quality Checkpoints', text: 'Pre-production sampling, in-process inspection, pre-shipment verification, and final dispatch confirmation ensure consistent quality across every order.' },
  { icon: Package, title: 'Production Oversight', text: 'On-ground production management at certified facilities with regular capacity planning, timeline tracking, and progress reporting to partners.' },
  { icon: Eye, title: 'Supply Chain Visibility', text: 'Real-time order tracking, milestone notifications, and transparent reporting keep our partners informed from production initiation to delivery confirmation.' },
  { icon: MapPin, title: 'Regional Expertise', text: 'Deep knowledge of local production capabilities, material availability, and regulatory landscapes ensures optimal sourcing decisions and reliable supply continuity.' },
];

export default function GlobalNetworkPage() {
  return (
    <div data-testid="global-network-page" className="page-wrapper">
      <PageHero
        image={IMAGES.cargoShip}
        title="Global Network"
        subtitle="Operational strength meets ethical sourcing across established trade corridors."
      />

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <AnimatedSection className="lg:col-span-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Our Reach</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.15]">
              Sourcing Network Across Key Textile Regions
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <p className="font-sans text-base text-charcoal/60 leading-relaxed">
              Our sourcing network spans established textile regions where generations of craft expertise meet contemporary production capabilities. Each region is selected for its unique material advantages, certification readiness, and artisan heritage. We maintain long-term relationships with production partners who share our commitment to quality, sustainability, and fair labor practices.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Sourcing Regions</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
              Strategic Regional Partnerships
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map(region => (
              <StaggerItem key={region.name} className="p-8 border border-sand/60 hover:border-navy/20 transition-colors duration-500">
                <MapPin size={18} className="text-navy mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-charcoal mb-3">{region.name}</h3>
                <p className="font-sans text-sm text-charcoal/55 leading-relaxed">{region.specialty}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ParallaxImage
            src={IMAGES.shippingLogistics}
            alt="Global trade logistics"
            className="aspect-[4/3]"
            speed={0.15}
          />
          <AnimatedSection>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Logistics</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight leading-[1.15]">
              From Source to Destination
            </h2>
            <p className="font-sans text-base text-charcoal/60 mt-8 leading-relaxed">
              Our logistics infrastructure supports efficient, reliable delivery across global trade lanes. We coordinate sea freight, air cargo, and multimodal transport solutions, managing documentation and compliance requirements for each destination market.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { num: '40+', label: 'Export Countries' },
                { num: '99.2%', label: 'On-Time Delivery' },
                { num: '72hr', label: 'Avg. Doc Processing' },
                { num: 'FCL/LCL', label: 'Shipping Options' },
              ].map(stat => (
                <div key={stat.label}>
                  <span className="font-serif text-3xl text-clay">{stat.num}</span>
                  <p className="font-sans text-xs text-charcoal/50 mt-1 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Capabilities</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
              Operational Infrastructure
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map(item => (
              <StaggerItem key={item.title} className="p-8 border border-sand/60 hover:border-navy/20 transition-colors duration-500">
                <item.icon size={22} className="text-navy mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-charcoal/55 leading-relaxed">{item.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-navy text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight max-w-2xl mx-auto">
            Ready to Explore Our Sourcing Capabilities?
          </h2>
          <Link
            to="/contact"
            data-testid="global-network-cta"
            className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-clay text-white font-sans text-sm tracking-wide hover:bg-clay/90 transition-colors duration-300"
          >
            Connect With Our Trade Team <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
