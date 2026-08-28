"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

export type NavSection = {
  id: string;
  num: string;
  label: string;
};

export const NAV_SECTIONS: NavSection[] = [
  { id: "home", num: "01", label: "HOME" },
  { id: "work", num: "02", label: "WORK" },
  { id: "research", num: "03", label: "RESEARCH" },
  { id: "skills", num: "04", label: "SKILLS" },
  { id: "competitions", num: "05", label: "COMPETITIONS" },
  { id: "about", num: "06", label: "ABOUT" },
  { id: "contact", num: "07", label: "CONTACT" },
];

type SideNavProps = {
  isExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  onOpenCV?: () => void;
  onOpenCommandPalette?: () => void;
  recruiterMode?: boolean;
  onToggleRecruiter?: () => void;
};

export function SideNav({
  isExpanded: controlledExpanded,
  onExpandedChange,
  onOpenCV,
  onOpenCommandPalette,
  recruiterMode = false,
  onToggleRecruiter,
}: SideNavProps) {
  const [activeId, setActiveId] = useState<string>("home");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  // Default to TRUE (Extended by default)
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [isPinned, setIsPinned] = useState<boolean>(true);

  // Load pinned state from localStorage if available (defaulting to true)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("thejitha_sidebar_pinned");
      if (saved === "false") {
        setIsPinned(false);
        setIsExpanded(false);
        onExpandedChange?.(false);
      } else {
        setIsPinned(true);
        setIsExpanded(true);
        onExpandedChange?.(true);
      }
    } catch {
      setIsPinned(true);
      setIsExpanded(true);
      onExpandedChange?.(true);
    }
  }, [onExpandedChange]);

  const togglePin = () => {
    const nextPinned = !isPinned;
    setIsPinned(nextPinned);
    setIsExpanded(nextPinned);
    onExpandedChange?.(nextPinned);
    try {
      localStorage.setItem("thejitha_sidebar_pinned", String(nextPinned));
    } catch {
      // Ignore
    }
  };

  const handleMouseEnter = () => {
    if (!isPinned) {
      setIsExpanded(true);
      onExpandedChange?.(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      setIsExpanded(false);
      onExpandedChange?.(false);
    }
  };

  // Scroll Progress calculation (throttled via RAF)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const current = Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
            setScrollProgress(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionElements = NAV_SECTIONS.map((sec) => document.getElementById(sec.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-15% 0px -65% 0px",
        threshold: [0, 0.2, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setActiveId(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Update URL hash smoothly without jump
        if (history.pushState) {
          history.pushState(null, "", `#${id}`);
        } else {
          window.location.hash = `#${id}`;
        }
      }
    },
    []
  );

  const effectiveExpanded = controlledExpanded !== undefined ? controlledExpanded : isExpanded;

  return (
    <aside
      className={`side-nav-container ${effectiveExpanded || isPinned ? "expanded" : "collapsed"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Side Navigation"
    >
      {/* Brand Header */}
      <div className="side-nav-brand">
        <Link href="/" className="side-nav-logo" title="THEJITHA — Home">
          <span className="side-nav-monogram">T</span>
          <span className="side-nav-brand-text">
            <span className="brand-primary">THEJITHA</span>
          </span>
        </Link>

        <button
          type="button"
          className={`side-nav-pin-btn ${isPinned ? "pinned" : ""}`}
          onClick={togglePin}
          title={isPinned ? "Dock navigation (collapse)" : "Pin navigation (extended)"}
          aria-label={isPinned ? "Dock navigation (collapse)" : "Pin navigation (extended)"}
          aria-pressed={isPinned}
        >
          <span className="pin-icon">{isPinned ? "◂" : "▸"}</span>
        </button>
      </div>

      {/* Progress Line */}
      <div className="side-nav-progress-wrapper" aria-hidden="true">
        <div className="side-nav-progress-track">
          <div
            className="side-nav-progress-bar"
            style={{ height: `${scrollProgress}%` }}
          />
          <div
            className="side-nav-progress-indicator"
            style={{ top: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Navigation Sections */}
      <nav className="side-nav-menu" aria-label="Page Chapters">
        <ul className="side-nav-list" role="list">
          {NAV_SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id} className="side-nav-item">
                <a
                  href={`#${section.id}`}
                  onClick={(e) => handleNavClick(e, section.id)}
                  className={`side-nav-link ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                  title={`Jump to ${section.label}`}
                >
                  <span className="side-nav-active-pip" aria-hidden="true" />
                  <span className="side-nav-num">{section.num}</span>
                  <span className="side-nav-label">{section.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer / Utilities */}
      <div className="side-nav-footer">
        {/* Availability Badge */}
        <div className="side-nav-status" title="Open to Software / IT Internships">
          <span className="status-dot pulse" />
          <span className="status-text">AVAILABLE FOR INTERNSHIP</span>
        </div>

        {/* Quick Actions */}
        <div className="side-nav-actions">
          {onOpenCV && (
            <button
              type="button"
              className="side-nav-action-btn"
              onClick={onOpenCV}
              title="View Digital CV"
              aria-label="View Digital CV"
            >
              <span className="action-num">CV</span>
              <span className="action-label">VIEW CV ↗</span>
            </button>
          )}

          {onOpenCommandPalette && (
            <button
              type="button"
              className="side-nav-action-btn"
              onClick={onOpenCommandPalette}
              title="Search & Commands (⌘K)"
              aria-label="Open Command Palette"
            >
              <span className="action-num">⌘K</span>
              <span className="action-label">COMMANDS</span>
            </button>
          )}

          {onToggleRecruiter && (
            <button
              type="button"
              className={`side-nav-action-btn recruiter-toggle ${recruiterMode ? "active" : ""}`}
              onClick={onToggleRecruiter}
              title="Toggle Recruiter Mode"
              aria-pressed={recruiterMode}
            >
              <span className="action-num">REC</span>
              <span className="action-label">
                RECRUITER {recruiterMode ? "ON" : "OFF"}
              </span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
