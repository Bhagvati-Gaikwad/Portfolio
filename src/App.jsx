const projects = [
  { title: 'Cloud Infrastructure Monitor', text: 'A cloud-focused monitoring experience for making infrastructure health and operational data easier to understand.', tags: ['Cloud', 'Monitoring', 'Dashboard'] },
  { title: 'E-Commerce Platform', text: 'A full-stack commerce application designed around a clear, responsive customer journey.', tags: ['Full stack', 'Web', 'UX'] },
  { title: 'AI Analytics Dashboard', text: 'An analytics interface that turns model outputs and business metrics into useful visual insights.', tags: ['AI', 'Analytics', 'Data'] },
];

const skills = ['AWS', 'Google Cloud', 'JavaScript', 'React', 'Node.js', 'HTML & CSS', 'MongoDB', 'SQL', 'Git & GitHub', 'REST APIs', 'UI/UX Design', 'CI/CD'];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function App() {
  return <>
    <header className="nav">
      <a className="brand" href="#top">BG<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav>
      <a className="button small" href="mailto:bhagvatigaikwad1@gmail.com">Let’s talk</a>
    </header>

    <main id="top">
      <section className="hero section">
        <div className="eyebrow">PORTFOLIO · 2026</div>
        <p className="intro">Hello, I’m</p>
        <h1>Bhagvati<br /><em>Gaikwad.</em></h1>
        <div className="hero-bottom">
          <p>Cloud and full-stack developer focused on useful, thoughtful digital products.</p>
          <a className="round-link" href="#projects" aria-label="View selected projects">↓</a>
        </div>
      </section>

      <section id="about" className="section split">
        <div><p className="eyebrow">01 / ABOUT</p><h2>A technical builder with an eye for people.</h2></div>
        <div className="prose"><p>I combine computer science foundations with hands-on cloud and web development. I care about systems that scale, interfaces that feel clear, and the collaboration that makes both possible.</p><p>My work spans cloud-native development, full-stack applications, data-driven interfaces, and community-focused design leadership.</p><div className="facts"><div><strong>9.3</strong><span>CGPA</span></div><div><strong>Cloud</strong><span>Focused</span></div><div><strong>Full stack</strong><span>Builder</span></div></div></div>
      </section>

      <section id="projects" className="section projects"><p className="eyebrow">02 / SELECTED WORK</p><h2>Ideas made tangible.</h2><div className="project-grid">{projects.map((project, index) => <article className="project" key={project.title}><div className={'project-visual visual-' + index}><span>0{index + 1}</span></div><div className="project-copy"><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section id="skills" className="section skills"><p className="eyebrow">03 / TOOLKIT</p><h2>Technology with purpose.</h2><div className="skill-list">{skills.map((skill, index) => <div key={skill}><span>0{index + 1}</span>{skill}</div>)}</div></section>

      <section className="section experience"><p className="eyebrow">04 / EXPERIENCE</p><div className="experience-row"><span>Cloud Engineering</span><p>Hands-on cloud-native learning and project work across AWS and Google Cloud.</p></div><div className="experience-row"><span>GDG Design Lead</span><p>Bringing visual clarity, community thinking, and technical communication to developer events and initiatives.</p></div><div className="experience-row"><span>Computer Science</span><p>A strong academic base paired with continuous practical exploration.</p></div></section>

      <section id="contact" className="contact"><p className="eyebrow">05 / GET IN TOUCH</p><h2>Let’s build something<br /><em>meaningful.</em></h2><a className="email" href="mailto:bhagvatigaikwad1@gmail.com">bhagvatigaikwad1@gmail.com <Arrow /></a><div className="socials"><a href="https://www.linkedin.com/in/bhagvati-gaikwad-ab89992a1/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/Bhagvati-Gaikwad" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Bhagvati Gaikwad</span><a href="#top">Back to top ↑</a></footer>
  </>;
}
