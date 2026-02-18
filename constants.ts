import { Smartphone, Cpu, Database, Layers, Code2, ShieldCheck, ShoppingCart, Paintbrush, BrainCircuit, Activity, Users, Home, Truck, AppWindow, Wifi, LifeBuoy, PenTool, Megaphone, Cloud, Settings } from 'lucide-react';
import { ServiceItem, StatItem, TechItem, SolutionItem, OfficeLocation, BlogPost } from './types';

export const STATS: StatItem[] = [
  { label: 'Developers', value: '50+', subtext: 'In-House Experts' },
  { label: 'Experience', value: '8+', subtext: 'Years in Tech' },
  { label: 'Projects', value: '200+', subtext: 'Delivered Globally' },
  { label: 'Satisfaction', value: '100%', subtext: 'Client Retention' },
];

export const NAV_ITEMS: { id: 'home' | 'services' | 'solutions' | 'about' | 'careers' | 'blog', label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'solutions', label: 'Company' },
  { id: 'about', label: 'About' },
  { id: 'careers', label: 'Careers' },
];

export const SERVICES: ServiceItem[] = [
  // Mobile Category
  {
    id: 'mobile-native',
    title: 'Mobile App Development',
    category: 'Mobile',
    description: 'iPhone | Android',
    longDescription: 'Expert native application development for iOS and Android platforms using Swift and Kotlin, ensuring maximum performance and user experience.',
    icon: Smartphone,
    tags: ['iPhone', 'Android', 'Swift', 'Kotlin'],
    features: ['Native Performance', 'App Store Deployment', 'Hardware Integration']
  },
  {
    id: 'mobile-cross',
    title: 'Cross Platform App Development',
    category: 'Mobile',
    description: 'React Native | PhoneGap | Ionic',
    longDescription: 'Cost-effective and efficient hybrid mobile applications that run seamlessly on both iOS and Android from a single codebase.',
    icon: Layers,
    tags: ['React Native', 'Ionic', 'PhoneGap', 'Flutter'],
    features: ['Code Reusability', 'Faster Time to Market', 'Unified UI']
  },
  {
    id: 'custom-apps',
    title: 'Custom Application Development',
    category: 'Mobile',
    description: 'Tailored Enterprise Solutions',
    longDescription: 'Bespoke software solutions designed to meet specific business requirements and workflows.',
    icon: AppWindow,
    tags: ['B2B Apps', 'Enterprise Mobility', 'Custom Logic'],
    features: ['Scalable Architecture', 'Secure Data Handling', 'Role-Based Access']
  },
  {
    id: 'ui-ux',
    title: 'UI & UX Designing',
    category: 'Mobile',
    description: 'User-Centric Interfaces',
    longDescription: 'Creating intuitive and engaging user experiences through rigorous research, wireframing, and high-fidelity prototyping.',
    icon: Paintbrush,
    tags: ['Figma', 'Adobe XD', 'Sketch'],
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
  },

  // Web Category
  {
    id: 'web-dev',
    title: 'Web Development',
    category: 'Web',
    description: 'PHP | Python | Golang | .Net',
    longDescription: 'Robust backend and frontend development using industry-standard languages and frameworks including Codeigniter and Django.',
    icon: Code2,
    tags: ['PHP', 'Python', 'Golang', '.Net', 'Django'],
    features: ['API Development', 'Database Design', 'Server Management']
  },
  {
    id: 'js-frameworks',
    title: 'Trending JS Framework',
    category: 'Web',
    description: 'AngularJS | ReactJS | NodeJS',
    longDescription: 'Modern single-page applications and scalable backends using the power of the JavaScript ecosystem.',
    icon: Cpu,
    tags: ['AngularJS', 'ReactJS', 'NodeJS', 'VueJS'],
    features: ['SPA', 'Real-time Data', 'Isomorphic Apps']
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce & CMS',
    category: 'Web',
    description: 'Magento | WordPress | Shopify',
    longDescription: 'Powerful online stores and content management systems tailored to drive sales and manage content efficiently.',
    icon: ShoppingCart,
    tags: ['Magento', 'WordPress', 'Shopify', 'WooCommerce'],
    features: ['Custom Themes', 'Payment Gateways', 'Inventory Management']
  },

  // Emerging Technologies
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    category: 'Emerging Technologies',
    description: 'Machine Learning & AI Solutions',
    longDescription: 'Leveraging AI to automate processes, gain insights, and create intelligent applications.',
    icon: BrainCircuit,
    tags: ['ML', 'NLP', 'Computer Vision'],
    features: ['Predictive Analytics', 'Chatbots', 'Automation']
  },
  {
    id: 'iot',
    title: 'IoT Development',
    category: 'Emerging Technologies',
    description: 'Smart Connected Devices',
    longDescription: 'Connecting physical devices to the internet for smart monitoring and control systems.',
    icon: Wifi,
    tags: ['MQTT', 'Sensors', 'Firmware'],
    features: ['Real-time Monitoring', 'Device Control', 'Data Analytics']
  },
  {
    id: 'flutter',
    title: 'Flutter App Development',
    category: 'Emerging Technologies',
    description: 'Next-Gen Mobile UI',
    longDescription: 'Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    icon: Smartphone,
    tags: ['Dart', 'Material Design', 'Widgets'],
    features: ['Hot Reload', 'Native Performance', 'Expressive UI']
  },
  {
    id: 'devops',
    title: 'DevOps',
    category: 'Emerging Technologies',
    description: 'CI/CD & Infrastructure',
    longDescription: 'Streamlining development and operations with automated pipelines and cloud infrastructure management.',
    icon: Settings,
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
    features: ['CI/CD Pipelines', 'Containerization', 'Infrastructure as Code']
  },
  {
    id: 'support',
    title: 'Support & Maintenance',
    category: 'Emerging Technologies',
    description: 'Optimization & 24/7 Support',
    longDescription: 'Ensuring your applications remain healthy, secure, and performant with ongoing maintenance.',
    icon: LifeBuoy,
    tags: ['SLA', 'Security Patches', 'Updates'],
    features: ['24/7 Monitoring', 'Bug Fixes', 'Performance Tuning']
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    category: 'Emerging Technologies',
    description: 'Software Testing',
    longDescription: 'Comprehensive testing services to ensure bug-free and reliable software delivery.',
    icon: ShieldCheck,
    tags: ['Selenium', 'JMeter', 'Manual Testing'],
    features: ['Automated Testing', 'Load Testing', 'Security Audits']
  },
  {
    id: 'prototyping',
    title: 'Prototyping & MVP',
    category: 'Emerging Technologies',
    description: 'Rapid MVP Development',
    longDescription: 'Quickly turning ideas into working prototypes to validate market potential.',
    icon: PenTool,
    tags: ['MVP', 'Proof of Concept', 'Agile'],
    features: ['Rapid Iteration', 'Cost-Effective', 'User Feedback']
  },
  {
    id: 'staff-aug',
    title: 'Staff Augmentation',
    category: 'Emerging Technologies',
    description: 'Dedicated Development Teams',
    longDescription: 'Extending your team with our skilled developers to accelerate project delivery.',
    icon: Users,
    tags: ['Remote Teams', 'Developers', 'Designers'],
    features: ['Flexible Scaling', 'Expert Talent', 'Direct Management']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Emerging Technologies',
    description: 'SEO, SEM & Growth',
    longDescription: 'Data-driven marketing strategies to grow your online presence and acquire customers.',
    icon: Megaphone,
    tags: ['SEO', 'PPC', 'Content Marketing'],
    features: ['Growth Hacking', 'Analytics', 'Brand Awareness']
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    category: 'Emerging Technologies',
    description: 'Scalable Cloud Infrastructure',
    longDescription: 'End-to-end cloud solutions including migration, architecture design, and management on AWS, Azure, and Google Cloud.',
    icon: Cloud,
    tags: ['AWS', 'Azure', 'GCP', 'Serverless'],
    features: ['Cloud Migration', 'Serverless Architecture', 'Cost Optimization', 'Security Compliance']
  }
];

export const SOLUTIONS_DOMAINS: SolutionItem[] = [
  {
    id: 'elearning',
    title: 'eLearning',
    description: 'LMS, Virtual Classrooms, and Educational Apps.',
    details: ['Video Conferencing', 'Course Management', 'Gamification', 'Student Analytics'],
    icon: Layers,
    stats: 'EdTech Experts'
  },
  {
    id: 'crm',
    title: 'CRM / ERP',
    description: 'Business process automation and customer management.',
    details: ['Lead Management', 'Inventory Control', 'HRM Modules', 'Supply Chain'],
    icon: Database,
    stats: 'Enterprise Ready'
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    description: 'Property portals and virtual tour applications.',
    details: ['Property Listing', 'Virtual Tours', 'Agent Portals', 'Map Integration'],
    icon: Home,
    stats: 'PropTech Leaders'
  },
  {
    id: 'ondemand',
    title: 'On-Demand',
    description: 'Uber-like solutions for service delivery.',
    details: ['Real-time Tracking', 'Booking Engine', 'Driver/User Apps', 'Payment Splitting'],
    icon: Truck,
    stats: 'Scalable Architecture'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Telemedicine and Hospital Management Systems.',
    details: ['Telemedicine', 'EHR Systems', 'Patient Scheduling', 'IoT Health Monitoring'],
    icon: Activity,
    stats: 'HIPAA Compliant'
  },
  {
    id: 'social',
    title: 'Social Networking',
    description: 'Community platforms and dating applications.',
    details: ['Live Streaming', 'Real-time Chat', 'News Feeds', 'Media Sharing'],
    icon: Users,
    stats: 'High Concurrency'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'React Native', category: 'mobile', iconName: 'react' },
  { name: 'Flutter', category: 'mobile', iconName: 'flutter' },
  { name: 'NodeJS', category: 'backend', iconName: 'node' },
  { name: 'Magento', category: 'cms', iconName: 'magento' },
  { name: 'PHP', category: 'backend', iconName: 'php' },
  { name: 'Python', category: 'backend', iconName: 'python' },
  { name: 'Golang', category: 'backend', iconName: 'go' },
  { name: 'Laravel', category: 'backend', iconName: 'laravel' },
];

export const PHILOSOPHY = {
  title: "What we do, We do it with an Excellence",
  description: "We don't just write code; we architect digital legacies. Our philosophy is rooted in precision, agility, and a relentless pursuit of perfection.",
};

export const COMPANY_INFO = {
  name: "Codism",
  tagline: "Agile in Nature",
  description: "Codism is a premier software development company delivering cutting-edge digital solutions. We have mastered the art of translating complex business requirements into elegant, scalable software.",
  locations: [
    {
      label: "India HQ",
      country: "India",
      address: "FL 301, Manish Plaza, SN 16, NIBM Road, Kondhwa Khurd, Pune 411048",
    },
    {
      label: "US Office",
      country: "United States",
      address: "230 N Maple Avenue Suite B-1-616 Marlton, New Jersey 08053",
      phone: "(973) 814-2525"
    }
  ] as OfficeLocation[]
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Cross-Platform: React Native vs. Flutter in 2026',
    excerpt: 'An in-depth analysis of the two giants in mobile development. Which one offers better performance for enterprise-scale applications?',
    date: 'Mar 15, 2026',
    readTime: '6 min read',
    category: 'Mobile Dev',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Scaling Node.js Microservices for High-Concurrency',
    excerpt: 'Best practices for architecting resilient backend systems that can handle millions of requests without breaking a sweat.',
    date: 'Feb 28, 2026',
    readTime: '8 min read',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: 'AI-Driven ERP: The Next Frontier for Business Logic',
    excerpt: 'How machine learning integration is transforming traditional ERP systems into predictive decision-making engines.',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    category: 'Emerging Tech',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    title: 'Optimizing Magento 2 for Speed and Security',
    excerpt: 'Crucial optimization strategies to ensure your e-commerce platform loads instantly and remains secure against threats.',
    date: 'Jan 22, 2026',
    readTime: '7 min read',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '5',
    title: 'The Role of IoT in Modern Healthcare Systems',
    excerpt: 'Exploring how connected devices are enabling remote patient monitoring and revolutionizing telemedicine.',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '6',
    title: 'Why Golang is the Choice for Cloud-Native Backends',
    excerpt: 'Why industry leaders are migrating their core infrastructure to Go for its concurrency and performance.',
    date: 'Dec 05, 2025',
    readTime: '6 min read',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1000'
  }
];