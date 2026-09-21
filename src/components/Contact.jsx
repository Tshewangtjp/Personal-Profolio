export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="glass contact-glass">
          <div className="contact-main">
            <div className="section-meta">
              <span>06</span>
              <p>GET IN TOUCH</p>
            </div>

            <h2>
              Let's build
              <br />
              <span>something great.</span>
            </h2>

            <p>
              Have a project, idea or opportunity? Feel free
              to reach out. I'm always interested in learning,
              building and collaborating.
            </p>

            <a
              href="mailto:ptshewang505@gmail.com"
              className="glass-button primary"
            >
              Start a conversation
              <span>↗</span>
            </a>
          </div>

          <div className="contact-links">
            <a href="mailto:ptshewang505@gmail.com">
              <div>
                <small>EMAIL</small>
                <strong>ptshewang505@gmail.com</strong>
              </div>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/Tshewangtjp"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <small>GITHUB</small>
                <strong>Tshewangtjp</strong>
              </div>
              <span>↗</span>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <div>
                <small>LINKEDIN</small>
                <strong>My LinkedIn</strong>
              </div>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}