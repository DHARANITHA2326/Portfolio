import { Project, Education, SkillCategory, Certification, Internship } from './types';

export const PERSONAL_INFO = {
  name: 'Dharanitha S',
  role: 'Information Technology Student & Full Stack Web Developer',
  email: 'dharanithasekar23@gmail.com',
  phone: '+91 9385589474',
  location: 'Karur, Tamil Nadu, India',
  objective: 'To enhance my professional skills, capabilities and knowledge in an organization which recognizes the value of the hard work and trusts me with responsibilities and challenges. Looking for a challenging job with a rapidly growing organization which is capable to provide me a wide range of goal.',
  socials: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    leetcode: 'https://leetcode.com'
  },
  avatar: '/src/assets/images/dharanitha_avatar_1784355715206.jpg'
};

export const EDUCATION_DATA: Education[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Information Technology',
    institution: 'V.S.B Engineering College, Karur',
    period: '2023 - 2027',
    score: 'CGPA: 8.85 / 10',
    type: 'college'
  },
  {
    id: 'class12',
    degree: 'Class XII (Higher Secondary)',
    institution: 'Shree Valli Matric Higher Secondary School, Kodumudi',
    period: '2022 - 2023',
    score: 'Percentage: 93.5%',
    type: 'school'
  },
  {
    id: 'class10',
    degree: 'Class X (Secondary)',
    institution: 'Shree Valli Matric Higher Secondary School, Kodumudi',
    period: '2020 - 2021',
    score: 'Percentage: 100%',
    type: 'school'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'prog',
    category: 'Programming',
    items: ['Java', 'Python']
  },
  {
    id: 'webdev',
    category: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Angular']
  },
  {
    id: 'db',
    category: 'Databases',
    items: ['MySQL']
  },
  {
    id: 'tools',
    category: 'Tools & Platforms',
    items: ['VS Code', 'Eclipse', 'MS Excel', 'Git', 'GitHub']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Multi-Restaurant Food Ordering System',
    description: 'A comprehensive food ordering marketplace with single payment gateway integration. Allows users to browse multiple menus, add items to a unified cart, and pay via a secure checkout stream.',
    githubUrl: 'https://github.com',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Payment API'],
    keyFeatures: [
      'Multi-vendor cart system enabling unified checkout across different restaurants',
      'Integrated unified payment flow with state-retained transition feedback',
      'Interactive restaurant menus and real-time category filtering',
      'Sleek responsive web dashboard designed for optimal mobile & desktop viewing'
    ]
  },
  {
    id: 'p2',
    title: 'Budget Wise: AI-Driven Expense Tracker',
    description: 'An AI-assisted finance platform that monitors spending habits, categorizes transactions, and provides intelligent budget advisory services for proactive wealth planning.',
    githubUrl: 'https://github.com',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'AI Integration'],
    keyFeatures: [
      'Automated expense tracking with visual bento charts and progress rings',
      'Smart categorization of spending using light algorithmic evaluation',
      'Dynamic budget thresholds with automated over-spend warnings',
      'Interactive financial planning dashboard designed with tailored metrics'
    ]
  },
  {
    id: 'p3',
    title: 'Smart Attendance App',
    description: 'An optimized student attendance logging utility designed to eliminate administrative manual processes. Enables seamless tracking, class roster lists, and automatic statistics calculation.',
    githubUrl: 'https://github.com',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Local DB'],
    keyFeatures: [
      'Instant attendance logging via digital grid selections',
      'Comprehensive generation of historical reports and summary statistics',
      'Student profile dashboards with filterable performance tracking',
      'Offline-capable local persistence ensuring no loss of attendance records'
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'c1',
    title: 'Programming in Java',
    issuer: 'NPTEL',
    year: '2025'
  },
  {
    id: 'c2',
    title: 'Data Science for Engineers',
    issuer: 'NPTEL',
    year: '2024'
  },
  {
    id: 'c3',
    title: 'Budget Wise: AI-Driven Expense Tracker Certification',
    issuer: 'Infosys Springboard',
    year: '2026'
  },
  {
    id: 'c4',
    title: 'Java Foundation Certification',
    issuer: 'Infosys Springboard',
    year: '2024'
  }
];

export const INTERNSHIPS_DATA: Internship[] = [
  {
    id: 'i1',
    role: 'Full Stack Web Development Intern',
    company: 'Brainary Spot Technology',
    location: 'Coimbatore, Tamil Nadu, India',
    period: 'Summer Internship',
    highlights: [
      'Contributed to building responsive web modules using React and Node.js',
      'Assisted in configuring MySQL schemas and optimized relational queries',
      'Participated in code reviews and collaborated with a development team'
    ]
  },
  {
    id: 'i2',
    role: 'Web Development Intern',
    company: 'Tech Vedhu Pvt. Ltd.',
    location: 'Salem, Tamil Nadu, India',
    period: 'Technical Internship',
    highlights: [
      'Built custom front-end interfaces using Tailwind CSS and HTML/JS',
      'Assisted in integrating client-side routing with optimized state logic',
      'Resolved cross-browser compatibility issues for legacy client portals'
    ]
  },
  {
    id: 'i3',
    role: 'Web Development Trainee',
    company: 'Infosys Springboard',
    location: 'Self-Paced Professional Track',
    period: 'Certification Program',
    highlights: [
      'Mastered fundamentals of modern web stacks, styling sheets, and web servers',
      'Completed practical capstone labs with industry-grade coding standards',
      'Acquired credentials in Object-Oriented Programming and Web Architectures'
    ]
  }
];
