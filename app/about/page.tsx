import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyShell } from "@/components/CaseStudyShell";

export const metadata: Metadata = {
  title: "About Thejitha Wijayanayake — Software Engineer & IT Undergraduate",
  description:
    "Learn more about Thejitha Wijayanayake, an Information Technology undergraduate at the University of Moratuwa with a focus on software engineering, AI/ML research, and cybersecurity.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/about",
    siteName: "Thejitha Wijayanayake",
    title: "About Thejitha Wijayanayake — Software Engineer & IT Undergraduate",
    description:
      "Information Technology undergraduate at the University of Moratuwa exploring software engineering, AI, research and systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Thejitha Wijayanayake — Software Engineer",
    description:
      "Information Technology undergraduate at the University of Moratuwa exploring software engineering, AI, research and systems.",
  },
};

export default function AboutPage() {
  return (
    <CaseStudyShell>
      <main>
        {/* Top Header */}
        <header className="container cs-header">
          <div className="cs-breadcrumbs">
            <Link href="/">THEJITHA</Link>
            <span>/</span>
            <span style={{ color: "var(--accent)" }}>ABOUT</span>
          </div>

          <h1 className="cs-title">About Thejitha Wijayanayake</h1>
          <p className="cs-lead">
            Information Technology undergraduate at the University of Moratuwa, passionate about building reliable software systems, exploring machine learning and astrophysics research, and securing digital architectures.
          </p>

          <div className="cs-meta-grid">
            <div>
              <span>CURRENT STATUS</span>
              <strong style={{ color: "var(--accent)" }}>Third-Year IT Undergraduate</strong>
            </div>
            <div>
              <span>INSTITUTION</span>
              <strong>University of Moratuwa (CGPA: 3.95 / 4.00)</strong>
            </div>
            <div>
              <span>PRIMARY FOCUS</span>
              <strong>Software Engineering · AI / ML · Cybersecurity</strong>
            </div>
            <div>
              <span>LOCATION</span>
              <strong>Kuliyapitiya, Sri Lanka</strong>
            </div>
          </div>
        </header>

        {/* 1. Background & Education */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>01 / BACKGROUND & EDUCATION</span>
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <div className="cs-text-body">
            <p>
              I am currently pursuing a B.Sc. (Hons) in Information Technology at the Faculty of Information Technology, University of Moratuwa, maintaining a cumulative GPA of 3.95 out of 4.00.
            </p>
            <p>
              Prior to university, I completed my GCE Advanced Levels in the Physical Science stream at St. Anne&apos;s College, Kurunegala (Z-score: 1.6692; Physics: A, Combined Mathematics: B, Chemistry: B), laying a strong analytical and problem-solving foundation.
            </p>
          </div>
        </section>

        {/* 2. Technical Focus Areas */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>02 / TECHNICAL COMPETENCIES & FOCUS</span>
            <span>ENGINEERING DISCIPLINES</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Software Engineering & Full-Stack Development</h4>
              <p>
                Developing end-to-end web applications with Next.js, React, TypeScript, FastAPI (Python), Node.js, and relational databases like Microsoft SQL Server and PostgreSQL.
              </p>
            </div>
            <div className="cs-card">
              <h4>Artificial Intelligence & Machine Learning</h4>
              <p>
                Conducting undergraduate research applying 3D U-Net encoder-decoder deep learning models in PyTorch to reconstruct invisible dark matter structures within the cosmic web from astronomical surveys.
              </p>
            </div>
            <div className="cs-card">
              <h4>Cybersecurity & Host Hardening</h4>
              <p>
                Hands-on experience in vulnerability triage, POSIX capability auditing, and system defense, demonstrated by securing 2nd Runners-up at the Medusa 2.0 National CTF competition.
              </p>
            </div>
            <div className="cs-card">
              <h4>Hardware & Embedded Systems</h4>
              <p>
                Hands-on prototyping combining CoreXY kinematics, Arduino Uno (GRBL), ESP32 microcontrollers, WebSockets, and CNC motor drivers for interactive hardware projects.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Key Projects & Experience */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>03 / SELECTED PROJECTS & CASE STUDIES</span>
            <span>PROVEN DELIVERABLES</span>
          </div>
          <div className="cs-text-body">
            <p>
              Explore detailed technical case studies of my engineering projects and research:
            </p>
            <ul>
              <li>
                <Link href="/work/teablend-ai" style={{ color: "var(--accent)" }}>
                  <strong>TeaBlendAI</strong>
                </Link>{" "}
                — AI-powered digital tea auction platform built with Next.js, FastAPI, and MSSQL for Inivois Global.
              </li>
              <li>
                <Link href="/research/cosmic-web" style={{ color: "var(--accent)" }}>
                  <strong>Deep Learning the Cosmic Web</strong>
                </Link>{" "}
                — Active undergraduate research investigating U-Net neural architectures for dark matter density reconstruction.
              </li>
              <li>
                <Link href="/work/sandplotter" style={{ color: "var(--accent)" }}>
                  <strong>SandPlotter Smart Coffee Table</strong>
                </Link>{" "}
                — CoreXY kinetic furniture with Arduino GRBL, ESP32 WebSockets, and TFT touch display.
              </li>
              <li>
                <Link href="/projects/security-lab" style={{ color: "var(--accent)" }}>
                  <strong>Medusa 2.0 CTF & Security Lab</strong>
                </Link>{" "}
                — Competitive cybersecurity challenge triage and Linux system hardening case study.
              </li>
              <li>
                <Link href="/work/icitr-2026" style={{ color: "var(--accent)" }}>
                  <strong>ICITR 2026 Conference Website</strong>
                </Link>{" "}
                — Official web platform for the International Conference on Information Technology Research.
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Connect & Profiles */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>04 / CONNECT & VERIFIED PROFILES</span>
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <div className="cs-text-body">
            <p>
              Feel free to connect or inspect my public code repositories and academic records:
            </p>
          </div>
          <div className="cs-meta-grid" style={{ marginTop: "16px" }}>
            <div>
              <span>GITHUB</span>
              <a
                href="https://github.com/thejitha-minindu"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--accent)" }}
              >
                github.com/thejitha-minindu ↗
              </a>
            </div>
            <div>
              <span>LINKEDIN</span>
              <a
                href="https://www.linkedin.com/in/thejitha-wijayanayake"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--accent)" }}
              >
                linkedin.com/in/thejitha-wijayanayake ↗
              </a>
            </div>
            <div>
              <span>EMAIL</span>
              <a
                href="mailto:thejithamininduw@gmail.com"
                style={{ color: "var(--accent)" }}
              >
                thejithamininduw@gmail.com
              </a>
            </div>
            <div>
              <span>CURRICULUM VITAE</span>
              <Link href="/cv" style={{ color: "var(--accent)" }}>
                View Digital CV Record ↗
              </Link>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="container" style={{ marginTop: "48px", marginBottom: "64px" }}>
          <Link href="/#about" className="button button-primary">
            ← RETURN TO HOMEPAGE
          </Link>
        </div>
      </main>
    </CaseStudyShell>
  );
}
