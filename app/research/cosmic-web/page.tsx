import type { Metadata } from "next";
import Link from "next/link";
import { CosmicPipelineViz } from "@/components/CosmicPipelineViz";

export const metadata: Metadata = {
  title: "Cosmic Web Research (In Progress) | Thejitha Wijayanayake",
  description:
    "Active undergraduate research project: Deep Learning the Cosmic Web — Reconstructing Invisible Dark Matter Structures via U-Net Architectures.",
};

export default function CosmicWebCaseStudy() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--background)", color: "var(--text)", paddingBottom: "120px" }}>
      {/* Top Header */}
      <header className="container cs-header">
        <div className="cs-breadcrumbs">
          <Link href="/">THEJITHA // LAB</Link>
          <span>/</span>
          <Link href="/#research">CURRENT RESEARCH</Link>
          <span>/</span>
          <span style={{ color: "var(--accent)" }}>COSMIC-WEB</span>
        </div>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(245, 168, 117, 0.1)", border: "1px solid rgba(245, 168, 117, 0.3)", padding: "4px 10px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--warn)", marginBottom: "16px" }}>
          <span>●</span>
          <span>RESEARCH IN PROGRESS · ACTIVE RESEARCH NOTEBOOK</span>
        </div>

        <h1 className="cs-title">Deep Learning the Cosmic Web</h1>
        <p className="cs-lead">
          Reconstructing Invisible Dark Matter Structures via U-Net Architectures. An ongoing undergraduate research project investigating deep learning approaches to understand the large-scale structure of the cosmic web.
        </p>

        <div className="cs-meta-grid">
          <div>
            <span>RESEARCH DOMAIN</span>
            <strong>Astrophysics & Deep Learning</strong>
          </div>
          <div>
            <span>PROJECT TYPE</span>
            <strong>Undergraduate Research Project</strong>
          </div>
          <div>
            <span>PRIMARY FOCUS</span>
            <strong>U-Net Spatial Reconstruction from Astronomical Data</strong>
          </div>
          <div>
            <span>TIMELINE & STATUS</span>
            <strong style={{ color: "var(--warn)" }}>2026 – Present (In Progress)</strong>
          </div>
        </div>
      </header>

      {/* 1. Research Question & Context */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>01 / RESEARCH QUESTION & SCIENTIFIC CONTEXT</span>
          <span>PROBLEM STATEMENT</span>
        </div>
        <div className="cs-text-body">
          <p>
            In modern cosmological physics, dark matter makes up the dominant matter content of the universe, forming a vast, filamentary web that guides galaxy formation and cluster evolution. However, dark matter does not interact with the electromagnetic spectrum and cannot be imaged directly with telescopes.
          </p>
          <p>
            Astronomical surveys only directly observe luminous baryonic matter—such as galaxies and gas. This research investigates whether deep learning encoder-decoder architectures, particularly U-Net variants, can learn non-linear spatial mappings to reconstruct underlying continuous dark matter density fields from observable astronomical tracer data.
          </p>
        </div>
      </section>

      {/* 2. Active Research Stages (Notebook Layout) */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>02 / RESEARCH METHODOLOGY & INVESTIGATION WORKFLOW</span>
          <span>ACTIVE NOTEBOOK</span>
        </div>
        <div className="cs-text-body">
          <p>
            The research follows a systematic investigation pipeline currently in progress:
          </p>
        </div>

        <div className="research-pipeline-breadcrumbs" style={{ marginBottom: "28px" }}>
          <span className="active">1. RESEARCH QUESTION [ACTIVE]</span>
          <span>→</span>
          <span className="active">2. LITERATURE REVIEW [ACTIVE]</span>
          <span>→</span>
          <span className="in-progress">3. METHODOLOGY DESIGN [IN PROGRESS]</span>
          <span>→</span>
          <span>4. EXPERIMENTATION [PLANNED]</span>
          <span>→</span>
          <span>5. EVALUATION [PLANNED]</span>
        </div>

        <CosmicPipelineViz />
      </section>

      {/* 3. Core Investigation Areas */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>03 / KEY INVESTIGATION AREAS</span>
          <span>DEEP LEARNING CHALLENGES</span>
        </div>
        <div className="cs-grid-2col">
          <div className="cs-card">
            <h4>Spatial Feature Preservation via Skip Connections</h4>
            <p>
              Investigating how U-Net skip connections allow localized high-frequency spatial details from the encoder path to bypass downsampling bottlenecks and assist the decoder in reconstructing thin cosmic filaments.
            </p>
          </div>
          <div className="cs-card">
            <h4>Astronomical Density Scaling & Transformations</h4>
            <p>
              Cosmological density fields span wide dynamic ranges between sparse voids and dense gravitational halos. Exploring density transforms and normalization techniques to stabilize network training.
            </p>
          </div>
          <div className="cs-card">
            <h4>Loss Formulation for Physical Consistency</h4>
            <p>
              Studying loss objectives that balance localized voxel reconstruction with large-scale spatial structural correlation.
            </p>
          </div>
          <div className="cs-card">
            <h4>Statistical Validation Framework</h4>
            <p>
              Developing statistical analysis routines in Python to evaluate cross-correlation and scale consistency between reconstructed fields and ground-truth simulated structures.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Current Status */}
      <section className="container cs-content-section">
        <div className="cs-section-heading">
          <span>04 / CURRENT STATUS & RESEARCH NOTE</span>
          <span>HONEST DISCLOSURE</span>
        </div>
        <div className="cs-text-body">
          <p>
            This project is an active undergraduate research investigation at the University of Moratuwa. In keeping with scientific integrity, experimental results and final statistical findings will be documented and published upon rigorous validation.
          </p>
        </div>
      </section>

      {/* Footer Navigation */}
      <nav className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "50px", fontFamily: "var(--font-mono)", fontSize: "11px" }}>
        <Link href="/work/farmify" style={{ color: "var(--muted)" }}>
          ← PREVIOUS: FARMIFY
        </Link>
        <Link href="/#work" style={{ color: "var(--accent)" }}>
          RETURN TO SELECTED WORK →
        </Link>
      </nav>
    </main>
  );
}
