import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplets, Search, Users, Recycle, Award } from 'lucide-react';
import { PageHero, AnimatedSection, StaggerContainer, StaggerItem, ParallaxImage } from '@/components/AnimatedSection';
import { IMAGES } from '@/lib/constants';

const practices = [
  {
    icon: Award,
    title: 'GOTS Certification',
    text: 'The Global Organic Textile Standard (GOTS) is the world\'s leading processing standard for textiles made from organic fibers. Our certified supply chain ensures every step from harvesting to labeling meets rigorous environmental and social criteria, with independent verification at every stage.',
  },
  {
    icon: Droplets,
    title: 'Natural Dye Practices',
    text: 'We employ natural and low-impact dye processes that minimize water consumption and eliminate harmful chemical discharge. Our dye partners use plant-based, mineral-derived, and certified low-impact synthetic alternatives that meet GOTS and OEKO-TEX requirements.',
  },
  {
    icon: Leaf,
    title: 'Responsible Fiber Sourcing',
    text: 'Every fiber we source is traceable to its origin. We work with certified organic cotton growers, sustainable flax cultivators, and responsible wool producers. Our hemp and banana fiber partners operate within established sustainable agriculture frameworks.',
  },
  {
    icon: Search,
    title: 'Traceability Systems',
    text: 'Full supply chain transparency is non-negotiable. From field to finished product, we maintain documentation that tracks material origin, processing methods, certification status, and quality checkpoints. This traceability supports our partners\' own sustainability reporting requirements.',
  },
  {
    icon: Recycle,
    title: 'Environmental Impact',
    text: 'Our operations are structured to minimize environmental footprint. We prioritize water conservation in processing, energy efficiency in production facilities, waste reduction through material optimization, and responsible packaging using recycled and biodegradable materials.',
  },
  {
    icon: Users,
    title: 'Artisan Empowerment',
    text: 'We partner with artisan cooperatives and craft communities, ensuring fair compensation, safe working conditions, and skill preservation programs. Our approach supports sustainable livelihoods while maintaining the traditional techniques that give our textiles their distinctive character.',
  },
];

export default function SustainabilityPage() {
  return (
    <div data-testid="sustainability-page" className="page-wrapper">
      <PageHero
        image={IMAGES.cottonField}
        title="Sustainability & Certifications"
        subtitle="Process-based commitments. Structured systems. Verifiable impact."
      />

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <AnimatedSection className="lg:col-span-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Our Approach</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.15]">
              Sustainability Through Structure, Not Slogans
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

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Our Practices</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
              Six Pillars of Responsible Sourcing
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map(item => (
              <StaggerItem key={item.title} className="p-8 border border-sand/60 hover:border-olive/30 transition-colors duration-500">
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
          <ParallaxImage
            src={IMAGES.weavingHands}
            alt="Artisan weaving sustainable textiles"
            className="aspect-[4/5]"
            speed={0.15}
          />
          <AnimatedSection>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Transparency</span>
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
                  <Leaf size={14} className="text-olive mt-1 shrink-0" />
                  <span className="font-sans text-sm text-charcoal/60">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              data-testid="sustainability-cta"
              className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-clay text-white font-sans text-sm tracking-wide hover:bg-clay/90 transition-colors duration-300"
            >
              Request Sustainability Documentation <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
