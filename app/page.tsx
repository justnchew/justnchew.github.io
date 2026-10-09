const projects = [
  {
    number: "01",
    type: "Code",
    title: "Learn, build, repeat.",
    description:
      "A place to share the projects, experiments, and ideas that keep me curious.",
  },
  {
    number: "02",
    type: "Photo journal",
    title: "Travel, one frame at a time.",
    description:
      "Photographs from the road and the everyday moments worth remembering.",
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
          boijustin<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About me</a>
          <a href="#work">Photo journal</a>
          <a href="#contact">Contact me</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">Seattle, WA</p>
          <h1 id="hero-heading">Justin Chew.</h1>
          <p className="hero-intro">
            Code, travel, photograph, repeat.
          </p>
          <a className="text-link" href="#work">
            Explore my interests <ArrowUpRight />
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun" />
          <div className="horizon horizon-one" />
          <div className="horizon horizon-two" />
          <p>boijustin / Seattle</p>
        </div>
      </section>

      <section className="statement" id="about" aria-labelledby="about-heading">
        <p className="eyebrow">Who am I?</p>
        <div>
          <h2 id="about-heading">A Seattleite looking for a place to showcase hobbies and interests.</h2>
          <p>
            This is a home for the things I&apos;m learning, the places I travel, and the photographs
            I make along the way.
          </p>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="eyebrow">Code · Travel · Photograph</p>
          <h2 id="work-heading">A place to explore.</h2>
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
        <p className="eyebrow">Contact me</p>
        <h2 id="contact-heading">Let&apos;s keep in touch.</h2>
        <a
          className="contact-link"
          href="https://www.linkedin.com/pub/justin-chew/75/3a6/311"
          rel="noreferrer"
          target="_blank"
        >
          Find me on LinkedIn <ArrowUpRight />
        </a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} boijustin.</p>
        <a href="https://www.linkedin.com/pub/justin-chew/75/3a6/311" rel="noreferrer" target="_blank">
          LinkedIn <ArrowUpRight />
        </a>
      </footer>
    </main>
  );
}
