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
        <span>[{number}]</span>
        <span style={{ color: isActive ? "var(--accent)" : "var(--dim)" }}>
          {isActive ? "● ACTIVE" : "SELECT ↗"}
        </span>
      </div>

      <div>
        <h3 className="editorial-focus-heading">{title}</h3>
        <p className="editorial-focus-desc">{subtitle}</p>
        <div className="editorial-focus-preview">→ {preview}</div>
      </div>

      <div className="editorial-focus-line" />
    </button>
  );
}
