import { Link } from 'react-router-dom';
import { ArrowRight, Gem, Users, FileText, Clock, Settings, Award } from 'lucide-react';
import { PageHero, AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { IMAGES } from '@/lib/constants';

const reasons = [
  {
    icon: Gem,
    title: 'Premium Eco-Sourcing Expertise',
    text: 'We specialize exclusively in certified sustainable home textiles. This focus gives us deep material knowledge, established supplier relationships, and sourcing capabilities that generalist traders simply cannot match.',
    highlight: 'Deep specialization in organic, natural, and certified fibers',
  },
  {
    icon: Users,
    title: 'Boutique Attention, Global Scale',
    text: 'Every partnership receives dedicated attention from our sourcing team. We combine the responsiveness and flexibility of a boutique agency with the production capacity and logistics infrastructure needed for large-scale supply.',
    highlight: 'Dedicated account management with scalable production',
  },
  {
    icon: FileText,
    title: 'Structured Documentation & Compliance',
    text: 'International trade requires precision in documentation. We manage certificates of origin, GOTS documentation, commercial invoices, packing specifications, and regulatory compliance for every destination market.',
    highlight: 'Complete export documentation and certification management',
  },
  {
    icon: Clock,
    title: 'Long-Term Relationship Model',
    text: 'We invest in understanding our partners\' evolving requirements and build supply solutions that grow with their business. Our approach prioritizes consistency, reliability, and continuous improvement over transactional interactions.',
    highlight: 'Partners for years, not transactions',
  },
  {
    icon: Settings,
    title: 'Custom Development Capability',
    text: 'From concept to production, we develop custom textile products aligned with your brand\'s specifications. Our development team manages sampling, material sourcing, production coordination, and quality assurance throughout the process.',
    highlight: 'End-to-end product development from fiber to finish',
  },
  {
    icon: Award,
    title: 'Reliable, Consistent Execution',
    text: 'Our track record speaks through on-time deliveries, consistent product quality, and proactive communication. We manage risks before they become problems, maintaining the reliability that long-term supply partnerships demand.',
    highlight: '99%+ on-time delivery record',
  },
];

export default function WhyChooseUsPage() {
  return (
    <div data-testid="why-choose-us-page" className="page-wrapper">
      <PageHero
        image={IMAGES.bedroomInterior}
        title="Why Choose Meridian Trade Global"
        subtitle="Premium sourcing. Responsible execution. Partnerships built to last."
      />

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <AnimatedSection className="lg:col-span-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Our Difference</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight leading-[1.15]">
              What Sets Us Apart in Global Textile Sourcing
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <p className="font-sans text-base text-charcoal/60 leading-relaxed">
              In a market where sourcing options are abundant but reliable, sustainable partners are rare, Meridian Trade Global occupies a distinct position. We combine specialized eco-textile expertise with the operational rigor of an established trade house. The result is sourcing that's principled, professional, and consistently dependable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((item, index) => (
              <StaggerItem key={item.title} className="p-10 border border-sand/60 hover:border-clay/30 transition-colors duration-500">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-ivory shrink-0">
                    <item.icon size={22} className="text-olive" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-charcoal/30 tracking-wide">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="font-serif text-xl text-charcoal mt-1 mb-3">{item.title}</h3>
                    <p className="font-sans text-sm text-charcoal/55 leading-relaxed mb-4">{item.text}</p>
                    <span className="font-sans text-xs text-olive italic">{item.highlight}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-olive mb-4 block">Partnership</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight leading-[1.15]">
              A Partner, Not Just a Supplier
            </h2>
            <p className="font-sans text-base text-charcoal/60 mt-8 leading-relaxed">
              We understand that choosing a sourcing partner is a strategic decision. That's why we approach every relationship with the commitment to understand your brand, your market, and your growth objectives. Our role extends beyond order fulfillment to include market intelligence, trend insights, and collaborative product development.
            </p>
            <div className="mt-10 flex flex-col gap-4">
              {[
                'Dedicated sourcing team for each partnership',
                'Regular product development consultations',
                'Market trend and material innovation updates',
                'Flexible MOQ structure for new collections',
                'Responsive communication with 24hr reply commitment',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 pb-4 border-b border-sand/40 last:border-none">
                  <ArrowRight size={14} className="text-clay mt-1 shrink-0" />
                  <span className="font-sans text-sm text-charcoal/60">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="relative img-zoom">
            <img
              src={IMAGES.craftsmanship}
              alt="Premium textile craftsmanship"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-charcoal text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight max-w-3xl mx-auto leading-[1.1]">
            Ready to Experience the Meridian Difference?
          </h2>
          <p className="font-sans text-base text-white/50 mt-6 max-w-lg mx-auto">
            Start a conversation about how we can support your sustainable textile sourcing needs.
          </p>
          <Link
            to="/contact"
            data-testid="why-choose-cta"
            className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-clay text-white font-sans text-sm tracking-wide hover:bg-clay/90 transition-colors duration-300"
          >
            Partner With Meridian Trade Global <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
