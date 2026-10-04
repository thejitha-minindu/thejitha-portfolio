import type { Metadata } from "next";
import { socialImages } from "@/lib/site";
import Link from "next/link";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { ProjectPagination } from "@/components/ProjectPagination";
import { ProjectCover } from "@/components/ProjectCover";
import { ProjectMediaGallery } from "@/components/ProjectMediaGallery";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "IEEE WIE University of Moratuwa Website — Case Study | Thejitha Wijayanayake",
  description:
    "Web development case study by Thejitha Wijayanayake: Official platform for IEEE Women in Engineering (WIE) Student Branch Affinity Group, University of Moratuwa built with Next.js & Tailwind CSS.",
  alternates: {
    canonical: "/work/wie",
  },
  openGraph: {
    images: socialImages,
    type: "article",
    locale: "en_US",
    url: "/work/wie",
    siteName: "Thejitha Wijayanayake",
    title: "IEEE WIE University of Moratuwa Website — Case Study | Thejitha Wijayanayake",
    description:
      "Web development case study by Thejitha Wijayanayake: Official platform for IEEE Women in Engineering (WIE) Student Branch Affinity Group, University of Moratuwa built with Next.js & Tailwind CSS.",
  },
  twitter: {
    images: socialImages,
    card: "summary_large_image",
    title: "IEEE WIE University of Moratuwa Website — Case Study | Thejitha Wijayanayake",
    description:
      "Web development case study by Thejitha Wijayanayake: Official platform for IEEE Women in Engineering (WIE) Student Branch Affinity Group, University of Moratuwa built with Next.js & Tailwind CSS.",
  },
};

export default function WIEWebsiteCaseStudy() {
  const project = getProjectBySlug("wie");

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
              <strong>Next.js, TypeScript, Tailwind CSS, GitHub</strong>
            </div>
            <div>
              <span>TIMELINE</span>
              <strong style={{ color: "var(--accent)" }}>July 2025 – September 2025</strong>
            </div>
          </div>
        </header>

        {/* Hero Cover Image (Gracefully rendered when asset is available) */}
        <ProjectCover
          cover={project?.coverImage}
          projectTitle="IEEE WIE University of Moratuwa Website"
        />

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
                Created structured listing layouts for past and upcoming initiatives, workshops, webinars, and hackathons with filterable categories.
              </p>
            </div>
            <div className="cs-card">
              <h4>Executive Committee Directory</h4>
              <p>
                Implemented clean directory components profiling chapter officers, faculty advisors, and volunteer leads.
              </p>
            </div>
            <div className="cs-card">
              <h4>Performance & Responsive Polish</h4>
              <p>
                Optimized layouts using Tailwind CSS for fluid responsiveness across smart devices, ensuring fast load times and clean typography.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Technology Stack */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>04 / TECHNOLOGY STACK</span>
            <span>MODERN WEB STACK</span>
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
                  <td>Enables efficient client-side routing, static pre-rendering, and modular component reuse.</td>
                </tr>
                <tr>
                  <td><strong>Styling</strong></td>
                  <td>Tailwind CSS</td>
                  <td>Enables clean responsive utility design, rapid layout iteration, and consistent spacing.</td>
                </tr>
                <tr>
                  <td><strong>Collaboration</strong></td>
                  <td>GitHub</td>
                  <td>Facilitates version control, issue tracking, and peer code reviews across chapter developers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 05 / Media Gallery (Gracefully omitted if no assets exist) */}
        <ProjectMediaGallery
          media={project?.media}
          sectionNumber="05"
          sectionTitle="CHAPTER PLATFORM GALLERY"
          sectionSubtitle="IMPLEMENTED WEBPAGE SCREENSHOTS"
        />

        {/* 6. What I Learned */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>06 / WHAT I LEARNED</span>
            <span>COMMUNITY-DRIVEN ENGINEERING</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Community Identity</h4>
              <p>
                Designing for a student chapter required balancing official IEEE brand guidelines with an engaging, vibrant personality that appeals to incoming undergraduates.
              </p>
            </div>
            <div className="cs-card">
              <h4>Collaborative Delivery</h4>
              <p>
                Delivering features in a team environment sharpened code review habits, Git branch management, and cross-functional coordination with content creators.
              </p>
            </div>
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
