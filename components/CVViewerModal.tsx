"use client";

import { useEffect } from "react";
import Link from "next/link";

type CVViewerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CVViewerModal({ isOpen, onClose }: CVViewerModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="cv-dialog-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae Viewer"
    >
      <div className="cv-modal-panel">
        <div className="cv-modal-header">
          <div className="cv-modal-title-group">
            <span className="cv-badge">SYS.CV //</span>
            <span className="cv-title-text">CURRICULUM VITAE · PDF PREVIEW</span>
          </div>

          <div className="cv-modal-actions">
            <a
              href="/Thejitha-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="button"
              style={{ minHeight: "38px", padding: "8px 12px", fontSize: "10px" }}
              title="Open PDF in new tab"
            >
              OPEN PDF ↗
            </a>
            <a
              href="/api/download-cv"
              download="Thejitha-Wijayanayake-CV.pdf"
              className="button button-primary"
              style={{ minHeight: "38px", padding: "8px 12px", fontSize: "10px" }}
              title="Download PDF file"
            >
              DOWNLOAD PDF ↓
            </a>
            <Link
              href="/cv"
              className="button"
              style={{ minHeight: "38px", padding: "8px 12px", fontSize: "10px" }}
              onClick={onClose}
              title="View standalone CV page"
            >
              FULL PAGE ↗
            </Link>
            <button
              type="button"
              className="cv-close-btn"
              onClick={onClose}
              aria-label="Close CV Modal"
              title="Close modal (Esc)"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="cv-pdf-viewport">
          <iframe
            src="/Thejitha-CV.pdf#view=FitH"
            title="Thejitha Wijayanayake CV PDF"
            className="cv-pdf-frame"
          />
          <div className="cv-pdf-fallback">
            <p>If your device does not render PDF inline, you can open or download the document directly:</p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "12px" }}>
              <a href="/Thejitha-CV.pdf" target="_blank" rel="noreferrer" className="button button-primary">
                Open PDF ↗
              </a>
              <a href="/api/download-cv" download="Thejitha-Wijayanayake-CV.pdf" className="button">
                Download PDF ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
