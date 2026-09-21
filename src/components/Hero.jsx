export default function Hero() {
  const goToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero-section">
      <div className="ambient ambient-purple"></div>
      <div className="ambient ambient-blue"></div>
      <div className="ambient ambient-pink"></div>

      <div className="hero-grid-lines"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="status-pill glass">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Pema
            <span>Tshewang</span>
            Norbu.
          </h1>

          <div className="hero-role">
            <span>Full-Stack Developer</span>
            <i>•</i>
            <span>AI Enthusiast</span>
          </div>

          <p className="hero-description">
            I build modern web applications, intelligent
            software and digital experiences that combine
            technology with thoughtful design.
          </p>

          <div className="hero-buttons">
            <button
              className="glass-button primary"
              onClick={goToProjects}
            >
              Explore My Work
              <span>↗</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="glass-button"
            >
              Download Resume
              <span>↓</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Tshewangtjp"
              target="_blank"
              rel="noreferrer"
            >
              <span>GH</span>
              GitHub
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <span>in</span>
              LinkedIn
            </a>

            <a href="mailto:your@email.com">
              <span>@</span>
              Email
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-orbit orbit-1"></div>
          <div className="glass-orbit orbit-2"></div>
          <div className="glass-orbit orbit-3"></div>

          <div className="profile-glass">
  <div className="profile-shine"></div>

  <div className="profile-image-hover">

    {/* First image - normal */}
    <img
      className="profile-photo"
      src="/profile.jpg"
      alt="Pema Tshewang Norbu"
    />

    {/* Second image - sketch */}
    <img
      className="profile-sketch"
      src="/profile-sketch.jpg"
      alt=""
      aria-hidden="true"
    />

  </div>

  <div className="profile-glass-bottom">
    <div>
      <small>BASED IN</small>
      <strong>Bhutan / India</strong>
    </div>

    <div className="profile-status">
      <span></span>
      Open to work
    </div>
  </div>
</div>

          <div className="floating-glass-card floating-one">
            <div className="floating-icon purple">⌘</div>

            <div>
              <small>FOCUS</small>
              <strong>Software</strong>
            </div>
          </div>

          <div className="floating-glass-card floating-two">
            <div className="floating-icon cyan">✦</div>

            <div>
              <small>INTEREST</small>
              <strong>Artificial Intelligence</strong>
            </div>
          </div>

          <div className="floating-symbol symbol-one">
            +
          </div>

          <div className="floating-symbol symbol-two">
            ×
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span></span>
        Scroll to explore
      </div>
    </section>
  );
}