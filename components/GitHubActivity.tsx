"use client";

import { SectionLabel } from "./SectionLabel";

export function GitHubActivity() {
  return (
    <section className="container section" aria-label="Version Control & Code Repositories">
      <SectionLabel code="SYS.04 / CODE & OPEN SOURCE">
        VERSION CONTROL & CODE REPOSITORIES
      </SectionLabel>

      <div
        style={{
          marginTop: "32px",
          background: "var(--surface)",
          border: "1px solid var(--line)",
          padding: "36px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)", marginBottom: "8px" }}>
            GITHUB // @thejitha-minindu
          </div>
          <h3 style={{ margin: "0 0 8px", fontSize: "22px", fontWeight: 500, color: "var(--text-bright)" }}>
            Explore Verified Repositories & Open Source Code
          </h3>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: "14px", maxWidth: "600px" }}>
            View code repositories for university coursework, hardware motion controller configurations, and full-stack software systems.
          </p>
        </div>

        <a
          href="https://github.com/thejitha-minindu"
          target="_blank"
          rel="noreferrer"
          className="button button-primary"
          style={{ whiteSpace: "nowrap" }}
        >
          <span>VIEW GITHUB</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
