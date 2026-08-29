import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { ProjectPagination } from "@/components/ProjectPagination";

export const metadata: Metadata = {
  title: "IEEE WIE Case Study",
  description:
    "Official website for IEEE Women in Engineering Student Branch Affinity Group of University of Moratuwa built with Next.js and Tailwind CSS.",
};

export default function WIEWebsiteCaseStudy() {
  return (
    <CaseStudyShell>
      <main>
        {/* Top Header */}
        <header className="container cs-header">
          <div className="cs-breadcrumbs">
            <Link href="/">THEJITHA</Link>
            <span>/</span>
            <Link href="/#work">SELECTED WORK</Link>
            <span>/</span>
            <span style={{ color: "var(--accent)" }}>IEEE-WIE</span>
          </div>

          <h1 className="cs-title">IEEE WIE University of Moratuwa Website</h1>
          <p className="cs-lead">
            Developed the IEEE WIE University of Moratuwa website to showcase the chapter&apos;s mission, events and achievements, promoting initiatives and empowering women in engineering across Sri Lanka.
          </p>

          <div className="cs-meta-grid">
            <div>
              <span>ORGANIZATION</span>
              <strong>IEEE WIE University of Moratuwa (Team Project)</strong>
            </div>
            <div>
              <span>MY CONTRIBUTION</span>
              <strong>Web Development, Frontend Design, Event Archive Implementation</strong>
            </div>
            <div>
              <span>TECHNOLOGY</span>
              <strong>Next.js, Tailwind CSS, GitHub</strong>
            </div>
            <div>
              <span>TIMELINE</span>
              <strong style={{ color: "var(--accent)" }}>July 2025 – September 2025</strong>
            </div>
          </div>
        </header>

        {/* 1. Overview */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>01 / OVERVIEW</span>
            <span>CHAPTER PORTAL & COMMUNITY REACH</span>
          </div>
          <div className="cs-text-body">
            <p>
              The IEEE Women in Engineering (WIE) Student Branch Affinity Group at the University of Moratuwa is dedicated to empowering female engineers through educational workshops, mentoring programs, panel discussions, and competitive challenges such as SHErlock.
            </p>
            <p>
              The website serves as a central digital platform to highlight flagship initiatives, document chapter achievements, introduce the executive committee, and facilitate outreach across engineering universities in Sri Lanka.
            </p>
          </div>
        </section>

        {/* 2. Problem & 3. My Role */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>02 & 03 / ROLE & CONCRETE RESPONSIBILITIES</span>
            <span>FRONTEND DEVELOPMENT & LAYOUT</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Chapter Mission & Hero Layout</h4>
              <p>
                Designed and built welcoming, responsive hero banners and mission statement sections reflecting the chapter&apos;s core values and community goals.
              </p>
            </div>
            <div className="cs-card">
              <h4>Event Showcase & Archives</h4>
              <p>
                Engineered modular event listing components and photo gallery layouts documenting past technical workshops, webinars, and school outreach programs.
              </p>
            </div>
            <div className="cs-card">
              <h4>Executive Committee Directory</h4>
              <p>
                Created structured member directory cards detailing student leadership roles and initiatives for the term.
              </p>
            </div>
            <div className="cs-card">
              <h4>Performance & Mobile Responsiveness</h4>
              <p>
                Ensured fluid responsive styling using Tailwind CSS across mobile smartphones, tablets, and desktop workstations.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Technology */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>04 / TECHNOLOGY STACK</span>
            <span>TOOLS & FRAMEWORKS</span>
          </div>
          <table className="decision-table">
            <thead>
              <tr>
                <th>COMPONENT</th>
                <th>CHOICE</th>
                <th>ENGINEERING RATIONALE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Frontend Framework</strong></td>
                <td>Next.js</td>
                <td>Component reusability across event showcases, committee cards, and fast page rendering.</td>
              </tr>
              <tr>
                <td><strong>Styling</strong></td>
                <td>Tailwind CSS</td>
                <td>Enables rapid responsive utility styling and consistent brand typography.</td>
              </tr>
              <tr>
                <td><strong>Version Control</strong></td>
                <td>GitHub</td>
                <td>Facilitates team coordination and branch reviews.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 5. What I Learned */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>05 / WHAT I LEARNED</span>
            <span>TEAM COLLABORATION</span>
          </div>
          <div className="cs-text-body">
            <p>
              Building the IEEE WIE portal strengthened my ability to collaborate effectively within a student engineering team, translate chapter branding requirements into accessible UI components, and maintain high standards of code organization.
            </p>
          </div>
        </section>

        {/* Project Pagination */}
        <div className="container">
          <ProjectPagination
            previous={{
              title: "ICITR 2026 Conference Website",
              route: "/work/icitr-2026",
            }}
            next={{
              title: "Farmify Agricultural Platform",
              route: "/work/farmify",
            }}
            returnRoute="/#work"
            returnLabel="SELECTED WORK"
          />
        </div>
      </main>
    </CaseStudyShell>
  );
}
