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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
        marginBottom: "28px",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
      }}
    >
      <span style={{ color: "var(--muted)" }}>FILTER BY DISCIPLINE:</span>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }} role="tablist">
        {modes.map((m) => {
          const isActive = activeMode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onModeChange(m.id)}
              style={{
                background: isActive ? "var(--text)" : "transparent",
                color: isActive ? "#080909" : "var(--muted)",
                border: "1px solid",
                borderColor: isActive ? "var(--text)" : "var(--line)",
                padding: "6px 12px",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "all 0.2s",
                fontWeight: isActive ? "600" : "normal",
              }}
            >
              {m.label} <span style={{ opacity: 0.7 }}>({m.count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
