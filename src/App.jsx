import { useEffect, useState } from 'react';
import { profile, heroStat, stats, experience, skills, projects, logos } from './data.js';

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
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  flow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1.5" /><rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h5a3 3 0 0 1 3 3v6" />
    </>
  ),
  download: <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7Z" />,
  cap: (
    <>
      <path d="M2 9.5 12 5l10 4.5L12 14Z" />
      <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5M22 9.5V15" />
    </>
  ),
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

/* dark pill button with a round arrow, like the reference */
function PillButton({ href, children, light, ...rest }) {
  return (
    <a href={href} className={light ? 'pill pill-light' : 'pill'} {...rest}>
      <span>{children}</span>
      <i><Icon name="arrow" size={15} /></i>
    </a>
  );
}

function Chip({ children }) {
  return <p className="chip reveal"><span />{children}</p>;
}

/* ---------- sections ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <a href="#top" className="logo">
        <span className="logo-mark">{profile.firstName[0]}</span>{profile.firstName}
      </a>
      <nav className={open ? 'links open' : 'links'}>
        <a href="#about" onClick={close}>About</a>
        <a href="#journey" onClick={close}>Journey</a>
        <a href="#work" onClick={close}>Work</a>
        <a href="#uiux" onClick={close}>UI/UX</a>
        <a href="#services" onClick={close}>Services</a>
      </nav>
      <PillButton href="#contact">Get In Touch</PillButton>
      <button className="menu" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
    </header>
  );
}

function Hero() {
  const [a, b, c] = profile.heroTags;
  return (
    <section className="hero" id="top">
      <p className="hero-word" aria-hidden="true">{profile.heroWord}</p>

      <div className="arch-wrap">
        <div className="arch">
          <img src={profile.cutout || profile.photo} alt={profile.name} />
        </div>
        {a && <span className="tag-pill tp-a">{a}</span>}
        {b && <span className="tag-pill tp-b">{b}</span>}
        {c && <span className="tag-pill tp-c">{c}</span>}
      </div>

      <div className="hero-bottom">
        <div className="hero-copy">
          <p className="hello reveal">Hey, I'm {profile.firstName}.</p>
          <h1 className="reveal">{profile.heroTitle}</h1>
        </div>
        {heroStat && (
          <div className="stat-card reveal">
            <small>{heroStat.label}</small>
            <b>{heroStat.value}</b>
          </div>
        )}
      </div>
    </section>
  );
}

function About() {
  const tools = skills.map((s) => s.tags[0]); // one headline tool per skill
  return (
    <section id="about" className="section about">
      <div className="about-head">
        <Chip>About Me</Chip>
        <div>
          <h2 className="reveal">{profile.about}</h2>
          <p className="lead reveal">{profile.intro}</p>
          <div className="reveal actions">
            <PillButton href="#contact">Get In Touch</PillButton>
            {profile.cv && <a href={profile.cv} className="text-link" download>Download my CV</a>}
          </div>
        </div>
      </div>

      <div className="bento">
        <div className="bento-photo reveal">
          <img src={profile.photo} alt="" />
        </div>
        {stats.map((s, i) => (
          <div key={s.label} className="tile tile-stat reveal" style={{ '--d': `${i * 80}ms` }}>
            <small>{s.label}</small><b>{s.value}</b>
          </div>
        ))}
        {profile.education?.length > 0 && (
          <div className="tile tile-edu reveal" style={{ '--d': '120ms' }}>
            <span className="edu-icon"><Icon name="cap" size={22} /></span>
            <div>
              <small>Education</small>
              <ul>
                {profile.education.map((e) => (
                  <li key={e.degree}><b>{e.degree}</b>{e.note && <em>{e.note}</em>}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="tile tile-links reveal" style={{ '--d': '160ms' }}>
          <small>Find me online</small>
          <div className="socials">
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>}
            {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a>}
            <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={18} /></a>
          </div>
        </div>
        <div className="tile tile-tools reveal" style={{ '--d': '240ms' }}>
          <h3>Strategic thinking, clean execution</h3>
          <ul className="tags">{tools.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function hostOf(url) {
  try { return new URL(url).host; } catch { return 'your-site.com'; }
}

function Browser({ p }) {
  return (
    <div className="browser">
      <div className="browser-bar"><i /><i /><i /><span>{hostOf(p.url)}</span></div>
      <div className="screen" style={{ backgroundImage: `url(${p.image})` }} role="img"
        aria-label={`Screenshot of ${p.title}`} />
    </div>
  );
}

function Phone({ src, label }) {
  return (
    <div className="phone">
      <div className="phone-screen" style={{ backgroundImage: `url(${src})` }} role="img" aria-label={label} />
    </div>
  );
}

/* ---------- journey tree (work experience only) ---------- */
function Connector({ from, to }) {
  // centres of each node as a % of the row width
  const xs = (n) => Array.from({ length: n }, (_, i) => ((i + 0.5) / n) * 100);
  const top = xs(from), bottom = xs(to);
  const links = from === 1 || to === 1
    ? top.flatMap((a) => bottom.map((b) => [a, b]))
    : top.map((a, i) => [a, bottom[Math.min(i, to - 1)]]);
  return (
    <div className="connector" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        {links.map(([a, b]) => (
          <path key={`${a}-${b}`} d={`M${a} 0 C${a} 55, ${b} 45, ${b} 100`} vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      {top.map((x) => <span key={`t${x}`} className="knot" style={{ left: `${x}%`, top: 0 }} />)}
      {bottom.map((x) => <span key={`b${x}`} className="knot" style={{ left: `${x}%`, top: '100%' }} />)}
    </div>
  );
}

function JobNode({ job, current }) {
  return (
    <article className={current ? 'node node-current' : 'node'}>
      <div className="node-head">
        <span className="node-icon"><Icon name={job.icon} size={16} /></span>
        <h3>{job.role}</h3>
        <i className="live" />
      </div>
      <p className="node-date">{job.dates}</p>
      <p className="node-text">{job.summary}</p>
      <div className="node-chips">
        <span className="chip-co"><Icon name="code" size={12} />{job.company}</span>
        {job.tags.map((t, i) => <span key={t} className={`chip-tag t${i % 3}`}><b>≡</b>{t}</span>)}
      </div>
    </article>
  );
}

function Journey() {
  if (!experience.length) return null;
  const rows = [];
  experience.forEach((job) => {
    const last = rows[rows.length - 1];
    if (last && last.row === job.row) last.jobs.push(job);
    else rows.push({ row: job.row, jobs: [job] });
  });
  return (
    <section id="journey" className="section">
      <div className="center-head">
        <Chip>My Journey</Chip>
        <h2 className="reveal">Where I've Worked</h2>
      </div>
      <div className="journey reveal">
        <div className="journey-top">
          <p className="journey-brand">my<b>{'{journey}'}</b></p>
          {profile.cv && (
            <a href={profile.cv} download className="journey-cv"><Icon name="download" size={15} />Download CV</a>
          )}
        </div>
        <div className="journey-pills">
          <span className="jp"><Icon name="lead" size={15} />Work experience</span>
          <span className="jp jp-live"><Icon name="bolt" size={14} />Open to work</span>
        </div>
        <div className="tree">
          {rows.map((r, i) => (
            <div key={r.row} className="tree-step">
              {i > 0 && <Connector from={rows[i - 1].jobs.length} to={r.jobs.length} />}
              <div className={`tree-row cols-${r.jobs.length}`}>
                {r.jobs.map((job) => (
                  <JobNode key={job.company} job={job} current={job.tags.includes('Current')} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="journey-note">Full details, tools and education are in my CV.</p>
      </div>
    </section>
  );
}

function Work() {
  const list = projects.filter((p) => p.url);
  return (
    <section id="work" className="section">
      <div className="center-head">
        <Chip>My Portfolio</Chip>
        <h2 className="reveal">Websites I've Designed<br />&amp; Built</h2>
      </div>
      <div className="work-list">
        {list.map((p, i) => (
          <article key={p.title} className="work-card reveal">
            <div className="work-info">
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.role}</p>
              <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              <div className="work-actions">
                <PillButton href={p.url} target="_blank" rel="noreferrer">Visit Site</PillButton>
                {p.code && <a className="text-link" href={p.code} target="_blank" rel="noreferrer">View code</a>}
              </div>
            </div>
            <a className="work-visual" href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
              {p.image && <Browser p={p} />}
              {p.mobile && <Phone src={p.mobile} label={`${p.title} on mobile`} />}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function UIUX() {
  const phones = projects.filter((p) => p.mobile);
  if (!phones.length) return null;
  const steps = ['Discover', 'Wireframe', 'Visual design', 'Build', 'Launch'];
  return (
    <section id="uiux" className="section uiux reveal">
      <div className="uiux-copy">
        <Chip>UI/UX Design</Chip>
        <h2>Interfaces that work on every screen</h2>
        <p>Every site I make is planned around the user first: clear layouts, readable type and calls to action that are easy to find, then tested on mobile and desktop.</p>
        <ol className="steps">
          {steps.map((s, i) => <li key={s}><b>{String(i + 1).padStart(2, '0')}</b>{s}</li>)}
        </ol>
      </div>
      <div className="phones">
        {phones.slice(0, 3).map((p) => (
          <a key={p.title} href={p.url} target="_blank" rel="noreferrer" className="phone-link">
            <Phone src={p.mobile} label={`${p.title} mobile design`} />
            <span>{p.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Logos() {
  if (!logos.length) return null;
  return (
    <section id="brands" className="section">
      <div className="center-head">
        <Chip>Brand Identity &amp; Graphic Design</Chip>
        <h2 className="reveal">Logos I've Designed</h2>
      </div>
      <div className="logo-grid">
        {logos.map((l, i) => (
          <figure key={l.file} className={l.poster ? 'logo-tile poster reveal' : 'logo-tile reveal'}
            style={{ '--d': `${(i % 4) * 60}ms`, background: l.bg || '#fff' }}>
            <img src={l.file} alt={`${l.name} logo`} loading="lazy" />
            <figcaption>{l.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services">
      <div className="center-head">
        <Chip>Core Services</Chip>
        <h2 className="reveal">Design Solutions Built<br />For Growth</h2>
      </div>
      <div className="service-grid">
        {skills.map((s, i) => (
          <article key={s.title} className={`service s-${i} reveal`} style={{ '--d': `${i * 70}ms` }}>
            <span className="service-icon"><Icon name={s.icon} /></span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ul className="tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          </article>
        ))}
        <article className="service service-cta reveal" style={{ '--d': `${skills.length * 70}ms` }}>
          <small>Open to new roles &amp; projects</small>
          <h3>Let's Create Impact</h3>
          <p>Looking for someone who can design, build and lead? Let's talk.</p>
          <PillButton href="#contact" light>Start a Project</PillButton>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="reveal">Let's work<br />together.</h2>
      <a href={`mailto:${profile.email}`} className="contact-email reveal">{profile.email}</a>
      <div className="contact-links reveal">
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={16} /> LinkedIn</a>}
        {profile.github && <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={16} /> GitHub</a>}
        {profile.cv && <a href={profile.cv} download><Icon name="download" size={16} /> Download CV</a>}
      </div>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </section>
  );
}

export default function App() {
  useReveal();
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Work />
        <UIUX />
        <Logos />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
