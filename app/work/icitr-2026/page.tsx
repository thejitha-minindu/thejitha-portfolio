import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { ProjectPagination } from "@/components/ProjectPagination";

export const metadata: Metadata = {
  title: "ICITR 2026 Case Study",
  description:
    "Official website for the International Conference on Information Technology Research (Faculty of IT, University of Moratuwa) using Next.js, Tailwind CSS, and GitHub.",
};

export default function ICITRCaseStudy() {
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
            <span style={{ color: "var(--accent)" }}>ICITR-2026</span>
          </div>

          <h1 className="cs-title">ICITR 2026 Conference Website</h1>
          <p className="cs-lead">
            Developing the official website for the International Conference on Information Technology Research (ICITR), organized by the Faculty of Information Technology, University of Moratuwa.
          </p>

          <div className="cs-meta-grid">
            <div>
              <span>ORGANIZATION</span>
              <strong>Faculty of Information Technology, University of Moratuwa</strong>
            </div>
            <div>
              <span>MY CONTRIBUTION</span>
              <strong>Responsive Web Design, Component Architecture & Content Workflows</strong>
            </div>
            <div>
              <span>TECHNOLOGY</span>
              <strong>Next.js, Tailwind CSS, GitHub</strong>
            </div>
            <div>
              <span>STATUS & TIMELINE</span>
              <strong style={{ color: "var(--warn)" }}>June 2026 – Present (In Development)</strong>
            </div>
          </div>
        </header>

        {/* 1. Overview */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>01 / OVERVIEW</span>
            <span>ACADEMIC CONFERENCE PLATFORM</span>
          </div>
          <div className="cs-text-body">
            <p>
              The International Conference on Information Technology Research (ICITR) is the annual flagship academic conference hosted by the Faculty of Information Technology at the University of Moratuwa.
            </p>
            <p>
              The conference brings together international researchers, keynote speakers, and authors submitting peer-reviewed research papers across computer science, artificial intelligence, software engineering, and information systems.
            </p>
          </div>
        </section>

        {/* 2. Problem / Context */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>02 / PROBLEM & CONTEXT</span>
            <span>COMMUNICATION & TIMELINE REQUIREMENTS</span>
          </div>
          <div className="cs-text-body">
            <p>
              An international academic conference website must serve diverse global audiences across all device sizes with high readability and rapid load times. Key requirements include:
            </p>
            <ul>
              <li>Providing structured information for the Call for Papers (CFP), submission guidelines, and author deadlines.</li>
              <li>Showcasing keynote speaker profiles, workshop agendas, and track categories clearly.</li>
              <li>Ensuring mobile responsiveness so attendees and reviewers can browse schedules seamlessly.</li>
              <li>Enabling clean team collaboration with faculty coordinators through GitHub branch reviews.</li>
            </ul>
          </div>
        </section>

        {/* 3. My Role */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>03 / MY ROLE & CONCRETE CONTRIBUTIONS</span>
            <span>WEB TEAM MEMBER</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Responsive Layout Implementation</h4>
              <p>
                Contributing to the design and implementation of responsive page layouts in Next.js and Tailwind CSS covering conference overviews, tracks, keynote showcases, and guidelines.
              </p>
            </div>
            <div className="cs-card">
              <h4>Speaker & Workshop Profiles</h4>
              <p>
                Building modular components to cleanly catalog international keynote speakers, research tracks, session timelines, and workshop agendas.
              </p>
            </div>
            <div className="cs-card">
              <h4>Paper Submission & Announcements</h4>
              <p>
                Implementing announcement banners, important date reminders, and paper submission information for prospective authors.
              </p>
            </div>
            <div className="cs-card">
              <h4>Team Collaboration via GitHub</h4>
              <p>
                Collaborating within the student web development team using GitHub pull request workflows, branch reviews, and responsive component testing.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Technology */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>04 / TECHNOLOGY STACK</span>
            <span>MODERN WEB TOOLCHAIN</span>
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
                <td>Enables fast static page rendering for conference information, modular components, and optimal SEO.</td>
              </tr>
              <tr>
                <td><strong>Styling & Layout</strong></td>
                <td>Tailwind CSS</td>
                <td>Provides consistent typographic scale, accessible color contrast, and rapid mobile-first responsiveness.</td>
              </tr>
              <tr>
                <td><strong>Version Control</strong></td>
                <td>GitHub</td>
                <td>Enables structured team collaboration, branch staging, and pull request reviews across developers.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 5. What I Built & Challenges */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>05 & 06 / WHAT WE ARE BUILDING & ONGOING PROGRESS</span>
            <span>STATUS: IN DEVELOPMENT</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Current Development Status</h4>
              <p>
                The platform is actively in development as conference tracks, keynote confirmations, and review timelines are finalized by the faculty committee. We are implementing structured layout templates for ease of content updates.
              </p>
            </div>
            <div className="cs-card">
              <h4>What I Am Learning</h4>
              <p>
                Working on official university web infrastructure develops practical skills in building accessible, mobile-first academic web portals while coordinating closely with faculty stakeholders and peer student engineers.
              </p>
            </div>
          </div>
        </section>

        {/* Project Pagination */}
        <div className="container">
          <ProjectPagination
            previous={{
              title: "SandPlotter Smart Coffee Table",
              route: "/work/sandplotter",
            }}
            next={{
              title: "IEEE WIE University of Moratuwa Website",
              route: "/work/wie",
            }}
            returnRoute="/#work"
            returnLabel="SELECTED WORK"
          />
        </div>
      </main>
    </CaseStudyShell>
  );
}
