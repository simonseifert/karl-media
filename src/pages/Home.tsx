import { motion } from 'framer-motion';
import { agencyInfo } from '@/data/agency';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://images.pexels.com/videos/2675516/free-video-2675516.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.opacity = '0';
              }}
            >
              <source src="https://videos.pexels.com/video-files/2675516/2675516-sd_960_540_24fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {agencyInfo.name.toUpperCase()}
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl font-light tracking-widest text-white/90 uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {agencyInfo.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-sm text-lg font-light tracking-wide hover:opacity-90 transition-opacity"
                >
                  <Play className="size-5" />
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  {agencyInfo.heroIntroduction}
                </h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                  {agencyInfo.description}
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                End-to-end media solutions for your business
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {agencyInfo.services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.15}>
                <div className="group relative overflow-hidden rounded-sm aspect-[4/5]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                    <h3 className="text-2xl font-light tracking-wide text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm font-light text-white/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Our Work
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                Recent projects & campaigns
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-accent">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                Let's Build Together
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Ready to elevate your brand with world-class video content?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-sm text-lg font-light tracking-wide hover:opacity-90 transition-opacity"
              >
                Schedule a Call
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
