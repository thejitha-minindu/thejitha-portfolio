"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export type PaletteAction = {
  id: string;
  title: string;
  category: "PROJECTS" | "RESEARCH" | "SECTIONS" | "LINKS" | "ACTIONS";
  description?: string;
  badge?: string;
  action: () => void;
};

type CommandPaletteProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectMode?: (mode: string) => void;
  onToggleRecruiter?: () => void;
  onOpenCV?: () => void;
};

export function CommandPalette({
  isOpen,
  onClose,
  onSelectMode,
  onToggleRecruiter,
  onOpenCV,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const items: PaletteAction[] = [
    // Featured Projects
    {
      id: "cs-teablend",
      title: "TeaBlendAI — AI-Powered Tea Auction Platform",
      category: "PROJECTS",
      description: "Industry Project · Inivois Global · Next.js, FastAPI, MSSQL",
      badge: "FEATURED",
      action: () => {
        router.push("/work/teablend-ai");
        onClose();
      },
    },
    {
      id: "cs-sandplotter",
      title: "SandPlotter Smart Coffee Table",
      category: "PROJECTS",
      description: "First Year Hardware Project: Arduino Uno (GRBL), ESP32 WebSockets, TFT, CoreXY",
      badge: "FEATURED",
      action: () => {
        router.push("/work/sandplotter");
        onClose();
      },
    },
    {
      id: "cs-icitr",
      title: "ICITR 2026 Conference Website",
      category: "PROJECTS",
      description: "Official Conference Web Platform · Faculty of IT, Univ. of Moratuwa · Next.js, Tailwind",
      badge: "IN DEV",
      action: () => {
        router.push("/work/icitr-2026");
        onClose();
      },
    },
    // Secondary Projects
    {
      id: "cs-wie",
      title: "IEEE WIE University of Moratuwa Website",
      category: "PROJECTS",
      description: "Chapter Web Platform · Next.js, Tailwind CSS, GitHub",
      badge: "SECONDARY",
      action: () => {
        router.push("/work/wie");
        onClose();
      },
    },
    {
      id: "cs-farmify",
      title: "Farmify — Agricultural Expertise Platform",
      category: "PROJECTS",
      description: "React.js & Firebase web app connecting farmers with agricultural resources",
      badge: "SECONDARY",
      action: () => {
        router.push("/work/farmify");
        onClose();
      },
    },
    {
      id: "cs-security-lab",
      title: "Medusa 2.0 CTF & Security Lab",
      category: "PROJECTS",
      description: "Cybersecurity case study: 2nd Runners-up at Medusa 2.0 CTF, Linux POSIX capabilities & hardening",
      badge: "CASE STUDY",
      action: () => {
        router.push("/projects/security-lab");
        onClose();
      },
    },
    {
      id: "page-about",
      title: "About Thejitha Wijayanayake",
      category: "SECTIONS",
      description: "Undergraduate IT student profile, background, competencies, and engineering journey",
      badge: "PAGE",
      action: () => {
        router.push("/about");
        onClose();
      },
    },
    // Current Research
    {
      id: "cs-cosmic",
      title: "Deep Learning the Cosmic Web: Dark Matter U-Net",
      category: "RESEARCH",
      description: "Current Research · 2026–Present · Research in Progress",
      badge: "RESEARCH",
      action: () => {
        router.push("/research/cosmic-web");
        onClose();
      },
    },
    // Navigation / Sections
    {
      id: "sec-work",
      title: "Jump to Selected Work",
      category: "SECTIONS",
      description: "View all featured and secondary engineering projects",
      action: () => {
        const el = document.getElementById("work");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "sec-research",
      title: "Jump to Current Research",
      category: "SECTIONS",
      description: "Explore ongoing Cosmic Web deep learning research",
      action: () => {
        const el = document.getElementById("research");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "sec-education",
      title: "Jump to Education & CGPA",
      category: "SECTIONS",
      description: "University of Moratuwa (CGPA: 3.95 / 4.00) & St. Anne's College",
      action: () => {
        const el = document.getElementById("education");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "sec-skills",
      title: "Jump to Technical Skills",
      category: "SECTIONS",
      description: "C, Python, Java, JavaScript, TypeScript, FastAPI, Next.js, MSSQL",
      action: () => {
        const el = document.getElementById("skills");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "sec-competitions",
      title: "Jump to Competitions // Challenges",
      category: "SECTIONS",
      description: "Medusa 2.0 (2nd Runners-up), SPARK Challenge, SHErlock 2.0",
      action: () => {
        const el = document.getElementById("competitions");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "sec-contact",
      title: "Jump to Contact Information",
      category: "SECTIONS",
      description: "thejithamininduw@gmail.com · +94 71 475 6551",
      action: () => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    // External Links & Actions
    {
      id: "act-cv-view",
      title: "View Digital CV",
      category: "ACTIONS",
      description: "Open the verified interactive CV viewer modal",
      badge: "MODAL",
      action: () => {
        if (onOpenCV) onOpenCV();
        onClose();
      },
    },
    {
      id: "act-cv-pdf-tab",
      title: "Open PDF in New Tab",
      category: "ACTIONS",
      description: "Open official Thejitha-CV.pdf directly in new browser tab",
      badge: "PDF",
      action: () => {
        window.open("/Thejitha-CV.pdf", "_blank");
        onClose();
      },
    },
    {
      id: "act-cv-download",
      title: "Download PDF CV",
      category: "ACTIONS",
      description: "Download Thejitha-Wijayanayake-CV.pdf file",
      badge: "DOWNLOAD",
      action: () => {
        window.location.href = "/api/download-cv";
        onClose();
      },
    },
    {
      id: "act-github",
      title: "Open GitHub Profile",
      category: "LINKS",
      description: "https://github.com/thejitha-minindu",
      badge: "EXTERNAL",
      action: () => {
        window.open("https://github.com/thejitha-minindu", "_blank");
        onClose();
      },
    },
    {
      id: "act-linkedin",
      title: "Open LinkedIn Profile",
      category: "LINKS",
      description: "https://www.linkedin.com/in/thejitha-wijayanayake",
      badge: "EXTERNAL",
      action: () => {
        window.open("https://www.linkedin.com/in/thejitha-wijayanayake", "_blank");
        onClose();
      },
    },
    {
      id: "act-recruiter-toggle",
      title: "Toggle Recruiter Summary Mode",
      category: "ACTIONS",
      description: "Surface immediate verified qualifications & internship timeline",
      action: () => {
        if (onToggleRecruiter) onToggleRecruiter();
        onClose();
      },
    },
  ];

  const filteredItems = items.filter((item) => {
    const text = `${item.title} ${item.description || ""} ${item.category}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles open
      }
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="cmd-dialog-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div className="cmd-dialog">
        <div className="cmd-input-wrap">
          <span className="cmd-prompt-sym">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Type a project name, section, or skill to search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button
            type="button"
            onClick={onClose}
            style={{ color: "var(--muted)", fontSize: "11px", fontFamily: "var(--font-mono)" }}
          >
            ESC
          </button>
        </div>

        <div className="cmd-results">
          {filteredItems.length === 0 ? (
            <div style={{ padding: "24px 16px", textAlign: "center", color: "var(--dim)", fontSize: "12px" }}>
              No matching records found for &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`cmd-item ${idx === selectedIndex ? "selected" : ""}`}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div>
                  <div style={{ fontWeight: 500 }}>{item.title}</div>
                  {item.description && (
                    <div className="cmd-item-desc">{item.description}</div>
                  )}
                </div>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: "9px",
                        padding: "2px 5px",
                        border: "1px solid var(--line)",
                        color: "var(--accent)",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <span style={{ fontSize: "9px", color: "var(--dim)" }}>{item.category}</span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cmd-footer">
          <span>NAVIGATION: ↑↓ TO SELECT · ENTER TO OPEN</span>
          <span>THEJITHA</span>
        </div>
      </div>
    </div>
  );
}
