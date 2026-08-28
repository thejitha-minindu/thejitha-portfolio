"use client";

type DirectionProps = {
  number: string;
  title: string;
  subtitle: string;
  preview: string;
  isActive?: boolean;
  onSelect?: () => void;
};

export function Direction({
  number,
  title,
  subtitle,
  preview,
  isActive = false,
  onSelect,
}: DirectionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`editorial-focus-item ${isActive ? "active" : ""}`}
      aria-pressed={isActive}
    >
      <div className="editorial-focus-top">
        <span className="focus-num">[{number}]</span>
        <span className={`focus-status-badge ${isActive ? "active" : ""}`}>
          {isActive ? "● FILTER APPLIED" : "FILTER ↗"}
        </span>
      </div>

      <div className="editorial-focus-content">
        <h3 className="editorial-focus-heading">{title}</h3>
        <p className="editorial-focus-desc">{subtitle}</p>
        <div className="editorial-focus-preview">
          <span className="preview-label">PROJECTS:</span> {preview}
        </div>
      </div>

      <div className="editorial-focus-line" aria-hidden="true" />
    </button>
  );
}
