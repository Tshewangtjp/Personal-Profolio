import { useEffect, useState } from "react";
import { projects } from "../data/portfolioData";

const ITEMS_PER_PAGE = 4;

export default function Projects() {
  const [active, setActive] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "ALL",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filtered =
    active === "ALL"
      ? projects
      : projects.filter(
          (project) => project.category === active
        );

  const totalPages = Math.ceil(
    filtered.length / ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const currentProjects = filtered.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset pagination when category changes
  const handleCategoryChange = (category) => {
    setActive(category);
    setCurrentPage(1);
  };

  // Keep page valid if projects are added/removed
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="section-heading">
          <div className="section-meta">
            <span>03</span>
            <p>SELECTED WORK</p>
          </div>

          <h2>
            Things I've
            <br />
            <span>built & explored.</span>
          </h2>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                active === category ? "active" : ""
              }
              onClick={() =>
                handleCategoryChange(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        {currentProjects.length > 0 ? (
          <div className="projects-grid">
            {currentProjects.map((project) => (
              <article
                className="glass project-card"
                key={project.id}
              >
                <div className="project-glow"></div>

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="projects-empty glass">
            <span>✦</span>
            <h3>No projects found</h3>
            <p>
              There are no projects in this category yet.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="project-pagination">
            <button
              className="pagination-arrow"
              onClick={() =>
                goToPage(currentPage - 1)
              }
              disabled={currentPage === 1}
              aria-label="Previous projects page"
            >
              ←
            </button>

            <div className="pagination-pages">
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  className={
                    currentPage === page
                      ? "pagination-page active"
                      : "pagination-page"
                  }
                  onClick={() => goToPage(page)}
                  aria-label={`Go to projects page ${page}`}
                  aria-current={
                    currentPage === page
                      ? "page"
                      : undefined
                  }
                >
                  {String(page).padStart(2, "0")}
                </button>
              ))}
            </div>

            <button
              className="pagination-arrow"
              onClick={() =>
                goToPage(currentPage + 1)
              }
              disabled={
                currentPage === totalPages
              }
              aria-label="Next projects page"
            >
              →
            </button>
          </div>
        )}

        {/* Pagination information */}
        {filtered.length > 0 && (
          <div className="pagination-info">
            Showing{" "}
            <strong>{startIndex + 1}</strong>
            {" – "}
            <strong>
              {Math.min(
                startIndex + ITEMS_PER_PAGE,
                filtered.length
              )}
            </strong>{" "}
            of{" "}
            <strong>{filtered.length}</strong>{" "}
            projects
          </div>
        )}
      </div>
    </section>
  );
}