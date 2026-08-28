"use client";

import { useState } from "react";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { RecruiterBanner } from "@/components/RecruiterBanner";
import { CommandPalette } from "@/components/CommandPalette";
import { CVViewerModal } from "@/components/CVViewerModal";
import { Direction } from "@/components/Direction";
import { DirectionFilter } from "@/components/DirectionFilter";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";

type NavigationMode = "ALL" | "BUILD" | "EXPLORE" | "ENGINEER";

const allProjects: Project[] = [
  // 01 — Featured Project
  {
    number: "01",
    slug: "teablend-ai",
    route: "/work/teablend-ai",
    title: "TeaBlendAI — AI-powered Tea Auction Platform",
    projectType: "Industry Project · Inivois Global (Team Project)",
    timeline: "December 2025 – June 2026",
    discipline: "BUILD",
    description:
      "TeaBlendAI is an AI-powered web application developed to modernize the tea trading industry through a digital auction system and an integrated AI chatbot. It provides role-based access, live and scheduled auction management, seller dashboards and an MSSQL-backed platform connecting tea producers with buyers.",
    myContribution:
      "I was responsible for the full-stack development of the Seller Module, including seller dashboard interfaces, auction management workflows, frontend implementation, backend API design and database modelling.",
    technologies: ["Next.js", "FastAPI", "MSSQL"],
  },
  // 02 — Featured Project
  {
    number: "02",
    slug: "sandplotter",
    route: "/work/sandplotter",
    title: "SandPlotter Smart Coffee Table",
    projectType: "First Year Hardware Project",
    timeline: "August 2024 – August 2025",
    discipline: "ENGINEER",
    description:
      "Developed an interactive sand art coffee table capable of generating intricate sand patterns and custom text through a CoreXY motion system.",
    myContribution:
      "Designed and assembled the motion mechanism using NEMA 17 stepper motors, GT2 timing belts, A4988 drivers and limit switches integrated with GRBL firmware running on an Arduino Uno. Implemented communication between the ESP32 and Arduino Uno to transmit G-code commands from both a TFT touch interface and a web-based control platform using WebSockets.",
    technologies: [
      "Arduino Uno",
      "ESP32",
      "GRBL",
      "CoreXY",
      "TFT Touch Display",
      "WebSocket",
      "Web Application",
      "CNC Shield V3",
    ],
  },
  // 03 — Featured Project
  {
    number: "03",
    slug: "icitr-2026",
    route: "/work/icitr-2026",
    title: "ICITR 2026 Conference Website",
    projectType: "Faculty of IT, Univ. of Moratuwa (Team Project)",
    timeline: "June 2026 – Present",
    status: "STATUS: IN DEVELOPMENT",
    discipline: "BUILD",
    description:
      "Developing the official website for the International Conference on Information Technology Research (ICITR), organized by the Faculty of Information Technology, University of Moratuwa. Contributing to the design and implementation of a responsive platform for conference information, speaker profiles, workshops, paper submission information and event announcements.",
    myContribution:
      "Contributing to the design and implementation of responsive layout structures, speaker cataloging components, important announcement timelines, and author submission guideline workflows.",
    technologies: ["Next.js", "Tailwind CSS", "GitHub"],
  },
  // 04 — Secondary Project
  {
    number: "04",
    slug: "wie",
    route: "/work/wie",
    title: "IEEE WIE University of Moratuwa Website",
    projectType: "IEEE WIE Student Chapter (Team Project)",
    timeline: "July 2025 – September 2025",
    discipline: "BUILD",
    description:
      "Developed the IEEE WIE University of Moratuwa website to showcase the chapter's mission, events and achievements. Built a responsive platform to promote initiatives and empower women in engineering across Sri Lanka.",
    myContribution:
      "Designed and implemented responsive web pages, event showcase listings, executive committee member directories, and chapter leadership archives.",
    technologies: ["Next.js", "Tailwind CSS", "GitHub"],
    isSecondary: true,
  },
  // 05 — Secondary Project
  {
    number: "05",
    slug: "farmify",
    route: "/work/farmify",
    title: "Farmify",
    projectType: "Agricultural Expertise Platform (Team Project)",
    timeline: "June 2024 – August 2024",
    discipline: "BUILD",
    description:
      "React and Firebase-based web application developed to support farmers by connecting them with agricultural expertise. Features include secure authentication, product listings and real-time transaction updates.",
    myContribution:
      "Built intuitive farmer dashboard views, crop harvest listing interfaces, Firebase real-time data synchronization, and responsive UI components.",
    technologies: ["React.js", "Firebase"],
    isSecondary: true,
  },
  // 06 — Current Research
  {
    number: "06",
    slug: "cosmic-web",
    route: "/research/cosmic-web",
    title: "Deep Learning the Cosmic Web",
    projectType: "Undergraduate Research Project",
    timeline: "2026 – Present",
    status: "STATUS: RESEARCH IN PROGRESS",
    discipline: "EXPLORE",
    description:
      "Investigating the use of U-Net architectures for reconstructing invisible dark matter structures from observable astronomical data. The research explores deep learning approaches to understanding the large-scale structure of the cosmic web.",
    myContribution:
      "Investigating deep learning model architectures, data representations, density scaling transformations, and statistical evaluation frameworks in Python and PyTorch.",
    technologies: ["Python", "PyTorch", "3D U-Net"],
  },
];

export default function Home() {
  const [activeMode, setActiveMode] = useState<NavigationMode>("ALL");
  const [recruiterMode, setRecruiterMode] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  const filteredProjects =
    activeMode === "ALL"
      ? allProjects
      : allProjects.filter((p) => p.discipline === activeMode);

  const featuredProjects = filteredProjects.filter(
    (p) => !p.isSecondary && p.discipline !== "EXPLORE"
  );
  const secondaryProjects = filteredProjects.filter((p) => p.isSecondary);
  const researchProjects = filteredProjects.filter((p) => p.discipline === "EXPLORE");

  const counts = {
    ALL: allProjects.length,
    BUILD: allProjects.filter((p) => p.discipline === "BUILD").length,
    EXPLORE: allProjects.filter((p) => p.discipline === "EXPLORE").length,
    ENGINEER: allProjects.filter((p) => p.discipline === "ENGINEER").length,
  };

  const handleSelectDirection = (mode: NavigationMode) => {
    setActiveMode(mode);
    const workElem = document.getElementById("work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <TopBar
        recruiterMode={recruiterMode}
        onToggleRecruiter={() => setRecruiterMode(!recruiterMode)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {recruiterMode && (
        <RecruiterBanner
          onOpenCV={() => setIsCVModalOpen(true)}
          onClose={() => setRecruiterMode(false)}
        />
      )}

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectMode={(mode) => setActiveMode(mode as NavigationMode)}
        onToggleRecruiter={() => setRecruiterMode(!recruiterMode)}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      <CVViewerModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="hero container">
        <div className="system-label">
          <span>THEJITHA // LAB</span>
          <span style={{ color: "var(--dim)" }}>·</span>
          <div className="status-indicator-pill">
            <span className="status-dot" />
            <span>AVAILABLE FOR SOFTWARE / IT INTERNSHIPS</span>
          </div>
        </div>

        <div className="hero-grid">
          <div className="hero-name">
            <h1>
              THEJITHA
              <br />
              <span>// LAB</span>
            </h1>
          </div>

          <div className="hero-description">
            <div className="hero-discipline-tag">
              Software Engineering · AI · Systems
            </div>

            <p className="hero-lead-text">
              Third-year Information Technology undergraduate at the University of Moratuwa.
            </p>

            <p className="hero-sub-text">
              Building software and hardware systems, exploring AI research, and solving technical problems.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                VIEW WORK ↓
              </a>
              <button
                type="button"
                className="button"
                onClick={() => setIsCVModalOpen(true)}
              >
                VIEW CV ↗
              </button>
              <a
                href="/Thejitha-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="button"
                title="Open PDF directly in new tab"
              >
                OPEN PDF ↗
              </a>
              <a
                href="/api/download-cv"
                download="Thejitha-Wijayanayake-CV.pdf"
                className="button"
                title="Download CV PDF"
              >
                DOWNLOAD CV ↓
              </a>
            </div>
          </div>
        </div>

        <div className="hero-footer-bar">
          <span>SOFTWARE ENGINEERING</span>
          <span>FULL-STACK DEVELOPMENT</span>
          <span>AI / MACHINE LEARNING</span>
          <span>HARDWARE & EMBEDDED</span>
        </div>
      </section>

      {/* =========================================================================
          SYS.01 / FOCUS: BUILD / EXPLORE / ENGINEER
          ========================================================================= */}
      <section className="container section">
        <SectionLabel code="SYS.01 / FOCUS">
          ENGINEERING FOCUS AREAS
        </SectionLabel>

        <div className="editorial-focus-container">
          <Direction
            number="01"
            title="BUILD"
            subtitle="Software systems"
            preview="TeaBlendAI · ICITR 2026 · IEEE WIE · Farmify"
            isActive={activeMode === "BUILD"}
            onSelect={() => handleSelectDirection("BUILD")}
          />
          <Direction
            number="02"
            title="EXPLORE"
            subtitle="AI & research"
            preview="Deep Learning the Cosmic Web (U-Net Architectures)"
            isActive={activeMode === "EXPLORE"}
            onSelect={() => handleSelectDirection("EXPLORE")}
          />
          <Direction
            number="03"
            title="ENGINEER"
            subtitle="Hardware & systems"
            preview="SandPlotter Smart Table (CoreXY + Arduino + ESP32)"
            isActive={activeMode === "ENGINEER"}
            onSelect={() => handleSelectDirection("ENGINEER")}
          />
        </div>
      </section>

      {/* =========================================================================
          SYS.02 / SELECTED WORK
          ========================================================================= */}
      <section id="work" className="container section">
        <SectionLabel code="SYS.02 / SELECTED WORK">
          ENGINEERING PROJECTS & RESEARCH
        </SectionLabel>

        <div style={{ marginTop: "32px" }}>
          <DirectionFilter
            activeMode={activeMode}
            onModeChange={(mode) => setActiveMode(mode)}
            counts={counts}
          />
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div>
            <div className="projects-group-header">
              <span>FEATURED PROJECTS</span>
              <span>[01 – 03]</span>
            </div>
            <div className="projects-list">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Secondary Projects */}
        {secondaryProjects.length > 0 && (
          <div style={{ marginTop: "40px" }}>
            <div className="projects-group-header">
              <span>SECONDARY PROJECTS</span>
              <span>[04 – 05]</span>
            </div>
            <div className="projects-list">
              {secondaryProjects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Current Research */}
        {researchProjects.length > 0 && (
          <div id="research" style={{ marginTop: "60px" }}>
            <div className="projects-group-header">
              <span>CURRENT RESEARCH</span>
              <span>[06] · RESEARCH IN PROGRESS</span>
            </div>

            <article className="research-notebook-row">
              <div className="research-notebook-header">
                <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                  <span className="project-type-tag">RESEARCH PROJECT · 2026 – PRESENT</span>
                </div>
                <span className="project-status-tag">STATUS: RESEARCH IN PROGRESS</span>
              </div>

              <h3 className="editorial-project-title" style={{ margin: "12px 0 16px" }}>
                Deep Learning the Cosmic Web: Reconstructing Invisible Dark Matter Structures via U-Net Architectures
              </h3>

              <p className="editorial-project-desc" style={{ marginBottom: "20px" }}>
                Investigating the use of U-Net architectures for reconstructing invisible dark matter structures from observable astronomical data. The research explores deep learning approaches to understanding the large-scale structure of the cosmic web.
              </p>

              <div className="editorial-contribution-box" style={{ marginBottom: "24px" }}>
                <strong>ACTIVE RESEARCH NOTEBOOK</strong>
                Research Question → Literature Review → Methodology Design → Experimentation → Evaluation
              </div>

              <div className="editorial-project-footer">
                <div className="tech-tags-list">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">PyTorch</span>
                  <span className="tech-tag">3D U-Net</span>
                  <span className="tech-tag">Deep Learning</span>
                </div>

                <Link href="/research/cosmic-web" className="case-study-link">
                  <span>VIEW ACTIVE RESEARCH NOTEBOOK</span>
                  <span>↗</span>
                </Link>
              </div>
            </article>
          </div>
        )}
      </section>

      {/* =========================================================================
          SYS.03 / EDUCATION
          ========================================================================= */}
      <section id="education" className="container section">
        <SectionLabel code="SYS.03 / EDUCATION">
          ACADEMIC QUALIFICATIONS
        </SectionLabel>

        <div className="education-grid">
          {/* University Degree */}
          <div className="education-card">
            <div>
              <div className="education-header">
                <span>UNDERGRADUATE DEGREE</span>
                <span>2024 – PRESENT</span>
              </div>
              <h3 className="education-title">
                B.Sc. (Hons) in Information Technology
              </h3>
              <p className="education-institution">
                University of Moratuwa · Faculty of Information Technology
              </p>
            </div>

            <div className="cgpa-highlight-box">
              <div>
                <span>CUMULATIVE GPA</span>
                <div style={{ color: "var(--dim)", fontSize: "10px" }}>
                  Out of 4.00 Scale
                </div>
              </div>
              <div className="cgpa-number">3.95 / 4.00</div>
            </div>
          </div>

          {/* GCE Advanced Level */}
          <div className="education-card">
            <div>
              <div className="education-header">
                <span>GCE ADVANCED LEVEL</span>
                <span>2022</span>
              </div>
              <h3 className="education-title">
                Physical Science Stream
              </h3>
              <p className="education-institution">
                St. Anne&apos;s College, Kurunegala
              </p>
            </div>

            <div className="cgpa-highlight-box">
              <div>
                <span>RESULTS: A, B, B</span>
                <div style={{ color: "var(--dim)", fontSize: "10px" }}>
                  Physics: A · Combined Math: B · Chemistry: B
                </div>
              </div>
              <div className="cgpa-number" style={{ fontSize: "20px" }}>
                Z-SCORE: 1.6692
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SYS.04 / SKILLS
          ========================================================================= */}
      <section id="skills" className="container section">
        <SectionLabel code="SYS.04 / TECHNICAL SKILLS">
          VERIFIED TECHNOLOGIES & COMPETENCIES
        </SectionLabel>

        <div className="skills-editorial-grid">
          <div className="skills-category-block">
            <span className="skills-category-title">PROGRAMMING</span>
            <p className="skills-list-text">
              C · Python · Java · JavaScript · TypeScript · PHP
            </p>
          </div>

          <div className="skills-category-block">
            <span className="skills-category-title">FRONTEND</span>
            <p className="skills-list-text">
              Next.js · React.js · Tailwind CSS · HTML5 · CSS3
            </p>
          </div>

          <div className="skills-category-block">
            <span className="skills-category-title">BACKEND</span>
            <p className="skills-list-text">
              FastAPI · Node.js
            </p>
          </div>

          <div className="skills-category-block">
            <span className="skills-category-title">DATABASE</span>
            <p className="skills-list-text">
              MSSQL · MySQL · MongoDB · PostgreSQL
            </p>
          </div>

          <div className="skills-category-block">
            <span className="skills-category-title">TOOLS / PLATFORMS</span>
            <p className="skills-list-text">
              Git · GitHub · Linux · Arduino IDE · Flutter
            </p>
          </div>

          <div className="skills-category-block">
            <span className="skills-category-title">INTERPERSONAL</span>
            <p className="skills-list-text">
              Problem Solving · Time Management · Self-Learning · Teamwork
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SYS.05 / COMPETITIONS & CHALLENGES
          ========================================================================= */}
      <section id="competitions" className="container section">
        <SectionLabel code="SYS.05 / COMPETITIONS">
          COMPETITIONS // CHALLENGES
        </SectionLabel>

        <div className="competitions-grid">
          <div>
            <div className="competition-entry">
              <span className="competition-badge">2ND RUNNERS-UP</span>
              <div className="competition-body">
                <h4>Medusa 2.0 (2025)</h4>
                <p>National cybersecurity CTF competition organized by ECSC, University of Kelaniya</p>
              </div>
            </div>

            <div className="competition-entry">
              <span className="competition-badge">SEMI-FINALIST</span>
              <div className="competition-body">
                <h4>SPARK Challenge (2026)</h4>
                <p>ENTC Innovation Project Competition, University of Moratuwa</p>
              </div>
            </div>

            <div className="competition-entry">
              <span className="competition-badge">9TH PLACE</span>
              <div className="competition-body">
                <h4>SHErlock 2.0</h4>
                <p>Organized by IEEE WIE of IIT</p>
              </div>
            </div>
          </div>

          <div className="contests-participation-box">
            <h4>CODING CONTEST PARTICIPATION</h4>
            <div className="contests-list">
              <div>
                <span>ALGOXPLORE 1.0</span>
                <span style={{ color: "var(--muted)" }}>Competitive Programming</span>
              </div>
              <div>
                <span>MoraXtreme 9.0</span>
                <span style={{ color: "var(--muted)" }}>IEEEXtreme Prep Contest</span>
              </div>
              <div>
                <span>CodeRush 2022</span>
                <span style={{ color: "var(--muted)" }}>Algorithmic Problem Solving</span>
              </div>
              <div>
                <span>MoraXtreme 10.0</span>
                <span style={{ color: "var(--muted)" }}>IEEEXtreme Prep Contest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SYS.06 / UNIVERSITY INVOLVEMENT
          ========================================================================= */}
      <section className="container section">
        <SectionLabel code="SYS.06 / INVOLVEMENT">
          UNIVERSITY INVOLVEMENT
        </SectionLabel>

        <div className="involvement-grid">
          <div className="involvement-card">
            <div>
              <div className="involvement-role">ICITR Web Development Team</div>
              <div className="involvement-org">Faculty of IT, Univ. of Moratuwa</div>
            </div>
            <div className="involvement-date">2026</div>
          </div>

          <div className="involvement-card">
            <div>
              <div className="involvement-role">Mobile App Development Team</div>
              <div className="involvement-org">Team 25/26</div>
            </div>
            <div className="involvement-date">2025 – 2026</div>
          </div>

          <div className="involvement-card">
            <div>
              <div className="involvement-role">IEEE WIE Web Development Team</div>
              <div className="involvement-org">IEEE Student Branch Affinity Group</div>
            </div>
            <div className="involvement-date">2025</div>
          </div>

          <div className="involvement-card">
            <div>
              <div className="involvement-role">Faculty Coordinator</div>
              <div className="involvement-org">SEDS Mora Chapter (Team 25/26)</div>
            </div>
            <div className="involvement-date">2025 – 2026</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SYS.07 / ABOUT & INTERNSHIP POSITIONING
          ========================================================================= */}
      <section id="about" className="container section">
        <SectionLabel code="SYS.07 / ABOUT">
          PROFILE & INTERNSHIP POSITIONING
        </SectionLabel>

        <div className="about-grid">
          <div className="about-headline">
            <h2>
              BUILDING SYSTEMS
              <br />
              WITH HARDWARE
              <br />
              <span>& SOFTWARE.</span>
            </h2>
          </div>

          <div className="about-body">
            <p>
              Undergraduate student in Information Technology at the University of Moratuwa, with coursework and projects covering programming, hardware interfacing, and software development.
            </p>
            <p>
              Actively engaged in building real-world systems that combine hardware and software concepts, while continuously developing technical and analytical skills through practical projects and self-learning.
            </p>

            <div className="profile-meta-list">
              <div>
                <span>STATUS</span>
                <strong style={{ color: "var(--accent)" }}>Third-Year IT Undergraduate</strong>
              </div>
              <div>
                <span>OPPORTUNITY</span>
                <strong style={{ color: "var(--accent)" }}>Open to Software / IT Internships</strong>
              </div>
              <div>
                <span>POTENTIAL AREAS</span>
                <strong>Software Engineering · Full-Stack · AI / ML · Systems / Embedded</strong>
              </div>
              <div>
                <span>UNIVERSITY</span>
                <strong>University of Moratuwa (CGPA: 3.95 / 4.00)</strong>
              </div>
              <div>
                <span>LOCATION</span>
                <strong>Kuliyapitiya, Sri Lanka</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SYS.08 / CONTACT & CTA
          ========================================================================= */}
      <section id="contact" className="container cta-section">
        <div className="cta-tag">SYS.08 / OPEN CHANNEL</div>
        <h2 className="cta-title">
          AVAILABLE FOR
          <br />
          SOFTWARE / IT
          <br />
          <span>INTERNSHIPS.</span>
        </h2>

        <div className="cta-contact-details">
          <div>
            <span>FULL NAME</span>
            <strong>Thejitha Wijayanayake</strong>
          </div>
          <div>
            <span>EMAIL</span>
            <a href="mailto:thejithamininduw@gmail.com">thejithamininduw@gmail.com</a>
          </div>
          <div>
            <span>PHONE</span>
            <a href="tel:+94714756551">+94 71 475 6551</a>
          </div>
          <div>
            <span>LOCATION</span>
            <strong>Kuliyapitiya, Sri Lanka</strong>
          </div>
          <div>
            <span>GITHUB</span>
            <a href="https://github.com/thejitha-minindu" target="_blank" rel="noreferrer">
              github.com/thejitha-minindu ↗
            </a>
          </div>
          <div>
            <span>LINKEDIN</span>
            <a href="https://www.linkedin.com/in/thejitha-wijayanayake" target="_blank" rel="noreferrer">
              linkedin.com/in/thejitha-wijayanayake ↗
            </a>
          </div>
        </div>

        <div className="cta-button-row">
          <button
            type="button"
            className="button button-primary"
            onClick={() => setIsCVModalOpen(true)}
          >
            VIEW WEB CV ↗
          </button>
          <a
            href="/Thejitha-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            OPEN PDF ↗
          </a>
          <a
            href="/api/download-cv"
            download="Thejitha-Wijayanayake-CV.pdf"
            className="button"
          >
            DOWNLOAD CV (PDF) ↓
          </a>
          <a href="mailto:thejithamininduw@gmail.com" className="button button-accent">
            SEND EMAIL ↗
          </a>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="container footer">
        <span>© 2026 THEJITHA WIJAYANAYAKE</span>
        <span>THEJITHA // LAB · UNIVERSITY OF MORATUWA</span>
        <span style={{ color: "var(--accent)" }}>● SYSTEM ONLINE</span>
      </footer>
    </main>
  );
}
