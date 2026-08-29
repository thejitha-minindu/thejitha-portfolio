"use client";

import { useState } from "react";

type Stage = {
  id: string;
  num: string;
  title: string;
  sub: string;
  objective: string;
  methodology: string;
  architecturalApproach: string;
  statusNote: string;
};

export function CosmicPipelineViz() {
  const [activeStageId, setActiveStageId] = useState<string>("unet");

  const stages: Stage[] = [
    {
      id: "observation",
      num: "01",
      title: "OBSERVATIONAL DATA",
      sub: "Baryonic / Observable Galaxy Tracers",
      objective: "Map discrete observable astronomical data (visible galaxies and matter distributions) to investigate underlying structures.",
      methodology:
        "Luminous baryonic matter forms a small portion of cosmic structure, while the majority consists of invisible dark matter. The project studies observable tracer fields to infer unseen density fields.",
      architecturalApproach:
        "Investigating spatial representations of observable cosmological survey data for deep learning model ingestion.",
      statusNote: "Data representation study in progress",
    },
    {
      id: "preprocessing",
      num: "02",
      title: "SPATIAL GRID MAPPING",
      sub: "Density Grid Representation",
      objective: "Convert spatial point distributions into structured density fields suitable for convolutional neural networks.",
      methodology:
        "Exploring continuous grid interpolation and density normalization approaches to handle variations across cosmological scales.",
      architecturalApproach:
        "Testing density field transformations and normalization techniques in Python and PyTorch.",
      statusNote: "Preprocessing pipeline in progress",
    },
    {
      id: "unet",
      num: "03",
      title: "U-NET ARCHITECTURE",
      sub: "Encoder-Decoder Feature Learning",
      objective: "Investigate U-Net convolutional architectures for spatial pattern learning and multi-scale feature mapping.",
      methodology:
        "U-Net encoder-decoder architectures with skip connections allow networks to learn hierarchical representations while retaining fine spatial context.",
      architecturalApproach:
        "Implementing PyTorch U-Net models to study reconstruction fidelity across multi-scale spatial features.",
      statusNote: "Architecture design in progress",
    },
    {
      id: "loss-formulation",
      num: "04",
      title: "LOSS FORMULATION",
      sub: "Spatial & Structural Objectives",
      objective: "Explore loss function designs that balance localized error with spatial structural consistency.",
      methodology:
        "Standard pixel-wise losses alone may produce smooth approximations. The research explores composite loss objectives for structural preservation.",
      architecturalApproach:
        "Analyzing spatial and frequency-based loss formulations in PyTorch to guide network optimization.",
      statusNote: "Loss formulation study in progress",
    },
    {
      id: "evaluation",
      num: "05",
      title: "EVALUATION METHODOLOGY",
      sub: "Statistical & Spatial Analysis",
      objective: "Establish statistical evaluation metrics to analyze reconstruction quality and physical consistency.",
      methodology:
        "Developing analytical scripts to evaluate structural consistency, cross-correlation, and scale fidelity across reconstructed fields.",
      architecturalApproach:
        "Implementing statistical validation routines in Python to benchmark ongoing model experiments.",
      statusNote: "Evaluation framework in progress",
    },
  ];

  const currentStage = stages.find((s) => s.id === activeStageId) || stages[2];

  return (
    <div className="interactive-viz-box" aria-label="Interactive Cosmic Web Deep Learning Research Pipeline">
      <div className="viz-toolbar">
        <div>
          <span style={{ color: "var(--accent)", fontWeight: "bold" }}>SYS.RESEARCH // </span>
          <span>COSMIC WEB U-NET RECONSTRUCTION METHODOLOGY</span>
        </div>
        <div style={{ color: "var(--warn)", fontSize: "9px" }}>
          STATUS: RESEARCH IN PROGRESS
        </div>
      </div>

      <div className="viz-stage-canvas" style={{ padding: "20px 24px" }}>
        <div className="pipeline-steps">
          {stages.map((stage) => (
            <button
              key={stage.id}
              type="button"
              className={`pipeline-step-btn ${activeStageId === stage.id ? "active" : ""}`}
              onClick={() => setActiveStageId(stage.id)}
            >
              <span className="pipeline-step-num">STAGE {stage.num}</span>
              <div className="pipeline-step-name">{stage.title}</div>
              <div style={{ fontSize: "8px", color: "var(--muted)", marginTop: "4px" }}>
                {stage.sub.split("/")[0]}
              </div>
            </button>
          ))}
        </div>

        <div style={{ background: "rgba(0, 0, 0, 0.4)", border: "1px solid var(--line)", padding: "16px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", borderBottom: "1px solid var(--line)", paddingBottom: "6px" }}>
            <span style={{ color: "var(--accent)", fontSize: "11px" }}>
              STAGE {currentStage.num}: {currentStage.title} — {currentStage.sub}
            </span>
            <span style={{ color: "var(--warn)", fontSize: "10px" }}>
              [{currentStage.statusNote}]
            </span>
          </div>

          <div className="viz-detail-grid">
            <div>
              <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "3px" }}>
                RESEARCH OBJECTIVE
              </span>
              <p style={{ margin: "0 0 12px" }}>{currentStage.objective}</p>

              <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "3px" }}>
                DOMAIN METHODOLOGY
              </span>
              <p style={{ margin: 0 }}>{currentStage.methodology}</p>
            </div>

            <div>
              <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "3px" }}>
                PYTORCH / ARCHITECTURAL APPROACH
              </span>
              <p style={{ margin: "0 0 12px" }}>{currentStage.architecturalApproach}</p>

              <span style={{ display: "block", color: "var(--muted)", fontSize: "9px", marginBottom: "3px" }}>
                INVESTIGATION SCOPE
              </span>
              <p style={{ margin: 0, color: "var(--text)" }}>
                Ongoing undergraduate research investigating U-Net architectures for dark matter structure reconstruction from astronomical data.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="viz-inspector" style={{ background: "var(--surface)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>
            <strong style={{ color: "var(--text)" }}>RESEARCH STATUS:</strong> Ongoing undergraduate project at University of Moratuwa.
          </span>
          <span style={{ color: "var(--warn)", fontSize: "10px" }}>RESEARCH IN PROGRESS</span>
        </div>
      </div>
    </div>
  );
}
