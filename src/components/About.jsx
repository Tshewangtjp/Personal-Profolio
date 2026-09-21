export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="section-heading">
          <div className="section-meta">
            <span>01</span>
            <p>ABOUT ME</p>
          </div>

          <h2>
            Curious mind.
            <br />
            <span>Creative builder.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="glass about-main">
            <div className="glass-light"></div>

            <span className="card-label">
              A LITTLE ABOUT ME
            </span>

            <p className="about-large">
              I'm a Bachelor of Computer Science student
              passionate about software development, artificial
              intelligence and modern digital experiences.
            </p>

            <p>
              I enjoy turning ideas into functional applications
              and exploring technologies that can solve real-world
              problems.
            </p>

            <p>
              My experience includes frontend development,
              backend systems, databases, AI/ML projects and
              experimental software products.
            </p>
          </div>

          <div className="about-side">
            <div className="glass info-glass">
              <div className="info-icon">🎓</div>

              <div>
                <small>EDUCATION</small>
                <h3>Bachelor of Computer Science</h3>
                <p>Assam Downtown University</p>
              </div>
            </div>

            <div className="glass info-glass">
              <div className="info-icon">⚡</div>

              <div>
                <small>INTERESTS</small>
                <h3>Web Development & AI</h3>
                <p>Building practical digital products</p>
              </div>
            </div>

            <div className="glass info-glass">
              <div className="info-icon">🚀</div>

              <div>
                <small>APPROACH</small>
                <h3>Learn • Build • Improve</h3>
                <p>Continuous learning and experimentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}