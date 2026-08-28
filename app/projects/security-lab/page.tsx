import type { Metadata } from "next";
import Link from "next/link";
import { SecurityTerminalViz } from "@/components/SecurityTerminalViz";

export const metadata: Metadata = {
  title: "Medusa 2.0 CTF & Security Lab // CASE STUDY — THEJITHA // LAB",
  description:
    "Cybersecurity case study: 2nd Runners-up at Medusa 2.0 CTF, Linux POSIX capabilities auditing, web vulnerability triage, and defensive system hardening.",
};

export default function SecurityLabCaseStudy() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--background)", color: "var(--text)", paddingBottom: "100px" }}>
      {/* Top Header */}
      <div className="container cs-header">
        <div className="cs-breadcrumbs">
          <Link href="/">THEJITHA // LAB</Link>
          <span>/</span>
          <Link href="/#work">SYS.02 / PROJECTS</Link>
          <span>/</span>
          <span style={{ color: "var(--accent)" }}>SECURITY-LAB</span>
        </div>

        <h1 className="cs-title">Medusa 2.0 CTF & Security Lab</h1>
        <p className="cs-lead">
          Cybersecurity challenge triage and security sandbox analysis. Grounded in achieving 2nd Runners-up at the Medusa 2.0 National CTF competition organized by the Electronic and Computer Security Club (ECSC) of the University of Kelaniya.
        </p>

        <div className="cs-meta-grid">
          <div>
            <span>COMPETITION / SCOPE</span>
            <strong style={{ color: "var(--accent)" }}>2nd Runners-up · Medusa 2.0 (2025)</strong>
          </div>
          <div>
            <span>FOCUS AREAS</span>
            <strong>CTF Triage, Linux Capabilities, Web Security, Defense</strong>
          </div>
          <div>
            <span>TOOLCHAIN</span>
            <strong>Linux, Nmap, Bash, Python, POSIX Capabilities</strong>
          </div>
          <div>
            <span>STATUS</span>
            <strong style={{ color: "var(--accent)" }}>● Competition Verified & Tested</strong>
          </div>
        </div>
      </div>

      {/* Section 1: Problem & System Context */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>01 / CTF COMPETITION CONTEXT & OBJECTIVES</span>
          <span>SYS.CONTEXT</span>
        </div>
        <div className="cs-text-body">
          <p>
            Capture The Flag (CTF) competitions simulate realistic adversarial cybersecurity scenarios, requiring participants to identify hidden attack vectors, evaluate host misconfigurations, and exploit logic vulnerabilities within constrained time limits.
          </p>
          <p>
            At Medusa 2.0, our team analyzed network topologies, reversed binary logic, audited web endpoints, and evaluated Linux privilege escalation pathways, securing 2nd Runners-up nationwide.
          </p>
        </div>
      </section>

      {/* Section 2: Interactive Terminal Console */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>02 / INTERACTIVE TERMINAL RECON & CTF TRIAGE</span>
          <span>SYS.TERMINAL</span>
        </div>
        <div className="cs-text-body">
          <p>
            Interact with the investigation console below. Switch tabs to inspect network discovery, API vulnerability identification, Linux capability escalation, and system hardening:
          </p>
        </div>

        <SecurityTerminalViz />
      </section>

      {/* Section 3: Technical Analysis & Defense Principles */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>03 / TECHNICAL ANALYSIS & REMEDIATION STRATEGIES</span>
          <span>SYS.ANALYSIS</span>
        </div>
        <div className="cs-text-body">
          <p>
            Core security principles applied across competitive CTF challenges and defensive host administration:
          </p>
        </div>

        <table className="decision-table">
          <thead>
            <tr>
              <th>VULNERABILITY VECTOR</th>
              <th>INVESTIGATION METHOD</th>
              <th>DEFENSIVE REMEDIATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Network Surface Exposure</strong></td>
              <td>Nmap service version detection (`-sV`) and default script scans (`-sC`).</td>
              <td>Enforce strict firewall rules (UFW default deny incoming), bind internal services to loopback (`127.0.0.1`), and proxy traffic through TLS reverse proxies.</td>
            </tr>
            <tr>
              <td><strong>Unsanitized API Inputs</strong></td>
              <td>Payload injection testing on HTTP JSON endpoints with boundary conditions.</td>
              <td>Adopt parameterized prepared statements and strict Pydantic/ORM data validation models to neutralize injection vectors.</td>
            </tr>
            <tr>
              <td><strong>POSIX Capabilities (`CAP_SETUID`)</strong></td>
              <td>Auditing extended file attributes using `getcap -r / 2&gt;/dev/null`.</td>
              <td>Strip unnecessary capabilities from system binaries using `setcap -r` and run background processes with dedicated unprivileged user accounts.</td>
            </tr>
            <tr>
              <td><strong>Host Hardening</strong></td>
              <td>Configuration reviews of SSH daemon, system permissions, and services.</td>
              <td>Disable root SSH login, enforce key-based authentication, and enable AppArmor confinement profiles.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Section 4: Key Competencies */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>04 / CORE COMPETENCIES & APPLIED LEARNING</span>
          <span>SYS.COMPETENCIES</span>
        </div>
        <div className="cs-grid-2col">
          <div className="cs-card">
            <h4>Adversarial Mindset & Threat Identification</h4>
            <p>
              Understanding offensive attack surfaces allows software engineers to design defensive architectures that anticipate edge cases and prevent vulnerabilities during initial development.
            </p>
          </div>
          <div className="cs-card">
            <h4>Linux Internals & Permission Hygiene</h4>
            <p>
              Deep familiarity with Linux process trees, UID/GID inheritance, POSIX capability sets, and secure filesystem permission hierarchies.
            </p>
          </div>
          <div className="cs-card">
            <h4>Secure API & Web Architecture</h4>
            <p>
              Designing web services that enforce strict input validation, avoid information leakage in error responses, and apply the principle of least privilege.
            </p>
          </div>
          <div className="cs-card">
            <h4>Rapid Problem Solving Under Time Constraints</h4>
            <p>
              Systematic triage and analytical problem-solving skills honed through competitive national-level CTF competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "40px", fontFamily: '"Courier New", monospace', fontSize: "11px" }}>
        <Link href="/projects/cosmic-web" style={{ color: "var(--muted)" }}>
          ← PREVIOUS: COSMIC WEB RESEARCH
        </Link>
        <Link href="/#work" style={{ color: "var(--accent)" }}>
          RETURN TO PROJECT ARCHIVE →
        </Link>
      </div>
    </main>
  );
}
