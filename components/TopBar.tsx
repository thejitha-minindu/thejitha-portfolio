"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { NAV_SECTIONS } from "./SideNav";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        if (history.pushState) {
          history.pushState(null, "", `#${id}`);
        } else {
          window.location.hash = `#${id}`;
        }
      }
    },
    []
  );

  return (
    <>
      <header className="topbar">
        <Link href="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          <span>THEJITHA</span>
        </Link>

        {/* Desktop Quick Nav (Visible only on intermediate screens if sidebar is hidden) */}
        <nav className="topbar-nav" aria-label="Main Navigation">
          <a href="/#work">WORK</a>
          <a href="/#research">RESEARCH</a>
          <a href="/#skills">SKILLS</a>
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
              className="topbar-action-btn cv-btn"
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
              className="topbar-action-btn search-btn"
              onClick={onOpenCommandPalette}
              title="Open Command Palette (Ctrl+K or ⌘K)"
              aria-label="Open Command Palette"
            >
              <span>SEARCH</span>
              <span className="kbd-badge">⌘K</span>
            </button>
          )}

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="mobile-toggle-box">
              <span className="mobile-toggle-text">
                {isMobileMenuOpen ? "CLOSE ✕" : "MENU ☰"}
              </span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay Navigation */}
      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-nav-backdrop" onClick={() => setIsMobileMenuOpen(false)} />

        <div
          className="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          <div className="mobile-nav-header">
            <div className="mobile-brand">
              <span>THEJITHA</span>
              <span className="mobile-brand-sub">Navigation Index</span>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile Section Navigation">
            <ul className="mobile-nav-list" role="list">
              {NAV_SECTIONS.map((sec) => (
                <li key={sec.id} className="mobile-nav-item">
                  <a
                    href={`#${sec.id}`}
                    onClick={(e) => handleMobileNavClick(e, sec.id)}
                    className="mobile-nav-link"
                  >
                    <span className="mobile-nav-num">{sec.num}</span>
                    <span className="mobile-nav-label">{sec.label}</span>
                    <span className="mobile-nav-arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav-footer">
            <div className="mobile-status-pill">
              <span className="status-dot pulse" />
              <span>AVAILABLE FOR INTERNSHIPS</span>
            </div>

            <div className="mobile-footer-actions">
              {onOpenCV && (
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  VIEW WEB CV ↗
                </button>
              )}

              <a
                href="/Thejitha-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="button"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                OPEN PDF CV ↗
              </a>
            </div>

            <div className="mobile-contact-strip">
              <a href="mailto:thejithamininduw@gmail.com">thejithamininduw@gmail.com</a>
              <span>·</span>
              <a href="https://github.com/thejitha-minindu" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/thejitha-wijayanayake"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
