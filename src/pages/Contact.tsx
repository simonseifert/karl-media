import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { agencyInfo } from '@/data/agency';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${agencyInfo.name} for video production, social media, and web development inquiries. ${agencyInfo.availability}`}
      />
      
      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Let's Build Together
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Schedule a call or send us a message
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Tell us about your project and we'll get back to you within 24-48 hours. {agencyInfo.availability}.
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Prefer to reach out directly? Here's how you can contact us.
                  </p>
                </div>

                <Separator />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <Mail className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Email</p>
                      <a href={`mailto:${agencyInfo.email}`} className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors">
                        {agencyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <Phone className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Phone</p>
                      <a href={`tel:${agencyInfo.phone}`} className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors">
                        {agencyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <MapPin className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Location</p>
                      <p className="text-base md:text-lg font-light">{agencyInfo.location}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Schedule a Call CTA */}
                <div className="p-6 border border-border rounded-sm space-y-4 bg-accent">
                  <h3 className="text-xl font-light tracking-wide">
                    Prefer a Call?
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Book a free 30-minute consultation to discuss your project.
                  </p>
                  <a
                    href={`mailto:${agencyInfo.email}?subject=Schedule a Call`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-light tracking-wide hover:opacity-90 transition-opacity"
                  >
                    Schedule a Call
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
