import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { ProjectPagination } from "@/components/ProjectPagination";
import { KineticHardwareViz } from "@/components/KineticHardwareViz";
import { ProjectCover } from "@/components/ProjectCover";
import { ProjectMediaGallery } from "@/components/ProjectMediaGallery";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "SandPlotter Smart Coffee Table (Kinetic Hardware) — Case Study | Thejitha Wijayanayake",
  description:
    "Hardware engineering case study of SandPlotter by Thejitha Wijayanayake: Interactive kinetic sand table combining CoreXY kinematics, Arduino Uno GRBL, ESP32 WebSockets, and TFT touch control.",
  alternates: {
    canonical: "/work/sandplotter",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "/work/sandplotter",
    siteName: "Thejitha Wijayanayake",
    title: "SandPlotter Smart Coffee Table (Kinetic Hardware) — Case Study | Thejitha Wijayanayake",
    description:
      "Hardware engineering case study of SandPlotter by Thejitha Wijayanayake: Interactive kinetic sand table combining CoreXY kinematics, Arduino Uno GRBL, ESP32 WebSockets, and TFT touch control.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SandPlotter Smart Coffee Table — Case Study | Thejitha Wijayanayake",
    description:
      "Hardware engineering case study of SandPlotter by Thejitha Wijayanayake: Interactive kinetic sand table combining CoreXY kinematics, Arduino Uno GRBL, ESP32 WebSockets, and TFT touch control.",
  },
};

export default function SandPlotterCaseStudy() {
  const project = getProjectBySlug("sandplotter");

  return (
    <CaseStudyShell>
      <main>
        {/* Top Header */}
        <header className="container cs-header">
          <div className="cs-breadcrumbs">
            <Link href="/">THEJITHA</Link>
            <span>/</span>
            <Link href="/#work">SELECTED WORK</Link>
            <span>/</span>
            <span style={{ color: "var(--accent)" }}>SANDPLOTTER</span>
          </div>

          <h1 className="cs-title">SandPlotter Smart Coffee Table</h1>
          <p className="cs-lead">
            Developed an interactive sand art coffee table capable of generating intricate sand patterns, algorithmic geometric curves, and custom text through a CoreXY motion system.
          </p>

          <div className="cs-meta-grid">
            <div>
              <span>PROJECT TYPE</span>
              <strong>First Year Hardware Project · University of Moratuwa</strong>
            </div>
            <div>
              <span>TECHNICAL CONTRIBUTION</span>
              <strong>Motion Mechanism, GRBL Setup, Automated Drawer PCB, ESP32 Bridge, UI</strong>
            </div>
            <div>
              <span>TECHNOLOGY</span>
              <strong>Arduino Uno, ESP32, C++, GRBL, CoreXY, Custom PCB, TFT Display, WebSockets</strong>
            </div>
            <div>
              <span>TIMELINE</span>
              <strong style={{ color: "var(--accent)" }}>August 2024 – August 2025</strong>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <ProjectCover
          cover={project?.coverImage}
          projectTitle="SandPlotter Smart Coffee Table — Exhibition Build"
        />

        {/* 1. Overview */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>01 / OVERVIEW</span>
            <span>PHYSICAL & DIGITAL FUSION</span>
          </div>
          <div className="cs-text-body">
            <p>
              The SandPlotter Smart Coffee Table was built as a first-year hardware engineering project at the University of Moratuwa. The goal was to build a functional piece of kinetic furniture that autonomously draws intricate geometric curves, algorithmic patterns, and custom user-input text into a fine layer of sand.
            </p>
            <p>
              Beneath a glass tabletop, a magnetic carriage moves invisibly along an X-Y plane, pulling a steel ball bearing through the sand bed to create continuous kinetic artwork.
            </p>
          </div>
        </section>

        {/* 2. Problem / Context */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>02 / PROBLEM & MECHANICAL CONSTRAINTS</span>
            <span>COREXY MOTION PRINCIPLES</span>
          </div>
          <div className="cs-text-body">
            <p>
              Traditional Cartesian gantry systems place the X-axis motor on top of the moving Y-axis carriage. In a living room furniture project, moving heavy stepper motors results in increased moving inertia, higher belt wear, and audible vibrations.
            </p>
            <p>
              To address this, we implemented a <strong>CoreXY motion system</strong> where both NEMA 17 stepper motors remain fixed to the stationary outer frame. By utilizing a continuous GT2 timing belt routing configuration, simultaneous rotation of both motors creates precise, responsive 2D motion across the entire sand canvas.
            </p>
          </div>
        </section>

        {/* 3. My Role & Technical Contribution */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>03 / TECHNICAL CONTRIBUTION & RESPONSIBILITIES</span>
            <span>MECHANICAL ASSEMBLY, ELECTRONICS & FIRMWARE</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Motion Mechanism Assembly</h4>
              <p>
                Designed and assembled the physical motion mechanism using NEMA 17 stepper motors, GT2 timing belts, idler pulleys, TMC2208/A4988 motor driver modules, and mechanical limit switches for homing calibration.
              </p>
            </div>
            <div className="cs-card">
              <h4>Automated Drawer Controller PCB</h4>
              <p>
                Designed and fabricated a custom PCB for the table&apos;s motorized automated drawer. Implemented single push-button toggle logic allowing users to both open and close the concealed drawer using the exact same push button.
              </p>
            </div>
            <div className="cs-card">
              <h4>GRBL Firmware Configuration</h4>
              <p>
                Flashed and configured open-source GRBL firmware on an Arduino Uno with CNC Shield V3, tuning steps-per-millimeter coordinate transformations, acceleration profiles, and axis limits.
              </p>
            </div>
            <div className="cs-card">
              <h4>ESP32 to Arduino Communication</h4>
              <p>
                Implemented serial communication between the ESP32 microcontroller and Arduino Uno to stream G-code line by line using acknowledgement-based flow control.
              </p>
            </div>
            <div className="cs-card">
              <h4>TFT Touch Display & Web Application</h4>
              <p>
                Built the user interfaces allowing users to trigger pattern draws both locally via an on-table TFT touch display and remotely via a web application over WebSockets with real-time drawing progress updates.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Technology */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>04 / TECHNOLOGY STACK & HARDWARE</span>
            <span>EMBEDDED SYSTEM ARCHITECTURE</span>
          </div>
          <div className="decision-table-wrap">
            <table className="decision-table">
              <thead>
                <tr>
                  <th>SUBSYSTEM</th>
                  <th>HARDWARE / TOOL</th>
                  <th>TECHNICAL PURPOSE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Motion Controller</strong></td>
                  <td>Arduino Uno + CNC Shield V3</td>
                  <td>Executes GRBL firmware to generate real-time step and direction pulses for stepper motors.</td>
                </tr>
                <tr>
                  <td><strong>Motor Drivers</strong></td>
                  <td>TMC2208 / A4988 Stepper Drivers</td>
                  <td>Provides microstepping control, silent operation, and current regulation for the dual NEMA 17 motors.</td>
                </tr>
                <tr>
                  <td><strong>Kinematic Mechanism</strong></td>
                  <td>CoreXY Gantry + GT2 Belts</td>
                  <td>Keeps both motors stationary, reducing gantry moving mass and ensuring smooth 2D vector movement.</td>
                </tr>
                <tr>
                  <td><strong>Automated Drawer Controller</strong></td>
                  <td>Custom Etched PCB & Push Button</td>
                  <td>Controls the table&apos;s motorized drawer with single push-button open/close toggle logic and motor drive circuitry.</td>
                </tr>
                <tr>
                  <td><strong>Wireless & Interface</strong></td>
                  <td>ESP32 + TFT Touch Display</td>
                  <td>Hosts the WebSocket server for the web control app and drives the on-device touchscreen.</td>
                </tr>
                <tr>
                  <td><strong>Firmware & Protocol</strong></td>
                  <td>GRBL & G-code</td>
                  <td>Translates geometric vector coordinates into physical motor steps with limit switch homing.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. What I Built: Hardware Architecture Visualizer */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>05 / WHAT I BUILT: EMBEDDED SYSTEM DIAGRAM</span>
            <span>INTERACTIVE HARDWARE TOPOLOGY</span>
          </div>
          <div className="cs-text-body">
            <p>
              Click each subsystem node below to inspect hardware roles, firmware configurations, and electrical connections:
            </p>
          </div>

          <KineticHardwareViz />
        </section>

        {/* 06 / Hardware & Physical Prototyping Gallery */}
        <ProjectMediaGallery
          media={project?.media}
          sectionNumber="06"
          sectionTitle="HARDWARE & KINETIC ART GALLERY"
          sectionSubtitle="PHYSICAL SYSTEM, ELECTRONICS & SAND GEOMETRIES"
          description="Explore authentic photos of the assembled CoreXY SandPlotter table, custom PCB for the push-button automated drawer, ESP32 controller wiring, and real sand patterns generated under multi-zone LED lighting:"
        />

        {/* 7. Challenges & What I Learned */}
        <section className="container cs-content-section">
          <div className="cs-section-heading">
            <span>07 / CHALLENGES & KEY TAKEAWAYS</span>
            <span>HARDWARE-SOFTWARE INTEGRATION</span>
          </div>
          <div className="cs-grid-2col">
            <div className="cs-card">
              <h4>Engineering Challenges</h4>
              <p>
                Balancing belt tension across both CoreXY loops was critical to prevent skewing and ensure perpendicular axes. Tuning driver current limits on the motor modules prevented motor overheating during prolonged drawings while ensuring sufficient torque to guide the magnetic carriage through the sand bed.
              </p>
            </div>
            <div className="cs-card">
              <h4>What I Learned</h4>
              <p>
                This first-year project provided foundational hands-on experience combining mechanical construction, electrical driver interfacing, firmware flashing, and micro-controller communication (ESP32 to Arduino) with modern web control over WebSockets.
              </p>
            </div>
          </div>
        </section>

        {/* Project Pagination */}
        <div className="container">
          <ProjectPagination
            previous={{
              title: "TeaBlendAI Auction Platform",
              route: "/work/teablend-ai",
            }}
            next={{
              title: "ICITR 2026 Conference Website",
              route: "/work/icitr-2026",
            }}
            returnRoute="/#work"
            returnLabel="SELECTED WORK"
          />
        </div>
      </main>
    </CaseStudyShell>
  );
}
