import type { AgencyInfo } from '@/types';

export const agencyInfo: AgencyInfo = {
  name: 'Karl Media',
  tagline: 'World Class Video for Businesses',
  heroIntroduction: 'Our end-to-end process makes creating content simple and fun.',
  description: 'Karl Media is a media agency specializing in video production, social media management, photography, and web development. We help businesses tell their stories through compelling visual content.',
  mission: 'We believe every business has a story worth telling. Our mission is to bring those stories to life through world-class video production and digital media services.',
  team: [
    {
      id: 'nirmal',
      name: 'Nirmal Karl Hadzic',
      role: 'Founder',
      bio: 'Nirmal is the visionary behind Karl Media. With a passion for storytelling and visual media, he founded the agency to help businesses elevate their brand through high-quality video content and digital presence.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80',
      socialLinks: {
        instagram: 'https://instagram.com/nirmalkarlhadzic',
        linkedin: 'https://linkedin.com/in/nirmalkarlhadzic',
        email: 'nirmal@karlmedia.com',
        phone: '+49 123 456 789',
      },
    },
    {
      id: 'simon',
      name: 'Simon Seifert',
      role: 'Co-Founder',
      bio: 'Simon brings technical expertise and creative direction to Karl Media. His background in videography and digital marketing ensures every project exceeds client expectations.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80',
      socialLinks: {
        instagram: 'https://instagram.com/simonseifert',
        linkedin: 'https://linkedin.com/in/simonseifert',
        email: 'simon@karlmedia.com',
        phone: '+49 123 456 790',
      },
    },
  ],
  services: [
    {
      id: 'social-media',
      title: 'Social Media',
      description: 'Strategic social media management and content creation that builds engaged communities and drives real business results. From Instagram Reels to TikTok campaigns, we handle it all.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
    },
    {
      id: 'videography',
      title: 'Photography & Videography',
      description: 'Professional video production and photography for brands, events, and campaigns. We create cinematic content that captures attention and tells your story.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
    },
    {
      id: 'web',
      title: 'Websites',
      description: 'Modern, responsive websites that convert visitors into customers. From design to development, we build digital experiences that represent your brand perfectly.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
    },
  ],
  email: 'hello@karlmedia.com',
  phone: '+49 123 456 789',
  location: 'Germany',
  availability: 'Currently accepting new projects',
  socialLinks: {
    instagram: 'https://instagram.com/karlmedia',
    linkedin: 'https://linkedin.com/company/karlmedia',
  },
};
