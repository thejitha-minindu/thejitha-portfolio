"use client";

type RecruiterBannerProps = {
  onOpenCV: () => void;
  onClose: () => void;
};

export function RecruiterBanner({ onOpenCV, onClose }: RecruiterBannerProps) {
  return (
    <aside className="recruiter-banner" aria-label="Recruiter Summary Mode">
      <div className="container recruiter-banner-inner">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span className="recruiter-pill">RECRUITER MODE</span>
          <span className="recruiter-summary-text">
            <strong>Thejitha Wijayanayake</strong> · Third-Year IT Undergraduate @ University of Moratuwa (<strong style={{ color: "var(--accent)" }}>CGPA: 3.95 / 4.00</strong>) · Seeking <strong>Software / IT Internships (2026)</strong> · Focus: Software Engineering, Full-Stack, Hardware & AI.
          </span>
        </div>

        <div className="recruiter-actions">
          <button
            type="button"
            className="button button-primary"
            style={{ padding: "7px 12px", fontSize: "10px" }}
            onClick={onOpenCV}
          >
            VIEW CV ↗
          </button>
          <a
            href="/Thejitha-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="button"
            style={{ padding: "7px 12px", fontSize: "10px" }}
          >
            OPEN PDF ↗
          </a>
          <a
            href="/api/download-cv"
            download="Thejitha-Wijayanayake-CV.pdf"
            className="button"
            style={{ padding: "7px 12px", fontSize: "10px" }}
          >
            DOWNLOAD PDF ↓
          </a>
          <a
            href="mailto:thejithamininduw@gmail.com"
            className="button button-accent"
            style={{ padding: "7px 12px", fontSize: "10px" }}
          >
            CONTACT ↗
          </a>
          <button
            type="button"
            className="button"
            style={{ padding: "7px 10px", fontSize: "10px", color: "var(--muted)" }}
            onClick={onClose}
            title="Exit Recruiter Mode"
          >
            ✕
          </button>
        </div>
      </div>
    </aside>
  );
}
