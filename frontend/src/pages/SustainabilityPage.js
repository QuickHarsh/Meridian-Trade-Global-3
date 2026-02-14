import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplets, Search, Users, Recycle, Award } from 'lucide-react';
import { PageHero, AnimatedSection, StaggerContainer, StaggerItem, ParallaxImage } from '@/components/AnimatedSection';
import { IMAGES } from '@/lib/constants';
import { SpotlightCard } from '@/components/reactbits/SpotlightCard';
import { Magnet } from '@/components/reactbits/Magnet';

const practices = [
  {
    icon: Award,
    title: 'GOTS Certification',
    text: 'The Global Organic Textile Standard (GOTS) is the world\'s leading processing standard for textiles made from organic fibers. Our certified supply chain ensures every step from harvesting to labeling meets rigorous environmental and social criteria, with independent verification at every stage.',
    color: '#00D26A' // Vibrant Green
  },
  {
    icon: Droplets,
    title: 'Natural Dye Practices',
    text: 'We employ natural and low-impact dye processes that minimize water consumption and eliminate harmful chemical discharge. Our dye partners use plant-based, mineral-derived, and certified low-impact synthetic alternatives that meet GOTS and OEKO-TEX requirements.',
    color: '#2E5CFF' // Vibrant Blue (Water)
  },
  {
    icon: Leaf,
    title: 'Responsible Fiber Sourcing',
    text: 'Every fiber we source is traceable to its origin. We work with certified organic cotton growers, sustainable flax cultivators, and responsible wool producers. Our hemp and banana fiber partners operate within established sustainable agriculture frameworks.',
    color: '#6200EA' // Vibrant Purple
  },
  {
    icon: Search,
    title: 'Traceability Systems',
    text: 'Full supply chain transparency is non-negotiable. From field to finished product, we maintain documentation that tracks material origin, processing methods, certification status, and quality checkpoints. This traceability supports our partners\' own sustainability reporting requirements.',
    color: '#FF725E' // Vibrant Orange
  },
  {
    icon: Recycle,
    title: 'Environmental Impact',
    text: 'Our operations are structured to minimize environmental footprint. We prioritize water conservation in processing, energy efficiency in production facilities, waste reduction through material optimization, and responsible packaging using recycled and biodegradable materials.',
    color: '#00D26A'
  },
  {
    icon: Users,
    title: 'Artisan Empowerment',
    text: 'We partner with artisan cooperatives and craft communities, ensuring fair compensation, safe working conditions, and skill preservation programs. Our approach supports sustainable livelihoods while maintaining the traditional techniques that give our textiles their distinctive character.',
    color: '#FF725E'
  },
];

export default function SustainabilityPage() {
  return (
    <div data-testid="sustainability-page" className="page-wrapper bg-ivory">
      <PageHero
        image={IMAGES.cottonField}
        title="Sustainability & Certifications"
        subtitle="Process-based commitments. Structured systems. Verifiable impact."
      />

      <section className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-vibrant-green/10 rounded-full filter blur-[100px] animate-blob" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 relative z-10">
          <AnimatedSection className="lg:col-span-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-green mb-4 block font-bold">Our Approach</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.15]">
              Sustainability Through <span className="text-vibrant-green">Structure</span>, Not Slogans
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-6">
              At Meridian Trade Global, sustainability is embedded in our operational framework, not treated as a marketing layer. Every sourcing decision, production partnership, and logistics choice is evaluated against measurable environmental and social criteria.
            </p>
            <p className="font-sans text-base text-charcoal/60 leading-relaxed">
              We work with independently certified facilities, maintain full supply chain documentation, and continuously improve our practices based on evolving global standards. Our partners receive complete transparency into the sustainability credentials of every product we deliver.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-ivory to-white opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-blue mb-4 block font-bold">Our Practices</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
              Six Pillars of Responsible Sourcing
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map(item => (
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

      <section className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-vibrant-orange/5 rounded-full filter blur-[100px] animate-blob" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <ParallaxImage
            src={IMAGES.weavingHands}
            alt="Artisan weaving sustainable textiles"
            className="aspect-[4/5] rounded-lg shadow-xl"
            speed={0.15}
          />
          <AnimatedSection>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-green mb-4 block font-bold">Transparency</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight leading-[1.15]">
              Complete Supply Chain Visibility
            </h2>
            <p className="font-sans text-base text-charcoal/60 mt-8 leading-relaxed">
              Our documentation systems provide full visibility into material origins, processing methods, certification status, and quality outcomes. This transparency supports our partners' compliance requirements, ESG reporting, and consumer-facing sustainability claims.
            </p>
            <div className="mt-10 space-y-4">
              {[
                'Certified organic fiber documentation',
                'Processing facility audit reports',
                'Dye and chemical compliance certificates',
                'Social compliance verification records',
                'Carbon footprint calculations per batch',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <Leaf size={14} className="text-vibrant-green mt-1 shrink-0" />
                  <span className="font-sans text-sm text-charcoal/60">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Magnet padding={40} magnetStrength={3}>
                <Link
                  to="/contact"
                  data-testid="sustainability-cta"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-clay text-white font-sans text-sm tracking-wide hover:bg-clay/90 transition-colors duration-300 rounded-sm shadow-xl"
                >
                  Request Sustainability Documentation <ArrowRight size={16} />
                </Link>
              </Magnet>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
