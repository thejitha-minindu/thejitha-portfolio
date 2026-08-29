import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyShell } from "@/components/CaseStudyShell";

export const metadata: Metadata = {
  title: "Curriculum Vitae (CV) | Thejitha Wijayanayake — Software Engineer",
  description:
    "Official Curriculum Vitae of Thejitha Wijayanayake, Third-Year Information Technology Undergraduate at University of Moratuwa. View or download the verified CV PDF.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "/cv",
    siteName: "Thejitha Wijayanayake",
    title: "Curriculum Vitae (CV) | Thejitha Wijayanayake — Software Engineer",
    description:
      "Official Curriculum Vitae of Thejitha Wijayanayake, Third-Year Information Technology Undergraduate at University of Moratuwa. View or download the verified CV PDF.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum Vitae (CV) | Thejitha Wijayanayake",
    description:
      "Official Curriculum Vitae of Thejitha Wijayanayake, Third-Year Information Technology Undergraduate at University of Moratuwa. View or download the verified CV PDF.",
  },
};

export default function CVPage() {
  return (
    <CaseStudyShell>
      <main className="cv-page-main">
        <div className="container" style={{ maxWidth: "1080px" }}>
          {/* Breadcrumb & Top Bar */}
          <div className="cs-breadcrumbs">
            <Link href="/">THEJITHA</Link>
            <span>/</span>
            <span style={{ color: "var(--accent)" }}>CURRICULUM VITAE</span>
          </div>

          <div className="cv-page-header">
            <div>
              <div className="system-label" style={{ marginBottom: "12px" }}>
                <span>SYS.CV // RECORD</span>
                <span style={{ color: "var(--dim)" }}>·</span>
                <span style={{ color: "var(--accent)" }}>CGPA: 3.95 / 4.00</span>
              </div>
              <h1 className="cs-title" style={{ marginBottom: "8px" }}>Curriculum Vitae</h1>
              <p className="cs-lead" style={{ marginBottom: "0" }}>
                Official academic and technical record · University of Moratuwa.
              </p>
            </div>

            <div className="cv-page-actions">
              <a
                href="/Thejitha-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="button"
                title="Open PDF in a new browser tab"
              >
                OPEN IN NEW TAB ↗
              </a>
              <a
                href="/api/download-cv"
                download="Thejitha-Wijayanayake-CV.pdf"
                className="button button-primary"
                title="Download CV PDF"
              >
                DOWNLOAD PDF ↓
              </a>
            </div>
          </div>

          {/* Embedded PDF Viewer Container */}
          <div className="cv-standalone-container">
            <iframe
              src="/Thejitha-CV.pdf#view=FitH"
              title="Thejitha Wijayanayake CV PDF"
              className="cv-standalone-frame"
            />
            <div className="cv-standalone-fallback">
              <p>Previewing PDF documents inline may require desktop browser support.</p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "12px", flexWrap: "wrap" }}>
                <a href="/Thejitha-CV.pdf" target="_blank" rel="noreferrer" className="button button-primary">
                  Open PDF in New Tab ↗
                </a>
                <a href="/api/download-cv" download="Thejitha-Wijayanayake-CV.pdf" className="button">
                  Download PDF Directly ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </CaseStudyShell>
  );
}
