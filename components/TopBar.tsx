"use client";

import Link from "next/link";

type TopBarProps = {
  recruiterMode?: boolean;
  onToggleRecruiter?: () => void;
  onOpenCommandPalette?: () => void;
  onOpenCV?: () => void;
};

export function TopBar({
  recruiterMode = false,
  onToggleRecruiter,
  onOpenCommandPalette,
  onOpenCV,
}: TopBarProps) {
  return (
    <header className="topbar">
      <Link href="/" className="logo">
        <span>THEJITHA // LAB</span>
      </Link>

      <nav className="topbar-nav" aria-label="Main Navigation">
        <a href="/#work">WORK</a>
        <a href="/#research">RESEARCH</a>
        <a href="/#about">ABOUT</a>
        <a href="/#contact">CONTACT</a>
      </nav>

      <div className="header-info">
        {onToggleRecruiter && (
          <button
            type="button"
            className={`topbar-action-btn ${recruiterMode ? "active" : ""}`}
            onClick={onToggleRecruiter}
            title="Toggle Recruiter Mode"
            aria-pressed={recruiterMode}
          >
            <span>RECRUITER</span>
            <span className="kbd-badge">{recruiterMode ? "ON" : "OFF"}</span>
          </button>
        )}

        {onOpenCV && (
          <button
            type="button"
            className="topbar-action-btn"
            onClick={onOpenCV}
            title="View Web CV"
          >
            <span>CV</span>
            <span>↗</span>
          </button>
        )}

        {onOpenCommandPalette && (
          <button
            type="button"
            className="topbar-action-btn"
            onClick={onOpenCommandPalette}
            title="Open Command Palette (Ctrl+K or ⌘K)"
            aria-label="Open Command Palette"
          >
            <span>SEARCH</span>
            <span className="kbd-badge">⌘K</span>
          </button>
        )}
      </div>
    </header>
  );
}
