// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update the site. Everything you'd want to
// change (your details, skills and projects) lives here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mellomey Dzaklidzie',
  firstName: 'Mellomey',
  titleBold: 'Web Developer',
  titleLight: '& Designer',
  heroWord: 'DESIGNER', // the big faded word behind your photo
  heroTitle: 'Web, UI/UX & Brand Design',
  heroTags: ['Web design', 'UI/UX', 'Branding'], // little floating pills around the photo
  intro:
    'With a BSc and BSc Honours in Information Technology, I work across web development, UI/UX, graphic design, digital marketing and AI-enabled workflows, and lead projects from the first sketch to launch.',
  about:
    'I create thoughtful digital experiences that connect strategy, usability and visual clarity.',
  // shown in the About section
  education: [
    { degree: 'BSc Honours in Information Technology', note: 'Completed' },
    { degree: 'BSc in Information Technology', note: 'Richfield · 2021–2024' },
  ],
  email: 'mellomeydzak@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mellomey-dzak-0a8256280',
  github: 'https://github.com/mellomeydzak-ai',
  // The downloadable CV. Edit cv/cv.html, then run `npm run cv` to rebuild the PDF.
  cv: 'Mellomey-Dzaklidzie-CV.pdf',
  photo: 'me.jpg',
  cutout: 'me-cut.png', // same photo with the background removed, used in the hero arch
};

// Hero card and the two number cards in About. Only put true numbers here (these are from the CV).
export const heroStat = { value: '3+', label: 'Years designing & building' };
export const stats = [
  { value: '6', label: 'Industrial websites managed' },
  { value: '70%', label: 'Up to 70% higher click-through on paid ads' },
];

// The "My Journey" tree: work experience only, newest first.
// row: jobs with the same row number sit side by side (they overlapped in time).
// icon: 'code' | 'design' | 'chart' | 'wordpress' | 'lead'
export const experience = [
  {
    row: 1,
    role: 'WordPress Developer · Digital Project Manager · UI/UX Designer',
    company: 'Bezaleel Media',
    dates: 'Aug 2025 – Present',
    icon: 'code',
    tags: ['Current'],
    summary: 'Manage six industrial websites and lead digital projects from requirements to delivery, using AI agents with human QA.',
  },
  {
    row: 2,
    role: 'Graphic Designer & Paid Ads Specialist',
    company: 'Lonja Beauty Studio',
    dates: 'Jan 2025 – May 2025',
    icon: 'chart',
    tags: ['Meta & TikTok', '+70% CTR'],
    summary: 'Social and paid-campaign creative that reached up to 70% higher click-through rates.',
  },
  {
    row: 2,
    role: 'WordPress Developer',
    company: 'Kayailees Mobile Florist',
    dates: 'Feb 2025',
    icon: 'wordpress',
    tags: ['Freelance'],
    summary: 'Mobile-first WordPress site with product listings and booking.',
  },
  {
    row: 3,
    role: 'Graphic Designer · WordPress Developer · Business Analyst',
    company: 'Paul-R Trade and Technologies',
    dates: 'Nov 2024 – Mar 2025',
    icon: 'lead',
    tags: ['WooCommerce', 'E-commerce'],
    summary: 'Launched a complete WooCommerce store with secure payments, brand assets and SEO.',
  },
  {
    row: 4,
    role: 'Graphic Designer',
    company: 'Jona & Leo Designs',
    dates: 'Jul 2023 – Oct 2024',
    icon: 'design',
    tags: ['Where it started'],
    summary: 'Campaign graphics, layouts and UI assets across multiple brands.',
  },
];

// Skills / services cards. icon: 'code' | 'wordpress' | 'design' | 'ai' | 'lead' | 'chart' | 'flow'
export const skills = [
  {
    icon: 'code',
    title: 'Frontend Development',
    text: 'Responsive, accessible interfaces that load fast and feel smooth on any screen.',
    tags: ['React.js', 'Preact', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: 'wordpress',
    title: 'WordPress & E-commerce',
    text: 'Custom themes, plugins and WooCommerce stores, with performance and security looked after.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Supabase'],
  },
  {
    icon: 'design',
    title: 'UI/UX & Graphic Design',
    text: 'User-centred layouts, brand identities and campaign visuals, from wireframe to final pixel.',
    tags: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'Canva'],
  },
  {
    icon: 'ai',
    title: 'AI-Assisted Development',
    text: 'AI agents as working systems for building, research and content, with human review before anything ships.',
    tags: ['Claude Code', 'Claude', 'ChatGPT', 'Gemini', 'Prompt design'],
  },
  {
    icon: 'chart',
    title: 'Digital Marketing & SEO',
    text: 'Paid social campaigns and SEO structure that turn visitors into leads.',
    tags: ['Meta Ads', 'TikTok Ads', 'SEO', 'Campaign reporting'],
  },
  {
    icon: 'flow',
    title: 'Automation & Workflows',
    text: 'Reusable systems that save teams time, from prompt libraries to no-code automations.',
    tags: ['n8n', 'Make', 'Zapier', 'Airtable', 'Notion', 'GitHub'],
  },
  {
    icon: 'lead',
    title: 'Project Management & Analysis',
    text: 'Requirements, planning, QA and stakeholder reviews that keep teams and clients aligned.',
    tags: ['Project Management', 'Business Analysis', 'QA'],
  },
];

// mobile: optional phone screenshot (shows the project in the UI/UX section too)
// image: a screenshot in /public/projects (run `npm run shot -- <url> <name>`),
// or leave '' to show a styled placeholder mockup.
// Projects with an empty url are hidden on the site until you fill them in.
export const projects = [
  {
    title: 'Business Flex',
    url: 'https://business-flex.co.za/',
    role: 'Design and technology studio site, custom-built with an AI chat assistant',
    tags: ['JavaScript', 'Vite', 'UI/UX', 'AI'],
    image: 'projects/businessflex.jpg',
    mobile: 'projects/businessflex-m.jpg', // phone screenshot, shown in the UI/UX section
  },
  {
    title: 'Bezaleel Media',
    url: 'https://bezaleel.co.za/',
    role: 'Digital marketing agency site, branding, design and WordPress build',
    tags: ['WordPress', 'Elementor', 'Branding'],
    image: 'projects/bezaleel.jpg',
    mobile: 'projects/bezaleel-m.jpg', // phone screenshot, shown in the UI/UX section
  },
  {
    title: 'Goscor Cleaning Equipment',
    url: 'https://goscorcleaning.co.za/',
    role: 'Industrial equipment supplier site with product catalogue and quote requests',
    tags: ['WordPress', 'WooCommerce', 'PHP'],
    image: 'projects/goscor.jpg',
    mobile: 'projects/goscor-m.jpg', // phone screenshot, shown in the UI/UX section
  },
  {
    title: 'Casino Bonus Scraper',
    url: 'https://mellomeydzak-ai.github.io/casino-bonus-scraper/',
    code: 'https://github.com/mellomeydzak-ai/casino-bonus-scraper',
    role: 'Node.js scraper + AI extraction + mobile-friendly results page',
    tags: ['Node.js', 'LLM', 'GitHub Pages'],
    image: 'projects/casino.jpg',
  },
];

// Logos you designed. Put the image files in /public/logos and list them here.
// bg: the tile colour behind the logo (use a dark one for white logos).
// The "Brand Identity" section stays hidden until at least one logo is listed.
// poster: true makes a flyer/poster tile that fills a bigger square.
export const logos = [
  { name: 'Bezaleel Media · Photography studio flyer', file: 'logos/bezaleel-flyer.jpg', poster: true },
  { name: 'Queen', file: 'logos/queen.jpg', bg: '#ffffff' },
  { name: 'Fulcrum', file: 'logos/fulcrum.jpg', bg: '#ffffff' },
  { name: 'PR Trade & Technologies', file: 'logos/pr-trade.jpg', bg: '#000000' },
  { name: 'Devtech Designs', file: 'logos/devtech.jpg', bg: '#ffffff' },
  { name: 'Bell\'s Group', file: 'logos/bells-group.jpg', bg: '#ffffff' },
  { name: 'Kayailees Event Decor', file: 'logos/kayailees.jpg', bg: '#fff9fb' },
  { name: 'Unice Fresh Juice', file: 'logos/unice.jpg', bg: '#ffffff' },
  { name: 'Jona & Leo Designs', file: 'logos/jona-leo.jpg', bg: '#ffffff' },
  { name: 'MGK Construction', file: 'logos/mgk.jpg', bg: '#ffffff' },
  { name: 'NIR', file: 'logos/nir.jpg', bg: '#ffffff' },
  { name: 'Aero Plant', file: 'logos/aero-plant.jpg', bg: '#ffffff' },
  { name: 'Oracle Fish', file: 'logos/oracle-fish.jpg', bg: '#ffffff' },
  { name: 'Deer', file: 'logos/deer.jpg', bg: '#ffffff' },
  { name: 'Bells Real Estate Agency', file: 'logos/bells-real-estate.jpg', bg: '#ffffff' },
];
