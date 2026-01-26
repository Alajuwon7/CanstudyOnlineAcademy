export const SITE_NAME = 'CanStudy Online Academy';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Contact', href: '/contact' },
];

export const COURSE_CATEGORIES = [
  { id: 'all', name: 'All', slug: 'all' },
  { id: 'development', name: 'Development', slug: 'development' },
  { id: 'business', name: 'Business', slug: 'business' },
  { id: 'languages', name: 'Languages', slug: 'languages' },
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/canstudyconsulting',
  tiktok: 'https://www.tiktok.com/@canstudy_consulting',
  instagram: 'https://www.instagram.com/canstudyconsult',
  linkedin: 'https://www.linkedin.com/company/canstudy-consulting/',
};

export const CONTACT_INFO = {
  phone: '+1 800 202 000',
  email: 'info@canstudyconsult.com',
  address: '123 Education Street, Learning City, LC 12345',
};
