import { useState, useEffect } from "react";
import { certificates } from "../data/portfolioData";

const ITEMS_PER_PAGE = 6;

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    certificates.length / ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const currentCertificates = certificates.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset page if certificates are changed/removed
  useEffect(() => {
    if (
      currentPage > totalPages &&
      totalPages > 0
    ) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    // Scroll back to certificate section
    document
      .getElementById("certificates")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="certificates"
      className="section section-dark"
    >
      <div className="section-container">
        <div className="section-heading">
          <div className="section-meta">
            <span>04</span>
            <p>CERTIFICATIONS</p>
          </div>

          <h2>
            Proof of
            <br />
            <span>continuous learning.</span>
          </h2>
        </div>

        <p className="section-description">
          Certificates, achievements and learning
          milestones from my technical journey.
        </p>

        {/* Certificate Grid */}
        <div className="certificates-grid">
          {currentCertificates.map((certificate) => (
            <button
              className="glass certificate-card"
              key={certificate.id}
              onClick={() =>
                setSelected(certificate)
              }
            >
              <div className="certificate-preview">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                />

                <div className="certificate-hover">
                  <span>View Certificate</span>
                  <b>↗</b>
                </div>
              </div>

              <div className="certificate-info">
                <div>
                  <span>{certificate.year}</span>

                  <h3>
                    {certificate.title}
                  </h3>

                  <p>
                    {certificate.issuer}
                  </p>
                </div>

                <b>↗</b>
              </div>
            </button>
          ))}
        </div>

        {/* Empty state */}
        {certificates.length === 0 && (
          <div className="certificate-empty glass">
            <span>✦</span>

            <h3>No certificates yet</h3>

            <p>
              Certificates will appear here once
              they are added.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="certificate-pagination">
            {/* Previous */}
            <button
              className="pagination-arrow"
              onClick={() =>
                goToPage(currentPage - 1)
              }
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              ←
            </button>

            {/* Page Numbers */}
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
                  onClick={() =>
                    goToPage(page)
                  }
                  aria-label={`Go to page ${page}`}
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

            {/* Next */}
            <button
              className="pagination-arrow"
              onClick={() =>
                goToPage(currentPage + 1)
              }
              disabled={
                currentPage === totalPages
              }
              aria-label="Next page"
            >
              →
            </button>
          </div>
        )}

        {/* Pagination Information */}
        {certificates.length > 0 && (
          <div className="pagination-info">
            Showing{" "}
            <strong>
              {startIndex + 1}
            </strong>
            {" – "}
            <strong>
              {Math.min(
                startIndex + ITEMS_PER_PAGE,
                certificates.length
              )}
            </strong>{" "}
            of{" "}
            <strong>
              {certificates.length}
            </strong>{" "}
            certificates
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {selected && (
        <div
          className="modal"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-box glass"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="modal-close"
              onClick={() =>
                setSelected(null)
              }
              aria-label="Close certificate"
            >
              ×
            </button>

            <img
              src={selected.image}
              alt={selected.title}
            />

            <h3>{selected.title}</h3>

            <p>{selected.issuer}</p>

            <span className="modal-year">
              {selected.year}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}