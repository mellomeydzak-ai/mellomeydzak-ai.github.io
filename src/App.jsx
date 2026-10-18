import { useEffect, useState } from 'react';
import { profile, skills, projects } from './data.js';

/* ---------- small inline icons (no icon library needed) ---------- */
const paths = {
  code: <path d="M8 6 2 12l6 6M16 6l6 6-6 6M14 4l-4 16" />,
  wordpress: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M4.5 8.5 9 20M8 8.5h4M10 8.5l4 11 3.5-10M15.5 8.5h3" />
    </>
  ),
  design: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.9 1.2-1.8-.5-1.1.2-2.2 1.4-2.2H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10Z" />
      <circle cx="7.5" cy="11" r="1" /><circle cx="10.5" cy="7" r="1" /><circle cx="15" cy="7.5" r="1" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8Z" />
      <path d="M18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z" />
    </>
  ),
  lead: (
    <>
      <circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.5a3 3 0 0 1 0 6M18 14.2c2 .8 3 2.7 3 5.8" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  github: <path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
};

function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/* ---------- fade-in on scroll ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function SectionTitle({ eyebrow, bold, light }) {
  return (
    <div className="section-title reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2><strong>{bold}</strong> <span>{light}</span></h2>
    </div>
  );
}

/* ---------- sections ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <a href="#top" className="logo">{profile.firstName.toUpperCase()}</a>
      <nav className={open ? 'links open' : 'links'}>
        <a href="#skills" onClick={close}>Skills</a>
        <a href="#work" onClick={close}>Work</a>
        <a href="#contact" onClick={close}>Contact</a>
      </nav>
      <a href="#contact" className="btn btn-outline nav-cta">Hire Me</a>
      <button className="menu" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
    </header>
  );
}

function Socials() {
  const items = [
    profile.linkedin && { href: profile.linkedin, icon: 'linkedin', label: 'LinkedIn' },
    profile.github && { href: profile.github, icon: 'github', label: 'GitHub' },
    { href: `mailto:${profile.email}`, icon: 'mail', label: 'Email' },
  ].filter(Boolean);
  return (
    <div className="socials">
      {items.map((s) => (
        <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
          <Icon name={s.icon} size={16} />
        </a>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow reveal">Hi, I'm {profile.name}</p>
        <h1 className="reveal">
          <strong>{profile.titleBold}</strong>
          <span>{profile.titleLight}</span>
        </h1>
        <p className="lead reveal">{profile.intro}</p>
        <div className="actions reveal">
          <a href="#work" className="btn btn-primary">View My Work</a>
          {profile.cv && <a href={profile.cv} className="btn btn-outline" download>Download CV</a>}
        </div>
        <div className="reveal"><Socials /></div>
      </div>

      <div className="hero-visual reveal">
        <div className="sun" />
        <img className="portrait" src={profile.photo} alt={profile.name} />

        <div className="float-card fc-chart">
          <svg viewBox="0 0 90 34" width="90" height="34" aria-hidden="true">
            <path d="M2 28 14 14l8 10 10-16 9 12 10-14 9 9 10-12 16-2" fill="none"
              stroke="#e8364f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="float-card fc-a">
          <span className="dot dot-coral"><Icon name="code" size={13} /></span>
          <div><small>Frontend</small><b>React · JS</b></div>
        </div>

        <div className="float-card fc-b">
          <span className="dot dot-blue"><Icon name="wordpress" size={13} /></span>
          <div><small>Backend</small><b>WordPress · PHP</b></div>
        </div>

        <div className="float-card fc-c">
          <span className="dot dot-purple"><Icon name="ai" size={13} /></span>
          <div><small>Also</small><b>UI/UX · AI · Lead</b></div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle eyebrow="What I do" bold="Skills &" light="Expertise" />
      <div className="skills-grid">
        {skills.map((s, i) => (
          <article key={s.title} className="card skill-card reveal" style={{ '--d': `${i * 70}ms` }}>
            <span className={`skill-icon i-${s.icon}`}><Icon name={s.icon} /></span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ul className="tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          </article>
        ))}
        <a href="#contact" className="card skill-card cta-card reveal" style={{ '--d': `${skills.length * 70}ms` }}>
          <h3>Open to new roles & projects</h3>
          <p>Looking for someone who can design, build and lead? Let's talk.</p>
          <span className="view">Get in touch <Icon name="arrow" size={15} /></span>
        </a>
      </div>
    </section>
  );
}

function hostOf(url) {
  try { return new URL(url).host; } catch { return 'your-site.com'; }
}

function ProjectCard({ p, i }) {
  const Wrapper = p.url ? 'a' : 'div';
  const linkProps = p.url ? { href: p.url, target: '_blank', rel: 'noreferrer' } : {};
  return (
    <Wrapper className="card project-card reveal" style={{ '--d': `${i * 90}ms` }} {...linkProps}>
      <div className="mockup">
        <div className="browser-bar">
          <i /><i /><i />
          <span className="address">{hostOf(p.url)}</span>
        </div>
        {p.image ? (
          <div className="screen" style={{ backgroundImage: `url(${p.image})` }} role="img"
            aria-label={`Screenshot of ${p.title}`} />
        ) : (
          <div className="screen placeholder" aria-hidden="true">
            <div className="ph-nav" /><div className="ph-hero" />
            <div className="ph-row"><span /><span /><span /></div>
          </div>
        )}
      </div>
      <div className="project-info">
        <h3>{p.title}</h3>
        <p>{p.role}</p>
        <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        {p.url && <span className="view">View live <Icon name="arrow" size={15} /></span>}
      </div>
    </Wrapper>
  );
}

function Work() {
  return (
    <section id="work" className="section">
      <SectionTitle eyebrow="Portfolio" bold="Selected" light="Work" />
      <div className="work-grid">
        {projects.filter((p) => p.url).map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="card contact-card reveal">
        <a href={`mailto:${profile.email}`} className="contact-row">
          <span className="dot dot-blue"><Icon name="mail" size={15} /></span>
          <div><small>Email</small><b>{profile.email}</b></div>
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-row">
            <span className="dot dot-purple"><Icon name="linkedin" size={15} /></span>
            <div><small>LinkedIn</small><b>Connect with me</b></div>
          </a>
        )}
        {profile.github && (
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-row">
            <span className="dot dot-coral"><Icon name="github" size={15} /></span>
            <div><small>GitHub</small><b>{profile.github.replace('https://', '')}</b></div>
          </a>
        )}
      </div>
      <div className="contact-copy reveal">
        <h2><strong>Let's Work</strong> <span>Together</span></h2>
        <p>Have a role or a project in mind? I'd love to hear about it.</p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary">Get In Touch</a>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <div className="blobs" aria-hidden="true">
        <span className="b b1" /><span className="b b2" /><span className="b b3" /><span className="b b4" />
        <span className="d d1" /><span className="d d2" /><span className="d d3" /><span className="d d4" />
      </div>
      <div className="frame">
        <Nav />
        <main>
          <Hero />
          <Skills />
          <Work />
          <Contact />
        </main>
        <footer>© {new Date().getFullYear()} {profile.name}</footer>
      </div>
    </>
  );
}
