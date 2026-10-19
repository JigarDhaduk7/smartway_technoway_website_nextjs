// Shapes of the data served by the admin API (see lib/api.ts).

export interface Project {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  isPublished: boolean;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  isPublished: boolean;
  createdAt: string;
}

export interface ServiceCard {
  _id: string;
  title: string;
  slug: string;
  card: {
    shortDescription: string;
    icon: string;
  };
}

export interface ServiceData {
  title: string;
  heroSection: { headline: string; subHeadline: string };
  servicesOverview: {
    title: string;
    description: string;
    services: Array<{ title: string; description: string; icon: string }>;
  };
  processSection: {
    title: string;
    steps: Array<{ step: number; title: string; icon: string }>;
  };
}

export interface Skill {
  _id: string;
  title: string;
  slug: string;
  image: string;
  status: boolean;
}

export interface Testimonial {
  _id: string;
  name: string;
  designation: string;
  message: string;
  rating: number;
}

export interface Leader {
  _id: string;
  name: string;
  position: string;
  image: string;
}

export interface Job {
  _id: string;
  title: string;
  location: string;
  jobType: string;
  experience: string;
  openings: number;
  description: string;
  requiredSkills: string[];
  responsibilities: string[];
}

/**
 * Standard project image size. Upload project images at exactly this size (or the same
 * proportions, e.g. 3000 × 1360 for extra-sharp) and they show uncropped everywhere.
 */
export const PROJECT_IMAGE = { width: 1500, height: 680 } as const;

export const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
