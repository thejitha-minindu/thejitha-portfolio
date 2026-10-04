import type { Metadata } from "next";
import { socialImages } from "@/lib/site";
import Link from "next/link";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { ProjectPagination } from "@/components/ProjectPagination";
import { ProjectCover } from "@/components/ProjectCover";
import { ProjectMediaGallery } from "@/components/ProjectMediaGallery";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "ICITR 2026 Case Study | Thejitha Wijayanayake",
  description:
    "Web development case study by Thejitha Wijayanayake: Official platform for International Conference on Information Technology Research (Faculty of IT, University of Moratuwa) using Next.js & Tailwind CSS.",
  alternates: {
    canonical: "/work/icitr-2026",
  },
  openGraph: {
    images: socialImages,
    type: "article",
    locale: "en_US",
    url: "/work/icitr-2026",
    siteName: "Thejitha Wijayanayake",
    title: "ICITR 2026 Conference Website — Case Study | Thejitha Wijayanayake",
    description:
      "Web development case study by Thejitha Wijayanayake: Official platform for International Conference on Information Technology Research (Faculty of IT, University of Moratuwa) using Next.js & Tailwind CSS.",
  },
  twitter: {
    images: socialImages,
    card: "summary_large_image",
    title: "ICITR 2026 Conference Website — Case Study | Thejitha Wijayanayake",
    description:
      "Web development case study by Thejitha Wijayanayake: Official platform for International Conference on Information Technology Research (Faculty of IT, University of Moratuwa) using Next.js & Tailwind CSS.",
  },
};

export default function ICITRCaseStudy() {
  const project = getProjectBySlug("icitr-2026");

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
              <strong>Next.js, TypeScript, Tailwind CSS, GitHub</strong>
            </div>
            <div>
              <span>STATUS & TIMELINE</span>
              <strong style={{ color: "var(--warn)" }}>June 2026 – Present (In Development)</strong>
            </div>
          </div>
        </header>

        {/* Hero Cover Image (Gracefully rendered when asset is available) */}
        <ProjectCover
          cover={project?.coverImage}
          projectTitle="ICITR 2026 Conference Website"
        />

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
              <li>Showcasing keynote speaker profiles, workshop agendas, and six technical track categories clearly.</li>
              <li>Ensuring mobile responsiveness so attendees and reviewers can browse schedules seamlessly.</li>
              <li>Enabling clean team collaboration with faculty coordinators through GitHub branch reviews.</li>
            </ul>
          </div>
        </section>

        {/* 3. My Role */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>03 / MY ROLE & CONCRETE RESPONSIBILITIES</span>
            <span>FRONTEND ARCHITECTURE & COMPONENTS</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Responsive Page Layouts</h4>
              <p>
                Developing responsive Next.js layout structures ensuring crisp presentation across desktop, tablet, and mobile browsers.
              </p>
            </div>
            <div className="cs-card">
              <h4>Speaker & Track Cataloging</h4>
              <p>
                Building reusable components to showcase plenary speakers, workshop descriptions, and the six research track categories.
              </p>
            </div>
            <div className="cs-card">
              <h4>Author Guidelines & Timeline</h4>
              <p>
                Implementing clear timeline components for manuscript submission milestones, camera-ready deadlines, and registration fees.
              </p>
            </div>
            <div className="cs-card">
              <h4>Collaborative GitHub Workflow</h4>
              <p>
                Collaborating with faculty web team members using Git branches, code reviews, and structured PR workflows to maintain code quality.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Technology */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>04 / TECHNOLOGY STACK</span>
            <span>CHOICE OF MODERN FRONTEND TOOLS</span>
          </div>
          <div className="decision-table-wrap">
            <table className="decision-table">
              <thead>
                <tr>
                  <th>LAYER</th>
                  <th>TECHNOLOGY</th>
                  <th>ENGINEERING RATIONALE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Framework</strong></td>
                  <td>Next.js, TypeScript</td>
                  <td>Enables fast static page generation, server rendering where required, and reliable TypeScript type safety.</td>
                </tr>
                <tr>
                  <td><strong>Styling</strong></td>
                  <td>Tailwind CSS</td>
                  <td>Provides consistent design utility tokens, responsive grid layouts, and rapid UI development.</td>
                </tr>
                <tr>
                  <td><strong>Version Control</strong></td>
                  <td>GitHub</td>
                  <td>Supports team collaboration, structured feature branching, and pull request reviews.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 05 / Media Gallery (Gracefully omitted if no assets exist) */}
        <ProjectMediaGallery
          media={project?.media}
          sectionNumber="05"
          sectionTitle="CONFERENCE INTERFACES & PAGES"
          sectionSubtitle="IMPLEMENTED PAGES & RESPONSIVE LAYOUTS"
        />

        {/* 5. Status & What I Learned */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>06 / CURRENT STATUS & COLLABORATION</span>
            <span>TEAM DELIVERY</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Current Status</h4>
              <p>
                The platform is actively in development leading up to the conference release cycle. Pages are being staged and reviewed in alignment with faculty editorial timelines.
              </p>
            </div>
            <div className="cs-card">
              <h4>Key Takeaway</h4>
              <p>
                Working on an institutional university conference website reinforces the importance of accessible design, strict timeline adherence, and clean team communication across multidisciplinary committees.
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
              title: "IEEE WIE University of Moratuwa",
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
