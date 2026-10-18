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
    'I design and build clean, fast websites, from WordPress builds to React apps, and lead projects from the first sketch to launch.',
  about:
    'I create thoughtful digital experiences that connect strategy, usability and visual clarity.',
  email: 'mellomeydzak@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mellomey-dzak-0a8256280',
  github: 'https://github.com/mellomeydzak-ai',
  cv: '', // optional: put cv.pdf in /public and set this to 'cv.pdf'
  photo: 'me.jpg',
  cutout: 'me-cut.png', // same photo with the background removed, used in the hero arch
};

// Numbers in the hero and About cards. Only put true numbers here.
export const stats = [
  { value: '4+', label: 'Live websites designed & built' },
  { value: '5', label: 'Disciplines, from brand to code' },
];

// icon: one of 'code' | 'wordpress' | 'design' | 'ai' | 'lead'
export const skills = [
  {
    icon: 'code',
    title: 'Frontend Development',
    text: 'Responsive, accessible interfaces that load fast and feel smooth on any screen.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    icon: 'wordpress',
    title: 'WordPress & PHP',
    text: 'Custom themes, plugins and easy-to-edit sites that clients can run themselves.',
    tags: ['WordPress', 'PHP', 'Custom Themes'],
  },
  {
    icon: 'design',
    title: 'UI/UX & Graphic Design',
    text: 'User-centred layouts, design systems and brand visuals, from wireframe to final pixel.',
    tags: ['UI/UX Design', 'Graphic Design'],
  },
  {
    icon: 'ai',
    title: 'AI-Assisted Development & Prompt Engineering',
    text: 'Using AI tools like Claude Code to build faster, while checking every output in code.',
    tags: ['Prompt Engineering', 'Claude Code', 'LLM Integration'],
  },
  {
    icon: 'lead',
    title: 'Project Leadership & Management',
    text: 'Planning, timelines and clear communication that keep teams and clients aligned.',
    tags: ['Project Lead', 'Project Management'],
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
export const logos = [
  // { name: 'Client name', file: 'logos/client.png', bg: '#ffffff' },
];
