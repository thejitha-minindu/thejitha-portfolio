"use client";

type Mode = "ALL" | "BUILD" | "EXPLORE" | "ENGINEER";

type DirectionFilterProps = {
  activeMode: Mode;
  onModeChange: (mode: Mode) => void;
  counts: {
    ALL: number;
    BUILD: number;
    EXPLORE: number;
    ENGINEER: number;
  };
};

export function DirectionFilter({
  activeMode,
  onModeChange,
  counts,
}: DirectionFilterProps) {
  const modes: { id: Mode; label: string; count: number }[] = [
    { id: "ALL", label: "ALL WORK", count: counts.ALL },
    { id: "BUILD", label: "BUILD", count: counts.BUILD },
    { id: "EXPLORE", label: "EXPLORE", count: counts.EXPLORE },
    { id: "ENGINEER", label: "ENGINEER", count: counts.ENGINEER },
  ];

  return (
    <div className="filter-toolbar">
      <div className="filter-label-group">
        <span className="filter-pulse-dot" aria-hidden="true" />
        <span className="filter-label">FILTER BY DISCIPLINE</span>
      </div>

      <div className="filter-buttons-list" role="tablist" aria-label="Filter projects by discipline">
        {modes.map((m) => {
          const isActive = activeMode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onModeChange(m.id)}
              className={`filter-btn ${isActive ? "active" : ""}`}
            >
              <span className="filter-btn-label">{m.label}</span>
              <span className="filter-btn-count">[{m.count}]</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
