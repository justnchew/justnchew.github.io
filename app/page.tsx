const projects = [
  {
    number: "01",
    type: "Selected work",
    title: "A home for the things I make.",
    description:
      "A focused portfolio format for the projects, experiments, and ideas worth sharing.",
  },
  {
    number: "02",
    type: "Photo journal",
    title: "Small moments, kept close.",
    description:
      "A calmer place for photographs from the road and ordinary days in between.",
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
          JC<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">Independent builder · Seattle, WA</p>
          <h1 id="hero-heading">Making room for curious work and a well-lived life.</h1>
          <p className="hero-intro">
            I&apos;m Justin Chew. I build useful things, wander with a camera, and collect the
            stories that happen along the way.
          </p>
          <a className="text-link" href="#work">
            Explore my work <ArrowUpRight />
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun" />
          <div className="horizon horizon-one" />
          <div className="horizon horizon-two" />
          <p>J.C. / 2026</p>
        </div>
      </section>

      <section className="statement" id="about" aria-labelledby="about-heading">
        <p className="eyebrow">About</p>
        <div>
          <h2 id="about-heading">Part maker, part observer, always learning.</h2>
          <p>
            This site is a living notebook for my work and the places that shape it. Expect
            practical projects, quiet photographs, and ideas still finding their form.
          </p>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="eyebrow">What&apos;s here</p>
          <h2 id="work-heading">A fresh beginning.</h2>
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
        <p className="eyebrow">Keep in touch</p>
        <h2 id="contact-heading">Have something in mind?</h2>
        <a className="contact-link" href="mailto:hello@justnchew.com">
          Let&apos;s talk <ArrowUpRight />
        </a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Justin Chew</p>
        <a href="https://www.linkedin.com/in/justnchew/" rel="noreferrer" target="_blank">
          LinkedIn <ArrowUpRight />
        </a>
      </footer>
    </main>
  );
}
