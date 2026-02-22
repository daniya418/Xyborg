export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'sound-design' | 'music' | 'editing';
  audioUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
  tools?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}
