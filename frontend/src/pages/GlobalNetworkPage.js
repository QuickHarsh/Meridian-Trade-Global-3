import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Ship, FileCheck, CheckCircle, Package, Eye } from 'lucide-react';
import { PageHero, AnimatedSection, StaggerContainer, StaggerItem, ParallaxImage } from '@/components/AnimatedSection';
import { IMAGES } from '@/lib/constants';
import { SpotlightCard } from '@/components/reactbits/SpotlightCard';
import { Magnet } from '@/components/reactbits/Magnet';
import { ShinyText } from '@/components/reactbits/ShinyText';
import { DecryptedText } from '@/components/reactbits/DecryptedText';

const regions = [
  { name: 'India', specialty: 'Organic cotton, handloom textiles, hand-embroidered collections', color: '#FF725E' },
  { name: 'Bangladesh', specialty: 'GOTS-certified knitted and woven textiles', color: '#00D26A' },
  { name: 'Turkey', specialty: 'Linen blends, Turkish towels, premium weaves', color: '#2E5CFF' },
  { name: 'Portugal', specialty: 'High-quality stonewashed linen, premium bedding', color: '#6200EA' },
  { name: 'Belgium', specialty: 'World-renowned flax linen, high-end finishing', color: '#FFB300' },
  { name: 'Netherlands', specialty: 'Sustainable textile innovation, logistics hub', color: '#E91E63' },
];

const capabilities = [
  { icon: Ship, title: 'Export Logistics', text: 'End-to-end logistics management including containerization, documentation, customs clearance, and delivery scheduling across global trade lanes.', color: '#2E5CFF' },
  { icon: FileCheck, title: 'Documentation & Compliance', text: 'Complete export documentation including commercial invoices, packing lists, certificates of origin, and compliance certificates aligned with destination market requirements.', color: '#00D26A' },
  { icon: CheckCircle, title: 'Quality Checkpoints', text: 'Pre-production sampling, in-process inspection, pre-shipment verification, and final dispatch confirmation ensure consistent quality across every order.', color: '#FF725E' },
  { icon: Package, title: 'Production Oversight', text: 'On-ground production management at certified facilities with regular capacity planning, timeline tracking, and progress reporting to partners.', color: '#6200EA' },
  { icon: Eye, title: 'Supply Chain Visibility', text: 'Real-time order tracking, milestone notifications, and transparent reporting keep our partners informed from production initiation to delivery confirmation.', color: '#2E5CFF' },
  { icon: MapPin, title: 'Regional Expertise', text: 'Deep knowledge of local production capabilities, material availability, and regulatory landscapes ensures optimal sourcing decisions and reliable supply continuity.', color: '#00D26A' },
];

export default function GlobalNetworkPage() {
  return (
    <div data-testid="global-network-page" className="page-wrapper bg-ivory">
      <PageHero
        image={IMAGES.cargoShip}
        title="Global Network"
        subtitle="Operational strength meets ethical sourcing across established trade corridors."
      />

      <section className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-vibrant-blue/10 rounded-full filter blur-[100px] animate-blob" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 relative z-10">
          <AnimatedSection className="lg:col-span-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-blue mb-4 block font-bold">Our Reach</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.15]">
              Sourcing Network Across Key <ShinyText text="Textile Regions" disabled={false} speed={3} className="text-vibrant-blue" />
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <p className="font-sans text-base text-charcoal/60 leading-relaxed">
              Our sourcing network spans established textile regions where generations of craft expertise meet contemporary production capabilities. Each region is selected for its unique material advantages, certification readiness, and artisan heritage. We maintain long-term relationships with production partners who share our commitment to quality, sustainability, and fair labor practices.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-ivory to-white opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-orange mb-4 block font-bold">Sourcing Regions</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
              Strategic Regional Partnerships
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map(region => (
              <StaggerItem key={region.name}>
                <SpotlightCard className="h-full border-sand/40 bg-white hover:border-transparent p-8" spotlightColor={`${region.color}15`}>
                  <MapPin size={18} className="mb-4 transition-colors duration-300" style={{ color: region.color }} strokeWidth={1.5} />
                  <h3 className="font-serif text-xl text-charcoal mb-3">{region.name}</h3>
                  <p className="font-sans text-sm text-charcoal/55 leading-relaxed">{region.specialty}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-vibrant-purple/5 rounded-full filter blur-[100px] animate-blob" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <ParallaxImage
            src={IMAGES.shippingLogistics}
            alt="Global trade logistics"
            className="aspect-[4/3] rounded-lg shadow-xl"
            speed={0.15}
          />
          <AnimatedSection>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-blue mb-4 block font-bold">Logistics</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight leading-[1.15]">
              From Source to Destination
            </h2>
            <p className="font-sans text-base text-charcoal/60 mt-8 leading-relaxed">
              Our logistics infrastructure supports efficient, reliable delivery across global trade lanes. We coordinate sea freight, air cargo, and multimodal transport solutions, managing documentation and compliance requirements for each destination market.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { num: '40+', label: 'Export Countries', color: '#2E5CFF' },
                { num: '99.2%', label: 'On-Time Delivery', color: '#00D26A' },
                { num: '72hr', label: 'Avg. Doc Processing', color: '#FF725E' },
                { num: 'FCL/LCL', label: 'Shipping Options', color: '#6200EA' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl flex items-center mb-1" style={{ color: stat.color }}>
                    <DecryptedText
                      text={stat.num}
                      speed={80}
                      maxIterations={15}
                      className=""
                    />
                  </div>
                  <p className="font-sans text-xs text-charcoal/50 mt-1 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-purple mb-4 block font-bold">Capabilities</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
              Operational Infrastructure
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map(item => (
              <StaggerItem key={item.title}>
                <SpotlightCard className="h-full border-sand/40 bg-white hover:border-transparent p-8" spotlightColor={`${item.color}15`}>
                  <item.icon size={22} className="mb-5 transition-colors duration-300" style={{ color: item.color }} strokeWidth={1.5} />
                  <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
                  <p className="font-sans text-sm text-charcoal/55 leading-relaxed">{item.text}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-navy text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vibrant-blue/20 rounded-full filter blur-[120px] pointer-events-none" />

        <AnimatedSection className="relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight max-w-2xl mx-auto">
            Ready to Explore Our Sourcing Capabilities?
          </h2>
          <div className="mt-12 flex justify-center">
            <Magnet padding={50} magnetStrength={4}>
              <Link
                to="/contact"
                data-testid="global-network-cta"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-clay text-white font-sans text-sm tracking-wide hover:bg-clay/90 transition-colors duration-300 rounded-sm shadow-xl"
              >
                Connect With Our Trade Team <ArrowRight size={16} />
              </Link>
            </Magnet>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
