const projects = [
  {
    number: "01",
    type: "Software engineering",
    title: "Building useful systems.",
    description:
      "An experienced software engineer focused on practical, reliable work and the people it serves.",
  },
  {
    number: "02",
    type: "AI research",
    title: "AI for software engineering.",
    description:
      "Exploring how AI can help engineers develop, evaluate, and improve software.",
  },
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Justin Chew home">
          Justin Chew<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer at Microsoft</p>
          <h1 id="hero-heading">Justin Chew.</h1>
          <p className="hero-intro">
            Building thoughtful software and exploring how AI can help engineers work better.
          </p>
          <a className="text-link" href="#work">
            Explore my experience <ArrowUpRight />
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun" />
          <div className="horizon horizon-one" />
          <div className="horizon horizon-two" />
          <p>Software + AI</p>
        </div>
      </section>

      <section className="statement" id="about" aria-labelledby="about-heading">
        <p className="eyebrow">About</p>
        <div>
          <h2 id="about-heading">An experienced software engineer with a focus on useful, durable work.</h2>
          <p>
            My work spans software engineering and AI research for software engineering. I studied
            at Georgia Institute of Technology and care about strong technical foundations, practical
            tools, and the people who use them.
          </p>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2 id="work-heading">Work in software and AI.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-arrow"><ArrowUpRight /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading">Let&apos;s keep in touch.</h2>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/justin-chew-3113a675/"
          rel="noreferrer"
          target="_blank"
        >
          Find me on LinkedIn <ArrowUpRight />
        </a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Justin Chew</p>
        <a href="https://www.linkedin.com/in/justin-chew-3113a675/" rel="noreferrer" target="_blank">
          LinkedIn <ArrowUpRight />
        </a>
      </footer>
    </main>
  );
}
