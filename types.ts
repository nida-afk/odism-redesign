import { LucideIcon } from 'lucide-react';

export type ViewName = 'home' | 'services' | 'solutions' | 'about' | 'careers' | 'blog';

export interface NavigationItem {
  id: ViewName;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category?: string;
  description: string;
  longDescription?: string;
  icon: LucideIcon;
  tags: string[];
  features?: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
  stats?: string;
}

export interface TechItem {
  name: string;
  category: 'mobile' | 'backend' | 'frontend' | 'cms';
  iconName: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export interface OfficeLocation {
  label: string;
  address: string;
  phone?: string;
  country: string;
}

export interface JobItem {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}