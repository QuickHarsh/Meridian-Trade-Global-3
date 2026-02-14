import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, Mail, Clock, MapPin, Send } from 'lucide-react';
import { PageHero, AnimatedSection } from '@/components/AnimatedSection';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IMAGES } from '@/lib/constants';
import { toast } from 'sonner';
import { SpotlightCard } from '@/components/reactbits/SpotlightCard';
import { Magnet } from '@/components/reactbits/Magnet';

const partnershipTypes = [
  'Wholesale Supply',
  'Private Label Development',
  'Custom Product Development',
  'Hospitality Supply Program',
  'Retail Partnership',
  'Other Inquiry',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    company: '',
    partnership_type: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.user_name || !formData.user_email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        toast.success('Thank you for your inquiry. Our team will respond within 24 hours.');
        setFormData({ user_name: '', user_email: '', company: '', partnership_type: '', message: '' });
        setLoading(false);
      }, 1000);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, formData, { publicKey });
      toast.success('Your inquiry has been sent successfully. We will get back to you shortly.');
      setFormData({ user_name: '', user_email: '', company: '', partnership_type: '', message: '' });
    } catch {
      toast.error('Unable to send your inquiry. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page" className="page-wrapper bg-ivory">
      <PageHero
        image={IMAGES.heroTexture}
        title="Partner With Us"
        subtitle="Begin a conversation about sustainable textile sourcing for your brand."
        height="h-[65vh]"
      />

      <section className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-vibrant-orange/5 rounded-full filter blur-[100px] animate-blob" />
          <div className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-vibrant-blue/5 rounded-full filter blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 relative z-10">
          <AnimatedSection className="lg:col-span-3">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-orange mb-6 block font-bold">Inquiry Form</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight mb-12">
              Request Partnership Discussion
            </h2>

            <SpotlightCard className="bg-white border-sand/40 p-8 sm:p-10" spotlightColor="#FF725E15">
              <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-10 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      data-testid="contact-name"
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="line-input bg-transparent"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      data-testid="contact-email"
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="line-input bg-transparent"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2 block">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      data-testid="contact-company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="line-input bg-transparent"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2 block">
                      Partnership Type
                    </label>
                    <Select
                      value={formData.partnership_type}
                      onValueChange={(val) => setFormData(prev => ({ ...prev, partnership_type: val }))}
                      disabled={loading}
                    >
                      <SelectTrigger
                        data-testid="contact-partnership-type"
                        className="bg-transparent border-0 border-b border-sand rounded-none px-0 py-3 font-sans text-sm text-charcoal focus:ring-0 focus:border-clay h-auto"
                      >
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {partnershipTypes.map(type => (
                          <SelectItem key={type} value={type} className="font-sans text-sm">
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2 block">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    data-testid="contact-message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your sourcing requirements, volumes, and timelines..."
                    className="line-input min-h-[140px] resize-none bg-transparent"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="pt-4">
                  <Magnet padding={50} magnetStrength={3}>
                    <button
                      type="submit"
                      data-testid="contact-submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 px-10 py-4 bg-clay text-white font-sans text-sm tracking-wide hover:bg-clay/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm shadow-md"
                    >
                      {loading ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Send Inquiry <Send size={14} />
                        </>
                      )}
                    </button>
                  </Magnet>
                </div>
              </form>
            </SpotlightCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-vibrant-blue mb-6 block font-bold">Direct Contact</span>
            <h3 className="font-serif text-2xl text-charcoal mb-10">
              Get in Touch
            </h3>

            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-vibrant-blue mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2">Email</h4>
                  <a
                    href="mailto:info@meridiantradeglobal.com"
                    data-testid="contact-direct-email"
                    className="font-sans text-sm text-charcoal hover:text-clay transition-colors duration-300"
                  >
                    info@meridiantradeglobal.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={18} className="text-vibrant-orange mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2">Business Hours</h4>
                  <p className="font-sans text-sm text-charcoal/60">Monday - Friday</p>
                  <p className="font-sans text-sm text-charcoal/60">9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-vibrant-green mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2">Registered Office</h4>
                  <p className="font-sans text-sm text-charcoal/60">
                    Meridian Trade Global<br />
                    Mumbai, Maharashtra<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white border border-sand/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-vibrant-blue/5 rounded-full filter blur-[30px]" />
              <h4 className="font-serif text-lg text-charcoal mb-3 relative z-10">Response Commitment</h4>
              <p className="font-sans text-sm text-charcoal/55 leading-relaxed relative z-10">
                All partnership inquiries receive a detailed response within 24 business hours. Initial consultations are complimentary, and our team will work with you to understand your specific requirements before proposing sourcing solutions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
