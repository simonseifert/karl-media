import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { agencyInfo } from '@/data/agency';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${agencyInfo.name} - ${agencyInfo.tagline}. ${agencyInfo.description}`}
      />
      
      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Media Agency for Modern Businesses
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                Our Mission
              </h2>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                {agencyInfo.mission}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-16">
                What We Do
              </h2>
            </ScrollReveal>

            <div className="space-y-24">
              {agencyInfo.services.map((service, index) => (
                <ScrollReveal key={service.id} delay={0.1}>
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      <div className="aspect-[4/3] relative overflow-hidden rounded-sm">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-base font-light leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-16">
                Our Team
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {agencyInfo.team.map((member, index) => (
                <ScrollReveal key={member.id} delay={index * 0.15}>
                  <div className="space-y-6">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-light tracking-wide">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground font-light tracking-wide">
                        {member.role}
                      </p>
                    </div>

                    <Separator />

                    <p className="text-base font-light leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                      {member.socialLinks.instagram && (
                        <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                          className="p-2 border border-border rounded-sm hover:bg-accent transition-colors" aria-label="Instagram">
                          <Instagram className="size-4" />
                        </a>
                      )}
                      {member.socialLinks.linkedin && (
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                          className="p-2 border border-border rounded-sm hover:bg-accent transition-colors" aria-label="LinkedIn">
                          <Linkedin className="size-4" />
                        </a>
                      )}
                      {member.socialLinks.email && (
                        <a href={`mailto:${member.socialLinks.email}`}
                          className="p-2 border border-border rounded-sm hover:bg-accent transition-colors" aria-label="Email">
                          <Mail className="size-4" />
                        </a>
                      )}
                      {member.socialLinks.phone && (
                        <a href={`tel:${member.socialLinks.phone}`}
                          className="p-2 border border-border rounded-sm hover:bg-accent transition-colors" aria-label="Phone">
                          <Phone className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
