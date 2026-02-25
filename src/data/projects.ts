import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'desingerica',
    title: 'Desingerica Aftermovie & Photos',
    category: 'videography',
    year: '2024',
    slug: 'desingerica-aftermovie',
    coverImage: '/media/desingerica/_MG_2393-Enhanced-NR.jpg',
    description: 'Club Drago aftermovie and photo coverage for Desingerica—high-energy edits plus a photo set that captures the crowd and atmosphere.',
    client: 'Desingerica',
    reelUrl: '/media/desingerica/desingerica.mp4',
    platform: 'Instagram & Web',
    location: 'Croatia',
    images: [
      { id: 'd-1', src: '/media/desingerica/_MG_2393-Enhanced-NR.jpg', alt: 'Crowd moment at Club Drago', aspectRatio: 'landscape' },
      { id: 'd-2', src: '/media/desingerica/_MG_8981-Enhanced-NR.jpg', alt: 'Performance close-up', aspectRatio: 'portrait' },
      { id: 'd-3', src: '/media/desingerica/_MG_2322-Enhanced-NR.jpg', alt: 'Lighting and stage', aspectRatio: 'landscape' },
      { id: 'd-4', src: '/media/desingerica/_MG_9033-Enhanced-NR.jpg', alt: 'Crowd reaction', aspectRatio: 'portrait' },
    ],
  },
  {
    id: 'biba',
    title: 'BIBA Festival Reel',
    category: 'videography',
    year: '2024',
    slug: 'biba-festival-reel',
    coverImage: '/media/IMG_0875.jpeg',
    description: 'High-energy festival coverage and social-first edits for BIBA, delivered as a hero reel for campaign launch.',
    client: 'BIBA',
    reelUrl: '/media/biba.mov',
    platform: 'Instagram & TikTok',
    location: 'Germany',
    images: [],
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
