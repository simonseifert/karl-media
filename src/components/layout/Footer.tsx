import { Instagram, ArrowRight } from 'lucide-react';
import { agencyInfo } from '@/data/agency';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Follow Us CTA */}
        <div className="flex flex-col items-center gap-8 mb-8">
          {agencyInfo.socialLinks.instagram && (
            <a
              href={agencyInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
            >
              <Instagram className="size-5" />
              <span>Follow Us on Instagram</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            © {currentYear} {agencyInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {agencyInfo.socialLinks.instagram && (
              <a
                href={agencyInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
