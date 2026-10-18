// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update the site. Everything you'd want to
// change (your details, skills and projects) lives here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mellomey Dzaklidzie',
  firstName: 'Mellomey',
  titleBold: 'Web Developer',
  titleLight: '& Designer',
  intro:
    'I design and build clean, fast websites, from WordPress builds to React apps, and lead projects from the first sketch to launch.',
  email: 'mellomeydzak@gmail.com',
  linkedin: '', // TODO: paste your LinkedIn URL here
  github: 'https://github.com/mellomeydzak-ai',
  cv: '', // optional: put cv.pdf in /public and set this to 'cv.pdf'
  photo: 'me.jpg',
};

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

// image: a screenshot in /public/projects (run `npm run shot -- <url> <name>`),
// or leave '' to show a styled placeholder mockup.
// Projects with an empty url are hidden on the site until you fill them in.
export const projects = [
  {
    title: 'Casino Bonus Scraper',
    url: 'https://mellomeydzak-ai.github.io/casino-bonus-scraper/',
    code: 'https://github.com/mellomeydzak-ai/casino-bonus-scraper',
    role: 'Node.js scraper + AI extraction + mobile-friendly results page',
    tags: ['Node.js', 'LLM', 'GitHub Pages'],
    image: 'projects/casino.jpg',
  },
  {
    title: 'Your Website #2', // TODO: replace with a real project
    url: '',
    role: 'Designed and built in WordPress',
    tags: ['WordPress', 'PHP', 'UI/UX'],
    image: '',
  },
  {
    title: 'Your Website #3', // TODO: replace with a real project
    url: '',
    role: 'React web app, design and development',
    tags: ['React', 'JavaScript', 'CSS'],
    image: '',
  },
];
