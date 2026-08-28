import type { Metadata } from "next";
import Link from "next/link";
import { ProjectPagination } from "@/components/ProjectPagination";
import { TeaBlendArchViz } from "@/components/TeaBlendArchViz";

export const metadata: Metadata = {
  title: "TeaBlendAI — Case Study | Thejitha Wijayanayake",
  description:
    "Engineering case study for TeaBlendAI: AI-powered tea auction platform developed with Inivois Global using Next.js, FastAPI, and MSSQL.",
};

export default function TeaBlendCaseStudy() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--background)", color: "var(--text)", paddingBottom: "120px" }}>
      {/* Top Header */}
      <header className="container cs-header">
        <div className="cs-breadcrumbs">
          <Link href="/">THEJITHA</Link>
          <span>/</span>
          <Link href="/#work">SELECTED WORK</Link>
          <span>/</span>
          <span style={{ color: "var(--accent)" }}>TEABLEND-AI</span>
        </div>

        <h1 className="cs-title">TeaBlendAI</h1>
        <p className="cs-lead">
          An AI-powered web application developed to modernize the tea trading industry through a digital auction system and an integrated AI chatbot. It provides role-based access, live and scheduled auction management, seller dashboards and an MSSQL-backed platform connecting tea producers with buyers.
        </p>

        <div className="cs-meta-grid">
          <div>
            <span>PROJECT TYPE</span>
            <strong>Industry Project · Inivois Global (Team Project)</strong>
          </div>
          <div>
            <span>MY CONTRIBUTION</span>
            <strong>Seller Module, Auction Workflows, Frontend, API & DB Modelling</strong>
          </div>
          <div>
            <span>TECHNOLOGY</span>
            <strong>Next.js, FastAPI, MSSQL</strong>
          </div>
          <div>
            <span>TIMELINE</span>
            <strong style={{ color: "var(--accent)" }}>December 2025 – June 2026</strong>
          </div>
        </div>
      </header>

      {/* 1. Overview */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>01 / OVERVIEW</span>
          <span>INDUSTRY CONTEXT</span>
        </div>
        <div className="cs-text-body">
          <p>
            Tea trading represents a cornerstone of Sri Lanka&apos;s agricultural export economy. Traditionally, tea lot cataloging, quality grading, and auctioning have relied heavily on manual paperwork and physical floor bidding.
          </p>
          <p>
            TeaBlendAI was developed in collaboration with Inivois Global to modernize this ecosystem into a digital marketplace. The platform provides structured role-based access for tea producers, registered buyers, and administrators, offering scheduled auction events, seller dashboards, and an integrated AI chatbot assistant to guide participants.
          </p>
        </div>
      </section>

      {/* 2. Problem / Context */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>02 / PROBLEM & CONTEXT</span>
          <span>CHALLENGES IN TEA AUCTIONS</span>
        </div>
        <div className="cs-text-body">
          <p>
            Tea estates generate discrete seasonal tea lots with distinct elevation, grade, moisture, and tasting attributes. Managing hundreds of lots across scheduled auction sessions requires:
          </p>
          <ul style={{ color: "#b7b9b4", fontSize: "16px", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px" }}>
            <li>A systematic way for estate managers and tea sellers to catalog lots and submit reserve prices before auction deadlines.</li>
            <li>Clear auction scheduling and state management (drafting lots, scheduling auctions, live bidding cycles, and closing settlements).</li>
            <li>Role-based access boundaries to ensure tea producers control only their cataloged lots and trade reports.</li>
            <li>A robust relational database to maintain transactional consistency across all cataloged lots and auction trades.</li>
          </ul>
        </div>
      </section>

      {/* 3. My Role */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>03 / MY ROLE & CONCRETE RESPONSIBILITIES</span>
          <span>SELLER MODULE & CORE ARCHITECTURE</span>
        </div>
        <div className="cs-grid-2col">
          <div className="cs-card">
            <h4>Seller Dashboard Development</h4>
            <p>
              Designed and implemented the full seller dashboard user interface in Next.js, enabling tea producers to register estate details, catalog tea lots, inspect historical trade logs, and review auction timelines.
            </p>
          </div>
          <div className="cs-card">
            <h4>Auction Management Workflows</h4>
            <p>
              Built the workflows and state handling logic for scheduling tea lot auctions, configuring minimum reserve increments, and transitioning lots between scheduled and completed phases.
            </p>
          </div>
          <div className="cs-card">
            <h4>Backend API Design (FastAPI)</h4>
            <p>
              Engineered structured REST API endpoints using FastAPI in Python with strict Pydantic payload validation and role-based authentication dependencies for seller actions.
            </p>
          </div>
          <div className="cs-card">
            <h4>Database Modelling (MSSQL)</h4>
            <p>
              Designed normalized MSSQL relational schemas for estate profiles, tea lot specifications, auction schedules, and trade histories with proper foreign key constraints.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Technology */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>04 / TECHNOLOGY STACK</span>
          <span>ARCHITECTURE & TOOLS</span>
        </div>
        <div className="cs-text-body">
          <p>
            The technology stack was chosen to provide responsive client dashboards, fast asynchronous backend APIs, and enterprise relational reliability:
          </p>
        </div>

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
              <td><strong>Frontend</strong></td>
              <td>Next.js</td>
              <td>Provides component-driven UI architecture, efficient client routing, and responsive dashboard layouts for tea producers.</td>
            </tr>
            <tr>
              <td><strong>Backend API</strong></td>
              <td>FastAPI (Python)</td>
              <td>Offers asynchronous request execution, automatic OpenAPI schema documentation, and robust request validation for auction workflows.</td>
            </tr>
            <tr>
              <td><strong>Database</strong></td>
              <td>Microsoft SQL Server (MSSQL)</td>
              <td>Enterprise relational database ensuring ACID transactional integrity, relational schema enforcement, and reliable ledger storage.</td>
            </tr>
            <tr>
              <td><strong>AI Assistant</strong></td>
              <td>AI Chatbot</td>
              <td>Integrated chatbot assistant to answer user questions, explain auction rules, and assist participants navigating the marketplace.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 5. What I Built & Interactive Visualizer */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>05 / WHAT I BUILT: SYSTEM TOPOLOGY</span>
          <span>INTERACTIVE MODULE BREAKDOWN</span>
        </div>
        <div className="cs-text-body">
          <p>
            Click any subsystem node below to inspect modules, responsibilities, and data flows within the platform architecture:
          </p>
        </div>

        <TeaBlendArchViz />
      </section>

      {/* 6. Challenges & 7. What I Learned */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>06 & 07 / CHALLENGES & KEY TAKEAWAYS</span>
          <span>ENGINEERING GROWTH</span>
        </div>
        <div className="cs-grid-2col">
          <div className="cs-card">
            <h4>Engineering Challenges</h4>
            <p>
              Designing intuitive seller workflows for users transitioning from paper sheets required simplifying complex auction state transitions into a clear, step-by-step dashboard. Coordinating schema updates across MSSQL with FastAPI request validations ensured no unvalidated lot data entered the auction pipeline.
            </p>
          </div>
          <div className="cs-card">
            <h4>What I Learned</h4>
            <p>
              Working on an industry team project with Inivois Global provided valuable practical experience in full-stack feature ownership—from translating domain requirements into database schemas to designing RESTful API endpoints and building responsive Next.js interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Project Pagination */}
      <div className="container">
        <ProjectPagination
          next={{
            title: "SandPlotter Smart Coffee Table",
            route: "/work/sandplotter",
          }}
          returnRoute="/#work"
          returnLabel="SELECTED WORK"
        />
      </div>
    </main>
  );
}
