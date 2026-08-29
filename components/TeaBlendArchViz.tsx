"use client";

import { useState } from "react";

type ArchNode = {
  id: string;
  name: string;
  type: string;
  description: string;
  tech: string;
  responsibilities: string;
  dataFlow: string;
  architectureRole: string;
};

export function TeaBlendArchViz() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("seller-module");
  const [activeStep, setActiveStep] = useState<number>(1);

  const nodes: ArchNode[] = [
    {
      id: "seller-module",
      name: "Seller Dashboard & Portal",
      type: "FRONTEND MODULE",
      description:
        "Full-stack seller management interface enabling tea producers to onboard estates, catalog tea lots with quality attributes, manage reserves, and track scheduled auction items.",
      tech: "Next.js, React.js, Tailwind CSS, TypeScript",
      responsibilities: "Estate onboarding, lot attribute validation, catalog workflows, seller analytics overview.",
      dataFlow: "Sends authenticated REST API requests to FastAPI backend with payload validation.",
      architectureRole: "Primary user interface for tea sellers and producers to prepare auction catalogues.",
    },
    {
      id: "api-backend",
      name: "FastAPI Backend & Auth",
      type: "BACKEND API SERVICE",
      description:
        "High-performance Python backend managing REST API endpoints, secure role-based access control (RBAC), auction lifecycle logic, and database operations.",
      tech: "FastAPI, Python, Pydantic, JWT Authentication",
      responsibilities: "Role validation (Admin vs Seller vs Buyer), lot ingestion API, auction scheduling, trade confirmation.",
      dataFlow: "Validates input schemas, authenticates requests, orchestrates MSSQL queries and updates.",
      architectureRole: "Central application logic layer enforcing business rules and access boundaries.",
    },
    {
      id: "auction-workflows",
      name: "Auction Management System",
      type: "WORKFLOW ENGINE",
      description:
        "Core auction logic managing both live interactive bidding sessions and scheduled automated auction events across tea catalogs.",
      tech: "FastAPI, Python Async Workflows",
      responsibilities: "Auction scheduling, lot sequencing, bid validation, timer coordination, closing trade recording.",
      dataFlow: "Processes incoming buyer bids, validates against minimum increments, updates lot status.",
      architectureRole: "Coordinates transparent digital auction cycles replacing manual open-cry processes.",
    },
    {
      id: "database-tier",
      name: "MSSQL Relational Database",
      type: "DATA PERSISTENCE",
      description:
        "Enterprise relational database housing normalized schemas for tea lots, seller profiles, auction catalogues, bids, and settlement records.",
      tech: "Microsoft SQL Server (MSSQL), Relational Data Models",
      responsibilities: "Relational data persistence, foreign-key referential integrity, transaction logging, indexed lot queries.",
      dataFlow: "Stores structured entity tables: Users, Estates, TeaLots, Auctions, Bids, Settlements.",
      architectureRole: "Reliable, ACID-compliant enterprise storage foundation for the trading platform.",
    },
    {
      id: "ai-chatbot",
      name: "Integrated AI Chatbot",
      type: "INTELLIGENT ASSISTANT",
      description:
        "AI-powered chatbot assistant integrated into the platform to provide automated assistance, query platform information, and guide participants through auction rules.",
      tech: "Python AI Service, Natural Language Processing",
      responsibilities: "User guidance, auction rule explanations, catalogue inquiries, automated platform support.",
      dataFlow: "Accepts user prompts from the web frontend → Generates contextual assistance responses.",
      architectureRole: "Enhances user experience for tea sellers and buyers navigating the digital marketplace.",
    },
  ];

  const steps = [
    { num: 1, name: "1. Seller Module", node: "seller-module" },
    { num: 2, name: "2. FastAPI Layer", node: "api-backend" },
    { num: 3, name: "3. Auction Workflows", node: "auction-workflows" },
    { num: 4, name: "4. MSSQL Persistence", node: "database-tier" },
    { num: 5, name: "5. AI Chatbot", node: "ai-chatbot" },
  ];

  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  return (
    <div className="interactive-viz-box" aria-label="Interactive TeaBlendAI Architecture Visualization">
      <div className="viz-toolbar">
        <div>
          <span style={{ color: "var(--accent)", fontWeight: "bold" }}>SYS.VIZ // </span>
          <span>TEABLEND-AI PLATFORM ARCHITECTURE</span>
        </div>
        <div className="viz-controls">
          {steps.map((s) => (
            <button
              key={s.num}
              type="button"
              className={`viz-btn ${activeStep === s.num ? "active" : ""}`}
              onClick={() => {
                setActiveStep(s.num);
                setSelectedNodeId(s.node);
              }}
            >
              STEP {s.num}
            </button>
          ))}
        </div>
      </div>

      <div className="viz-stage-canvas">
        <div style={{ marginBottom: "16px", color: "var(--muted)", fontSize: "10px" }}>
          CLICK ANY SYSTEM NODE TO INSPECT ARCHITECTURE DETAILS & RESPONSIBILITIES:
        </div>

        <div className="arch-nodes-flow">
          {nodes.map((n) => (
            <div
              key={n.id}
              className={`arch-node ${selectedNodeId === n.id ? "selected" : ""}`}
              onClick={() => setSelectedNodeId(n.id)}
            >
              <div className="arch-node-type">{n.type}</div>
              <div className="arch-node-title">{n.name}</div>
              <div style={{ fontSize: "9px", color: "var(--accent)" }}>{n.tech.split(",")[0]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="viz-inspector">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", borderBottom: "1px solid var(--line)", paddingBottom: "8px" }}>
          <div>
            <strong style={{ color: "var(--text)", fontSize: "13px" }}>{activeNode.name}</strong>
            <span style={{ color: "var(--muted)", marginLeft: "8px" }}>[{activeNode.type}]</span>
          </div>
          <span style={{ color: "var(--accent)", fontSize: "10px" }}>INDUSTRY PROJECT · INIVOIS GLOBAL</span>
        </div>

        <div className="viz-detail-grid">
          <div>
            <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "4px" }}>
              DESCRIPTION & SCOPE
            </span>
            <p style={{ margin: "0 0 12px" }}>{activeNode.description}</p>

            <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "4px" }}>
              TECHNOLOGY STACK
            </span>
            <code style={{ color: "var(--accent)", fontSize: "11px" }}>{activeNode.tech}</code>
          </div>

          <div>
            <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "4px" }}>
              KEY RESPONSIBILITIES
            </span>
            <p style={{ margin: "0 0 12px" }}>{activeNode.responsibilities}</p>

            <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "4px" }}>
              DATA FLOW & INTEGRATION
            </span>
            <p style={{ margin: 0, color: "#d8dbd5" }}>{activeNode.dataFlow}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
