"use client";

import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
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
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuDrawerRef = useRef<HTMLDivElement>(null);

  // Release the lock before Next.js performs its normal route/hash scrolling.
  const closeMobileMenu = () => {
    flushSync(() => setIsMobileMenuOpen(false));
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const drawer = menuDrawerRef.current;
    const toggle = menuToggleRef.current;
    document.body.style.overflow = "hidden";
    drawer?.querySelector<HTMLButtonElement>("button")?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsMobileMenuOpen(false);
      }
      if (e.key === "Tab") {
        const controls = drawer?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (drawer?.contains(document.activeElement)) toggle?.focus({ preventScroll: true });
    };
  }, [isMobileMenuOpen]);

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
              title="View CV (PDF Preview)"
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
            ref={menuToggleRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
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
        inert={!isMobileMenuOpen}
      >
        <div className="mobile-nav-backdrop" onClick={() => setIsMobileMenuOpen(false)} />

        <div
          className="mobile-nav-drawer"
          id="mobile-navigation"
          ref={menuDrawerRef}
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
                  <Link
                    href={`/#${sec.id}`}
                    onNavigate={closeMobileMenu}
                    className="mobile-nav-link"
                  >
                    <span className="mobile-nav-num">{sec.num}</span>
                    <span className="mobile-nav-label">{sec.label}</span>
                    <span className="mobile-nav-arrow">→</span>
                  </Link>
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
                    closeMobileMenu();
                    onOpenCV();
                  }}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  VIEW CV ↗
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
