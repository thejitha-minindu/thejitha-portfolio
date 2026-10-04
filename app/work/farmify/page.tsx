import type { Metadata } from "next";
import { socialImages } from "@/lib/site";
import Link from "next/link";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { ProjectPagination } from "@/components/ProjectPagination";
import { ProjectCover } from "@/components/ProjectCover";
import { ProjectMediaGallery } from "@/components/ProjectMediaGallery";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Farmify Agricultural Platform — Case Study | Thejitha Wijayanayake",
  description:
    "Web development case study by Thejitha Wijayanayake: Agricultural marketplace & advisory application connecting farmers with resources using React.js & Firebase real-time database.",
  alternates: {
    canonical: "/work/farmify",
  },
  openGraph: {
    images: socialImages,
    type: "article",
    locale: "en_US",
    url: "/work/farmify",
    siteName: "Thejitha Wijayanayake",
    title: "Farmify Agricultural Platform — Case Study | Thejitha Wijayanayake",
    description:
      "Web development case study by Thejitha Wijayanayake: Agricultural marketplace & advisory application connecting farmers with resources using React.js & Firebase real-time database.",
  },
  twitter: {
    images: socialImages,
    card: "summary_large_image",
    title: "Farmify Agricultural Platform — Case Study | Thejitha Wijayanayake",
    description:
      "Web development case study by Thejitha Wijayanayake: Agricultural marketplace & advisory application connecting farmers with resources using React.js & Firebase real-time database.",
  },
};

export default function FarmifyCaseStudy() {
  const project = getProjectBySlug("farmify");

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
            <span style={{ color: "var(--accent)" }}>FARMIFY</span>
          </div>

          <h1 className="cs-title">Farmify</h1>
          <p className="cs-lead">
            A React and Firebase-based web application developed to support farmers by connecting them with agricultural expertise, secure authentication, product listings, and real-time transaction updates.
          </p>

          <div className="cs-meta-grid">
            <div>
              <span>PROJECT TYPE</span>
              <strong>IDEALIZE 2024 Team Project · AIESEC Univ. of Moratuwa</strong>
            </div>
            <div>
              <span>MY CONTRIBUTION</span>
              <strong>Frontend Development, Firebase Integration & Marketplace Views</strong>
            </div>
            <div>
              <span>TECHNOLOGY</span>
              <strong>React.js, JavaScript, Firebase</strong>
            </div>
            <div>
              <span>TIMELINE</span>
              <strong style={{ color: "var(--accent)" }}>June 2024 – August 2024</strong>
            </div>
          </div>
        </header>

        {/* Hero Cover Image (Gracefully rendered when asset is available) */}
        <ProjectCover
          cover={project?.coverImage}
          projectTitle="Farmify — Agricultural Support Platform"
        />

        {/* 1. Overview */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>01 / OVERVIEW</span>
            <span>AGRICULTURAL SUPPORT APPLICATION</span>
          </div>
          <div className="cs-text-body">
            <p>
              Farmify was built as a team project for IDEALIZE 2024, organized by AIESEC in University of Moratuwa, to address practical challenges faced by smallholder farmers in accessing direct agricultural expertise and transparent produce pricing.
            </p>
            <p>
              The platform provides a streamlined web application where farmers can authenticate securely, list crop yields, explore advisory resources, and receive live updates on inquiries and transactions.
            </p>
          </div>
        </section>

        {/* 2. Problem & 3. My Role */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>02 & 03 / ROLE & CONCRETE RESPONSIBILITIES</span>
            <span>FRONTEND & REALTIME INTEGRATION</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Farmer Dashboard & Product Listings</h4>
              <p>
                Built intuitive React.js interface components allowing farmers to publish crop listings, manage produce quantities, and track incoming buyer inquiries.
              </p>
            </div>
            <div className="cs-card">
              <h4>Firebase Real-Time Synchronization</h4>
              <p>
                Configured Firebase Realtime Database connections to deliver instantaneous state updates whenever buyer bids or expert responses were submitted.
              </p>
            </div>
            <div className="cs-card">
              <h4>Authentication & Role Routing</h4>
              <p>
                Integrated Firebase Auth for secure user registration and role separation between farmers, buyers, and agricultural advisors.
              </p>
            </div>
            <div className="cs-card">
              <h4>Responsive UI Polish</h4>
              <p>
                Structured mobile-friendly layout views ensuring agricultural workers on smartphones could navigate forms without desktop overhead.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Technology Stack */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>04 / TECHNOLOGY STACK</span>
            <span>CLIENT & CLOUD DATABASE</span>
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
                  <td><strong>Frontend UI</strong></td>
                  <td>React.js (JavaScript)</td>
                  <td>Modular component rendering enabling dynamic form interactions and reactive state management.</td>
                </tr>
                <tr>
                  <td><strong>Backend / DB</strong></td>
                  <td>Firebase (Auth & Realtime DB)</td>
                  <td>Serverless cloud infrastructure enabling rapid authentication, document storage, and live synchronization.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 05 / Media Gallery (Gracefully omitted if no assets exist) */}
        <ProjectMediaGallery
          media={project?.media}
          sectionNumber="05"
          sectionTitle="FARMIFY APPLICATION GALLERY"
          sectionSubtitle="RESPONSIVE APPLICATION INTERFACES"
        />

        {/* 5. What I Learned */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>06 / WHAT I LEARNED</span>
            <span>REAL-TIME SYSTEM PRACTICES</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>State Management with Firebase</h4>
              <p>
                Handling real-time subscriptions without memory leaks or unnecessary re-renders taught key best practices in React useEffect lifecycle management.
              </p>
            </div>
            <div className="cs-card">
              <h4>User-Centric Simplification</h4>
              <p>
                Building for agricultural users highlighted the necessity of removing unnecessary UI complexity and minimizing friction in core product listing tasks.
              </p>
            </div>
          </div>
        </section>

        {/* Project Pagination */}
        <div className="container">
          <ProjectPagination
            previous={{
              title: "IEEE WIE University of Moratuwa",
              route: "/work/wie",
            }}
            next={{
              title: "Deep Learning the Cosmic Web",
              route: "/research/cosmic-web",
            }}
            returnRoute="/#work"
            returnLabel="SELECTED WORK"
          />
        </div>
      </main>
    </CaseStudyShell>
  );
}
