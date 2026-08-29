import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { ProjectPagination } from "@/components/ProjectPagination";

export const metadata: Metadata = {
  title: "Farmify Agricultural Platform — Case Study | Thejitha Wijayanayake",
  description:
    "Web development case study by Thejitha Wijayanayake: Agricultural marketplace & advisory application connecting farmers with resources using React.js & Firebase real-time database.",
  alternates: {
    canonical: "/work/farmify",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "/work/farmify",
    siteName: "Thejitha Wijayanayake",
    title: "Farmify Agricultural Platform — Case Study | Thejitha Wijayanayake",
    description:
      "Web development case study by Thejitha Wijayanayake: Agricultural marketplace & advisory application connecting farmers with resources using React.js & Firebase real-time database.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmify Agricultural Platform — Case Study | Thejitha Wijayanayake",
    description:
      "Web development case study by Thejitha Wijayanayake: Agricultural marketplace & advisory application connecting farmers with resources using React.js & Firebase real-time database.",
  },
};

export default function FarmifyCaseStudy() {
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
              <strong>Team Project</strong>
            </div>
            <div>
              <span>MY CONTRIBUTION</span>
              <strong>Frontend Development, Firebase Integration & Marketplace Views</strong>
            </div>
            <div>
              <span>TECHNOLOGY</span>
              <strong>React.js, Firebase</strong>
            </div>
            <div>
              <span>TIMELINE</span>
              <strong style={{ color: "var(--accent)" }}>June 2024 – August 2024</strong>
            </div>
          </div>
        </header>

        {/* 1. Overview */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>01 / OVERVIEW</span>
            <span>AGRICULTURAL SUPPORT APPLICATION</span>
          </div>
          <div className="cs-text-body">
            <p>
              Farmify was built as a team project in 2024 to address practical challenges faced by smallholder farmers in accessing direct agricultural expertise and transparent produce pricing.
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
                Integrated the Firebase client SDK to synchronize product listings and marketplace updates in real-time across active browser sessions.
              </p>
            </div>
            <div className="cs-card">
              <h4>Authentication & User Workflows</h4>
              <p>
                Implemented secure Firebase Authentication flows for farmer logins, profile management, and role-based interface views.
              </p>
            </div>
            <div className="cs-card">
              <h4>Mobile-Friendly UI</h4>
              <p>
                Designed lightweight, clean CSS layouts ensuring smooth performance and fast interaction across mobile devices.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Technology */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>04 / TECHNOLOGY STACK</span>
            <span>REACT & SERVERLESS SERVICES</span>
          </div>
          <div className="decision-table-wrap">
            <table className="decision-table">
              <thead>
                <tr>
                  <th>COMPONENT</th>
                  <th>TECHNOLOGY</th>
                  <th>ENGINEERING RATIONALE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Frontend</strong></td>
                  <td>React.js</td>
                  <td>Enables interactive single-page component rendering and reactive state updates.</td>
                </tr>
                <tr>
                  <td><strong>Backend & Database</strong></td>
                  <td>Firebase</td>
                  <td>Provides real-time document synchronization and managed authentication without server maintenance overhead.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. What I Learned */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>05 / WHAT I LEARNED</span>
            <span>KEY TAKEAWAYS</span>
          </div>
          <div className="cs-text-body">
            <p>
              Farmify was an early foundational project in component-driven UI architecture, reactive client state management with React, and integrating serverless cloud backends for real-time applications.
            </p>
          </div>
        </section>

        {/* Project Pagination */}
        <div className="container">
          <ProjectPagination
            previous={{
              title: "IEEE WIE University of Moratuwa Website",
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
