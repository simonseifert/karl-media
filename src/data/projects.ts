import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Restaurant Branding Campaign',
    category: 'social-media',
    year: '2024',
    slug: 'restaurant-branding',
    coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    description: 'A complete social media campaign for an upscale restaurant, featuring cinematic food videography and engaging Reels that drove a 300% increase in online reservations.',
    client: 'Gourmet Haus',
    reelUrl: 'https://www.instagram.com/reel/example1/',
    platform: 'Instagram',
    location: 'Munich',
    images: [
      { id: '1-1', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Restaurant interior shot', aspectRatio: 'landscape' },
      { id: '1-2', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Food photography closeup', aspectRatio: 'square' },
    ],
  },
  {
    id: '2',
    title: 'Fitness Brand Launch',
    category: 'videography',
    year: '2024',
    slug: 'fitness-brand-launch',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    description: 'High-energy promotional videos and social content for a fitness brand launch. Dynamic editing, powerful storytelling, and scroll-stopping visuals.',
    client: 'FitPro Athletics',
    reelUrl: 'https://www.instagram.com/reel/example2/',
    platform: 'Instagram & TikTok',
    location: 'Berlin',
    images: [
      { id: '2-1', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Gym workout video still', aspectRatio: 'landscape' },
      { id: '2-2', src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Athlete portrait', aspectRatio: 'portrait' },
    ],
  },
  {
    id: '3',
    title: 'E-Commerce Product Showcase',
    category: 'photography',
    year: '2024',
    slug: 'ecommerce-product-showcase',
    coverImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    description: 'Premium product photography and video content for an e-commerce brand. Clean, modern visuals that highlight product details and drive conversions.',
    client: 'Luxe Accessories',
    platform: 'Shopify & Instagram',
    location: 'Hamburg',
    images: [
      { id: '3-1', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Product on white background', aspectRatio: 'square' },
      { id: '3-2', src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Lifestyle product shot', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '4',
    title: 'Tech Startup Website',
    category: 'web',
    year: '2023',
    slug: 'tech-startup-website',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    description: 'A modern, conversion-focused website for a tech startup. Responsive design, smooth animations, and integrated lead generation forms.',
    client: 'NovaTech Solutions',
    platform: 'Web',
    location: 'Frankfurt',
    images: [
      { id: '4-1', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Website mockup on laptop', aspectRatio: 'landscape' },
      { id: '4-2', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Dashboard design', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '5',
    title: 'Real Estate Video Tour',
    category: 'videography',
    year: '2023',
    slug: 'real-estate-video-tour',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    description: 'Cinematic property tours that showcase luxury real estate. Drone footage, interior walkthroughs, and lifestyle-driven storytelling.',
    client: 'Prime Properties',
    reelUrl: 'https://www.instagram.com/reel/example5/',
    platform: 'YouTube & Instagram',
    location: 'Düsseldorf',
    images: [
      { id: '5-1', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Luxury home exterior', aspectRatio: 'landscape' },
      { id: '5-2', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Modern interior', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '6',
    title: 'Fashion Brand Content',
    category: 'social-media',
    year: '2023',
    slug: 'fashion-brand-content',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80',
    description: 'Monthly content creation for a fashion brand including Reels, Stories, and feed posts. Consistent aesthetic that grew their following by 150%.',
    client: 'Atelier Mode',
    reelUrl: 'https://www.instagram.com/reel/example6/',
    platform: 'Instagram & TikTok',
    location: 'Berlin',
    images: [
      { id: '6-1', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Fashion editorial', aspectRatio: 'portrait' },
      { id: '6-2', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80', alt: 'Behind the scenes', aspectRatio: 'landscape' },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
