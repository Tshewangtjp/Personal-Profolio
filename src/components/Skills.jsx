import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="section-container">
        <div className="section-heading">
          <div className="section-meta">
            <span>02</span>
            <p>SKILLS</p>
          </div>

          <h2>
            Technology I use
            <br />
            <span>to build things.</span>
          </h2>
        </div>

        <div className="skills-wrapper">
          <div className="skills-intro glass">
            <span className="card-label">
              MY TOOLKIT
            </span>

            <h3>
              Turning ideas
              <br />
              into <span>experiences.</span>
            </h3>

            <p>
              I work across frontend, backend, databases and
              emerging AI technologies.
            </p>

            <div className="tech-cloud">
              <span>React</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>Node</span>
              <span>PHP</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Odoo</span>
              <span>C</span>
              <span>Java</span>
              <span>ERPNext</span>
              <span>React Native</span>

              <span>Git</span>
            </div>
          </div>

          <div className="skills-list glass">
            {skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-header">
                  <div>
                    <strong>{skill.name}</strong>
                    <small>{skill.category}</small>
                  </div>

                  <span>{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <div
                    style={{
                      width: `${skill.level}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}