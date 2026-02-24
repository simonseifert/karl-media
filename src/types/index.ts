/**
 * Core TypeScript interfaces for Karl Media Agency
 */

export type ProjectCategory = 'social-media' | 'videography' | 'photography' | 'web';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  reelUrl?: string;
  platform?: string;
  location?: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    email?: string;
    phone?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface AgencyInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  description: string;
  mission: string;
  team: TeamMember[];
  services: Service[];
  email: string;
  phone: string;
  location: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
  };
  logoImage?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'social-media' | 'videography' | 'photography' | 'web';
  message: string;
  timestamp: Date;
}
