import { useEffect, useRef, useState } from 'react';
import { profile, projects, publications, education, experience, skillGroups, achievements, type Project } from './data';

type IconName = 'arrow' | 'download' | 'mail' | 'pin' | 'github' | 'scholar' | 'linkedin' | 'orcid' | 'link' | 'copy' | 'check' | 'close' | 'menu' | 'camera' | 'award' | 'file' | 'plus';
function Icon({ name, size = 17, className = '' }: { name: IconName; size?: number; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M5 19 19 5M5 5h14v14" /></>, download: <><path d="M12 3v12m-5-5 5 5 5-5M5 15v5h14v-5" /></>, mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>, pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.3-2-1-2 4-.5 7-2 7-6 0-2-1-3-2-4 0-1 0-3-.5-3-2 0-3 1-3 1a12 12 0 0 0-7 0S6.5 3 5 3c-.5 1-.5 3 0 4-1 1-2 2-2 4 0 4 3 5 7 5-.7.5-1 1-1 2v4" /></>, scholar: <><path d="m2 9 10-5 10 5-10 5L2 9Zm4 3v5c4 3 8 3 12 0v-5m4-3v8" /></>, linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-11v.1M11 17v-7m0 3c0-4 6-4 6 0v4" /></>, orcid: <><circle cx="12" cy="12" r="9" /><path d="M8 10v6m0-9v.1m4 3v6h2c4 0 4-6 0-6h-2Z" /></>, link: <><path d="m10 13 4-4m-6 7-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m0 2 1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" transform="translate(2 1)" /></>, copy: <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V3H3v13h5" /></>, check: <path d="m5 12 4 4L19 6" />, close: <path d="m6 6 12 12M6 18 18 6" />, menu: <path d="M4 6h16M4 12h16M4 18h16" />, camera: <><path d="M8 5 6 8H3v12h18V8h-3l-2-3H8Z" /><circle cx="12" cy="13" r="3" /></>, award: <><circle cx="12" cy="9" r="6" /><path d="m8 14-2 8 6-3 6 3-2-8" /></>, file: <><path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h6" /></>, plus: <path d="M12 5v14M5 12h14" />,
  };
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
const sections = [{ id: 'about', label: 'About' }, { id: 'research', label: 'Research' }, { id: 'publications', label: 'Publications' }, { id: 'education', label: 'Education' }, { id: 'experience', label: 'Experience' }, { id: 'skills', label: 'Skills' }, { id: 'achievements', label: 'Achievements' }];
type Modal = { type: 'project'; project: Project } | { type: 'publication' | 'bibtex' | 'doi'; publication: typeof publications[number] } | null;

function PointCloud({ large = false }: { large?: boolean }) {
  const points = Array.from({ length: 1100 }, (_, i) => {
    const r = (Math.sin(i * 127.1 + 311.7) * 43758.5453) % 1;
    const x = Math.abs(r) * 400;
    const z = Math.abs(Math.sin(i * 53.13) * 31.7 % 1);
    const building = x > 65 && x < 145 || x > 245 && x < 345;
    const y = building ? 37 + z * 135 : 118 + z * 75;
    const perspective = (x - 200) * (y / 230);
    return <circle key={i} cx={200 + perspective} cy={y} r={i % 9 === 0 ? 1.2 : .7} fill={y > 147 ? '#d39858' : x > 200 ? '#80bca0' : '#7c9fa6'} opacity={.35 + z * .6} />;
  });
  return <svg className={`point-cloud ${large ? 'large' : ''}`} viewBox="0 0 400 220" role="img" aria-label="Illustrative procedural graphic representing simulation data"><defs><radialGradient id="cloud-bg"><stop stopColor="#34433e" /><stop offset="1" stopColor="#172521" /></radialGradient></defs><rect width="400" height="220" fill="url(#cloud-bg)" /><g stroke="#7d9387" strokeWidth=".4" opacity=".14">{Array.from({ length: 12 }, (_, i) => <path key={i} d={`M${i * 65 - 150} 220 200 85 M0 ${115 + i * 13}H400`} />)}</g>{points}<path d="M195 203c-6-28 7-28 2-50s-12-20-3-45" fill="none" stroke="#e8bc6d" strokeWidth="1.3" /><circle cx="194" cy="108" r="3" fill="#f1c46d" /><text x="17" y="22" fill="#c4d4ca" fontSize="8" fontFamily="monospace" letterSpacing="1.4">SIMULATION / CFD DATA</text><g transform="translate(360 185)" strokeWidth="1.5"><path d="M0 12V-7" stroke="#8cafb9" /><path d="M0 12h18" stroke="#d8a38c" /><path d="M0 12-10 20" stroke="#8fbc8f" /></g></svg>;
}
function ProjectMedia({ project }: { project: Project }) {
  return project.video ? <video src={project.video} poster={project.image} autoPlay loop muted playsInline controls aria-label={`${project.title} demonstration`} /> : project.image ? <img src={project.image} alt={project.id === 1 ? 'Prototype gripper mechanism in a robotics lab' : 'Modular field robot prototype outdoors'} loading="lazy" /> : <PointCloud />;
}
function SectionHeading({ number, title, children }: { number: string; title: string; children?: React.ReactNode }) {
  return <div className="section-heading"><div className="section-title"><span className="section-number">{number}</span><h2>{title}</h2></div>{children}</div>;
}

export default function App() {
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All projects');
  const [showAllPublications, setShowAllPublications] = useState(false);
  const [modal, setModal] = useState<Modal>(null);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState('');
  const [portrait, setPortrait] = useState(() => { try { return localStorage.getItem('portfolio-photo') || profile.image; } catch { return profile.image; } });
  const photoInput = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Element && !event.target.closest('.site-header')) setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 681px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-15% 0px -65% 0px' });
    sections.forEach(section => { const element = document.getElementById(section.id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (modal) { dialogRef.current?.showModal(); document.body.style.overflow = 'hidden'; } else { dialogRef.current?.close(); document.body.style.overflow = ''; }
    setCopied(false);
    return () => { document.body.style.overflow = ''; };
  }, [modal]);
  useEffect(() => { if (toast) { const timer = setTimeout(() => setToast(''), 5000); return () => clearTimeout(timer); } }, [toast]);
  async function copyCitation(text: string) {
    try { await navigator.clipboard.writeText(text); setCopied(true); } catch { setToast('Copy unavailable. Please select and copy the citation text.'); }
  }
  function uploadPhoto(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) { setToast('Please choose a JPG, PNG, or WebP image.'); return; }
    if (file.size > 3 * 1024 * 1024) { setToast('Please choose an image smaller than 3 MB.'); return; }
    const reader = new FileReader();
    reader.onload = () => { const result = String(reader.result); setPortrait(result); try { localStorage.setItem('portfolio-photo', result); } catch { /* Preview still works without storage. */ } setToast('Photo preview updated on this browser. Set profile.image in src/data.ts to publish it.'); };
    reader.readAsDataURL(file);
  }
  return <>
    <a href="#about" className="skip-link">Skip to content</a>
    <header className="site-header"><div className="header-inner"><a className="wordmark" href="#about" aria-label="Md. Abid Chowdhury home">ac<span>.</span></a><nav id="main-navigation" className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Main navigation">{sections.map(section => <a key={section.id} href={`#${section.id}`} className={active === section.id ? 'active' : ''} onClick={() => { setActive(section.id); setMenuOpen(false); }}>{section.label}</a>)}</nav><a className="header-contact" href={`mailto:${profile.email}`}>Let’s talk <Icon name="arrow" size={14} /></a><button ref={menuButtonRef} aria-controls="main-navigation" className="menu-toggle icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}><Icon name={menuOpen ? 'close' : 'menu'} size={22} /></button></div></header>
    <div className="page-layout">
      <aside className="profile"><div className="profile-inner"><div className="portrait-wrap"><img className="portrait" src={portrait} alt={`Portrait of ${profile.name}`} /><button className="photo-edit" onClick={() => photoInput.current?.click()} aria-label="Preview your own profile photo" title="Preview your own photo"><Icon name="camera" size={16} /></button><input ref={photoInput} type="file" accept="image/jpeg,image/png,image/webp" onChange={uploadPhoto} hidden /></div><div className="profile-info"><h2>{profile.name}<span>.</span></h2><p className="profile-role">{profile.role}</p><p className="profile-institution">{profile.institution}</p><p className="location"><Icon name="pin" size={14} />{profile.location}</p><div className="profile-divider" /><div className="social-links">{Object.entries(profile.links).map(([name, url]) => <a href={url} key={name} target="_blank" rel="noreferrer"><Icon name={({ 'Google Scholar': 'scholar', GitHub: 'github', LinkedIn: 'linkedin', ORCID: 'orcid' } as Record<string, IconName>)[name]} /><span>{name}</span><Icon name="arrow" size={12} className="social-arrow" /></a>)}<a href={`mailto:${profile.email}`}><Icon name="mail" /><span>Email me</span><Icon name="arrow" size={12} className="social-arrow" /></a></div><a href="/CV.pdf" download className="cv-button"><Icon name="download" size={16} />Download CV <span>↓</span></a><div className="availability"><span className="status-dot" /><span>Open to PhD opportunities</span></div></div></div></aside>
      <main>
        <section id="about" className="intro"><div className="eyebrow"><span /> A LITTLE ABOUT ME</div><h1>Building robots that{' '}<br />understand and interact{' '}<br />with the <span className="serif-word">world.</span></h1><div className="intro-copy"><p>I’m Abid, a robotics and mechatronics engineer working at the intersection of <strong>bio-inspired robot design, mechanism development, and field-tested prototypes.</strong></p><p>My research focuses on translating biological locomotion and perching strategies into working hardware — from a bat-inspired UAV perching mechanism to modular legged and swimming robots. I’m an undergraduate researcher at the University of Dhaka, working across the Cortex AI Lab and MAIM Lab, and I’m looking to pursue a PhD in robotics.</p></div><div className="interest-tags"><span>Bio-Inspired Robotics</span><span>UAV Systems</span><span>Mechatronics</span></div><a href={`mailto:${profile.email}?subject=Research%20opportunity`} className="intro-contact">Interested in collaborating? <span>Let’s connect <Icon name="arrow" size={13} /></span></a></section>
        <section id="research" className="content-section research-section"><SectionHeading number="01" title="Selected research"><span className="heading-note">Ideas, experiments, and things that move.</span></SectionHeading><div className="research-filters" aria-label="Filter research projects">{['All projects', 'Aerial Robotics', 'Field Robotics', 'Underwater Robotics'].map(item => <button key={item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}{item === 'All projects' && <span>03</span>}</button>)}</div><div className="project-grid">{projects.filter(project => filter === 'All projects' || project.category === filter).map(project => <article className="project-card" key={project.id}><div className="project-media"><ProjectMedia project={project} /><span className="media-label"><span />{project.id === 3 ? 'UNDERWATER' : project.id === 2 ? 'FIELD ROBOTICS' : 'AERIAL ROBOTICS'}</span><button className="media-open" aria-label={`View ${project.title}`} onClick={() => setModal({ type: 'project', project })}><Icon name="arrow" size={15} /></button></div><div className="project-content"><span className="project-year">{project.year}</span><button className="project-title" onClick={() => setModal({ type: 'project', project })}><h3>{project.title}</h3><Icon name="arrow" size={14} /></button><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><p className="research-footnote"><span /> A selection of recent work. Always exploring what’s next.</p></section>
        <section id="publications" className="content-section"><SectionHeading number="02" title="Publications"><a href={profile.links['Google Scholar']} target="_blank" rel="noreferrer" className="text-link">Google Scholar <Icon name="arrow" size={13} /></a></SectionHeading><div className="publications-list">{publications.slice(0, showAllPublications ? publications.length : 2).map(pub => <article className="publication" key={pub.id}><div className="pub-year">{pub.year}<span>{pub.type}</span></div><div className="pub-content"><button className="publication-title" onClick={() => setModal({ type: 'publication', publication: pub })}>{pub.title}<Icon name="arrow" size={14} /></button><p className="authors">{pub.authors.split('Abid Chowdhury').map((part, index) => <span key={index}>{index > 0 && <strong>Abid Chowdhury</strong>}{part}</span>)}</p><p className="venue">{pub.venue}</p><div className="publication-actions"><button onClick={() => setModal({ type: 'publication', publication: pub })}><Icon name="file" size={13} /> Paper</button>{pub.doi && <button onClick={() => setModal({ type: 'doi', publication: pub })}><Icon name="link" size={13} /> DOI</button>}<button onClick={() => setModal({ type: 'bibtex', publication: pub })}><span className="code-icon">{'{ }'}</span> BibTeX</button></div></div></article>)}</div>{publications.length > 2 && <button className="text-link more-publications" onClick={() => setShowAllPublications(!showAllPublications)}>{showAllPublications ? 'Show selected publications' : `View all ${publications.length} publications`}<span>{showAllPublications ? '−' : '+'}</span></button>}</section>
        <section id="education" className="content-section"><SectionHeading number="03" title="Education" /><div className="timeline">{education.map(item => <article className="timeline-item" key={item.title}><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.title}</h3><p className="organization">{item.org}</p><p className="timeline-meta">{item.detail}</p><p className="timeline-description">{item.description}</p><p className="timeline-note">{item.note}</p></div></article>)}</div></section>
        <section id="experience" className="content-section"><SectionHeading number="04" title="Work experience" /><div className="timeline">{experience.map(item => <article className="timeline-item" key={item.title}><div className="timeline-date">{item.date}{item.date.includes('Present') && <span className="current-label">Current</span>}</div><div className="timeline-content"><h3>{item.title}</h3><p className="organization">{item.org}</p><p className="timeline-meta">{item.detail}</p><p className="timeline-description">{item.description}</p><p className="timeline-note">{item.note}</p></div></article>)}</div></section>
        <section id="skills" className="content-section"><SectionHeading number="05" title="Technical toolkit"><span className="heading-note">Tools I think and build with.</span></SectionHeading><div className="skills-grid">{skillGroups.map(group => <div className="skill-group" key={group.name}><h3>{group.name}</h3><div>{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>
        <section id="achievements" className="content-section"><SectionHeading number="06" title="Selected achievements" /><div className="achievements-list">{achievements.map(item => <article key={item.title}><div className="award-icon"><Icon name="award" size={20} /></div><div><h3>{item.title}</h3><p>{item.description}</p></div><span>{item.year}</span></article>)}</div></section>
        <section className="contact-panel"><div className="eyebrow">GOOD RESEARCH STARTS WITH A CONVERSATION</div><h2>Let’s build something <span className="serif-word">meaningful.</span></h2><p>I’m looking for PhD opportunities and research collaborations in robotics.<br />If our interests overlap, I’d love to hear from you.</p><a href={`mailto:${profile.email}`}>Get in touch <Icon name="arrow" size={16} /></a></section>
        <footer><div><span>© {new Date().getFullYear()} Md. Abid Chowdhury</span><span>Built with curiosity. And a little code.</span></div><div className="footer-bottom"><span>Portfolio built with React + Vite.</span><a href="#about">Back to top ↑</a></div></footer>
      </main>
    </div>
    <dialog ref={dialogRef} onCancel={() => setModal(null)} onClick={event => { if (event.target === dialogRef.current) setModal(null); }} aria-labelledby="dialog-title"><div className="dialog-content"><button className="dialog-close icon-button" onClick={() => setModal(null)} aria-label="Close dialog"><Icon name="close" size={21} /></button>{modal?.type === 'project' ? <><div className="dialog-project-media"><ProjectMedia project={modal.project} /></div><div className="eyebrow">{modal.project.category} · {modal.project.year}</div><h2 id="dialog-title">{modal.project.title}</h2><div className="dialog-tags">{modal.project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{modal.project.detail.split('\n\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}<a className="primary-button" href={modal.project.github} target="_blank" rel="noreferrer"><Icon name="github" />Explore related code <Icon name="arrow" size={14} /></a><p className="sample-note">GitHub link points to a general topic page for now, will update once one is public.</p></> : modal && <><div className="eyebrow">{modal.publication.year} · {modal.publication.type}</div><h2 id="dialog-title">{modal.type === 'bibtex' ? 'Cite this publication' : modal.type === 'doi' ? 'Publication DOI' : modal.publication.title}</h2>{modal.type !== 'publication' && <p className="dialog-paper-title">{modal.publication.title}</p>}{modal.type === 'bibtex' ? <><pre tabIndex={0}>{modal.publication.bibtex}</pre><button className="primary-button" onClick={() => copyCitation(modal.publication.bibtex)}><Icon name={copied ? 'check' : 'copy'} size={16} />{copied ? 'Copied to clipboard' : 'Copy BibTeX'}</button></> : modal.type === 'doi' ? <><div className="doi-box">{modal.publication.doi}</div><a className="primary-button" href={`https://doi.org/${modal.publication.doi}`} target="_blank" rel="noreferrer">Open DOI resolver <Icon name="arrow" size={14} /></a></> : <><p className="authors">{modal.publication.authors}</p><p className="venue">{modal.publication.venue}</p><h3 className="abstract-title">Abstract</h3><p>{modal.publication.abstract}</p><div className="dialog-actions"><button className="primary-button" onClick={() => setModal({ type: 'bibtex', publication: modal.publication })}><Icon name="copy" size={15} />Cite this paper</button>{modal.publication.doi && <button className="secondary-button" onClick={() => setModal({ type: 'doi', publication: modal.publication })}><Icon name="link" size={15} />View DOI</button>}</div></>}</>}</div></dialog>
    {toast && <div className="toast" role="status"><Icon name="check" size={17} /><span>{toast}</span><button className="icon-button" onClick={() => setToast('')} aria-label="Dismiss notification"><Icon name="close" size={16} /></button></div>}
  </>;
}
