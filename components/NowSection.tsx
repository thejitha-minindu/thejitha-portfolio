"use client";

import { SectionLabel } from "./SectionLabel";

export function NowSection() {
  return (
    <section id="now" className="container section" aria-label="Current Status and Focus">
      <SectionLabel code="SYS.05 / NOW">
        CURRENT WORK, RESEARCH & STATUS
      </SectionLabel>

      <div className="now-grid">
        <div className="now-items">
          <div className="now-item">
            <span className="now-item-number">01</span>
            <div>
              <h3>FULL-STACK INDUSTRY SYSTEMS</h3>
              <p>
                Developing the Seller Module for TeaBlendAI (Inivois Global) using Next.js, FastAPI, and MSSQL—designing auction workflows, seller dashboards, and database schemas.
              </p>
            </div>
          </div>

          <div className="now-item">
            <span className="now-item-number">02</span>
            <div>
              <h3>CONFERENCE & CHAPTER WEB PLATFORMS</h3>
              <p>
                Contributing to the design and implementation of responsive web platforms for the ICITR 2026 international conference and IEEE WIE chapter using Next.js and Tailwind CSS.
              </p>
            </div>
          </div>

          <div className="now-item">
            <span className="now-item-number">03</span>
            <div>
              <h3>HARDWARE INTERFACING & MOTION</h3>
              <p>
                Building physical-digital systems like the SandPlotter Smart Coffee Table combining Arduino Uno (GRBL), CNC Shield V3, ESP32 WebSockets, and TFT touch interfaces with CoreXY motion.
              </p>
            </div>
          </div>

          <div className="now-item">
            <span className="now-item-number">04</span>
            <div>
              <h3>AI RESEARCH & CYBERSECURITY</h3>
              <p>
                Investigating U-Net deep learning architectures for cosmological dark matter reconstruction (Research in Progress) alongside participating in national cybersecurity CTF competitions (Medusa 2.0 2nd Runners-up).
              </p>
            </div>
          </div>
        </div>

        <aside className="now-sidebar">
          <div>
            <div className="now-sidebar-title">SYS.STATUS // TELEMETRY & AVAILABILITY</div>
            <div className="now-status-list">
              <div className="now-status-entry">
                <span>ACADEMIC STANDING</span>
                <strong>B.Sc. (Hons) in IT · CGPA: 3.95</strong>
                <div style={{ color: "var(--muted)", fontSize: "10px", marginTop: "2px" }}>
                  University of Moratuwa (2024 – Present)
                </div>
              </div>

              <div className="now-status-entry">
                <span>INTERNSHIP AVAILABILITY</span>
                <strong style={{ color: "var(--accent)" }}>● OPEN FOR PLACEMENT (2026)</strong>
                <div style={{ color: "var(--muted)", fontSize: "10px", marginTop: "2px" }}>
                  Software Engineering Internship
                </div>
              </div>

              <div className="now-status-entry">
                <span>TECHNICAL FOCUS</span>
                <strong>Full-Stack, Hardware & AI</strong>
                <div style={{ color: "var(--muted)", fontSize: "10px", marginTop: "2px" }}>
                  Python · TypeScript · C · FastAPI · Next.js
                </div>
              </div>

              <div className="now-status-entry">
                <span>LOCATION & TIMEZONE</span>
                <strong>Kuliyapitiya, Sri Lanka (UTC +05:30)</strong>
                <div style={{ color: "var(--muted)", fontSize: "10px", marginTop: "2px" }}>
                  Open to Remote & On-Site Roles
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid var(--line)", fontSize: "10px", color: "var(--dim)" }}>
            LAST LAB TELEMETRY SYNC: 2026
          </div>
        </aside>
      </div>
    </section>
  );
}
