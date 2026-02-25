import { motion } from 'framer-motion';
import { Mail, ArrowRight, Calendar } from 'lucide-react';
import { agencyInfo } from '@/data/agency';
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
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-3 text-center">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  Book with Calendly
                </h2>
                <p className="text-muted-foreground font-light">
                  Pick a 30-minute slot and we’ll come prepared with ideas for your project. No back-and-forth needed.
                </p>
              </div>

              <button
                onClick={() => (window as any).Calendly?.initPopupWidget?.({ url: 'https://calendly.com/seifertsimon-proton/30min' })}
                className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-primary text-primary-foreground rounded-sm text-lg font-light tracking-wide hover:opacity-90 transition-opacity"
                aria-label="Schedule a call via Calendly"
              >
                <Calendar className="size-5" />
                Schedule a Call
              </button>

              <div className="p-6 border border-border rounded-sm space-y-3 bg-accent text-center">
                <h3 className="text-xl font-light tracking-wide">Prefer email?</h3>
                <a href={`mailto:${agencyInfo.email}`} className="inline-flex items-center gap-3 text-base md:text-lg font-light hover:text-muted-foreground transition-colors justify-center">
                  <Mail className="size-5 text-muted-foreground" /> {agencyInfo.email}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
