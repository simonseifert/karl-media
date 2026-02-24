import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Globe, Play, ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug } from '@/data/projects';
import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
import { Lightbox } from '@/components/portfolio/Lightbox';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />
      
      <div className="min-h-screen">
        {/* Hero Image */}
        <motion.div
          className="relative w-full h-[70vh] overflow-hidden bg-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          
          {/* Back link */}
          <div className="absolute top-24 left-6 lg:left-8">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-light">
              <ArrowLeft className="size-4" />
              Back to Our Work
            </Link>
          </div>
        </motion.div>

        {/* Project Info */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-light">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2 capitalize">
                  <span>•</span>
                  <span>{project.category.replace('-', ' ')}</span>
                </div>
                {project.location && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>{project.location}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <Separator />

            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
              {project.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              {project.client && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                    <User className="size-4" />
                    <span>Client</span>
                  </div>
                  <p className="font-light text-foreground">{project.client}</p>
                </div>
              )}
              {project.platform && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                    <Globe className="size-4" />
                    <span>Platform</span>
                  </div>
                  <p className="font-light text-foreground">{project.platform}</p>
                </div>
              )}
            </div>

            {/* Reel Link */}
            {project.reelUrl && (
              <div className="pt-4">
                <a
                  href={project.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-light tracking-wide hover:opacity-90 transition-opacity"
                >
                  <Play className="size-5" />
                  Watch on Instagram
                </a>
              </div>
            )}
          </motion.div>
        </section>

        {/* Image Gallery */}
        <section className="py-12 md:py-16">
          <div className="space-y-8 md:space-y-12">
            {project.images.map((image, index) => (
              <ScrollReveal key={image.id} delay={index * 0.1}>
                <ImageWithLightbox
                  image={image}
                  onClick={() => openLightbox(index)}
                  priority={index === 0}
                  index={0}
                  className="w-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Lightbox
          images={project.images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </>
  );
}
