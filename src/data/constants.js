export const SERVICES = [
  { num: '01', title: 'Custom Software Development', desc: 'Bespoke web apps, internal tools, and platforms built precisely for your workflows.' },
  { num: '02', title: 'Intelligent Automation', desc: 'End-to-end systems that eliminate manual work and scale operations effortlessly.' },
  { num: '03', title: 'Website & Landing Pages', desc: 'High-converting websites and landing pages built with SEO, performance, and growth in mind.' },
  { num: '04', title: 'API & Systems Integration', desc: 'Connect your entire tech stack into one unified system, zero friction.' },
  { num: '05', title: 'Data & Analytics', desc: 'Real-time dashboards turning raw data into decisions your team can act on.' },
  { num: '06', title: 'Technology Consulting', desc: 'Architecture, roadmaps, and CTO-as-a-Service for ambitious teams.' },
];


export const CASE_STUDIES = [
  {
    slug: 'bike-rental',
    industry: 'Travel & Mobility',
    year: '2026',
    title: 'Full-Stack Bike Rental Website',
    desc: 'Built a complete bike rental platform with online booking, real-time GPS fleet tracking, dynamic pricing, Stripe payments, and a rider-facing mobile-optimised interface — replacing manual pen-and-paper operations entirely.',
    label: 'RideEasy',
    vis: 'csv1',
    stats: [
      { value: '3×', label: 'Bookings per day' },
      { value: '80%', label: 'Less manual work' },
      { value: '4wk', label: 'Delivered in' },
    ],
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    slug: 'inventory-system',
    industry: 'Operations',
    year: '2026',
    title: 'Smart Inventory Management System',
    desc: 'Designed and shipped a real-time inventory platform with barcode scanning, automated low-stock alerts, supplier order management, and a live multi-warehouse dashboard — giving teams full visibility across all locations.',
    label: 'StockIQ',
    vis: 'csv4',
    stats: [
      { value: '65%', label: 'Faster stock audits' },
      { value: '0', label: 'Stockout incidents' },
      { value: '5', label: 'Warehouses connected' },
    ],
    tags: ['React', 'PostgreSQL', 'Barcode Scan', 'Automation', 'Real-time'],
  },
  {
    slug: 'ai-analytics',
    industry: 'Analytics',
    year: '2026',
    title: 'AI-Powered Business Intelligence Dashboard',
    desc: 'Replaced static spreadsheet reporting with a live BI platform that ingests data from multiple sources, surfaces anomalies automatically, and delivers plain-language insights via an LLM layer.',
    label: 'DataLens',
    vis: 'csv3',
    stats: [
      { value: '10×', label: 'Faster reporting cycles' },
      { value: '5', label: 'Data sources unified' },
      { value: '28%', label: 'Cost reduction' },
    ],
    tags: ['SEO', 'Data Pipelines', 'React', 'PostgreSQL'],
  },
  {
    slug: 'logistics-automation',
    industry: 'Logistics',
    year: '2026',
    title: 'End-to-End Logistics Automation System',
    desc: 'Automated the entire order-to-delivery pipeline for a regional logistics company — from dispatch scheduling to driver tracking and customer notifications — cutting manual coordination by 70%.',
    label: 'LogiFlow',
    vis: 'csv4',
    stats: [
      { value: '70%', label: 'Less manual coordination' },
      { value: '2×', label: 'Delivery capacity' },
      { value: '4wk', label: 'Time to production' },
    ],
    tags: ['Automation', 'Real-time Tracking', 'Node.js', 'Maps API'],
  },
  {
    slug: 'crm-integration',
    industry: 'SaaS',
    year: '2026',
    title: 'Unified CRM & Sales Pipeline Integration',
    desc: 'Integrated a fragmented sales stack — CRM, email, calendar, and billing — into a single unified interface with automated follow-up sequences and real-time pipeline visibility.',
    label: 'SalesSync',
    vis: 'csv5',
    stats: [
      { value: '35%', label: 'Increase in close rate' },
      { value: '6', label: 'Tools replaced by one' },
      { value: '50%', label: 'Faster onboarding' },
    ],
    tags: ['CRM', 'API Integration', 'Automation', 'TypeScript'],
  },
  {
    slug: 'ml-demand-forecast',
    industry: 'Retail',
    year: '2026',
    title: 'ML Demand Forecasting Engine',
    desc: 'Built a machine learning pipeline that predicts inventory demand with 91% accuracy, reducing overstock and stockouts for a retail chain operating across 12 locations.',
    label: 'ForecastAI',
    vis: 'csv6',
    stats: [
      { value: '91%', label: 'Forecast accuracy' },
      { value: '23%', label: 'Inventory cost saved' },
      { value: '12', label: 'Locations deployed' },
    ],
    tags: ['Machine Learning', 'Python', 'Forecasting', 'Retail Tech'],
  },
];

export const TEAM = [
  { initials: 'VR', name: 'S.VarunRaj', role: 'Founder & CEO', bio: 'Visionary technologist building scalable software and automation systems for businesses worldwide.', bg: 'linear-gradient(145deg,#140818,#3a0c2a)', socials: [{ label: 'in', url: 'https://www.linkedin.com/in/varun-rajss' }], delay: '' },
  { initials: 'YK', name: 'Yash Kapoor', role: 'CTO & Lead Engineer', bio: 'Full-stack architect specializing in distributed systems, APIs, and real-time data pipelines.', bg: 'linear-gradient(145deg,#080c18,#141c30)', socials: [{ label: 'in', url: 'https://www.linkedin.com/in/yash-kapoor-a17026251' }], delay: 'd1' },
  { initials: 'PS', name: 'Pritam Shaw', role: 'Founding Engineer', bio: 'Bridges business goals with technical execution — ensuring every build solves the right problem.', bg: 'linear-gradient(145deg,#0c0814,#20122a)', socials: [{ label: 'in', url: 'https://www.linkedin.com/in/pritam-shaw-86a051274' }], delay: 'd2' },
  { initials: 'KR', name: 'Karthik Reddy', role: 'Founding Engineer', bio: 'Crafting intuitive interfaces for complex software products and AI-powered dashboards.', bg: 'linear-gradient(145deg,#180610,#3c1020)', socials: [{ label: 'in', url: 'https://www.linkedin.com/in/n-karthik-reddy-a4bb93324' }], delay: 'd3' },
  { initials: 'AS', name: 'Aman Sagar', role: 'Founding Engineer', bio: 'Crafting intuitive interfaces for complex software products and AI-powered dashboards.', bg: 'linear-gradient(145deg,#180610,#3c1020)', socials: [{ label: 'in', url: 'https://www.linkedin.com/in/aman-sagar-40927130b' }], delay: 'd3' },
];

export const JOBS = [
  { title: 'Full-Stack Developer (React/Node)', location: 'Remote', type: 'Freelance', dept: 'Engineering', delay: 'd1' },
  { title: 'Product Designer (UI/UX)', location: 'Remote', type: 'Freelance', dept: 'Design', delay: 'd2' },
];

export const STEPS = [
  { num: '01', title: 'Discovery', desc: 'Map business goals and define the technical approach before writing a single line of code.', delay: '' },
  { num: '02', title: 'Architecture', desc: 'Wireframe and architect for scale — laying the right foundation from day one.', delay: 'd1' },
  { num: '03', title: 'Build & Ship', desc: 'Agile sprints with weekly demos. We build, test, and integrate simultaneously.', delay: 'd2' },
  { num: '04', title: 'Scale', desc: 'Smooth deployment, team training, and ongoing support as your business grows.', delay: 'd3' },
];

export const PLANS = [
  { tier: 'Startups & MVPs', name: 'Starter', desc: 'Rapid deployment for proof-of-concepts, simple web apps, and initial automations.', features: ['Fast-tracked MVP delivery', 'Core automation workflows', 'Essential integrations', 'Scalable architecture prep'], cta: 'Book Strategy Call', featured: false, delay: '' },
  { tier: 'Scaling Businesses', name: 'Growth', desc: 'Comprehensive platforms, data pipelines, and web solutions for established operations.', label: 'Recommended', features: ['Custom full-stack platforms', 'Website & Landing Pages with SEO', 'End-to-end process automation', 'Dedicated project lead'], cta: 'Schedule Deep Dive', featured: true, delay: 'd1' },
  { tier: 'Large Operations', name: 'Enterprise', desc: 'Complete digital transformation, bespoke R&D, and entirely dedicated teams.', features: ['Unlimited scope & complexity', 'Proprietary AI model training', 'On-premise / hybrid setups', '24/7 SLA & Maintenance'], cta: 'Contact Leadership', featured: false, delay: 'd2' },
];

export const APPS = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg', alt: 'Gmail', delay: '1.8s', pad: '10px' },
  { src: 'https://avatars.githubusercontent.com/u/7713209?s=200&v=4', alt: 'Razorpay', delay: '2.2s', pad: '4px' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', alt: 'WhatsApp', delay: '2.6s', pad: '10px' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg', alt: 'Slack', delay: '3.0s', pad: '12px' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', alt: 'Notion', delay: '3.4s', pad: '10px' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png', alt: 'Meta', delay: '3.8s', pad: '8px' },
];

export const BRANCHES = [
  { d: 'M 200 280 Q 200 160 40 60', delay: '0s' },
  { d: 'M 200 280 Q 200 160 110 50', delay: '0.4s' },
  { d: 'M 200 280 Q 200 160 168 48', delay: '0.8s' },
  { d: 'M 200 280 Q 200 160 232 48', delay: '1.0s' },
  { d: 'M 200 280 Q 200 160 292 50', delay: '1.2s' },
  { d: 'M 200 280 Q 200 160 362 60', delay: '1.6s' },
];

export const FOOTER_COLS = {
  Services: { hrefs: ['/services', '/services', '/services', '/services#integration'], labels: ['Custom Software', 'Automation', 'Websites & SEO', 'Integrations'] },
  Company: { hrefs: ['/company', '/company#careers', '/contact'], labels: ['Team', 'Careers', 'Contact'] },
  More: { hrefs: ['/work', '/pricing', '/contact', '/contact'], labels: ['Our Work', 'Pricing', 'Book a Meeting', 'Talk to Us'] },
};

export const FORM_INITIAL = { firstName: '', lastName: '', email: '', phone: '', service: 'Select...', details: '' };
export const CONTACT_INFO = [
  ['✉️', 'Email', 'locanatechnologies@gmail.com'],
  ['📞', 'Phone', '+91 7829500988'],
  ['📍', 'Based In', 'Ranchi, India · Worldwide'],
];
export const MARQUEE_ITEMS = ['Custom Software', 'Websites & SEO', 'Systems Integration', 'Data Pipelines', 'Automation', 'Consulting', 'Locana'];

export const VALIDATORS = {
  firstName: (v) => v.trim().length >= 2 || 'At least 2 characters.',
  lastName: (v) => v.trim().length >= 2 || 'At least 2 characters.',
  email: (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v.trim()) || 'Enter a valid email.',
  phone: (v) => /^[+\d\s\-()]{7,20}$/.test(v.trim()) || 'Enter a valid phone number.',
  service: (v) => v !== 'Select...' || 'Please select a service.',
  details: (v) => v.trim().length >= 20 || 'At least 20 characters.',
};

export const validateForm = (fields) => {
  const errs = {};
  Object.entries(VALIDATORS).forEach(([k, fn]) => { const r = fn(fields[k] ?? ''); if (r !== true) errs[k] = r; });
  return errs;
};
