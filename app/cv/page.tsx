"use client";

import { useState } from "react";
import Link from "next/link";

export default function CVPage() {
  const [viewMode, setViewMode] = useState<"web" | "pdf">("web");

  return (
    <main style={{ minHeight: "100vh", background: "var(--background)", color: "var(--text)", padding: "40px 0" }}>
      <div className="container" style={{ maxWidth: "940px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", borderBottom: "1px solid var(--line)", paddingBottom: "16px", fontFamily: "var(--font-mono)", fontSize: "11px", flexWrap: "wrap", gap: "16px" }}>
          <Link href="/" style={{ color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <span>← RETURN TO THEJITHA // LAB</span>
          </Link>

          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            {/* View Mode Toggle */}
            <button
              type="button"
              onClick={() => setViewMode("web")}
              style={{
                background: viewMode === "web" ? "var(--accent)" : "transparent",
                color: viewMode === "web" ? "#06100c" : "var(--muted)",
                border: "1px solid",
                borderColor: viewMode === "web" ? "var(--accent)" : "var(--line)",
                padding: "6px 12px",
                fontSize: "10px",
                fontWeight: viewMode === "web" ? "bold" : "normal",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              FORMATTED WEB CV
            </button>
            <button
              type="button"
              onClick={() => setViewMode("pdf")}
              style={{
                background: viewMode === "pdf" ? "var(--accent)" : "transparent",
                color: viewMode === "pdf" ? "#06100c" : "var(--muted)",
                border: "1px solid",
                borderColor: viewMode === "pdf" ? "var(--accent)" : "var(--line)",
                padding: "6px 12px",
                fontSize: "10px",
                fontWeight: viewMode === "pdf" ? "bold" : "normal",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              EMBEDDED PDF
            </button>

            <a
              href="/Thejitha-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="button"
              style={{ padding: "6px 12px", fontSize: "10px" }}
              title="Open PDF directly in new tab"
            >
              OPEN PDF ↗
            </a>
            <a
              href="/api/download-cv"
              download="Thejitha-Wijayanayake-CV.pdf"
              className="button button-primary"
              style={{ padding: "6px 12px", fontSize: "10px" }}
              title="Download PDF file"
            >
              DOWNLOAD PDF ↓
            </a>
          </div>
        </div>

        {viewMode === "pdf" ? (
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", height: "82vh", overflow: "hidden" }}>
            <iframe
              src="/Thejitha-CV.pdf"
              title="Thejitha Wijayanayake CV PDF"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        ) : (
          <article style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "44px" }}>
            {/* Header */}
            <header className="cv-header">
              <h1 className="cv-name">THEJITHA WIJAYANAYAKE</h1>
              <div className="cv-sub">
                THIRD-YEAR INFORMATION TECHNOLOGY UNDERGRADUATE · UNIVERSITY OF MORATUWA
              </div>
              <div className="cv-contact-row">
                <span>📍 Kuliyapitiya, Sri Lanka</span>
                <span>📞 +94 71 475 6551</span>
                <span>✉ thejithamininduw@gmail.com</span>
                <a href="https://github.com/thejitha-minindu" target="_blank" rel="noreferrer">
                  🔗 github.com/thejitha-minindu
                </a>
                <a href="https://www.linkedin.com/in/thejitha-wijayanayake" target="_blank" rel="noreferrer">
                  💼 linkedin.com/in/thejitha-wijayanayake
                </a>
                <span style={{ color: "var(--accent)" }}>● Available for Software / IT Internships (2026)</span>
              </div>
            </header>

            {/* Profile */}
            <section className="cv-section">
              <h2 className="cv-section-title">PROFILE</h2>
              <p className="cv-entry-desc" style={{ color: "var(--text)", fontSize: "13px" }}>
                Undergraduate student in Information Technology at the University of Moratuwa, with coursework and projects covering programming, hardware interfacing, and software development. Actively engaged in building real-world systems that combine hardware and software concepts, while continuously developing technical and analytical skills through practical projects and self-learning.
              </p>
            </section>

            {/* Education */}
            <section className="cv-section">
              <h2 className="cv-section-title">EDUCATION</h2>
              <div className="cv-entry">
                <div className="cv-entry-head">
                  <span>B.Sc. (Hons) in Information Technology</span>
                  <span style={{ color: "var(--muted)", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    2024 – Present
                  </span>
                </div>
                <div className="cv-entry-sub">
                  Faculty of Information Technology, University of Moratuwa · <strong style={{ color: "var(--accent)" }}>CGPA: 3.95 / 4.00</strong>
                </div>
              </div>

              <div className="cv-entry" style={{ marginTop: "14px" }}>
                <div className="cv-entry-head">
                  <span>GCE Advanced Level (Physical Science Stream)</span>
                  <span style={{ color: "var(--muted)", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    2022
                  </span>
                </div>
                <div className="cv-entry-sub">
                  St. Anne&apos;s College, Kurunegala · <strong>Z-score: 1.6692</strong>
                </div>
                <p className="cv-entry-desc">
                  Physics: A · Combined Mathematics: B · Chemistry: B
                </p>
              </div>
            </section>

            {/* Skills */}
            <section className="cv-section">
              <h2 className="cv-section-title">TECHNICAL SKILLS</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", fontSize: "12px", fontFamily: "var(--font-mono)" }}>
                <div>
                  <span style={{ color: "var(--accent)", display: "block", marginBottom: "4px" }}>PROGRAMMING</span>
                  <span style={{ color: "var(--text)" }}>C, Python, Java, JavaScript, TypeScript, PHP</span>
                </div>
                <div>
                  <span style={{ color: "var(--accent)", display: "block", marginBottom: "4px" }}>FRONTEND</span>
                  <span style={{ color: "var(--text)" }}>Next.js, React.js, Tailwind CSS, HTML5, CSS3</span>
                </div>
                <div>
                  <span style={{ color: "var(--accent)", display: "block", marginBottom: "4px" }}>BACKEND</span>
                  <span style={{ color: "var(--text)" }}>FastAPI, Node.js</span>
                </div>
                <div>
                  <span style={{ color: "var(--accent)", display: "block", marginBottom: "4px" }}>DATABASES</span>
                  <span style={{ color: "var(--text)" }}>MSSQL, MySQL, MongoDB, PostgreSQL</span>
                </div>
                <div>
                  <span style={{ color: "var(--accent)", display: "block", marginBottom: "4px" }}>TOOLS & PLATFORMS</span>
                  <span style={{ color: "var(--text)" }}>Git, GitHub, Linux, Arduino IDE, Flutter</span>
                </div>
                <div>
                  <span style={{ color: "var(--accent)", display: "block", marginBottom: "4px" }}>INTERPERSONAL</span>
                  <span style={{ color: "var(--text)" }}>Problem Solving, Time Management, Self-Learning, Teamwork</span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="cv-section">
              <h2 className="cv-section-title">PROJECTS</h2>

              <div className="cv-entry">
                <div className="cv-entry-head">
                  <span>TeaBlendAI — AI-Powered Tea Auction Platform</span>
                  <span style={{ color: "var(--muted)", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    Dec 2025 – Jun 2026
                  </span>
                </div>
                <div className="cv-entry-sub">
                  Industry Project · Inivois Global · Next.js, FastAPI, MSSQL
                </div>
                <p className="cv-entry-desc">
                  AI-powered web application developed to modernize the tea trading industry through a digital auction system and an integrated AI chatbot. Features role-based access, live and scheduled auction management, seller dashboards and an MSSQL-backed platform connecting tea producers with buyers. Responsible for full-stack development of the Seller Module, including seller dashboards, auction workflows, frontend implementation, backend API design and database modelling.
                </p>
              </div>

              <div className="cv-entry">
                <div className="cv-entry-head">
                  <span>ICITR 2026 Conference Website</span>
                  <span style={{ color: "var(--warn)", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    Jun 2026 – Present (In Development)
                  </span>
                </div>
                <div className="cv-entry-sub">
                  Faculty of IT, University of Moratuwa · Next.js, Tailwind CSS, GitHub
                </div>
                <p className="cv-entry-desc">
                  Developing the official website for the International Conference on Information Technology Research (ICITR). Contributing to the design and implementation of a responsive platform for conference information, speaker profiles, workshops, paper submission information and event announcements.
                </p>
              </div>

              <div className="cv-entry">
                <div className="cv-entry-head">
                  <span>SandPlotter Smart Coffee Table</span>
                  <span style={{ color: "var(--muted)", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    Aug 2024 – Aug 2025
                  </span>
                </div>
                <div className="cv-entry-sub">
                  First Year Hardware Project · Arduino Uno, ESP32, GRBL, CoreXY, TFT Touch Display, WebSocket, CNC Shield V3
                </div>
                <p className="cv-entry-desc">
                  Developed an interactive sand art coffee table capable of generating intricate sand patterns and custom text through a CoreXY motion system. Designed and assembled the motion mechanism using NEMA 17 stepper motors, GT2 timing belts, A4988 drivers, and limit switches integrated with GRBL firmware on Arduino Uno. Implemented ESP32 to Arduino communication to transmit G-code commands via TFT touch interface and web application using WebSockets.
                </p>
              </div>

              <div className="cv-entry">
                <div className="cv-entry-head">
                  <span>IEEE WIE University of Moratuwa Website</span>
                  <span style={{ color: "var(--muted)", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    Jul 2025 – Sep 2025
                  </span>
                </div>
                <div className="cv-entry-sub">
                  Team Project · Next.js, Tailwind CSS, GitHub
                </div>
                <p className="cv-entry-desc">
                  Developed the IEEE WIE University of Moratuwa website to showcase the chapter&apos;s mission, events and achievements, promoting initiatives and empowering women in engineering.
                </p>
              </div>

              <div className="cv-entry">
                <div className="cv-entry-head">
                  <span>Farmify</span>
                  <span style={{ color: "var(--muted)", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    Jun 2024 – Aug 2024
                  </span>
                </div>
                <div className="cv-entry-sub">
                  Team Project · React.js, Firebase
                </div>
                <p className="cv-entry-desc">
                  React and Firebase-based web application developed to support farmers by connecting them with agricultural expertise, secure authentication, product listings and real-time transaction updates.
                </p>
              </div>
            </section>

            {/* Current Research */}
            <section className="cv-section">
              <h2 className="cv-section-title">CURRENT RESEARCH</h2>
              <div className="cv-entry">
                <div className="cv-entry-head">
                  <span>Deep Learning the Cosmic Web: Reconstructing Invisible Dark Matter Structures via U-Net Architectures</span>
                  <span style={{ color: "var(--warn)", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    2026 – Present (Research in Progress)
                  </span>
                </div>
                <div className="cv-entry-sub">
                  Undergraduate Research Project · Python, PyTorch, 3D U-Net
                </div>
                <p className="cv-entry-desc">
                  Investigating the use of U-Net architectures for reconstructing invisible dark matter structures from observable astronomical data to understand the large-scale structure of the cosmic web.
                </p>
              </div>
            </section>

            {/* Competitions */}
            <section className="cv-section">
              <h2 className="cv-section-title">COMPETITIONS // CHALLENGES</h2>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "var(--text)", fontSize: "13px", lineHeight: "1.8" }}>
                <li><strong style={{ color: "var(--accent)" }}>2nd Runners-up</strong> — Medusa 2.0 (2025) National cybersecurity CTF competition by ECSC, University of Kelaniya</li>
                <li><strong style={{ color: "var(--accent)" }}>Semi-Finalist</strong> — SPARK Challenge (2026) ENTC Innovation Project Competition, University of Moratuwa</li>
                <li><strong style={{ color: "var(--accent)" }}>9th Place</strong> — SHErlock 2.0 Organized by IEEE WIE of IIT</li>
                <li><strong>Coding Contest Participation:</strong> ALGOXPLORE 1.0 · MoraXtreme 9.0 · CodeRush 2022 · MoraXtreme 10.0</li>
              </ul>
            </section>

            {/* University Involvement */}
            <section className="cv-section">
              <h2 className="cv-section-title">UNIVERSITY INVOLVEMENT</h2>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "var(--text)", fontSize: "13px", lineHeight: "1.8" }}>
                <li><strong>ICITR Web Development Team</strong> (2026)</li>
                <li><strong>Mobile Application Development Team Member</strong> (Team 25/26)</li>
                <li><strong>IEEE WIE Web Development Team</strong> (2025)</li>
                <li><strong>Faculty Coordinator</strong> — SEDS Mora Chapter (Team 25/26, 2025 – 2026)</li>
              </ul>
            </section>
          </article>
        )}
      </div>
    </main>
  );
}
