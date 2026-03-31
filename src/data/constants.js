export const SERVICES = [
  { num: '01', title: 'Custom Software Development',  desc: 'Bespoke web apps, internal tools, and platforms built precisely for your workflows.' },
  { num: '02', title: 'Intelligent Automation',        desc: 'End-to-end systems that eliminate manual work and scale operations effortlessly.' },
  { num: '03', title: 'AI & ML Integration',           desc: 'Predictive analytics, LLM-powered assistants — AI that ships and delivers real value.' },
  { num: '04', title: 'API & Systems Integration',     desc: 'Connect your entire tech stack into one unified system, zero friction.' },
  { num: '05', title: 'Data & Analytics',              desc: 'Real-time dashboards turning raw data into decisions your team can act on.' },
  { num: '06', title: 'Technology Consulting',         desc: 'Architecture, roadmaps, and CTO-as-a-Service for ambitious teams.' },
];

export const PRODUCTS = [
  { layout: 'full', vis: 'pv1', tag: 'Flagship Product', name: 'ABC',  title: 'ABC — Digital Restaurant OS',  desc: 'QR menus, real-time ordering, kitchen displays, analytics — one intelligent system for modern restaurants.', chips: ['QR Menus','Order Management','Kitchen Display','Analytics','Multi-Branch'], link: 'Visit ABC →' },
  { layout: '',     vis: 'pv2', tag: 'Automation',        name: 'AutoFlow™', title: 'AutoFlow — No-Code Automation',    desc: 'Visual workflow builder connecting your tools and running processes automatically, 24/7.',                   chips: ['No-Code','80+ Integrations','Real-time'],                                  link: 'Learn more →'    },
  { layout: 'd1',   vis: 'pv3', tag: 'Analytics',         name: 'DataLens™', title: 'DataLens — Business Intelligence', desc: 'Turn raw data into dashboards. Connect any source, surface insights in minutes.',                          chips: ['Live Dashboards','AI Insights','Custom Reports'],                          link: 'Learn more →'    },
];

export const TEAM = [
  { initials: 'VR', name: 'S.VarunRaj',    role: 'Founder & CEO',       bio: 'Visionary technologist building scalable software and automation systems for businesses worldwide.',     bg: 'linear-gradient(145deg,#140818,#3a0c2a)', socials: ['in','𝕏'],  delay: ''   },
  { initials: 'YK', name: 'Yash Kapoor',   role: 'CTO & Lead Engineer', bio: 'Full-stack architect specializing in distributed systems, APIs, and real-time data pipelines.',          bg: 'linear-gradient(145deg,#080c18,#141c30)', socials: ['in','gh'], delay: 'd1' },
  { initials: 'PS', name: 'Pritam Shaw',   role: 'Founding Engineer',   bio: 'Bridges business goals with technical execution — ensuring every build solves the right problem.',        bg: 'linear-gradient(145deg,#0c0814,#20122a)', socials: ['in','𝕏'],  delay: 'd2' },
  { initials: 'KR', name: 'Karthik Reddy', role: 'Founding Engineer',   bio: 'Crafting intuitive interfaces for complex software products and AI-powered dashboards.',                 bg: 'linear-gradient(145deg,#180610,#3c1020)', socials: ['in','𝕏'],  delay: 'd3' },
  { initials: 'AS', name: 'Aman Sagar',    role: 'Founding Engineer',   bio: 'Crafting intuitive interfaces for complex software products and AI-powered dashboards.',                 bg: 'linear-gradient(145deg,#180610,#3c1020)', socials: ['in','𝕏'],  delay: 'd3' },
];

export const JOBS = [
  { title: 'Senior Machine Learning Engineer', location: 'Remote / Bangalore', type: 'Full-Time', dept: 'Locana Labs', delay: 'd1' },
  { title: 'Full-Stack Developer (React/Node)', location: 'Remote',            type: 'Full-Time', dept: 'Engineering', delay: 'd2' },
  { title: 'Product Designer (UI/UX)',          location: 'Remote / Bangalore', type: 'Contract',  dept: 'Design',      delay: 'd3' },
];

export const STEPS = [
  { num: '01', title: 'Discovery',    desc: 'Map business goals and define the technical approach before writing a single line of code.', delay: ''   },
  { num: '02', title: 'Architecture', desc: 'Wireframe and architect for scale — laying the right foundation from day one.',              delay: 'd1' },
  { num: '03', title: 'Build & Ship', desc: 'Agile sprints with weekly demos. We build, test, and integrate simultaneously.',             delay: 'd2' },
  { num: '04', title: 'Scale',        desc: 'Smooth deployment, team training, and ongoing support as your business grows.',              delay: 'd3' },
];

export const PLANS = [
  { tier: 'Startups & MVPs',    name: 'Starter',    desc: 'Rapid deployment for proof-of-concepts, simple web apps, and initial automations.',                           features: ['Fast-tracked MVP delivery','Core automation workflows','Essential integrations','Scalable architecture prep'],       cta: 'Book Strategy Call',  featured: false, delay: ''   },
  { tier: 'Scaling Businesses', name: 'Growth',     desc: 'Comprehensive platforms, data pipelines, and AI integration for established operations.', label: 'Recommended', features: ['Custom full-stack platforms','Advanced AI/ML integration','End-to-end process automation','Dedicated project lead'], cta: 'Schedule Deep Dive',  featured: true,  delay: 'd1' },
  { tier: 'Large Operations',   name: 'Enterprise', desc: 'Complete digital transformation, bespoke R&D, and entirely dedicated teams.',                                 features: ['Unlimited scope & complexity','Proprietary AI model training','On-premise / hybrid setups','24/7 SLA & Maintenance'], cta: 'Contact Leadership',  featured: false, delay: 'd2' },
];

export const APPS = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',  alt: 'Gmail',    delay: '1.8s' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', alt: 'LinkedIn', delay: '2.2s' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',               alt: 'WhatsApp', delay: '2.6s' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',        alt: 'Slack',    delay: '3.0s' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',        alt: 'Notion',   delay: '3.4s' },
];

export const BRANCHES = [
  { d: 'M 200 280 Q 200 150 50 55',  delay: '0s'   },
  { d: 'M 200 280 Q 200 150 120 45', delay: '0.4s' },
  { d: 'M 200 275 L 200 45',         delay: '0.8s' },
  { d: 'M 200 280 Q 200 150 280 45', delay: '1.2s' },
  { d: 'M 200 280 Q 200 150 350 55', delay: '1.6s' },
];

export const FOOTER_COLS = {
  Services: { hrefs: ['#services','#services','#services','#research'], labels: ['Custom Software','Automation','AI Integration','Locana Labs'] },
  Products: { hrefs: ['#products','#products','#products'],             labels: ['ABC','AutoFlow','DataLens']                              },
  Company:  { hrefs: ['#team','#careers','#contact'],                   labels: ['Team','Careers','Contact']                                  },
};

export const FORM_INITIAL = { firstName: '', lastName: '', email: '', company: '', service: 'Select...', details: '' };
export const CONTACT_INFO = [
  ['✉️', 'Email',    'locanatechnologies@gmail.com'],
  ['📞', 'Phone',    '+91 7829500988'],
  ['📍', 'Based In', 'Ranchi, India · Worldwide'],
];
export const MARQUEE_ITEMS = ['Custom Software','AI Automation','ABC','Systems Integration','Data Pipelines','ML Models','Consulting','Locana'];

export const VALIDATORS = {
  firstName: (v) => v.trim().length >= 2             || 'At least 2 characters.',
  lastName:  (v) => v.trim().length >= 2             || 'At least 2 characters.',
  email:     (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v.trim()) || 'Enter a valid email.',
  company:   (v) => v.trim().length >= 2             || 'At least 2 characters.',
  service:   (v) => v !== 'Select...'                || 'Please select a service.',
  details:   (v) => v.trim().length >= 20            || 'At least 20 characters.',
};

export const validateForm = (fields) => {
  const errs = {};
  Object.entries(VALIDATORS).forEach(([k, fn]) => { const r = fn(fields[k] ?? ''); if (r !== true) errs[k] = r; });
  return errs;
};
